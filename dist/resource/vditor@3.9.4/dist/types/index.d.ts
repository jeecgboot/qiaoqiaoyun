declare module "*.svg";

declare module "*.png";

interface Window {
    VditorI18n: ITips;
}

interface IObject {
    [key: string]: string;
}

interface ILuteNode {
    TokensStr: () => string;
    __internal_object__: {
        Parent: {
            Type: number,
        },
        HeadingLevel: string,
    };
}

type ILuteRenderCallback = (node: ILuteNode, entering: boolean) => [string, number];

/** @link https://ld246.com/article/1588412297062 */
interface ILuteRender {
    renderDocument?: ILuteRenderCallback;
    renderParagraph?: ILuteRenderCallback;
    renderText?: ILuteRenderCallback;
    renderCodeBlock?: ILuteRenderCallback;
    renderCodeBlockOpenMarker?: ILuteRenderCallback;
    renderCodeBlockInfoMarker?: ILuteRenderCallback;
    renderCodeBlockCode?: ILuteRenderCallback;
    renderCodeBlockCloseMarker?: ILuteRenderCallback;
    renderMathBlock?: ILuteRenderCallback;
    renderMathBlockOpenMarker?: ILuteRenderCallback;
    renderMathBlockContent?: ILuteRenderCallback;
    renderMathBlockCloseMarker?: ILuteRenderCallback;
    renderBlockquote?: ILuteRenderCallback;
    renderBlockquoteMarker?: ILuteRenderCallback;
    renderHeading?: ILuteRenderCallback;
    renderHeadingC8hMarker?: ILuteRenderCallback;
    renderList?: ILuteRenderCallback;
    renderListItem?: ILuteRenderCallback;
    renderTaskListItemMarker?: ILuteRenderCallback;
    renderThematicBreak?: ILuteRenderCallback;
    renderHTML?: ILuteRenderCallback;
    renderTable?: ILuteRenderCallback;
    renderTableHead?: ILuteRenderCallback;
    renderTableRow?: ILuteRenderCallback;
    renderTableCell?: ILuteRenderCallback;
    renderFootnotesDef?: ILuteRenderCallback;
    renderCodeSpan?: ILuteRenderCallback;
    renderCodeSpanOpenMarker?: ILuteRenderCallback;
    renderCodeSpanContent?: ILuteRenderCallback;
    renderCodeSpanCloseMarker?: ILuteRenderCallback;
    renderInlineMath?: ILuteRenderCallback;
    renderInlineMathOpenMarker?: ILuteRenderCallback;
    renderInlineMathContent?: ILuteRenderCallback;
    renderInlineMathCloseMarker?: ILuteRenderCallback;
    renderEmphasis?: ILuteRenderCallback;
    renderEmAsteriskOpenMarker?: ILuteRenderCallback;
    renderEmAsteriskCloseMarker?: ILuteRenderCallback;
    renderEmUnderscoreOpenMarker?: ILuteRenderCallback;
    renderEmUnderscoreCloseMarker?: ILuteRenderCallback;
    renderStrong?: ILuteRenderCallback;
    renderStrongA6kOpenMarker?: ILuteRenderCallback;
    renderStrongA6kCloseMarker?: ILuteRenderCallback;
    renderStrongU8eOpenMarker?: ILuteRenderCallback;
    renderStrongU8eCloseMarker?: ILuteRenderCallback;
    renderStrikethrough?: ILuteRenderCallback;
    renderStrikethrough1OpenMarker?: ILuteRenderCallback;
    renderStrikethrough1CloseMarker?: ILuteRenderCallback;
    renderStrikethrough2OpenMarker?: ILuteRenderCallback;
    renderStrikethrough2CloseMarker?: ILuteRenderCallback;
    renderHardBreak?: ILuteRenderCallback;
    renderSoftBreak?: ILuteRenderCallback;
    renderInlineHTML?: ILuteRenderCallback;
    renderLink?: ILuteRenderCallback;
    renderOpenBracket?: ILuteRenderCallback;
    renderCloseBracket?: ILuteRenderCallback;
    renderOpenParen?: ILuteRenderCallback;
    renderCloseParen?: ILuteRenderCallback;
    renderLinkText?: ILuteRenderCallback;
    renderLinkSpace?: ILuteRenderCallback;
    renderLinkDest?: ILuteRenderCallback;
    renderLinkTitle?: ILuteRenderCallback;
    renderImage?: ILuteRenderCallback;
    renderBang?: ILuteRenderCallback;
    renderEmoji?: ILuteRenderCallback;
    renderEmojiUnicode?: ILuteRenderCallback;
    renderEmojiImg?: ILuteRenderCallback;
    renderEmojiAlias?: ILuteRenderCallback;
    renderToC?: ILuteRenderCallback;
    renderFootnotesRef?: ILuteRenderCallback;
    renderBackslash?: ILuteRenderCallback;
    renderBackslashContent?: ILuteRenderCallback;
}

