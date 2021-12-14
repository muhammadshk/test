import { r as registerInstance, h } from './index-6c675c57.js';

const walletWrapperCss = ".container{margin-left:90px;margin-right:90px;height:90vh;background-color:blanchedalmond}";

const WalletWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.funds = 0;
  }
  async deposit() {
    this.funds = 10;
    console.log(this.funds);
  }
  async withdraw() {
    this.funds -= 1;
  }
  render() {
    return ([
      h("div", { class: 'container' }, h("display-funds", { funds: this.funds }), h("test-wallet", { earn: this.deposit, spend: this.withdraw }))
    ]);
  }
};
WalletWrapper.style = walletWrapperCss;

export { WalletWrapper as wallet_wrapper };
