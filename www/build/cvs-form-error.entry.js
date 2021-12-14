import { r as registerInstance, h, f as Host } from './index-6c675c57.js';

const cvsFormErrorCss = ":host{display:block}.form-error-text{font-size:14px;font-weight:bold;font-family:\"Helvetica\", \"Arial\", sans-serif;color:#d53220;margin:0;padding:0;display:table}.form-error-text span{line-height:1.5;margin-right:1rem;margin-bottom:0;vertical-align:baseline;display:table-cell}.form-error-icon{display:inline-block;vertical-align:bottom;width:16px;height:16px;margin-right:8px;background-repeat:no-repeat;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABMUlEQVQ4EZVTvUrEQBCeGYMHp88g/qTxAoKCha2F4AP4Bja2Psh1YuMb3AMIFtdaWAhCziYq+AwqnJwZ55sQiLnsErdJdr6f3dn9lqk18sM0Y12ca0knRLxRwfrOQnfKyU32UORNCdcTPctWn9++xlTqhRJJXW9+jVyS8PXu1vCSJ/k3MDeAePb6eUtKx01B8J9pOtpeO4WJr+Qr9xXD1biusV/2nn8WT6Fth3aBdnQl2RM/sEDPITHqWBBaqU47Rg1j0CbVVZkf8cdgIPvp/UsRlhAVRzvpfF4+2h7Woe28rphBG+P8YBPBGLWBnvOZIGE9yUs0aAXx9IQtwfGCX6NpxbNt8YzTO1DTQOuHiGxbqKcdtO6ScV1jqBsg055t4atYO8DYOPU7gLvV/o7/Pudfvgl0lwi1MGIAAAAASUVORK5CYII=\")}";

const CvsFormError = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * aria live type
     */
    this.ariaLive = "polite";
  }
  render() {
    const { errorId, errorClassName, text, ariaLive } = this;
    return (h(Host, { class: "form-error" }, h("div", { id: errorId, role: "region", "aria-live": ariaLive, class: errorClassName }, h("p", { class: "form-error-text" }, h("div", { class: "form-error-icon" }), h("span", null, text)))));
  }
};
CvsFormError.style = cvsFormErrorCss;

export { CvsFormError as cvs_form_error };