interface ILuteOptions extends IMarkdownConfig {
    emojis: IObject;
    emojiSite: string;
    headingAnchor: boolean;
    inlineMathDigit: boolean;
    lazyLoadImage?: string;
}

declare class Lute {
    public static WalkStop: number;
    public static WalkSkipChildren: number;
    public static WalkContinue: number;
    public static Version: string;
    public static Caret: string;

    public static New(): Lute;

    public static EscapeHTMLStr(html: string): string;

    public static GetHeadingID(node: ILuteNode): string;

    public static NewNodeID(): string;

    public static Sanitize(html: string): string;

    private constructor();

    public SetJSRenderers(options?: {
        renderers: {
            HTML2VditorDOM?: ILuteRender,
            HTML2VditorIRDOM?: ILuteRender,
            HTML2Md?: ILuteRender,
            Md2HTML?: ILuteRender,
            Md2VditorDOM?: ILuteRender,
            Md2VditorIRDOM?: ILuteRender,
            Md2VditorSVDOM?: ILuteRender,
        },
    }): void;

    public SetChineseParagraphBeginningSpace(enable: boolean): void;

    public SetHeadingID(enable: boolean): void;

    public SetRenderListStyle(enable: boolean): void;

    public SetLinkBase(url: string): void;

    public SetVditorIR(enable: boolean): void;

    public SetVditorSV(enable: boolean): void;

    public SetVditorWYSIWYG(enable: boolean): void;

    public SetLinkPrefix(url: string): void;

    public SetMark(enable: boolean): void;

    public SetGFMAutoLink(enable: boolean): void;

    public SetSanitize(enable: boolean): void;

    public SetHeadingAnchor(enable: boolean): void;

    public SetImageLazyLoading(imagePath: string): void;

    public SetInlineMathAllowDigitAfterOpenMarker(enable: boolean): void;

    public SetToC(enable: boolean): void;

    public SetFootnotes(enable: boolean): void;

    public SetAutoSpace(enable: boolean): void;

    public SetFixTermTypo(enable: boolean): void;

    public SetEmojiSite(emojiSite: string): void;

    public SetVditorCodeBlockPreview(enable: boolean): void;

    public SetVditorMathBlockPreview(enable: boolean): void;

    public PutEmojis(emojis: IObject): void;

    public GetEmojis(): IObject;

    public IsValidLinkDest(link: string): boolean;

    // debugger md
    public RenderEChartsJSON(text: string): string;

    // md 杞崲涓� html
    public Md2HTML(markdown: string): string;

    // 绮樿创鏃跺皢 html 杞崲涓� md
    public HTML2Md(html: string): string;

    // wysiwyg 杞崲涓� html
    public VditorDOM2HTML(vhtml: string): string;

    // wysiwyg 杈撳叆娓叉煋
    public SpinVditorDOM(html: string): string;

    // 绮樿创鏃跺皢 html 杞崲涓� wysiwyg
    public HTML2VditorDOM(html: string): string;

    // 灏� wysiwyg 杞崲涓� md
    public VditorDOM2Md(html: string): string;

    // 灏� md 杞崲涓� wysiwyg
    public Md2VditorDOM(markdown: string): string;

    // ir 杈撳叆娓叉煋
    public SpinVditorIRDOM(markdown: string): string;

    // ir 鑾峰彇 md
    public VditorIRDOM2Md(html: string): string;

    // md 杞崲涓� ir
    public Md2VditorIRDOM(text: string): string;

    // 鑾峰彇 HTML
    public VditorIRDOM2HTML(html: string): string;

    // 绮樿创鏃跺皢 html 杞崲涓� sv
    public HTML2VditorIRDOM(html: string): string;

