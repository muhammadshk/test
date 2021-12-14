import { Component, Host, h, Prop, State, Event, EventEmitter } from "@stencil/core";
import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
export interface CvsSelectPaymentProps {
  userId: string;
  subText?: string;
  validCards?: CvsCardSummaryProps[];
  expiredCards?: CvsCardSummaryProps[];
}
@Component({
  tag: "cvs-select-payment",
  styleUrl: "cvs-select-payment.scss",
  shadow: true
})
export class CvsSelectPayment {
  /**
   * parsedData
   * @memberof CvsSelectPaymentForm
   * @type: cvsSelectPaymentProps
   */
  @State() parsedData: CvsSelectPaymentProps;
  /**
   * Previous Page Url to redirect on error to mychart
   */
  @Prop() readonly myChartUrl?: string;
  /**
   * show an error message if going to select-payment from manage-payment flow
   */
  @Prop() readonly correctFlow?: boolean;
  /**
   *
   */
  @Prop() readonly cardAdded?: boolean;
  /**
   * userId for api submission
   */
  @Prop() readonly userId: string;
  /**
   * legend to display in the select card form
   */
  @Prop() readonly subText?: string;
  /**
   * show continue button
   * default to true
   */
  @Prop() readonly showContinue?: boolean = true;
  /**
   * option to hide headers
   */
  @Prop() readonly hideHeader?: boolean = false;
  /**
   * text to display for add card
   */
  @Prop() readonly addCardText?: string;
  /**
   * list of valid cards to display
   */
  @Prop() readonly validCards: CvsCardSummaryProps[] | string;

  /**
   * list of expired cards to display
   */
  @Prop() readonly expiredCards: CvsCardSummaryProps[] | string;
  /**
   * event emitter
   * handles directing user to card management
   * @param event @private @readonly
   */
  @Event() routeToCardManagement: EventEmitter;
  private readonly routeToCardManagementHandler = () => {
    this.routeToCardManagement.emit();
  };
  /**
   * @public: componentWillLoad
   *
   * @description: Executed when the component first connected to DOM
   * @returns: void
   */
  public componentWillLoad() {
    this.parsedData = this.parseInputData();
  }
  /**
   * @private formatData
   * @description if the given object is string, returns the JSON object of the string
   * @returns: cvsCardSummaryProps[]
   */
  private formatData(data: string | CvsCardSummaryProps[]): CvsCardSummaryProps[] {
    let formattedData;
    if (typeof data === "string") {
      try {
        formattedData = JSON.parse(data);
      } catch {
        console.warn("Error in parsing the value of props of cvs-select-payment-form");
      }
    } else if (data !== undefined) {
      formattedData = data;
    }
    return formattedData;
  }
  /**
   * @private parseInputData
   * @description Executed when there is the change in the component property store.
   *   If the component is initilized through HTML the path prop will be a string.
   * @returns: CvsSelectPaymentFormProps
   */
  private parseInputData(): CvsSelectPaymentProps {
    return {
      userId: this.userId,
      subText: this.subText,
      validCards: this.formatData(this.validCards),
      expiredCards: this.formatData(this.expiredCards)
    };
  }

  render() {
    if (!this.correctFlow) {
      return (
        <Host>
          <cvs-alert-banner alertType="error">
            <h2 class="alert-banner-title" slot="title">
              Sorry!
            </h2>
            <span slot="description">You can't get to that page from here.</span>
          </cvs-alert-banner>
        </Host>
      );
    } else
      return (
        <Host>
          {this.cardAdded && (
            <cvs-alert-banner alertType="success">
              <h2 class="alert-banner-title" slot="title">
                Success
              </h2>
              <span slot="description">Your payment method has been added.</span>
            </cvs-alert-banner>
          )}
          {this?.parsedData?.validCards?.length === 0 && (
            <cvs-alert-banner alertType="warning">
              <h2 class="alert-banner-title" slot="title">
                Expired Cards
              </h2>
              <span slot="description">
                There is no valid payment information on file for your account. Please add a new (or
                update an expired) payment method to submit your payment.
              </span>
            </cvs-alert-banner>
          )}
          {this?.parsedData?.validCards?.length > 0 && (
            <cvs-select-payment-form
              myChartUrl={this.myChartUrl}
              subText={this.parsedData.subText}
              validCards={this.parsedData.validCards}
              userId={this.parsedData.userId}
              showContinue={this.showContinue}
            />
          )}
          <div class="add-card-container">
            {!this.hideHeader && <h2 class="select-h2">Add a payment method</h2>}
            <cvs-add-a-card addCardText={this.addCardText} />
          </div>
          {(this.parsedData?.validCards?.length > 0 || this.expiredCards?.length > 0) && (
            <div class="manage-payment-container">
              {!this.hideHeader && <h2 class="select-h2">Update payment methods</h2>}
              <a
                id="cvs-select-payment-link-manage-payment"
                href="javascript:void(0)"
                onClick={this.routeToCardManagementHandler}
              >
                Manage payment methods
              </a>
            </div>
          )}
          {this.parsedData?.expiredCards?.length > 0 && (
            <ul>
              {this.parsedData?.expiredCards?.map((card) => (
                <li tabIndex={0}>
                  <cvs-card-summary class="expired-card" {...card}></cvs-card-summary>
                </li>
              ))}
            </ul>
          )}
        </Host>
      );
  }
}
