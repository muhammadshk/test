/* CvsWallet custom elements bundle */

import type { Components, JSX } from "../types/components";

interface CvsAddACard extends Components.CvsAddACard, HTMLElement {}
export const CvsAddACard: {
  prototype: CvsAddACard;
  new (): CvsAddACard;
};

interface CvsAddcardForm extends Components.CvsAddcardForm, HTMLElement {}
export const CvsAddcardForm: {
  prototype: CvsAddcardForm;
  new (): CvsAddcardForm;
};

interface CvsCardAuth extends Components.CvsCardAuth, HTMLElement {}
export const CvsCardAuth: {
  prototype: CvsCardAuth;
  new (): CvsCardAuth;
};

interface CvsCardManagement extends Components.CvsCardManagement, HTMLElement {}
export const CvsCardManagement: {
  prototype: CvsCardManagement;
  new (): CvsCardManagement;
};

interface CvsCardManagementTile extends Components.CvsCardManagementTile, HTMLElement {}
export const CvsCardManagementTile: {
  prototype: CvsCardManagementTile;
  new (): CvsCardManagementTile;
};

interface CvsCardSummary extends Components.CvsCardSummary, HTMLElement {}
export const CvsCardSummary: {
  prototype: CvsCardSummary;
  new (): CvsCardSummary;
};

interface CvsConfirmPayment extends Components.CvsConfirmPayment, HTMLElement {}
export const CvsConfirmPayment: {
  prototype: CvsConfirmPayment;
  new (): CvsConfirmPayment;
};

interface CvsContainer extends Components.CvsContainer, HTMLElement {}
export const CvsContainer: {
  prototype: CvsContainer;
  new (): CvsContainer;
};

interface CvsEditcardForm extends Components.CvsEditcardForm, HTMLElement {}
export const CvsEditcardForm: {
  prototype: CvsEditcardForm;
  new (): CvsEditcardForm;
};

interface CvsSelectPayment extends Components.CvsSelectPayment, HTMLElement {}
export const CvsSelectPayment: {
  prototype: CvsSelectPayment;
  new (): CvsSelectPayment;
};

interface CvsSelectPaymentForm extends Components.CvsSelectPaymentForm, HTMLElement {}
export const CvsSelectPaymentForm: {
  prototype: CvsSelectPaymentForm;
  new (): CvsSelectPaymentForm;
};

interface CvsWallet extends Components.CvsWallet, HTMLElement {}
export const CvsWallet: {
  prototype: CvsWallet;
  new (): CvsWallet;
};

interface DisplayFunds extends Components.DisplayFunds, HTMLElement {}
export const DisplayFunds: {
  prototype: DisplayFunds;
  new (): DisplayFunds;
};

interface TestWallet extends Components.TestWallet, HTMLElement {}
export const TestWallet: {
  prototype: TestWallet;
  new (): TestWallet;
};

interface WalletWrapper extends Components.WalletWrapper, HTMLElement {}
export const WalletWrapper: {
  prototype: WalletWrapper;
  new (): WalletWrapper;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