    // sv 杈撳叆娓叉煋
    public SpinVditorSVDOM(text: string): string;

    // 绮樿创鏄� md 杞崲涓� sv
    public Md2VditorSVDOM(text: string): string;

    // 灏唌arkdown杞寲涓篔SON缁撴瀯杈撳嚭 https://github.com/88250/lute/issues/120
    public RenderJSON(markdown: string): string;
}

declare const webkitAudioContext: {
    prototype: AudioContext
    new(contextOptions?: AudioContextOptions): AudioContext,
};

interface ITips {
    [index: string]: string;

    alignCenter: string;
    alignLeft: string;
    alignRight: string;
    alternateText: string;
    bold: string;
    both: string;
    check: string;
    close: string;
    code: string;
    "code-theme": string;
    column: string;
    comment: string;
    confirm: string;
    "content-theme": string;
    copied: string;
    copy: string;
    "delete-column": string;
    "delete-row": string;
    devtools: string;
    down: string;
    downloadTip: string;
    edit: string;
    "edit-mode": string;
    emoji: string;
    export: string;
    fileTypeError: string;
    footnoteRef: string;
    fullscreen: string;
    generate: string;
    headings: string;
    help: string;
    imageURL: string;
    indent: string;
    info: string;
    "inline-code": string;
    "insert-after": string;
    "insert-before": string;
    insertColumnLeft: string;
    insertColumnRight: string;
    insertRowAbove: string;
    insertRowBelow: string;
    instantRendering: string;
    italic: string;
    language: string;
    line: string;
    link: string;
    linkRef: string;
    list: string;
    more: string;
    nameEmpty: string;
    "ordered-list": string;
    outdent: string;
    outline: string;
    over: string;
    performanceTip: string;
    preview: string;
    quote: string;
    record: string;
    "record-tip": string;
    recording: string;
    redo: string;
    remove: string;
    row: string;
    spin: string;
    splitView: string;
    strike: string;
    table: string;
    textIsNotEmpty: string;
    title: string;
    tooltipText: string;
    undo: string;
    up: string;
    update: string;
    upload: string;
    uploadError: string;
    uploading: string;
    wysiwyg: string;
}

interface II18n {
    en_US: ITips;
    fr_FR: ITips;
    ja_JP: ITips;
    ko_KR: ITips;
    ru_RU: ITips;
    sv_SE: ITips;
    zh_CN: ITips;
    zh_TW: ITips;
    pt_BR: ITips;
}

interface IClasses {
    preview?: string;
}

interface IPreviewTheme {
    current: string;
    list?: IObject;
    path?: string;
}

/** @link https://ld246.com/article/1549638745630#options-upload */
interface IUpload {
    /** 涓婁紶 url */
    url?: string;
    /** 涓婁紶鏂囦欢鏈�澶� Byte */
    max?: number;
    /** 鍓垏鏉夸腑鍖呭惈鍥剧墖鍦板潃鏃讹紝浣跨敤姝� url 閲嶆柊涓婁紶 */
    linkToImgUrl?: string;
    /** CORS 涓婁紶楠岃瘉锛屽ご涓� X-Upload-Token */
    token?: string;
    /** 鏂囦欢涓婁紶绫诲瀷锛屽悓 [input accept](https://www.w3schools.com/tags/att_input_accept.asp) */
    accept?: string;
    /** 璺ㄧ珯鐐硅闂帶鍒躲�傞粯璁ゅ��: false */
    withCredentials?: boolean;
    /** 璇锋眰澶磋缃� */
    headers?: IObject;
    /** 棰濆璇锋眰鍙傛暟 */
    extraData?: { [key: string]: string | Blob };
    /** 鏄惁鍏佽澶氭枃浠朵笂浼犮�傞粯璁ゅ�硷細true */
    multiple?: boolean;
    /** 涓婁紶瀛楁鍚嶃�傞粯璁ゅ�硷細file[] */
    fieldName?: string;

    /** 姣忔涓婁紶鍓嶉兘浼氶噸鏂拌缃姹傚ご */
    setHeaders?(): IObject;

    /** 涓婁紶鎴愬姛鍥炶皟 */
    success?(editor: HTMLPreElement, msg: string): void;

