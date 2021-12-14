import { EventEmitter } from "../../stencil-public-runtime";
import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
export interface CvsSelectPaymentProps {
  userId: string;
  subText?: string;
  validCards?: CvsCardSummaryProps[];
  expiredCards?: CvsCardSummaryProps[];
}
export declare class CvsSelectPayment {
  /**
   * parsedData
   * @memberof CvsSelectPaymentForm
   * @type: cvsSelectPaymentProps
   */
  parsedData: CvsSelectPaymentProps;
  /**
   * Previous Page Url to redirect on error to mychart
   */
  readonly myChartUrl?: string;
  /**
   * show an error message if going to select-payment from manage-payment flow
   */
  readonly correctFlow?: boolean;
  /**
   *
   */
  readonly cardAdded?: boolean;
  /**
   * userId for api submission
   */
  readonly userId: string;
  /**
   * legend to display in the select card form
   */
  readonly subText?: string;
  /**
   * show continue button
   * default to true
   */
  readonly showContinue?: boolean;
  /**
   * option to hide headers
   */
  readonly hideHeader?: boolean;
  /**
   * text to display for add card
   */
  readonly addCardText?: string;
  /**
   * list of valid cards to display
   */
  readonly validCards: CvsCardSummaryProps[] | string;
  /**
   * list of expired cards to display
   */
  readonly expiredCards: CvsCardSummaryProps[] | string;
  /**
   * event emitter
   * handles directing user to card management
   * @param event @private @readonly
   */
  routeToCardManagement: EventEmitter;
  private readonly routeToCardManagementHandler;
  /**
   * @public: componentWillLoad
   *
   * @description: Executed when the component first connected to DOM
   * @returns: void
   */
  componentWillLoad(): void;
  /**
   * @private formatData
   * @description if the given object is string, returns the JSON object of the string
   * @returns: cvsCardSummaryProps[]
   */
  private formatData;
  /**
   * @private parseInputData
   * @description Executed when there is the change in the component property store.
   *   If the component is initilized through HTML the path prop will be a string.
   * @returns: CvsSelectPaymentFormProps
   */
  private parseInputData;
  render(): any;
}
