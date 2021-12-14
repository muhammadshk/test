/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { ValidateEvent } from "./components/cvs-addcard-form/addcard-types";
import { iAnalytics } from "./global/types";
import { CvsCardDataProps } from "./components/cvs-card-management/cvs-card-management";
import { CvsCardSummaryProps } from "./components/cvs-card-summary/cvs-card-summary";
import { Address } from "./components/cvs-card-summary/cvs-card-summary";
import { EditCardValues, ValidateEvent as ValidateEvent1 } from "./components/cvs-editcard-form/editcard-types";
export namespace Components {
    interface CvsAddACard {
        /**
          * text to display for add card
         */
        "addCardText"?: string;
    }
    interface CvsAddcardForm {
        /**
          * noCard passed from url param
         */
        "noCard": string;
        /**
          * noValidCard passed from url param
         */
        "noValidCard": string;
        /**
          * userId token passed from url param
         */
        "token": string;
    }
    interface CvsCardAuth {
        /**
          * data to emit via EventEmitter
         */
        "analyticsModalData"?: {
    primary: iAnalytics;
    secondary: iAnalytics;
    dismiss: iAnalytics;
  };
    }
    interface CvsCardManagement {
        /**
          * text to display for add card
         */
        "addCardText"?: string;
        /**
          * display edit button
         */
        "allowEdit"?: boolean;
        /**
          * Indicates a new card was successfully added; display alert banner
         */
        "cardAdded": boolean;
        /**
          * list of expired cards to display
         */
        "expiredCards"?: CvsCardDataProps[] | string;
        /**
          * id of user cards
         */
        "userId": string;
        /**
          * list of valid cards to display
         */
        "validCards"?: CvsCardDataProps[] | string;
    }
    interface CvsCardManagementTile {
        /**
          * display edit button
         */
        "allowEdit"?: boolean;
        /**
          * card data to display
         */
        "card"?: CvsCardSummaryProps;
    }
    interface CvsCardSummary {
        /**
          * boolean to intimate whether the card is selected or not
         */
        "active"?: boolean;
        /**
          * billing address of the given card
         */
        "billingAddress"?: Address;
        /**
          * last 4 digits of the card number to display
         */
        "cardNum": string;
        /**
          * cardType: visa|mastercard|discover|amex etc
         */
        "cardType": string;
        /**
          * expiry date of the given card
         */
        "expDate": string;
        /**
          * boolean to intimate if its a valid card considering expiry date
         */
        "isValid"?: boolean;
        /**
          * boolean to show/hide full details (billing address, etc) for use in certain components
         */
        "showDetails"?: boolean;
    }
    interface CvsConfirmPayment {
        /**
          * where to go back to
         */
        "goBack": string;
        /**
          * if card was added
         */
        "selectSuccess": boolean;
    }
    interface CvsContainer {
        /**
          * Header Image Alt Tag
         */
        "headerImgAltTag"?: string;
        /**
          * URL with asset source
         */
        "headerImgUrl"?: string;
        /**
          * Page title
         */
        "pageTitle"?: string;
        /**
          * Previous Page Url
         */
        "prevPageCustomUrl"?: string;
        /**
          * Previous Page Text
         */
        "prevPageName": string;
        /**
          * If previous page should be there, fallbacks or not
         */
        "showPrevPage": boolean;
    }
    interface CvsEditcardForm {
        /**
          * editCard passed as prop which decides that the form will be using as edit payment card without vantiv or add payment option with vantiv but without hsa/fsa option
         */
        "editCard"?: EditCardValues | string;
        /**
          * noCard passed from url param
         */
        "noCard": string;
        /**
          * noValidCard passed from url param
         */
        "noValidCard": string;
        /**
          * userId token passed from url param
         */
        "token": string;
    }
    interface CvsSelectPayment {
        /**
          * text to display for add card
         */
        "addCardText"?: string;
        "cardAdded"?: boolean;
        /**
          * show an error message if going to select-payment from manage-payment flow
         */
        "correctFlow"?: boolean;
        /**
          * list of expired cards to display
         */
        "expiredCards": CvsCardSummaryProps[] | string;
        /**
          * option to hide headers
         */
        "hideHeader"?: boolean;
        /**
          * Previous Page Url to redirect on error to mychart
         */
        "myChartUrl"?: string;
        /**
          * show continue button default to true
         */
        "showContinue"?: boolean;
        /**
          * legend to display in the select card form
         */
        "subText"?: string;
        /**
          * userId for api submission
         */
        "userId": string;
        /**
          * list of valid cards to display
         */
        "validCards": CvsCardSummaryProps[] | string;
    }
    interface CvsSelectPaymentForm {
        /**
          * url to be passed to error banner to redirect to mychart
         */
        "myChartUrl"?: string;
        /**
          * show continue button default to true
         */
        "showContinue"?: boolean;
        /**
          * legend to display in the select card form
         */
        "subText"?: string;
        /**
          * encrypted user id
         */
        "userId"?: string;
        /**
          * list of valid cards to display
         */
        "validCards"?: CvsCardSummaryProps[];
    }
    interface CvsWallet {
    }
    interface DisplayFunds {
        "funds": number;
    }
    interface TestWallet {
        "earn": Function;
        "spend": Function;
    }
    interface WalletWrapper {
        "deposit": () => Promise<void>;
    }
}
declare global {
    interface HTMLCvsAddACardElement extends Components.CvsAddACard, HTMLStencilElement {
    }
    var HTMLCvsAddACardElement: {
        prototype: HTMLCvsAddACardElement;
        new (): HTMLCvsAddACardElement;
    };
    interface HTMLCvsAddcardFormElement extends Components.CvsAddcardForm, HTMLStencilElement {
    }
    var HTMLCvsAddcardFormElement: {
        prototype: HTMLCvsAddcardFormElement;
        new (): HTMLCvsAddcardFormElement;
    };
    interface HTMLCvsCardAuthElement extends Components.CvsCardAuth, HTMLStencilElement {
    }
    var HTMLCvsCardAuthElement: {
        prototype: HTMLCvsCardAuthElement;
        new (): HTMLCvsCardAuthElement;
    };
    interface HTMLCvsCardManagementElement extends Components.CvsCardManagement, HTMLStencilElement {
    }
    var HTMLCvsCardManagementElement: {
        prototype: HTMLCvsCardManagementElement;
        new (): HTMLCvsCardManagementElement;
    };
    interface HTMLCvsCardManagementTileElement extends Components.CvsCardManagementTile, HTMLStencilElement {
    }
    var HTMLCvsCardManagementTileElement: {
        prototype: HTMLCvsCardManagementTileElement;
        new (): HTMLCvsCardManagementTileElement;
    };
    interface HTMLCvsCardSummaryElement extends Components.CvsCardSummary, HTMLStencilElement {
    }
    var HTMLCvsCardSummaryElement: {
        prototype: HTMLCvsCardSummaryElement;
        new (): HTMLCvsCardSummaryElement;
    };
    interface HTMLCvsConfirmPaymentElement extends Components.CvsConfirmPayment, HTMLStencilElement {
    }
    var HTMLCvsConfirmPaymentElement: {
        prototype: HTMLCvsConfirmPaymentElement;
        new (): HTMLCvsConfirmPaymentElement;
    };
    interface HTMLCvsContainerElement extends Components.CvsContainer, HTMLStencilElement {
    }
    var HTMLCvsContainerElement: {
        prototype: HTMLCvsContainerElement;
        new (): HTMLCvsContainerElement;
    };
    interface HTMLCvsEditcardFormElement extends Components.CvsEditcardForm, HTMLStencilElement {
    }
    var HTMLCvsEditcardFormElement: {
        prototype: HTMLCvsEditcardFormElement;
        new (): HTMLCvsEditcardFormElement;
    };
    interface HTMLCvsSelectPaymentElement extends Components.CvsSelectPayment, HTMLStencilElement {
    }
    var HTMLCvsSelectPaymentElement: {
        prototype: HTMLCvsSelectPaymentElement;
        new (): HTMLCvsSelectPaymentElement;
    };
    interface HTMLCvsSelectPaymentFormElement extends Components.CvsSelectPaymentForm, HTMLStencilElement {
    }
    var HTMLCvsSelectPaymentFormElement: {
        prototype: HTMLCvsSelectPaymentFormElement;
        new (): HTMLCvsSelectPaymentFormElement;
    };
    interface HTMLCvsWalletElement extends Components.CvsWallet, HTMLStencilElement {
    }
    var HTMLCvsWalletElement: {
        prototype: HTMLCvsWalletElement;
        new (): HTMLCvsWalletElement;
    };
    interface HTMLDisplayFundsElement extends Components.DisplayFunds, HTMLStencilElement {
    }
    var HTMLDisplayFundsElement: {
        prototype: HTMLDisplayFundsElement;
        new (): HTMLDisplayFundsElement;
    };
    interface HTMLTestWalletElement extends Components.TestWallet, HTMLStencilElement {
    }
    var HTMLTestWalletElement: {
        prototype: HTMLTestWalletElement;
        new (): HTMLTestWalletElement;
    };
    interface HTMLWalletWrapperElement extends Components.WalletWrapper, HTMLStencilElement {
    }
    var HTMLWalletWrapperElement: {
        prototype: HTMLWalletWrapperElement;
        new (): HTMLWalletWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "cvs-add-a-card": HTMLCvsAddACardElement;
        "cvs-addcard-form": HTMLCvsAddcardFormElement;
        "cvs-card-auth": HTMLCvsCardAuthElement;
        "cvs-card-management": HTMLCvsCardManagementElement;
        "cvs-card-management-tile": HTMLCvsCardManagementTileElement;
        "cvs-card-summary": HTMLCvsCardSummaryElement;
        "cvs-confirm-payment": HTMLCvsConfirmPaymentElement;
        "cvs-container": HTMLCvsContainerElement;
        "cvs-editcard-form": HTMLCvsEditcardFormElement;
        "cvs-select-payment": HTMLCvsSelectPaymentElement;
        "cvs-select-payment-form": HTMLCvsSelectPaymentFormElement;
        "cvs-wallet": HTMLCvsWalletElement;
        "display-funds": HTMLDisplayFundsElement;
        "test-wallet": HTMLTestWalletElement;
        "wallet-wrapper": HTMLWalletWrapperElement;
    }
}
declare namespace LocalJSX {
    interface CvsAddACard {
        /**
          * text to display for add card
         */
        "addCardText"?: string;
        /**
          * onClick notify next.js app to router.push() to appropriate add-card page
         */
        "onRouteToAddCard"?: (event: CustomEvent<any>) => void;
    }
    interface CvsAddcardForm {
        /**
          * noCard passed from url param
         */
        "noCard": string;
        /**
          * noValidCard passed from url param
         */
        "noValidCard": string;
        /**
          * onClick notify next.js app to router.push() to appropriate add-card page
         */
        "onCancelRedirect"?: (event: CustomEvent<any>) => void;
        /**
          * Custom event emitted when card successfully added
          * @emits string
         */
        "onCardAdded"?: (event: CustomEvent<void>) => void;
        /**
          * Custom event emitter to indicate validation process and trigger loader status
          * @emits ValidateEvent
         */
        "onIsValidating"?: (event: CustomEvent<ValidateEvent>) => void;
        /**
          * userId token passed from url param
         */
        "token": string;
    }
    interface CvsCardAuth {
        /**
          * data to emit via EventEmitter
         */
        "analyticsModalData"?: {
    primary: iAnalytics;
    secondary: iAnalytics;
    dismiss: iAnalytics;
  };
        /**
          * @event setMyCVSStoreStatus
          * @description event emitter for setMyCVSStoreStatus event
         */
        "onCloseAuthModal"?: (event: CustomEvent<boolean>) => void;
    }
    interface CvsCardManagement {
        /**
          * text to display for add card
         */
        "addCardText"?: string;
        /**
          * display edit button
         */
        "allowEdit"?: boolean;
        /**
          * Indicates a new card was successfully added; display alert banner
         */
        "cardAdded"?: boolean;
        /**
          * list of expired cards to display
         */
        "expiredCards"?: CvsCardDataProps[] | string;
        /**
          * id of user cards
         */
        "userId"?: string;
        /**
          * list of valid cards to display
         */
        "validCards"?: CvsCardDataProps[] | string;
    }
    interface CvsCardManagementTile {
        /**
          * display edit button
         */
        "allowEdit"?: boolean;
        /**
          * card data to display
         */
        "card"?: CvsCardSummaryProps;
        /**
          * @event deleteCard
          * @description event emitter for deleteCard event
         */
        "onHandleDeleteEvent"?: (event: CustomEvent<CvsCardSummaryProps>) => void;
        /**
          * @event editCard
          * @description event emitter for editCard event
         */
        "onHandleEditEvent"?: (event: CustomEvent<CvsCardSummaryProps>) => void;
    }
    interface CvsCardSummary {
        /**
          * boolean to intimate whether the card is selected or not
         */
        "active"?: boolean;
        /**
          * billing address of the given card
         */
        "billingAddress"?: Address;
        /**
          * last 4 digits of the card number to display
         */
        "cardNum": string;
        /**
          * cardType: visa|mastercard|discover|amex etc
         */
        "cardType": string;
        /**
          * expiry date of the given card
         */
        "expDate": string;
        /**
          * boolean to intimate if its a valid card considering expiry date
         */
        "isValid"?: boolean;
        /**
          * boolean to show/hide full details (billing address, etc) for use in certain components
         */
        "showDetails"?: boolean;
    }
    interface CvsConfirmPayment {
        /**
          * where to go back to
         */
        "goBack": string;
        /**
          * event to tell next app to router.push back after payment selected
         */
        "onGoBackButton"?: (event: CustomEvent<any>) => void;
        /**
          * if card was added
         */
        "selectSuccess"?: boolean;
    }
    interface CvsContainer {
        /**
          * Header Image Alt Tag
         */
        "headerImgAltTag"?: string;
        /**
          * URL with asset source
         */
        "headerImgUrl"?: string;
        /**
          * Page title
         */
        "pageTitle"?: string;
        /**
          * Previous Page Url
         */
        "prevPageCustomUrl"?: string;
        /**
          * Previous Page Text
         */
        "prevPageName"?: string;
        /**
          * If previous page should be there, fallbacks or not
         */
        "showPrevPage"?: boolean;
    }
    interface CvsEditcardForm {
        /**
          * editCard passed as prop which decides that the form will be using as edit payment card without vantiv or add payment option with vantiv but without hsa/fsa option
         */
        "editCard"?: EditCardValues | string;
        /**
          * noCard passed from url param
         */
        "noCard": string;
        /**
          * noValidCard passed from url param
         */
        "noValidCard": string;
        /**
          * onClick notify next.js app to router.push() to appropriate edit-card page
         */
        "onCancelRedirect"?: (event: CustomEvent<any>) => void;
        /**
          * event emitter fires when errors are present in form
         */
        "onFormErrorEvt"?: (event: CustomEvent<any>) => void;
        /**
          * @event editCard
          * @description event emitter for editCard event
         */
        "onHandleAddEvent"?: (event: CustomEvent<any>) => void;
        /**
          * @event editCard
          * @description event emitter for editCard event
         */
        "onHandleEditEvent"?: (event: CustomEvent<EditCardValues>) => void;
        /**
          * Custom event emitter to indicate validation process and trigger loader status
          * @emits ValidateEvent
         */
        "onIsValidating"?: (event: CustomEvent<ValidateEvent>) => void;
        /**
          * userId token passed from url param
         */
        "token": string;
    }
    interface CvsSelectPayment {
        /**
          * text to display for add card
         */
        "addCardText"?: string;
        "cardAdded"?: boolean;
        /**
          * show an error message if going to select-payment from manage-payment flow
         */
        "correctFlow"?: boolean;
        /**
          * list of expired cards to display
         */
        "expiredCards"?: CvsCardSummaryProps[] | string;
        /**
          * option to hide headers
         */
        "hideHeader"?: boolean;
        /**
          * Previous Page Url to redirect on error to mychart
         */
        "myChartUrl"?: string;
        /**
          * event emitter handles directing user to card management
          * @param event
          * @private 
          * @readonly
         */
        "onRouteToCardManagement"?: (event: CustomEvent<any>) => void;
        /**
          * show continue button default to true
         */
        "showContinue"?: boolean;
        /**
          * legend to display in the select card form
         */
        "subText"?: string;
        /**
          * userId for api submission
         */
        "userId"?: string;
        /**
          * list of valid cards to display
         */
        "validCards"?: CvsCardSummaryProps[] | string;
    }
    interface CvsSelectPaymentForm {
        /**
          * url to be passed to error banner to redirect to mychart
         */
        "myChartUrl"?: string;
        /**
          * @param event
         */
        "onCardChangeEvent"?: (event: CustomEvent<any>) => void;
        /**
          * event emitter handles redirect for user after card selection
          * @param event
          * @private 
          * @readonly
         */
        "onCardSelect"?: (event: CustomEvent<any>) => void;
        /**
          * show continue button default to true
         */
        "showContinue"?: boolean;
        /**
          * legend to display in the select card form
         */
        "subText"?: string;
        /**
          * encrypted user id
         */
        "userId"?: string;
        /**
          * list of valid cards to display
         */
        "validCards"?: CvsCardSummaryProps[];
    }
    interface CvsWallet {
    }
    interface DisplayFunds {
        "funds"?: number;
    }
    interface TestWallet {
        "earn"?: Function;
        "spend"?: Function;
    }
    interface WalletWrapper {
    }
    interface IntrinsicElements {
        "cvs-add-a-card": CvsAddACard;
        "cvs-addcard-form": CvsAddcardForm;
        "cvs-card-auth": CvsCardAuth;
        "cvs-card-management": CvsCardManagement;
        "cvs-card-management-tile": CvsCardManagementTile;
        "cvs-card-summary": CvsCardSummary;
        "cvs-confirm-payment": CvsConfirmPayment;
        "cvs-container": CvsContainer;
        "cvs-editcard-form": CvsEditcardForm;
        "cvs-select-payment": CvsSelectPayment;
        "cvs-select-payment-form": CvsSelectPaymentForm;
        "cvs-wallet": CvsWallet;
        "display-funds": DisplayFunds;
        "test-wallet": TestWallet;
        "wallet-wrapper": WalletWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cvs-add-a-card": LocalJSX.CvsAddACard & JSXBase.HTMLAttributes<HTMLCvsAddACardElement>;
            "cvs-addcard-form": LocalJSX.CvsAddcardForm & JSXBase.HTMLAttributes<HTMLCvsAddcardFormElement>;
            "cvs-card-auth": LocalJSX.CvsCardAuth & JSXBase.HTMLAttributes<HTMLCvsCardAuthElement>;
            "cvs-card-management": LocalJSX.CvsCardManagement & JSXBase.HTMLAttributes<HTMLCvsCardManagementElement>;
            "cvs-card-management-tile": LocalJSX.CvsCardManagementTile & JSXBase.HTMLAttributes<HTMLCvsCardManagementTileElement>;
            "cvs-card-summary": LocalJSX.CvsCardSummary & JSXBase.HTMLAttributes<HTMLCvsCardSummaryElement>;
            "cvs-confirm-payment": LocalJSX.CvsConfirmPayment & JSXBase.HTMLAttributes<HTMLCvsConfirmPaymentElement>;
            "cvs-container": LocalJSX.CvsContainer & JSXBase.HTMLAttributes<HTMLCvsContainerElement>;
            "cvs-editcard-form": LocalJSX.CvsEditcardForm & JSXBase.HTMLAttributes<HTMLCvsEditcardFormElement>;
            "cvs-select-payment": LocalJSX.CvsSelectPayment & JSXBase.HTMLAttributes<HTMLCvsSelectPaymentElement>;
            "cvs-select-payment-form": LocalJSX.CvsSelectPaymentForm & JSXBase.HTMLAttributes<HTMLCvsSelectPaymentFormElement>;
            "cvs-wallet": LocalJSX.CvsWallet & JSXBase.HTMLAttributes<HTMLCvsWalletElement>;
            "display-funds": LocalJSX.DisplayFunds & JSXBase.HTMLAttributes<HTMLDisplayFundsElement>;
            "test-wallet": LocalJSX.TestWallet & JSXBase.HTMLAttributes<HTMLTestWalletElement>;
            "wallet-wrapper": LocalJSX.WalletWrapper & JSXBase.HTMLAttributes<HTMLWalletWrapperElement>;
        }
    }
}