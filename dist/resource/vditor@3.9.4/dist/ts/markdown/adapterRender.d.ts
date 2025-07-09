export declare const mathRenderAdapter: {
    getCode: (mathElement: Element) => string;
    getElements: (element: HTMLElement) => NodeListOf<Element>;
};
export declare const mermaidRenderAdapter: {
    /** 涓嶄粎瑕佽繑鍥瀋ode锛屽苟涓旈渶瑕佸皢 code 璁剧疆涓� el 鐨� innerHTML */
    getCode: (el: Element) => string;
    getElements: (element: HTMLElement) => NodeListOf<Element>;
};
export declare const markmapRenderAdapter: {
    getCode: (el: Element) => string;
    getElements: (element: HTMLElement) => NodeListOf<Element>;
};
export declare const mindmapRenderAdapter: {
    getCode: (el: Element) => string;
    getElements: (el: HTMLElement | Document) => NodeListOf<Element>;
};
export declare const chartRenderAdapter: {
    getCode: (el: HTMLElement) => string;
    getElements: (el: HTMLElement | Document) => NodeListOf<Element>;
};
export declare const abcRenderAdapter: {
    getCode: (el: Element) => string;
    getElements: (el: HTMLElement | Document) => NodeListOf<Element>;
};
export declare const graphvizRenderAdapter: {
    getCode: (el: Element) => string;
    getElements: (el: HTMLElement | Document) => NodeListOf<Element>;
};
export declare const flowchartRenderAdapter: {
    getCode: (el: Element) => string;
    getElements: (el: HTMLElement | Document) => NodeListOf<Element>;
};
export declare const plantumlRenderAdapter: {
    getCode: (el: Element) => string;
    getElements: (el: HTMLElement | Document) => NodeListOf<Element>;
};
