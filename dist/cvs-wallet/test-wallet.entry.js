import { r as registerInstance, h } from './index-6c675c57.js';

const testWalletCss = "";

const Wallet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return ([
      h("button", { onClick: () => this.earn(), class: 'container' }, "Earn"),
      h("button", { onClick: () => this.spend(), class: 'spend' }, "Spend")
    ]);
  }
};
Wallet.style = testWalletCss;

export { Wallet as test_wallet };
