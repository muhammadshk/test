import { r as registerInstance, h, f as Host } from './index-6c675c57.js';

const cvsContainerCss = ":host{display:block}.container{margin:16px}.container cvs-previous-page{display:inline-block}.container #cvs-prev-page-link{display:block}@media (min-width: 720px){.container .inner-container{max-width:356px;margin:-60px auto 0;width:356px}}@media (min-width: 720px){.container .no-margin-top{margin-top:0}}h1{font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:24px;margin:24px 0}header{height:44px;justify-content:center;display:flex;border-bottom:solid 1px #dedede}@media (min-width: 720px){header{height:88px}}header img{width:158px;align-self:center}@media (min-width: 720px){header img{width:239px}}";

const CvsContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const cvsPreviousPageProps = {
      pageName: this.prevPageName,
      customUrl: this.prevPageCustomUrl || undefined
    };
    return (h(Host, null, h("header", null, h("img", { class: "headerImg", src: this.headerImgUrl, alt: this.headerImgAltTag || "" })), h("div", { id: "maincontent", role: "main", class: "container" }, this.showPrevPage && h("cvs-previous-page", Object.assign({}, cvsPreviousPageProps)), h("div", { class: `inner-container ${!this.showPrevPage ? "no-margin-top" : ""}` }, this.pageTitle && h("h1", null, this.pageTitle), h("slot", null)))));
  }
  static get assetsDirs() { return ["assets"]; }
};
CvsContainer.style = cvsContainerCss;

export { CvsContainer as cvs_container };