    /** 涓婁紶澶辫触鍥炶皟 */
    error?(msg: string): void;

    /** 鏂囦欢鍚嶅畨鍏ㄥ鐞嗐�� 榛樿鍊�: name => name.replace(/\W/g, '') */
    filename?(name: string): string;

    /** 鏍￠獙锛屾垚鍔熸椂杩斿洖 true 鍚﹀垯杩斿洖閿欒淇℃伅 */
    validate?(files: File[]): string | boolean;

    /** 鑷畾涔変笂浼狅紝褰撳彂鐢熼敊璇椂杩斿洖閿欒淇℃伅 */
    handler?(files: File[]): string | null | Promise<string> | Promise<null>;

    /** 瀵规湇鍔＄杩斿洖鐨勬暟鎹繘琛岃浆鎹紝浠ユ弧瓒冲唴缃殑鏁版嵁缁撴瀯 */
    format?(files: File[], responseText: string): string;

    /** 瀵规湇鍔＄杩斿洖鐨勬暟鎹繘琛岃浆鎹�(瀵瑰簲linkToImgUrl)锛屼互婊¤冻鍐呯疆鐨勬暟鎹粨鏋� */
    linkToImgFormat?(responseText: string): string;

    /** 灏嗕笂浼犵殑鏂囦欢澶勭悊鍚庡啀杩斿洖  */
    file?(files: File[]): File[] | Promise<File[]>;

    /** 鍥剧墖鍦板潃涓婁紶鍚庣殑鍥炶皟  */
    linkToImgCallback?(responseText: string): void;
}

/** @link https://ld246.com/article/1549638745630#options-toolbar */
interface IMenuItem {
    /** 鍞竴鏍囩ず */
    name: string;
    /** svg 鍥炬爣 HTML */
    icon?: string;
    /** 鍏冪礌鐨勬牱寮忓悕绉� */
    className?: string;
    /** 鎻愮ず */
    tip?: string;
    /** 蹇嵎閿紝鏀寔鈱�/ctrl-key 鎴� 鈱�/ctrl-鈬�/shift-key 鏍煎紡鐨勯厤缃紝涓嶆敮鎸� wysiwyg 妯″紡 */
    hotkey?: string;
    /** 鎻掑叆缂栬緫鍣ㄤ腑鐨勫悗缂� */
    suffix?: string;
    /** 鎻掑叆缂栬緫鍣ㄤ腑鐨勫墠缂� */
    prefix?: string;
    /** 鎻愮ず浣嶇疆锛歯e, nw */
    tipPosition?: string;
    /** 瀛愯彍鍗� */
    toolbar?: Array<string | IMenuItem>;
    /** 鑿滃崟灞傜骇锛屾渶澶т负 3锛屽唴閮ㄤ娇鐢� */
    level?: number;

    /** 鑷畾涔夋寜閽偣鍑绘椂瑙﹀彂鐨勪簨浠� */
    click?(event: Event, vditor: IVditor): void;
}

/** @link https://ld246.com/article/1549638745630#options-preview-hljs */
interface IHljs {
    /** 浠ｇ爜鍧楁病鏈夋寚瀹氳瑷�鏃讹紝浣跨敤姝ゅ�笺�傞粯璁ゅ��: "" */
    defaultLang?: string;
    /** 鏄惁鍚敤琛屽彿銆傞粯璁ゅ��: false */
    lineNumber?: boolean;
    /** 浠ｇ爜椋庢牸锛屽彲閫夊�煎弬瑙� [Chroma](https://xyproto.github.io/splash/docs/longer/all.html)銆� 榛樿鍊�: 'github' */
    style?: string;
    /** 鏄惁鍚敤浠ｇ爜楂樹寒銆傞粯璁ゅ��: true */
    enable?: boolean;
    /** 鑷畾涔夋寚瀹氳瑷�: CODE_LANGUAGES */
    langs?: string[];
}

/** @link https://ld246.com/article/1549638745630#options-preview-math */
interface IMath {
    /** 鍐呰仈鏁板鍏紡璧峰 $ 鍚庢槸鍚﹀厑璁告暟瀛椼�傞粯璁ゅ��: false */
    inlineDigit?: boolean;
    /** 浣跨敤 MathJax 娓叉煋鏃朵紶鍏ョ殑瀹忓畾涔夈�傞粯璁ゅ��: {} */
    macros?: object;
    /** 鏁板鍏紡娓叉煋寮曟搸銆傞粯璁ゅ��: 'KaTeX' */
    engine?: "KaTeX" | "MathJax";
    /** 鏁板鍏紡娓叉煋寮曟搸涓� MathJax 鏃朵紶鍏ョ殑鍙傛暟 */
    mathJaxOptions?: any;
}

