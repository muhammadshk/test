import { r as registerInstance, h } from './index-6c675c57.js';

const cvsDonutGraphCss = ":host{display:block}";

const CVSDonutGraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * proprotional width in percentage
     */
    this.width = "100%";
    /**
     * Width of the stroke.  Default is 1
     */
    this.strokeWidth = 3;
  }
  render() {
    let v = 0;
    if (this.max > 0) {
      v = (this.value / this.max) * 100;
    }
    const offSet = 100 - v;
    let strokeDisarray = v + " " + offSet;
    /**
     * Currently viewBox is 0 0 42 42 which means the double the cx & cy
     */
    return (h("svg", { width: this.width, height: this.width, viewBox: "0 0 42 42" }, h("circle", { class: "donut-hole", cx: "21", cy: "21", r: "15.91549430918954", fill: "#fff" }), h("circle", { class: "donut-ring", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: this.backGround, "stroke-width": this.strokeWidth }), h("circle", { class: "donut-segment", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: this.foreGround, "stroke-width": this.strokeWidth, "stroke-dasharray": strokeDisarray, "stroke-dashoffset": "25" })));
  }
};
CVSDonutGraph.style = cvsDonutGraphCss;

export { CVSDonutGraph as cvs_donut_graph };
