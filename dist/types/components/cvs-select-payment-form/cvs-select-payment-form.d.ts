import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
import { EventEmitter } from "../../stencil-public-runtime";
export interface AlertBannerProps {
  alertType: "error";
  actions: Action[];
}
export interface Action {
  "link-text": string;
  "link-URL": string;
}
export interface CvsSelectPaymentFormProps {
  subText?: string;
  userId: string;
  validCards?: CvsCardSummaryProps[];
  myChartUrl?: string;
}
export declare class CvsSelectPaymentForm {
  selectedCardError: string;
  apiFailure: boolean;
  /**
   * url to be passed to error banner to redirect to mychart
   */
  readonly myChartUrl?: string;
  /**
   * legend to display in the select card form
   */
  readonly subText?: string;
  /**
   * encrypted user id
   */
  readonly userId?: string;
  /**
   * show continue button
   * default to true
   */
  readonly showContinue?: boolean;
  /**
   * list of valid cards to display
   */
  readonly validCards?: CvsCardSummaryProps[];
  /**
   * event emitter
   * handles redirect for user after card selection
   * @param event @private @readonly
   */
  cardSelect: EventEmitter;
  private readonly cardSelectedHandler;
  /**
   *
   * @param event
   */
  cardChangeEvent: EventEmitter;
  private readonly handleCardChange;
  /**
   * Form submit handler
   * @param event @private @readonly
   */
  private readonly handleSubmit;
  /**
   * Renders the form's JSX
   * @param props
   * @returns
   */
  private readonly renderer;
  render(): any;
}
