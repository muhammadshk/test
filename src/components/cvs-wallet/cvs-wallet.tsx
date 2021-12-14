import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "cvs-wallet",
  styleUrl: "cvs-wallet.css",
  shadow: true
})
export class CvsWallet {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
