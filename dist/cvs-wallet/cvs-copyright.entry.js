import { r as registerInstance, h } from './index-6c675c57.js';

class YearUtil {
  getYear() {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year;
  }
}

const cvsCopyrightCss = ":host{display:block}";

const CvsCopyright = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.yearUtil = new YearUtil();
  }
  render() {
    const year = this.yearUtil.getYear();
    return (h("span", null, "\u00A9 Copyright ", year, " ", this.company, " "));
  }
};
CvsCopyright.style = cvsCopyrightCss;

export { CvsCopyright as cvs_copyright };
