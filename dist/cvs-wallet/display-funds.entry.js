import { r as registerInstance, h } from './index-6c675c57.js';

const displayFundsCss = "";

const DisplayFunds = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    console.log('this loaded');
  }
  render() {
    return (h("div", { class: 'container' }, "Your total Funds: ", this.funds));
  }
};
DisplayFunds.style = displayFundsCss;

export { DisplayFunds as display_funds };
