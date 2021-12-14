import { r as registerInstance, e as createEvent, h } from './index-6c675c57.js';

const cvsPreviousPageCss = "span{padding-left:14px;font-size:14px;font-family:\"Helvetica\", \"Arial\", sans-serif;font-weight:bold;height:17px;color:#d53220;margin-left:-11px}span:before{top:2px;left:2px;position:relative;content:\"\";display:inline-block;width:11px;height:11px;border-right:2px solid #d53220;border-top:2px solid #d53220;transform:rotate(225deg)}a{display:flex;justify-content:flex-start;align-items:center;text-decoration:none;cursor:pointer;height:45px;background-color:white}";

const CvsPreviousPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cvsAnalyticsEvent = createEvent(this, "cvsAnalyticsEvent", 7);
    /**
     * title of button
     */
    this.pageName = "Back";
    this.cvsAnalyticsHandler = () => {
      this.analyticsData
        ? this.cvsAnalyticsEvent.emit(this.analyticsData)
        : this.cvsAnalyticsEvent.emit({
          type: "link",
          payload: {
            link_name: `custom:store locator:store details:${this.pageName.toLowerCase()}`
          }
        });
    };
    /**
     * if customUrl === undefined go back
     */
    this.handleClick = () => {
      this.cvsAnalyticsHandler();
      setTimeout(() => {
        if (this.customUrl === undefined) {
          window.history.back();
        }
        else {
          return true;
        }
      }, 1000);
    };
  }
  render() {
    return (h("a", { href: this.customUrl, onClick: this.handleClick, id: "cvs-prev-page-link" }, h("span", null, this.pageName)));
  }
};
CvsPreviousPage.style = cvsPreviousPageCss;

export { CvsPreviousPage as cvs_previous_page };
