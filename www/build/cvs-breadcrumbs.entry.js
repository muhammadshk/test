import { r as registerInstance, e as createEvent, h } from './index-6c675c57.js';
import { i as isSSR } from './utils-e07eefb0.js';

const cvsBreadcrumbsCss = ":host{display:inline-block;font-family:\"Helvetica\", \"Arial\", sans-serif}ul{list-style:none;padding:0;margin:0}ul li{display:inline-flex;padding:0;color:#646464;font-size:12px;line-height:14px;margin:10px 0;vertical-align:text-bottom}ul li .storeLocator_breadcrumb{width:12px;height:12px;top:1px;position:relative;fill:#767676;margin:0 2px}ul li a{color:#646464;font-size:12px}ul li svg{height:12px}";

const CvsBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cvsAnalyticsEvent = createEvent(this, "cvsAnalyticsEvent", 7);
    /**
     * path name for the breadcrumb
     */
    this.path = [{ pageName: document.title }];
    /**
     * parsed path name for the breadcrumb
     * @memberof CvsBreadcrumbs
     * @type: [{pageName: string, target?: string, title?: string}]
     */
    this.parsedPath = [{ pageName: document.title }];
    this.clickHandler = (event, index, pageName, target) => {
      if (isSSR())
        return;
      if (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      this.analyticsData && this.analyticsData[index]
        ? this.cvsAnalyticsEvent.emit(this.analyticsData[index])
        : this.cvsAnalyticsEvent.emit({
          type: "link",
          payload: {
            link_name: `custom:store locator:store details:${pageName}`
          }
        });
      setTimeout(() => {
        if (typeof target === "string")
          window.location.href = target;
      }, 1000);
    };
  }
  /**
   * @public: componentWillLoad
   *
   * @description: Executed when the component first connected to DOM
   * @returns: void
   */
  componentWillLoad() {
    this.pathUpdated();
  }
  /**
   * @private: pathUpdated
   * @description: Executed when there is the change in the component property path.
   *              If the component is initilized through HTML the path prop will be a string.
   * @returns: void
   */
  pathUpdated() {
    if (typeof this.path === "string") {
      try {
        this.parsedPath = JSON.parse(this.path);
      }
      catch (e) {
        console.warn("Error in parsing the value of path attr for cvs-breadcrumbs");
      }
    }
    else if (this.path !== undefined) {
      this.parsedPath = this.path;
    }
  }
  /**
   * @private: getPath
   *
   * @description: returns the given pathname as an list elements
   * @returns: any:HTMLElement
   */
  getPath() {
    return (this.parsedPath &&
      this.parsedPath.map((nav, index) => {
        let idName = "cvs-breadcrumbs-link" + index;
        if (index === 0) {
          return (h("li", null, h("a", { id: idName, href: nav.target, title: nav.title, onClick: (e) => this.clickHandler(e, index, nav.pageName, nav.target) }, nav.pageName)));
        }
        else if (index < this.path.length - 1) {
          return (h("li", null, h("span", { class: "storeLocator_breadcrumb" }, h("svg", { viewBox: "0 0 24 24", id: "icon-angle-right--s" }, h("path", { d: "M6.293 21.293l1.414 1.414 10.707-10.71L7.707 1.294 6.293 2.707l9.293 9.29z" }))), h("a", { id: idName, href: nav.target, title: nav.title, onClick: (e) => this.clickHandler(e, index, nav.pageName, nav.target) }, nav.pageName)));
        }
        else {
          return (h("li", null, h("span", { class: "storeLocator_breadcrumb" }, h("svg", { viewBox: "0 0 24 24", id: "icon-angle-right--s" }, h("path", { d: "M6.293 21.293l1.414 1.414 10.707-10.71L7.707 1.294 6.293 2.707l9.293 9.29z" }))), h("span", { id: "cvs-breadcrumbs-currentPage" }, nav.pageName)));
        }
      }));
  }
  /**
   * @public render
   *
   * @description: outputs a tree of components that will be drawn to the screen
   * @returns: any:HTMLElementCollection
   */
  render() {
    return (h("nav", { "aria-label": "Breadcrumb" }, h("ul", { class: "breadcrumb", id: "cvs-breadcrumbs" }, this.getPath())));
  }
  static get watchers() { return {
    "path": ["pathUpdated"]
  }; }
};
CvsBreadcrumbs.style = cvsBreadcrumbsCss;

export { CvsBreadcrumbs as cvs_breadcrumbs };
