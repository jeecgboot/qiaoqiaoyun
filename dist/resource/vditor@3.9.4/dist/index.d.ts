/// <reference types="./types" />
import "./assets/less/index.less";
import VditorMethod from "./method";
declare class Vditor extends VditorMethod {
    readonly version: string;
    vditor: IVditor;
    /**
     * @param id 瑕佹寕杞� Vditor 鐨勫厓绱犳垨鑰呭厓绱� ID銆�
     * @param options Vditor 鍙傛暟
     */
    constructor(id: string | HTMLElement, options?: IOptions);
    /** 璁剧疆涓婚 */
    setTheme(theme: "dark" | "classic", contentTheme?: string, codeTheme?: string, contentThemePath?: string): void;
    /** 鑾峰彇 Markdown 鍐呭 */
    getValue(): string;
    /** 鑾峰彇缂栬緫鍣ㄥ綋鍓嶇紪杈戞ā寮� */
    getCurrentMode(): "sv" | "wysiwyg" | "ir";
    /** 鑱氱劍鍒扮紪杈戝櫒 */
    focus(): void;
    /** 璁╃紪杈戝櫒澶辩劍 */
    blur(): void;
    /** 绂佺敤缂栬緫鍣� */
    disabled(): void;
    /** 瑙ｉ櫎缂栬緫鍣ㄧ鐢� */
    enable(): void;
    /** 杩斿洖閫変腑鐨勫瓧绗︿覆 */
    getSelection(): string;
    /** 璁剧疆棰勮鍖哄煙鍐呭 */
    renderPreview(value?: string): void;
    /** 鑾峰彇鐒︾偣浣嶇疆 */
    getCursorPosition(): {
        left: number;
        top: number;
    };
    /** 涓婁紶鏄惁杩樺湪杩涜涓� */
    isUploading(): boolean;
    /** 娓呴櫎缂撳瓨 */
    clearCache(): void;
    /** 绂佺敤缂撳瓨 */
    disabledCache(): void;
    /** 鍚敤缂撳瓨 */
    enableCache(): void;
    /** HTML 杞� md */
    html2md(value: string): string;
    /** markdown 杞� JSON 杈撳嚭 */
    exportJSON(value: string): string;
    /** 鑾峰彇 HTML */
    getHTML(): string;
    /** 娑堟伅鎻愮ず銆倀ime 涓� 0 灏嗕竴鐩存樉绀� */
    tip(text: string, time?: number): void;
    /** 璁剧疆棰勮妯″紡 */
    setPreviewMode(mode: "both" | "editor"): void;
    /** 鍒犻櫎閫変腑鍐呭 */
    deleteValue(): void;
    /** 鏇存柊閫変腑鍐呭 */
    updateValue(value: string): void;
    /** 鍦ㄧ劍鐐瑰鎻掑叆鍐呭锛屽苟榛樿杩涜 Markdown 娓叉煋 */
    insertValue(value: string, render?: boolean): void;
    /** 璁剧疆缂栬緫鍣ㄥ唴瀹� */
    setValue(markdown: string, clearStack?: boolean): void;
    /** 娓呯┖ undo & redo 鏍� */
    clearStack(): void;
    /** 閿�姣佺紪杈戝櫒 */
    destroy(): void;
    /** 鑾峰彇璇勮 ID */
    getCommentIds(): ICommentsData[];
    /** 楂樹寒璇勮 */
    hlCommentIds(ids: string[]): void;
    /** 鍙栨秷璇勮楂樹寒 */
    unHlCommentIds(ids: string[]): void;
    /** 鍒犻櫎璇勮 */
    removeCommentIds(removeIds: string[]): void;
    private init;
}
export default Vditor;
