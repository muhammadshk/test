import { Component, h, State, Host } from "@stencil/core";

@Component({
  tag: "wallet-wrapper",
  styleUrl: "wallet-wrapper.css",
  shadow: true,
})
export class WalletWrapper {
  initialState: number = 0;
  @State() history: number[] = [];
  @State() funds: number;

  componentWillLoad() {
    this.funds = this.initialState;
  }

  deposit() {
    this.funds += 1;
    this.history = [...this.history, this.funds];
  }
  withdraw() {
    this.funds -= 1;
    this.history = [...this.history, this.funds];
  }

  componentWillUpdate() {
    console.log("component updated");
  }

  render() {
    return (
      <Host>
        <ol class="history">
          {this.history.map((item, idx) => (
            <li class="history-items" key={idx}>
              {item}
            </li>
          ))}
        </ol>

        <display-funds funds={this.funds}></display-funds>
        <test-wallet
          earn={() => this.deposit()}
          spend={() => this.withdraw()}
        ></test-wallet>

        <p>{this.funds}</p>
        <button onClick={() => this.deposit()}>+</button>
        <button onClick={() => this.withdraw()}>-</button>
      </Host>
    );
  }
}
