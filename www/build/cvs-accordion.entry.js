import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';

const cvsAccordionCss = ":host{display:flex;justify-content:space-between}button{font-size:100%;font-family:inherit;border:0;padding:0;background-color:inherit}.cvs-accordion{width:100%}.cvs-accordion .cvs-accordion-inner{display:none}.cvs-accordion .cvs-accordion-inner.expanded{display:block}.cvs-accordion .cvs-accordion-inner.collapsed{display:none}.cvs-accordion-header{padding-left:17px;padding-right:2px;margin:10px 0;text-align:left;line-height:20px;width:100%;display:flex;justify-content:flex-start;align-items:center;position:relative;font-size:14px;font-weight:bold;font-family:\"Helvetica\", \"Arial\", sans-serif}.cvs-accordion-header:before{content:\"\";position:relative;display:inline-block;width:0;height:0;right:12px;border-top:10px solid transparent;border-bottom:10px solid transparent;border-left:10px solid #000}.cvs-accordion-title{display:flex;align-items:center;margin:0}.expanded:before{transform:rotate(90deg)}.cvs-accordion-subtitle{margin-left:auto;color:#585858;font-size:14px;font-family:\"Helvetica\", \"Arial\", sans-serif;font-weight:normal}";

const CvsAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cvsAnalyticsEvent = createEvent(this, "cvsAnalyticsEvent", 7);
    /**
     * controls accordion expansion and collapse
     */
    this.open = false;
    this.cvsAnalyticsHandler = () => {
      this.analyticsData
        ? this.cvsAnalyticsEvent.emit(this.analyticsData)
        : this.cvsAnalyticsEvent.emit({
          type: "link",
          payload: {
            link_name: this.accordionTitle
          }
        });
    };
    this.handleClick = () => {
      this.open = !this.open;
      this.cvsAnalyticsHandler();
    };
  }
  componentWillLoad() {
    if (this.expanded === true) {
      this.open = this.expanded;
    }
  }
  render() {
    return (h(Host, { key: `${this.accordionTitle.replace(/\s/g, "-").toLowerCase()}` }, h("div", { class: "cvs-accordion", id: `cvs-accordion-${this.accordionTitle
        .replace(/\s/g, "-")
        .replace(":", "")
        .toLowerCase()}` }, h("h2", { class: "cvs-accordion-title" }, h("button", { class: this.open ? "cvs-accordion-header expanded" : "cvs-accordion-header", "aria-expanded": this.open ? "true" : "false", onClick: this.handleClick, id: `cvs-accordion-${this.accordionTitle
        .replace(/\s/g, "-")
        .replace(":", "")
        .toLowerCase()}-button`, "aria-controls": `cvs-accordion-${this.accordionTitle
        .replace(/\s/g, "-")
        .replace(":", "")
        .toLowerCase()}-content` }, this.accordionTitle, this.subtitle && h("span", { class: "cvs-accordion-subtitle" }, this.subtitle))), h("div", { "aria-hidden": this.open ? "false" : "true", id: `cvs-accordion-${this.accordionTitle
        .replace(/\s/g, "-")
        .replace(":", "")
        .toLowerCase()}-content`, "aria-labelledby": `cvs-accordion-${this.accordionTitle
        .replace(/\s/g, "-")
        .replace(":", "")
        .toLowerCase()}-button`, class: this.open ? "cvs-accordion-inner expanded" : "cvs-accordion-inner collapsed" }, h("slot", null)))));
  }
};
CvsAccordion.style = cvsAccordionCss;

export { CvsAccordion as cvs_accordion };