/** @link https://ld246.com/article/1549638745630#options-preview-markdown */
interface IMarkdownConfig {
    /** 鑷姩绌烘牸銆傞粯璁ゅ��: false */
    autoSpace?: boolean;
    /** 娈佃惤寮�澶存槸鍚︾┖涓ゆ牸銆傞粯璁ゅ��: false */
    paragraphBeginningSpace?: boolean;
    /** 鑷姩鐭鏈銆傞粯璁ゅ��: false */
    fixTermTypo?: boolean;
    /** 鎻掑叆鐩綍銆傞粯璁ゅ��: false */
    toc?: boolean;
    /** 鑴氭敞銆傞粯璁ゅ��: true */
    footnotes?: boolean;
    /** wysiwyg & ir 妯″紡浠ｇ爜鍧楁槸鍚︽覆鏌撱�傞粯璁ゅ��: true */
    codeBlockPreview?: boolean;
    /** wysiwyg & ir 妯″紡鏁板鍏紡鍧楁槸鍚︽覆鏌撱�傞粯璁ゅ��: true */
    mathBlockPreview?: boolean;
    /** 鏄惁鍚敤杩囨护 XSS銆傞粯璁ゅ��: true */
    sanitize?: boolean;
    /** 閾炬帴鐩稿璺緞鍓嶇紑銆傞粯璁ゅ�硷細'' */
    linkBase?: string;
    /** 閾炬帴寮哄埗鍓嶇紑銆傞粯璁ゅ�硷細'' */
    linkPrefix?: string;
    /** 涓哄垪琛ㄦ坊鍔犳爣璁帮紝浠ヤ究[鑷畾涔夊垪琛ㄦ牱寮廬(https://github.com/Vanessa219/vditor/issues/390) 榛樿鍊硷細false */
    listStyle?: boolean;
    /** 鏀寔 mark 鏍囪 */
    mark?: boolean;
    /** 鏀寔鑷姩閾炬帴 */
    gfmAutoLink?: boolean;
}

/** @link https://ld246.com/article/1549638745630#options-preview */
interface IPreview {
    /** 棰勮 debounce 姣闂撮殧銆傞粯璁ゅ��: 1000 */
    delay?: number;
    /** 棰勮鍖哄煙鏈�澶у搴︺�傞粯璁ゅ��: 768 */
    maxWidth?: number;
    /** 鏄剧ず妯″紡銆傞粯璁ゅ��: 'both' */
    mode?: "both" | "editor";
    /** md 瑙ｆ瀽璇锋眰 */
    url?: string;
    /** @link https://ld246.com/article/1549638745630#options-preview-hljs */
    hljs?: IHljs;
    /** @link https://ld246.com/article/1549638745630#options-preview-math */
    math?: IMath;
    /** @link https://ld246.com/article/1549638745630#options-preview-markdown */
    markdown?: IMarkdownConfig;
    /** @link https://ld246.com/article/1549638745630#options-preview-theme */
    theme?: IPreviewTheme;
    /** @link https://ld246.com/article/1549638745630#options-preview-actions  */
    actions?: Array<IPreviewAction | IPreviewActionCustom>;

    /** 棰勮鍥炶皟 */
    parse?(element: HTMLElement): void;

    /** 娓叉煋涔嬪墠鍥炶皟 */
    transform?(html: string): string;
}

type IPreviewAction = "desktop" | "tablet" | "mobile" | "mp-wechat" | "zhihu";

interface IPreviewActionCustom {
    /** 閿悕 */
    key: string;
    /** 鎸夐挳鏂囨湰 */
    text: string;
    /** 鎸夐挳 className 鍊� */
    className?: string;
    /** 鎸夐挳鎻愮ず淇℃伅 */
    tooltip?: string;
    /** 鐐瑰嚮鍥炶皟 */
    click: (key: string) => void;
}

