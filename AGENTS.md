# AGENTS.md — Ngữ cảnh nhanh cho AI/dev

> Đọc file này TRƯỚC khi sửa repo. Sau đó mở 1 doc bất kỳ (khuyến nghị `methods.html`) để nắm chính xác format HTML.

## 1. Project là gì

- Static site tài liệu học **Java Backend** tiếng Việt, cho người đã biết JS/Node.js, mục tiêu **Junior+ (2–3 năm)** — trọng tâm phỏng vấn và production.
- Không build step, không framework, không dependency: mở file là chạy.
- Nguồn gốc: phục hồi từ bản deploy Cloudflare Workers ngày **03/10/2026** sau khi mất repo. Không có source Java gốc, không có `wrangler.toml`.
- Deploy cũ: `https://java-docs.vlkh00volam13.workers.dev/` (lưu ý: trên CF `index.html` bị 307 → `/`).
- GitHub: `git@github.com:trunghieu132132/java-docs.git` — nhánh `main`.

## 2. Cấu trúc file

| File | Nội dung |
|---|---|
| `index.html` | 1.1 Biến trong Java |
| `data-types.html` | 1.2 Data Types & Type Casting |
| `operators.html` | 1.3 Operators & Math |
| `control-flow.html` | 1.4 Control Flow |
| `methods.html` | 1.5 Methods |
| `arrays.html` | 1.6 Arrays |
| `strings.html` | 1.7 Strings chuyên sâu |
| `classes-objects.html` | 2.1 Classes & Objects |
| `encapsulation.html` | 2.2 Encapsulation & Immutability |
| `inheritance.html` | 2.3 Inheritance |
| `polymorphism.html` | 2.4 Polymorphism |
| `abstract-interface.html` | 2.5 Abstract class vs Interface |
| `object-contract.html` | 2.6 equals / hashCode / toString |
| `enum-nested.html` | 2.7 Enum, nested & sealed classes |
| `solid-patterns.html` | 2.8 SOLID & design patterns |
| `annotations-reflection.html` | 2.9 Annotations & Reflection |
| `roadmap.html` | Lộ trình tổng + trạng thái từng chủ đề |
| `styles.css` | Toàn bộ style — KHÔNG thêm class mới tuỳ tiện |
| `script.js` | Highlight Java, nút Copy, search sidebar, toast, toggle đáp án |
| `robots.txt` | Content signals |

## 3. Kiến trúc & quy ước trang

- Mỗi chủ đề = **1 file HTML độc lập**; head/sidebar/toast/footer lặp lại ở mọi file (không có template engine).
- `script.js` xử lý: highlight cú pháp `pre code.java`, nút Copy cho `.codeblock`, search lọc `.tree .item`, đóng toast, snackbar cho link `.todo`, nút `.toggle-all` mở/ẩn `<details>`.
- Cấu trúc chuẩn một trang:

```html
<!DOCTYPE html><html lang="vi"><head>… <title>X — Java Docs</title><link rel="stylesheet" href="styles.css"></head>
<body><div class="app">
  <aside class="sidebar">…searchbar + nav.tree…</aside>
  <main class="content" id="top">
    <div class="toast" id="toast">…</div>
    <h1 id="...">…</h1>
    <p class="lead">…</p>
    <nav class="toc"><div class="toc-title">Mục lục</div><ol>…</ol></nav>
    <h2 id="...">1. Tổng quan &amp; cách học</h2> …các mục 2,3,4…
    <h2 id="qa">Interview Q&amp;A</h2> …
    <h2 id="bai-tap">Bài tập đoán output</h2> …
    <h2 id="cheat-sheet">Cheat sheet &amp; checklist</h2> …
    <p class="footer">Java Docs · … · JDK 25 · Cập nhật dd/mm/yyyy</p>
  </main>
</div><script src="script.js"></script></body></html>
```

- Sidebar có 2 nhóm: **Java Core** (roadmap + 7 doc GĐ1) và **OOP** (9 doc GĐ2). Nhóm chứa trang hiện tại để `open`; trang hiện tại gắn `class="item active"`.

## 4. Quy ước nội dung

- Tiếng Việt dễ hiểu, xưng "bạn"; giải thích thuật ngữ ngay lần đầu; có mục **"Góc Node.js"** so sánh với JS/Node.
- Ví dụ Java chạy thật với **JDK 25** (single-file `java TenFile.java`), dùng `IO.println` (JEP 512). Output để trong comment `// ...` ngay sau lệnh in. **Không bịa output** — nếu không chắc về JLS/JDK thì tra cứu trước khi viết.
- Đánh dấu mức độ: `<span class="badge b-interview">Hay hỏi phỏng vấn</span>`, `b-junior` (Junior+), `b-prod` (Production).
- Khối nội dung có sẵn: `.codeblock` (code), `.errblock` (lỗi compiler), `.note` / `.note warn` (ghi chú), `.signature` (cú pháp), `<table>` (so sánh), `.checklist` (checklist cuối trang).
- Q&A phỏng vấn + bài tập đều là `<details>`, có toolbar `.toggle-all` phía trên:

```html
<div class="qa-toolbar">
  <button class="toggle-all" type="button" data-group="qa">Hiện tất cả đáp án</button>
</div>
<details class="qa">
  <summary>Câu hỏi…?</summary>
  <div class="answer"><p>…</p></div>
</details>
<!-- bài tập dùng: <details class="qa exercise"> + toolbar data-group="exercise" -->
```

- Escape `<` `>` thành `&lt;` `&gt;` bên trong `<pre><code class="java">`.

## 5. Checklist khi thêm doc mới

1. Tạo `<ten>.html` theo template (copy skeleton của `methods.html`).
2. Cập nhật `<nav class="tree">` trong **TẤT CẢ** file HTML: thêm link đúng nhóm + sửa `.count`.
3. Cập nhật `roadmap.html`: badge trạng thái chủ đề + link doc + bảng tiến độ.
4. Nếu ví dụ dùng tên class Java mới: thêm vào nhóm type trong `tokenRe` (**script.js dòng 1**), nếu không code sẽ không được highlight.
5. Test local: `python3 -m http.server` → kiểm tra search, toggle đáp án, nút Copy.
6. Commit + push (message tiếng Anh ngắn gọn).

## 6. Trạng thái & việc tiếp theo

- **GĐ1 xong:** 7 doc (1.1–1.7).
- **GĐ2 OOP (2.1–2.9):** 9 doc — vừa viết xong, xem `roadmap.html#phase-2`.
- **Tiếp theo:** GĐ3 — 3.1 Exception Handling, 3.2 Generics, 3.3 Collections, 3.4 I/O & Files, 3.5 java.time, 3.6 Lambda & Functional interfaces, 3.7 Optional, 3.8 Stream API.
- Project xuyên suốt: "quản lý đơn hàng" (console → OOP → file/Stream → Maven/JUnit → REST API).

## 7. Lưu ý vận hành

- Nếu deploy lại lên Cloudflare Workers: cần `wrangler.toml` với `assets` trỏ vào thư mục gốc (chưa có trong repo).
- Không commit file rác (`.DS_Store`).
