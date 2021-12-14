import { r as registerInstance, h, f as Host } from './index-6c675c57.js';

const cvsWalletCss = ":host{display:block}";

const CvsWallet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
CvsWallet.style = cvsWalletCss;

export { CvsWallet as cvs_wallet };