interface IPreviewOptions {
    mode: "dark" | "light";
    customEmoji?: IObject;
    lang?: (keyof II18n);
    i18n?: ITips;
    lazyLoadImage?: string;
    emojiPath?: string;
    hljs?: IHljs;
    speech?: {
        enable?: boolean,
    };
    anchor?: number; // 0: no render, 1: render left, 2: render right
    math?: IMath;
    cdn?: string;
    markdown?: IMarkdownConfig;
    renderers?: ILuteRender;
    theme?: IPreviewTheme;
    icon?: "ant" | "material" | undefined;

    transform?(html: string): string;

    after?(): void;
}

interface IHintData {
    html: string;
    value: string;
}

interface IHintExtend {
    key: string;

    hint?(value: string): IHintData[] | Promise<IHintData[]>;
}

/** @link https://ld246.com/article/1549638745630#options-hint */
interface IHint {
    /** 鎻愮ず鍐呭鏄惁杩涜 md 瑙ｆ瀽 */
    parse?: boolean;
    /** 甯哥敤琛ㄦ儏鎻愮ず HTML */
    emojiTail?: string;
    /** 鎻愮ず debounce 姣闂撮殧銆傞粯璁ゅ��: 200 */
    delay?: number;
    /** 榛樿琛ㄦ儏锛屽彲浠� [lute/emoji_map](https://github.com/88250/lute/blob/master/parse/emoji_map.go#L32) 涓�夊彇锛屼篃鍙嚜瀹氫箟 */
    emoji?: IObject;
    /** 琛ㄦ儏鍥剧墖鍦板潃銆傞粯璁ゅ��: 'https://unpkg.com/vditor@${VDITOR_VERSION}/dist/images/emoji' */
    emojiPath?: string;
    extend?: IHintExtend[];
}

/** @link https://ld246.com/article/1549638745630#options-toolbarConfig */
interface IToolbarConfig {
    /** 鏄惁闅愯棌宸ュ叿鏍忋�傞粯璁ゅ��: false */
    hide?: boolean;
    /** 鏄惁鍥哄畾宸ュ叿鏍忋�傞粯璁ゅ��: false */
    pin?: boolean;
}

/** @link https://ld246.com/article/1549638745630#options-comment */
interface IComment {
    /** 鏄惁鍚敤璇勮妯″紡銆傞粯璁ゅ��: false */
    enable: boolean;

    /** 娣诲姞璇勮鍥炶皟 */
    add?(id: string, text: string, commentsData: ICommentsData[]): void;

    /** 鍒犻櫎璇勮鍥炶皟 */
    remove?(ids: string[]): void;

    /** 婊氬姩鍥炶皟 */
    scroll?(top: number): void;

    /** 鏂囨。淇敼鏃讹紝閫傞厤璇勮楂樺害 */
    adjustTop?(commentsData: ICommentsData[]): void;
}

/** @link https://ld246.com/article/1549638745630#options-outline */
interface IOutline {
    /** 鍒濆鍖栨槸鍚﹀睍鐜板ぇ绾层�傞粯璁ゅ��: false */
    enable: boolean;
    /** 澶х翰浣嶇疆锛�'left', 'right'銆傞粯璁ゅ��: 'left' */
    position: "left" | "right";
}

interface IResize {
    position?: string;
    enable?: boolean;

    after?(height: number): void;
}

