export declare class WalletWrapper {
  funds: number;
  deposit(): Promise<void>;
  withdraw(): Promise<void>;
  render(): any[];
}
