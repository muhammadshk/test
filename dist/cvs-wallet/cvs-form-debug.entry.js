import { r as registerInstance, h, f as Host } from './index-6c675c57.js';

const cvsFormDebugCss = ":host{display:block;margin:0 4em;font-size:14px}div{padding:0.1em 0.5em;background:#fafafa;border-radius:0.25em}";

const CvsFormDebug = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Props to display */
    this.display = ["values", "isSubmitting", "submitCount"];
  }
  render() {
    let display = {};
    if (this.state) {
      for (let key of this.display) {
        display = Object.assign(Object.assign({}, display), { [key]: this.state[key] });
      }
    }
    return (h(Host, null, h("div", null, h("pre", null, h("code", null, JSON.stringify(display, null, 2))))));
  }
};
CvsFormDebug.style = cvsFormDebugCss;

export { CvsFormDebug as cvs_form_debug };