/** @link https://ld246.com/article/1549638745630#options */
interface IOptions {
    /** RTL */
    rtl?: boolean;
    /** 鍘嗗彶璁板綍闂撮殧 */
    undoDelay?: number;
    /** 鍐呴儴璋冭瘯鏃朵娇鐢� */
    _lutePath?: string;
    /** 缂栬緫鍣ㄥ垵濮嬪寲鍊笺�傞粯璁ゅ��: '' */
    value?: string;
    /** 鏄惁鏄剧ず鏃ュ織銆傞粯璁ゅ��: false */
    debugger?: boolean;
    /** 鏄惁鍚敤鎵撳瓧鏈烘ā寮忋�傞粯璁ゅ��: false */
    typewriterMode?: boolean;
    /** 缂栬緫鍣ㄦ�婚珮搴︺�傞粯璁ゅ��: 'auto' */
    height?: number | string;
    /** 缂栬緫鍣ㄦ渶灏忛珮搴� */
    minHeight?: number;
    /** 缂栬緫鍣ㄦ�诲搴︼紝鏀寔 %銆傞粯璁ゅ��: 'auto' */
    width?: number | string;
    /** 杈撳叆鍖哄煙涓虹┖鏃剁殑鎻愮ず銆傞粯璁ゅ��: '' */
    placeholder?: string;
    /** 澶氳瑷�銆傞粯璁ゅ��: 'zh_CN' */
    lang?: (keyof II18n);
    /** 鍥介檯鍖�, 鑷畾涔夎瑷�銆備紭鍏堢骇浣庝簬lang */
    i18n?: ITips;
    /** @link https://ld246.com/article/1549638745630#options-fullscreen */
    fullscreen?: {
        /** 鍏ㄥ睆灞傜骇銆傞粯璁ゅ��: 90 */
        index: number;
    };
    /** @link https://ld246.com/article/1549638745630#options-toolbar */
    toolbar?: Array<string | IMenuItem>;
    /** @link https://ld246.com/article/1549638745630#options-resize */
    resize?: IResize;
    /** @link https://ld246.com/article/1549638745630#options-counter */
    counter?: {
        /** 鏄惁鍚敤璁℃暟鍣ㄣ�傞粯璁ゅ��: false */
        enable: boolean;
        /** 鍏佽杈撳叆鐨勬渶澶у�� */
        max?: number;
        /** 缁熻绫诲瀷銆傞粯璁ゅ��: 'markdown' */
        type?: "markdown" | "text";
        /** 瀛楁暟缁熻鍥炶皟銆� */
        after?(length: number, counter: {
            /** 鏄惁鍚敤璁℃暟鍣ㄣ�傞粯璁ゅ��: false */
            enable: boolean;
            /** 鍏佽杈撳叆鐨勬渶澶у�� */
            max?: number;
            /** 缁熻绫诲瀷銆傞粯璁ゅ��: 'markdown' */
            type?: "markdown" | "text"
        }): void
    };
    /** @link https://ld246.com/article/1549638745630#options-cache */
    cache?: {
        /** 缂撳瓨 key锛岀涓�涓弬鏁颁负鍏冪礌涓斿惎鐢ㄧ紦瀛樻椂蹇呭～ */
        id?: string;
        /** 鏄惁浣跨敤 localStorage 杩涜缂撳瓨銆傞粯璁ゅ��: true */
        enable?: boolean;
        /** 缂撳瓨鍚庣殑鍥炶皟 */
        after?(markdown: string): void;
    };
    /** 缂栬緫妯″紡銆傞粯璁ゅ��: 'wysiwyg'
     *
     * wysiwyg: 鎵�瑙佸嵆鎵�寰�
     *
     * ir: 鍗虫椂娓叉煋
     *
     * sv: 鍒嗗睆棰勮
     */
    mode?: "wysiwyg" | "sv" | "ir";
    /** @link https://ld246.com/article/1549638745630#options-preview */
    preview?: IPreview;
    /** @link https://ld246.com/article/1549638745630#options-link */
    link?: {
        /** 鏄惁鎵撳紑閾炬帴鍦板潃銆傞粯璁ゅ��: true */
        isOpen?: boolean;
        /** 鐐瑰嚮閾炬帴浜嬩欢 */
        click?: (bom: Element) => void;
    },
    /** @link https://ld246.com/article/1549638745630#options-image */
    image?: {
        /** 鏄惁棰勮鍥剧墖銆傞粯璁ゅ��: true */
        isPreview?: boolean;
        /** 鍥剧墖棰勮澶勭悊 */
        preview?: (bom: Element) => void;
    },
    /** @link https://ld246.com/article/1549638745630#options-hint */
    hint?: IHint;
    /** @link https://ld246.com/article/1549638745630#options-toolbarConfig */
    toolbarConfig?: IToolbarConfig;
    /** 璇勮
     * @link https://ld246.com/article/1549638745630#options-comment
     */
    comment?: IComment;
    /** 涓婚銆傞粯璁ゅ��: 'classic' */
    theme?: "classic" | "dark";
    /** 鍥炬爣銆傞粯璁ゅ��: 'ant' */
    icon?: "ant" | "material";
    /** @link https://ld246.com/article/1549638745630#options-upload */
    upload?: IUpload;
    /** @link https://ld246.com/article/1549638745630#options-classes */
    classes?: IClasses;
    /** 閰嶇疆鑷缓 CDN 鍦板潃銆傞粯璁ゅ��: 'https://unpkg.com/vditor@${VDITOR_VERSION}' */
    cdn?: string;
    /** tab 閿搷浣滃瓧绗︿覆锛屾敮鎸� \t 鍙婁换鎰忓瓧绗︿覆 */
    tab?: string;
    /** @link https://ld246.com/article/1549638745630#options-outline */
    outline?: IOutline;

