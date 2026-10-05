const tokenRe = /(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(@\w+)|\b(public|private|protected|static|final|abstract|class|interface|enum|record|extends|implements|new|return|if|else|for|while|do|switch|case|default|break|continue|throw|throws|try|catch|finally|import|package|instanceof|this|super|var|assert|synchronized|volatile)\b|\b(String|Integer|Long|Double|Boolean|Byte|Short|Float|Character|BigDecimal|BigInteger|MathContext|List|Map|Set|ArrayList|HashMap|HashSet|Optional|Instant|LocalDate|LocalDateTime|Duration|UUID|StringBuilder|Arrays|Objects|Math|System|Thread|Runnable|AtomicLong|AtomicInteger|AtomicBoolean|AtomicReference|LongAdder|ScopedValue|StructuredTaskScope|CountDownLatch|Semaphore|CyclicBarrier|ReentrantLock|TimeUnit|BlockingQueue|ArrayBlockingQueue|ScheduledExecutorService|CompletableFuture|Callable|ForkJoinPool|RoundingMode|Exception|NullPointerException|IllegalArgumentException|ArithmeticException|InterruptedException|ExecutionException|TimeoutException|IllegalThreadStateException|RejectedExecutionException|Connection|User|Order|OrderStatus|AppConfig|VariablesDemo|DefaultsShadow|LiteralsInt|UnderRules|LitHexMin|LitReal|LitChar|LitUnicodeTrap|LitString|AssignExpr|DefAssignFlow|AssignCompat|AssignEvalOrder|ScopeBlock|ScopeForEach|ScopeSwitchBraces|ScopeShadow|ScopeLife|ScopeCapture|VarBasics|VarAnon|VarContexts|VarDiamond|StrMutation|StrNull|StrSwitch|StrBuilder|StrTextBlock|AutoCloseable|Counter|Res|PassByValueDemo|RaceDemo|ProductionDemo|BankAccount|SavingsAccount|Money|Animal|Dog|Cat|BadStack|GoodStack|Bird|Penguin|Shape|Circle|Rectangle|Square|Polygon|CardPaymentService|CardPayment|PaymentService|Payment|DataProcessor|CsvDataProcessor|Refundable|Reportable|BankTransfer|MomoPayment|PaymentStrategy|NotificationFactory|OrderBuilder|PriceObserver|Product|Point|DiscountedProduct|Color|Day|Outer|Inner|PhepTinh|OrderDemo|OrderStatus2|Range|NotEmpty|UserForm|XuLy|Ranges|OrderService|OrderRepository|Machine|SimplePrinter|Printer|JdkHierarchyDemo|EnumMap|EnumSet|Comparator|Comparable|Modifier|RecordComponent|Consumer|Supplier|Predicate|Function|UnaryOperator|Object|ConstantDemo|Constants|VarargsClash|BayDuoc|BoiDuoc|VitTroi|ArrayStoreException|TaiLieu|GhiLog|ConstHolder|InitHolder|FinalJmm|UnsupportedOperationException|NumberFormatException|NumberFormat|DecimalFormat|DecimalFormatSymbols|Locale|ParsePosition|ParseException|Random|Number|TreeMap|Collator|Normalizer|Collections|StringBuffer|Account|AssertionError|BadClone|Class|Cloneable|CloneNotSupportedException|ColoredPoint|Fake|IllegalMonitorStateException|InterruptedException|Pattern|Matcher|CharSequence|ClassCastException|ReportTemplate|DoanhThu|KiemTon|BadTemplate|QuenBuoc|BangSo|AbstractList|Expr|Num|Add|Mul|Media|Book|Ebook|OrderStatusV1|OrderStatusV2|Init|BadDay|Serializable|HoaDon|BinhPhuong|IntStream|Iterable|Iterator|ConcurrentModificationException|SanPham|DonHang|ProductTest|EqualsVerifier|BaseBuilder|UserBuilder|ChainingTrapDemo|Collectors|HierarchyDemo|CheckedOkDemo|UncheckedDemo|FinallyFlowDemo|FinallyReturnTrap|ExitDemo|MultiCatchDemo|TwrOrderDemo|SuppressedDemo|FinallyCloseOverwriteDemo|TwrEffectivelyFinalDemo|TwrNullDemo|ThrowThrowsDemo|ChainCauseDemo|RethrowDemo|CustomExceptionDemo|ExceptionForFlowDemo|SwallowDemo|OrderServiceDemo|TaiNguyen|OrderException|InvalidOrderException|InsufficientStockException|DataAccessException|KhoRepository|AppException|NotFoundException|FoundEven|DocDemo|Throwable|RuntimeException|IllegalStateException|IOException|OutOfMemoryError|StackOverflowError|Files|Path|StringReader|Error|ServiceException|AsListTrap|BoundedDemo|Box|BoxDemo|BoxInterfaceDemo|BridgeGenericsDemo|CaptureHelperDemo|Cha|ClassTokenDemo|Con|CopyDemo|ErasureDemo|Exercise01|Exercise02|Exercise03|GenericCtorDemo|GenericMethodDemo|GenericsBenefit|HeapPollutionDemo|HoSo|In|KhongGenerics|MultipleBoundsDemo|Pair|PairDemo|RawTypeDemo|SafeVarargsDemo|StaticGenericDemo|StringBox|WildcardExtendsDemo|WildcardSuperDemo|Wrapper|ArrayDeque|Collection|ConcurrentHashMap|CopyOnWriteArrayList|Deque|Don|Entry|Grade|Key|LinkedHashMap|LinkedHashSet|LinkedList|NoSuchElementException|PriorityQueue|Queue|RandomAccess|SinhVien|TrangThai|TreeSet|StandardCharsets|Charset|HexFormat|LinkOption|StandardCopyOption|StandardOpenOption|PosixFilePermissions|BufferedWriter|BufferedReader|InputStreamReader|OutputStreamWriter|FileWriter|FileInputStream|FileOutputStream|DataInputStream|DataOutputStream|BufferedInputStream|BufferedOutputStream|PrintWriter|UncheckedIOException|IO|LocalTime|ZonedDateTime|OffsetDateTime|Period|ZoneId|ZoneOffset|ZoneRules|Clock|DateTimeFormatter|DateTimeParseException|TemporalAdjusters|ChronoUnit|DayOfWeek|IsoFields|ResolverStyle|FormatStyle|TimeZone|Date|Calendar|GregorianCalendar|SimpleDateFormat|Timestamp|ExecutorService|Executors|Future|BaCachDemo|ChuyenDoi|ChuyenDoiHoa|FunctionalChildDemo|BoInterfaceDemo|PrimitiveFunctionDemo|CuPhapDemo|CastDisambiguateDemo|Callback|Handler|ThisLambdaDemo|CaptureSemanticsDemo|ClosureDemo|MethodRefDemo|ValidateDonHangDemo|FunctionComposeDemo|StrategyLambdaDemo|PhiVanChuyen|SortDonHangDemo|CallbackDemo|SupplierFactoryDemo|BaoCao|InvokeDemo|SerializableLambdaDemo|Bai1|Bai3|BiFunction|BiPredicate|BinaryOperator|IntPredicate|IntSupplier|IntUnaryOperator|ToIntFunction|OptionalCreate|OptionalAccess|OptionalElse|OptionalThrow|OptionalTransform|OptionalPrimitive|OptionalMicro|NullHell|OptionalChain|OptionalFlatMapChain|OptionalSearch|OptionalStream|OfNull|EmptyGet|HelpfulNpe2|KhachHang|City|Address|Khach|OptionalInt|OptionalLong|OptionalDouble|CheckedExceptionDemo|CollectBasicsDemo|CollectIntroDemo|CommonPoolDemo|CountSkipsPeekDemo|DistinctSortedDemo|DonHangCollectorsDemo|FilesLinesDemo|FilterMapDemo|FlatMapDemo|ForEachOrderedDemo|GroupingByDemo|InfiniteStreamDemo|LazyDemo|LimitSkipDemo|LoopVsStreamDemo|MatchFindDemo|MinMaxDemo|NhanVien|OneShotDemo|OptionalStreamDemo|ParallelBasicsDemo|PartitioningByDemo|PeekDemo|PrimitiveVsBoxedDemo|QuanLyDonHang|ReduceDemo|ShortCircuitDemo|SourceTrapDemo|StatsDemo|StreamSourcesDemo|TakeDropWhileDemo|TeeingDemo|ThongKe|ToArrayDemo|ToMapDuplicateDemo|HelpfulNpeDemo|DiaChi|AddSuppressedDemo|LogAndThrowDemo|Logger|UncaughtHandlerDemo|StackTraceDemo|StackTraceElement|LambdaCheckedDemo|PecsBoundDemo|DongVat|Cho|SignatureAttrDemo|StringList|OverrideBridgeDemo|SuppressUncheckedDemo|IntersectionCastDemo|ParameterizedType|WeakHashMap|IdentityHashMap|ListIterator|GZIPOutputStream|GZIPInputStream|ZipOutputStream|ZipInputStream|ZipFile|ZipEntry|RandomAccessFile|Sv|FileChannel|MappedByteBuffer|MapMode|DirectoryStream|BasicFileAttributes|CharsetDecoder|CharsetEncoder|CodingErrorAction|Scanner|ByteBuffer|CharBuffer|YearMonth|MonthDay|ChronoField|TemporalQueries|WeekFields|DateTimeFormatterBuilder|Thunk|Util|Nguoi|LambdaDebugDemo|MoreSourcesDemo|MapMultiDemo|GatherersDemo|NullInStreamDemo|ConcurrentCollectorsDemo|CountFilterDemo|Spliterator|StreamSupport|Gatherers|IntConsumer|IntSummaryStatistics|InitErrorDemo|CauHinh|LinkageError|SelfBoundDemo|TemporalAdjuster|FilesWalkDemo|HeapOomDemo|MetaspaceOomDemo|StackOverflowDemo|MemoryDemo|ClassLoaderDemo|Init|StackTraceDemo|ChainCauseDemo|Calculator|CalculatorTest|OrderServiceTest|LifecycleTest|FreshInstanceTest|LoggingDemo|ReportGenerator|PriceCalculator|BugDemo|OrderValidator|Logger|LoggerFactory|MDC|ConsoleAppender|RollingFileAppender|AsyncAppender|SizeAndTimeBasedRollingPolicy|LogstashEncoder)\b|\b(0[xX][0-9a-fA-F_]+[Ll]?|0[bB][01_]+[Ll]?|\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?[LlFfDd]?)\b/g;

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
