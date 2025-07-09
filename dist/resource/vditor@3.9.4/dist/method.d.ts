/// <reference types="./types" />
import * as adapterRender from "./ts/markdown/adapterRender";
declare class Vditor {
    /** 鐐瑰嚮鍥剧墖鏀惧ぇ */
    static adapterRender: typeof adapterRender;
    /** 鐐瑰嚮鍥剧墖鏀惧ぇ */
    static previewImage: (oldImgElement: HTMLImageElement, lang?: "en_US" | "fr_FR" | "pt_BR" | "ja_JP" | "ko_KR" | "ru_RU" | "sv_SE" | "zh_CN" | "zh_TW", theme?: string) => void;
    /** 涓� element 涓殑浠ｇ爜鍧楁坊鍔犲鍒舵寜閽� */
    static codeRender: (element: HTMLElement) => void;
    /** 瀵� graphviz 杩涜娓叉煋 */
    static graphvizRender: (element: HTMLElement, cdn?: string) => void;
    /** 涓� element 涓殑浠ｇ爜鍧楄繘琛岄珮浜覆鏌� */
    static highlightRender: (hljsOption?: IHljs, element?: HTMLElement | Document, cdn?: string) => void;
    /** 瀵规暟瀛﹀叕寮忚繘琛屾覆鏌� */
    static mathRender: (element: HTMLElement, options?: {
        cdn?: string;
        math?: IMath;
    }) => void;
    /** 娴佺▼鍥�/鏃跺簭鍥�/鐢樼壒鍥炬覆鏌� */
    static mermaidRender: (element: HTMLElement, cdn: string, theme: string) => void;
    /** 鏀寔markdown鐨勬�濈淮瀵煎浘 */
    static markmapRender: (element: HTMLElement, cdn: string, theme: string) => void;
    /** flowchart.js 娓叉煋 */
    static flowchartRender: (element: HTMLElement, cdn?: string) => void;
    /** 鍥捐〃娓叉煋 */
    static chartRender: (element: HTMLElement | Document, cdn: string, theme: string) => void;
    /** 浜旂嚎璋辨覆鏌� */
    static abcRender: (element?: HTMLElement | Document, cdn?: string) => void;
    /** 鑴戝浘娓叉煋 */
    static mindmapRender: (element: HTMLElement | Document, cdn: string, theme: string) => void;
    /** plantuml娓叉煋 */
    static plantumlRender: (element?: HTMLElement | Document, cdn?: string) => void;
    /** 澶х翰娓叉煋 */
    static outlineRender: (contentElement: HTMLElement, targetElement: Element, vditor?: IVditor) => string;
    /** 涓篬鐗瑰畾閾炬帴](https://github.com/Vanessa219/vditor/issues/7)鍒嗗埆娓叉煋涓鸿棰戙�侀煶棰戙�佸祵鍏ョ殑 iframe */
    static mediaRender: (element: HTMLElement) => void;
    /** 瀵归�変腑鐨勬枃瀛楄繘琛岄槄璇� */
    static speechRender: (element: HTMLElement, lang?: "en_US" | "fr_FR" | "pt_BR" | "ja_JP" | "ko_KR" | "ru_RU" | "sv_SE" | "zh_CN" | "zh_TW") => void;
    /** 瀵瑰浘鐗囪繘琛屾噿鍔犺浇 */
    static lazyLoadImageRender: (element?: HTMLElement | Document) => boolean;
    /** Markdown 鏂囨湰杞崲涓� HTML锛岃鏂规硶闇�浣跨敤[寮傛缂栫▼](https://ld246.com/article/1546828434083?r=Vaness) */
    static md2html: (mdText: string, options?: IPreviewOptions) => Promise<string>;
    /** 椤甸潰 Markdown 鏂囩珷娓叉煋 */
    static preview: (previewElement: HTMLDivElement, markdown: string, options?: IPreviewOptions) => Promise<void>;
    /** 璁剧疆浠ｇ爜涓婚 */
    static setCodeTheme: (codeTheme: string, cdn?: string) => void;
    /** 璁剧疆鍐呭涓婚 */
    static setContentTheme: (contentTheme: string, path: string) => void;
}
export default Vditor;