    /** 缂栬緫鍣ㄥ紓姝ユ覆鏌撳畬鎴愬悗鐨勫洖璋冩柟娉� */
    after?(): void;

    /** 杈撳叆鍚庤Е鍙� */
    input?(value: string): void;

    /** 鑱氱劍鍚庤Е鍙�  */
    focus?(value: string): void;

    /** 澶辩劍鍚庤Е鍙� */
    blur?(value: string): void;

    /** 鎸変笅閿洏瑙﹀彂 */
    keydown?(event: KeyboardEvent): void;

    /** `esc` 鎸変笅鍚庤Е鍙� */
    esc?(value: string): void;

    /** `鈱�/ctrl+enter` 鎸変笅鍚庤Е鍙� */
    ctrlEnter?(value: string): void;

    /** 缂栬緫鍣ㄤ腑閫変腑鏂囧瓧鍚庤Е鍙� */
    select?(value: string): void;
}

interface IEChart {
    setOption(option: any): void;

    resize(): void;
}

interface IVditor {
    element: HTMLElement;
    options: IOptions;
    originalInnerHTML: string;
    lute: Lute;
    currentMode: "sv" | "wysiwyg" | "ir";
    devtools?: {
        element: HTMLDivElement,
        renderEchart(vditor: IVditor): void,
    };
    outline: {
        element: HTMLElement,
        render(vditor: IVditor): string,
        toggle(vditor: IVditor, show?: boolean, focus?: boolean): void,
    };
    toolbar?: {
        elements?: { [key: string]: HTMLElement },
        element?: HTMLElement,
    };
    preview?: {
        element: HTMLElement
        render(vditor: IVditor, value?: string): void,
    };
    counter?: {
        element: HTMLElement
        render(vditor: IVditor, mdText?: string): void,
    };
    resize?: {
        element: HTMLElement,
    };
    hint: {
        timeId: number
        element: HTMLDivElement
        recentLanguage: string
        fillEmoji(element: HTMLElement, vditor: IVditor): void
        render(vditor: IVditor): void,
        genHTML(data: IHintData[], key: string, vditor: IVditor): void
        select(event: KeyboardEvent, vditor: IVditor): boolean,
    };
    tip: {
        element: HTMLElement
        show(text: string, time?: number): void
        hide(): void,
    };
    upload?: {
        element: HTMLElement
        isUploading: boolean
        range: Range,
    };
    undo?: {
        clearStack(vditor: IVditor): void,
        redo(vditor: IVditor): void
        undo(vditor: IVditor): void
        addToUndoStack(vditor: IVditor): void
        recordFirstPosition(vditor: IVditor, event: KeyboardEvent): void,
        resetIcon(vditor: IVditor): void,
    };
    wysiwyg?: {
        range: Range,
        element: HTMLPreElement,
        selectPopover: HTMLDivElement,
        popover: HTMLDivElement,
        afterRenderTimeoutId: number,
        hlToolbarTimeoutId: number,
        preventInput: boolean,
        composingLock: boolean,
        commentIds: string[]
        getComments(vditor: IVditor, getData?: boolean): ICommentsData[],
        triggerRemoveComment(vditor: IVditor): void,
        showComment(): void,
        hideComment(): void,
        unbindListener(): void,
    };
    ir?: {
        range: Range,
        element: HTMLPreElement,
        composingLock: boolean,
        preventInput: boolean,
        processTimeoutId: number,
        hlToolbarTimeoutId: number,
    };
    sv?: {
        range: Range,
        element: HTMLPreElement,
        processTimeoutId: number,
        hlToolbarTimeoutId: number,
        composingLock: boolean,
        preventInput: boolean,
    };
}

interface ICommentsData {
    id: string;
    top: number;
}
