const tokenRe = /(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(@\w+)|\b(public|private|protected|static|final|abstract|class|interface|enum|record|extends|implements|new|return|if|else|for|while|do|switch|case|default|break|continue|throw|throws|try|catch|finally|import|package|instanceof|this|super|var|assert|synchronized|volatile)\b|\b(String|Integer|Long|Double|Boolean|Byte|Short|Float|Character|BigDecimal|BigInteger|List|Map|Set|ArrayList|HashMap|HashSet|Optional|Instant|LocalDate|LocalDateTime|Duration|UUID|StringBuilder|Arrays|Objects|Math|System|Thread|Runnable|AtomicLong|AtomicInteger|RoundingMode|Exception|NullPointerException|IllegalArgumentException|ArithmeticException|Connection|User|Order|OrderStatus|AppConfig|VariablesDemo|DefaultsShadow|LiteralsDemo|PassByValueDemo|RaceDemo|ProductionDemo)\b|\b(0[xX][0-9a-fA-F_]+[Ll]?|0[bB][01_]+[Ll]?|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?[LlFfDd]?)\b/g;

function highlightJava(source) {
  const escaped = source
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped.replace(tokenRe, (match, comment, str, chr, ann, kw, typ, num) => {
    if (comment) return '<span class="tok-cmt">' + comment + "</span>";
    if (str || chr) return '<span class="tok-str">' + match + "</span>";
    if (ann) return '<span class="tok-ann">' + ann + "</span>";
    if (kw) return '<span class="tok-kw">' + kw + "</span>";
    if (typ) return '<span class="tok-typ">' + typ + "</span>";
    if (num) return '<span class="tok-num">' + num + "</span>";
    return match;
  });
}

document.querySelectorAll("pre code.java").forEach((el) => {
  el.innerHTML = highlightJava(el.textContent);
});

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  return Promise.resolve();
}

document.querySelectorAll(".codeblock").forEach((block) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-btn";
  button.textContent = "Copy";
  button.addEventListener("click", () => {
    const code = block.querySelector("code") || block.querySelector("pre");
    copyText(code.textContent).then(() => {
      button.textContent = "Đã copy";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1500);
    });
  });
  block.appendChild(button);
});

const searchInput = document.getElementById("search");
const groups = [...document.querySelectorAll(".tree details.group")];
const items = [...document.querySelectorAll(".tree .item")];

function applySearch() {
  const q = searchInput.value.trim().toLowerCase();
  items.forEach((item) => {
    const match = !q || item.textContent.toLowerCase().includes(q);
    item.style.display = match ? "" : "none";
  });
  groups.forEach((group) => {
    const groupItems = [...group.querySelectorAll(".item")];
    if (!groupItems.length) return;
    const anyVisible = groupItems.some((item) => item.style.display !== "none");
    group.style.display = anyVisible ? "" : "none";
    if (q && anyVisible) group.open = true;
  });
}

searchInput.addEventListener("input", applySearch);

const toast = document.getElementById("toast");
document.getElementById("toastClose").addEventListener("click", () => toast.remove());
document.getElementById("toastOk").addEventListener("click", (event) => {
  event.preventDefault();
  toast.remove();
});

const snackbar = document.getElementById("snackbar");
let snackbarTimer;

function showSnackbar(message) {
  snackbar.textContent = message;
  snackbar.classList.add("show");
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() => snackbar.classList.remove("show"), 2200);
}

document.querySelectorAll(".todo").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSnackbar("Phần này sẽ được bổ sung ở bước tiếp theo.");
  });
});

document.querySelectorAll(".toggle-all").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.group;
    const selector = group === "qa" ? "details.qa:not(.exercise)" : "details." + group;
    const items = [...document.querySelectorAll(selector)];
    const shouldOpen = items.some((item) => !item.open);
    items.forEach((item) => {
      item.open = shouldOpen;
    });
    button.textContent = shouldOpen ? "Ẩn tất cả đáp án" : "Hiện tất cả đáp án";
  });
});
