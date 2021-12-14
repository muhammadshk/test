import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-6c675c57.js';
import { c as create, a as create$1, b as create$2, d as create$3 } from './index-e4de8afa.js';
import { i as isProd, C as CvsData } from './cvsData-1eeb4129.js';
import './_commonjsHelpers-2088bffa.js';

const REGEX = {
  ZIPCODE: /^[0-9]*$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  CITY: /^[a-zA-ZÀ-ÿ0-9_,.\-`‘’' ]*$/,
  ADDRESS: /^[a-zA-ZÀ-ÿ0-9_\-` ]*$/,
  NAME: /^[a-zA-ZÀ-ÿ0-9_,.\-`‘’' ]*$/
};
class AddCardData {
}
AddCardData.initialValues = {
  cardType: "CC",
  fName: "",
  mName: "",
  lName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  authorization: false
};
AddCardData.validationSchema = () => {
  const { errorLabels: e } = AddCardData;
  return create().shape({
    cardType: create$1().oneOf(["FSA", "CC"]).required(),
    fName: create$2().required(e.fName[0]).matches(REGEX.ALPHANUMERIC, e.fName[1]),
    mName: create$2().notRequired(),
    lName: create$2().required(e.lName[0]).matches(REGEX.ALPHANUMERIC, e.lName[1]),
    address1: create$2().required(e.address1[0]).matches(REGEX.ADDRESS, e.address1[1]),
    address2: create$2().notRequired(),
    city: create$2().required(e.city[0]).matches(REGEX.CITY, e.city[1]),
    state: create$2().required(e.state[0]),
    zip: create$2().required(e.zip[0]).matches(REGEX.ZIPCODE, e.zip[1]),
    authorization: create$3().oneOf([true], e.authorization[0])
  });
};
AddCardData.labels = {
  cardType: "Card Type",
  fName: "First name",
  mName: "Middle initial (optional)",
  lName: "Last name",
  address1: "Street address",
  address2: "Unit, apt, etc. (optional)",
  city: "City",
  state: "State",
  zip: "ZIP code",
  authorization: "Yes, I have read and accept the Authorization to Store and Use Credit Card for Future Services"
};
AddCardData.errorLabels = {
  fName: ["Enter a first name", "Enter a valid first name"],
  lName: ["Enter a last name", "Enter a valid last name"],
  address1: ["Enter a street address", "Enter a valid street address"],
  city: ["Enter a city", "Enter a valid city"],
  state: ["Select a state"],
  zip: ["Enter a ZIP code", "Enter a valid ZIP code"],
  authorization: ["Accept the legal authorization"]
};
AddCardData.vantivConfig = {
  paypageId: isProd() ? "Ct9F6zAdMcrx5w8L" : "n7tkqZp253hRLGJs",
  style: "leanCheckoutVantiv6",
  reportGroup: "eClinic",
  timeout: 5000,
  div: "eProtect",
  height: 180,
  callback: (res) => window.eProtectCB(res),
  inputsEmptyCallback: (res) => window.eProtectInputsEmptyCB(res),
  showCvv: true,
  months: {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  },
  numYears: 10,
  tooltipText: "A CVV is the 3 digit code on the back of your Visa, MasterCard and Discover or a 4 digit code on the front of your American Express",
  tabIndex: {
    accountNumber: 1,
    expMonth: 2,
    expYear: 3,
    cvv: 4
  },
  placeholderText: {
    cvv: "CVV",
    accountNumber: "Credit/Debit number"
  },
  enhancedUxFeatures: {
    inlineFieldValidations: true
  }
};
AddCardData.states = [
  "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UM",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY"
];

const cvsAddcardFormCss = ":host{display:block}.form-container{width:100%;margin:0}h2{font-size:1.125rem;font-family:\"Helvetica\", \"Arial\", sans-serif}.billing-address-heading{margin-top:0;margin-bottom:15px}.cvs-text-input input{width:100%}.input-group select{width:140px}#zip-code{width:140px;margin-bottom:40px}p{line-height:1.25rem;font-size:0.875rem;font-family:\"Helvetica\", \"Arial\", sans-serif}.input-group{display:block;justify-content:space-between;margin-bottom:22px}fieldset.input-group{margin-bottom:12px}.checkbox{width:286px}.button{margin-bottom:10px;height:44px;border-radius:8px;display:flex;justify-content:center;align-items:center;background-color:#cc0000;text-decoration:none;font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:14px;font-weight:bold;width:100%;cursor:pointer}.primary{border:0;background-color:#cc0000;box-shadow:inset 0 -2px 0 0 #a50000, 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);color:white}.cancel-add{display:block;font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:15px;color:#333;line-height:18px;margin-top:23px;margin-bottom:56px;text-align:center;text-decoration:underline}#formInst{margin-bottom:30px}cvs-fieldset.authorization{margin-bottom:26px}cvs-fieldset.authorization legend{display:none}cvs-fieldset.authorization fieldset{margin:0}cvs-fieldset.authorization .checkbox{margin-bottom:0}cvs-fieldset.authorization .checkbox label{margin-top:11px;padding-left:0;line-height:1.3125rem}cvs-fieldset.authorization .checkbox label:after{left:0.3rem}cvs-fieldset.authorization cvs-checkbox.has-error label{padding-bottom:8px}cvs-fieldset.authorization cvs-checkbox.has-error input:not(:checked)+label:before{border:2px solid #c00;background-color:#fae6e6}cvs-fieldset.authorization .checkbox input:focus+label{outline-offset:0}";

const CvsAddcardForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardAdded = createEvent(this, "cardAdded", 7);
    this.isValidating = createEvent(this, "isValidating", 7);
    this.cancelRedirect = createEvent(this, "cancelRedirect", 7);
    /**
     * boolean to control which "success" event is acted upon
     */
    this.cancelModalActive = false;
    this.formValid = false;
    this.formValues = AddCardData.initialValues;
    this.apiFailure = false;
    this.cardAddedHandler = () => {
      this.cardAdded.emit();
    };
    this.isValidatingHandler = (isValidating) => {
      this.isValidating.emit({ isValidating });
    };
    /**
     * Calls add-card API
     * @param vantivRes @private @readonly
     * @returns Promise<void>
     */
    this.addCard = async (vantivRes) => {
      var _a;
      const { token, formValues: values, formValid, cardAddedHandler, isValidatingHandler } = this;
      if (!formValid) {
        isValidatingHandler(false);
        return;
      }
      const billingInfo = {
        ccNum: vantivRes.paypageRegistrationId,
        ccExpDate: btoa(`${vantivRes.expMonth}${vantivRes.expYear}`),
        ccType: vantivRes.type,
        firstName: values.fName,
        lastName: values.lName,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        state: values.state,
        zip: values.zip,
        country: "US",
        makeDefaultFlag: "N",
        saveCardForFutureFlag: "N",
        isFsaCard: values.cardType === "FSA" ? "Y" : "N",
        token: "true",
        accountRangeId: (vantivRes === null || vantivRes === void 0 ? void 0 : vantivRes.accountRangeId) || null,
        bin: (vantivRes === null || vantivRes === void 0 ? void 0 : vantivRes.bin) || "",
        paymentType: "creditCard",
        isCCLowToken: "Y"
      };
      const id = decodeURIComponent(token) === token ? encodeURIComponent(token) : token;
      try {
        const res = await CvsData.addUserCard(id, billingInfo);
        isValidatingHandler(false);
        if (((_a = res === null || res === void 0 ? void 0 : res.header) === null || _a === void 0 ? void 0 : _a.statusDesc) === "SUCCESS") {
          cardAddedHandler();
        }
        else {
          this.apiFailure = true;
        }
      }
      catch (error) {
        this.apiFailure = true;
        console.error(error);
      }
    };
    /**
     * @param res @private @readonly
     * Callback triggered by eProtect/Vantiv
     */
    this.eProtectCB = (res) => {
      if (res.timeout)
        this.apiFailure = true;
      if (res.response === "870") {
        this.addCard(res);
      }
      else {
        //TODO: Vantiv error handling. TBD w/ UX/a11y
        this.apiFailure = true; // TODO: remove after implementing Vantiv error handling
        this.isValidatingHandler(false);
      }
    };
    this.cancelRedirectHandler = () => {
      this.cancelModalActive = false;
      this.cancelRedirect.emit();
    };
    /**
     * @private: openCancelModal
     **/
    this.openCancelModal = (e) => {
      e.preventDefault();
      this.cancelModalActive = true;
      const modal = document.createElement("cvs-modal");
      const modalData = {
        type: "column",
        title: '<span class="bold black">You have unsaved changes</span>',
        subText: '<p class="">Are you sure you want to delete the changes to your payment method?</p>',
        buttons: {
          primary: {
            text: "Yes, delete changes",
            customEvent: "discard"
          },
          secondary: {
            text: "Continue editing card details"
          }
        },
        maxWidth: 320
      };
      modal.data = modalData;
      document.body.appendChild(modal);
    };
    /**
     * Builds props for cvs-alert-banner
     * @param props @returns @private @readonly
     */
    this.buildAlertBannerProps = (props) => {
      const elementIdArray = [];
      this.el.querySelectorAll("input").forEach((inputEl) => elementIdArray.push(inputEl.id));
      this.el.querySelectorAll("select").forEach((selectEl) => elementIdArray.push(selectEl.id));
      const actions = Object.entries(props.errors)
        .filter(([key, val]) => val.length > 0 && elementIdArray.find((str) => str.includes(key)))
        .map(([key, val]) => ({
        "link-text": val,
        "link-input-id": elementIdArray.find((str) => str.includes(key))
      }));
      return {
        alertType: "error",
        targetComponent: {
          component: {
            "name": this.el.tagName.toLowerCase(),
            "id": this.el.id,
            "is-shadow": !!this.el.shadowRoot
          }
        },
        actions
      };
    };
    /**
     * Suppresses non-numeric keys when typing in numeric form el
     * @private @readonly @param event
     */
    this.numericOnly = (event) => {
      const regex = /[0-9]/;
      if (!regex.test(event.key))
        event.preventDefault();
    };
    /**
     * Initiates Vantiv call
     * @returns Promise<void> @private @readonly
     */
    this.validateCard = () => new Promise((resolve, reject) => {
      try {
        this.isValidatingHandler(true);
        const message = { id: String(Date.now()) };
        resolve(eProtectiframeClient.getPaypageRegistrationId(message));
      }
      catch (error) {
        this.isValidatingHandler(false);
        this.apiFailure = true;
        console.error(error);
        reject(error);
      }
    });
    /**
     * Triggers submit process
     * @private @readonly
     */
    this.triggerSubmit = async () => {
      this.formValid = false;
      this.apiFailure = false;
      await this.validateCard();
    };
    /**
     * Form submit handler
     * @param event @private @readonly
     */
    this.handleSubmit = (event) => {
      const { values, actions: { setSubmitting } } = event.detail;
      this.formValid = true;
      this.formValues = values;
      setSubmitting(false);
    };
    /**
     * Renders the form's JSX
     * @param props @returns JSX.Element
     */
    this.renderer = (props) => {
      const { formProps, checkboxProps, groupProps, labelProps, radioProps, inputProps, selectProps, errors } = props;
      const { states, labels, vantivConfig } = AddCardData;
      const hasErrors = Object.values(errors).some((val) => val.length > 0);
      return (h("div", { class: "form-container" }, !hasErrors && this.apiFailure && (h("cvs-alert-banner", { alertType: "error" }, h("h2", { slot: "title" }, "We're sorry"), h("div", { slot: "description" }, h("p", null, "We can\u2019t complete your request right now due to technical issues."), h("p", null, "Please try again")))), hasErrors && (h("cvs-alert-banner", Object.assign({}, this.buildAlertBannerProps(props)), h("h2", { slot: "title" }, "Info missing"), h("span", { slot: "description" }, "Please correct these errors."))), this.noCard === "true" && !hasErrors && !this.apiFailure && (h("cvs-alert-banner", { alertType: "warning" }, h("h2", { slot: "title" }, "Payment method needed"), h("div", { slot: "description" }, h("p", null, "There is no payment information on file for your account. Please add a new payment method.")))), this.noCard !== "true" && this.noValidCard === "true" && !hasErrors && !this.apiFailure && (h("cvs-alert-banner", { alertType: "warning" }, h("h2", { slot: "title" }, "Expired cards"), h("div", { slot: "description" }, h("p", null, "There is no valid payment information on file for your account. Please add a new (or update an expired) payment method to submit your payment.")))), h("p", { id: "formInst" }, "All fields required unless marked optional."), h("form", Object.assign({}, formProps, { noValidate: true, "aria-describedby": "formInst" }), h("section", { role: "group" }, h("h2", null, "Card Information"), h("cvs-fieldset", { legendText: labels.cardType, fieldsetProps: groupProps("cardType") }, h("cvs-radio-button", { label: "Credit card", radioProps: radioProps("cardType", "CC"), labelProps: labelProps("cardType", "CC") }), h("cvs-radio-button", { label: "FSA/HSA", radioProps: radioProps("cardType", "FSA"), labelProps: labelProps("cardType", "FSA") })), h("cvs-vantiv", { slot: "vantiv", vantivConfig: vantivConfig }), " "), h("section", { role: "group" }, h("h2", { class: "billing-address-heading" }, "Billing address"), h("cvs-text-input", { groupProps: groupProps("fName"), inputProps: Object.assign(Object.assign({}, inputProps("fName")), { autoComplete: "given-name", maxlength: 33 }), labelProps: labelProps("fName"), errorText: errors.fName, label: labels.fName, required: true }), h("cvs-text-input", { groupProps: groupProps("mName"), inputProps: Object.assign(Object.assign({}, inputProps("mName")), { autoComplete: "additional-name", maxlength: 33 }), labelProps: labelProps("mName"), errorText: errors.mName, label: labels.mName }), h("cvs-text-input", { groupProps: groupProps("lName"), inputProps: Object.assign(Object.assign({}, inputProps("lName")), { autoComplete: "family-name", maxlength: 33 }), labelProps: labelProps("lName"), errorText: errors.lName, label: labels.lName, required: true }), h("cvs-text-input", { groupProps: groupProps("address1"), inputProps: Object.assign(Object.assign({}, inputProps("address1")), { autoComplete: "address-line1", maxlength: 35 }), labelProps: labelProps("address1"), errorText: errors.address1, label: labels.address1, required: true }), h("cvs-text-input", { groupProps: groupProps("address2"), inputProps: Object.assign(Object.assign({}, inputProps("address2")), { autoComplete: "address-line2", maxlength: 35 }), labelProps: labelProps("address2"), errorText: errors.address2, label: labels.address2 }), h("cvs-text-input", { groupProps: groupProps("city"), inputProps: Object.assign(Object.assign({}, inputProps("city")), { autoComplete: "address-level2" }), labelProps: labelProps("city"), errorText: errors.city, label: labels.city, required: true }), h("cvs-select", { label: labels.state, placeholder: "Select", errorText: errors.state, groupProps: groupProps("state"), labelProps: labelProps("state"), selectProps: Object.assign(Object.assign({}, selectProps("state")), { autoComplete: "address-level1" }), states: states, required: true }), h("cvs-text-input", { id: "zip-code", groupProps: groupProps("zip"), inputProps: Object.assign(Object.assign({}, inputProps("zip")), { onKeyPress: this.numericOnly, size: 5, maxlength: 5, pattern: "[0-9]{5}", inputMode: "numeric", autoComplete: "postal-code" }), labelProps: labelProps("zip"), errorText: errors.zip, label: labels.zip, required: true })), h("section", { role: "group" }, h("h2", null, "Legal authorization"), h("p", { id: "authInst" }, "Note: By entering your personal and payment information through your CVS.com account you authorize CVS Pharmacy on behalf of MinuteClinic to store this information to be used for any remaining balance after your insurance plan has paid its portion of your visit."), h("cvs-card-auth", null), h("cvs-fieldset", { class: "authorization", legendText: "", fieldsetProps: groupProps("authorization"), errorText: errors.authorization }, h("cvs-checkbox", { class: "checkbox", label: labels.authorization, groupProps: groupProps("authorization"), checkboxProps: Object.assign(Object.assign({}, checkboxProps("authorization")), { "aria-describedby": "authInst" }), labelProps: labelProps("authorization") }))), h("button", { class: "button primary", onClick: this.triggerSubmit }, "Add payment method")), h("a", { class: "cancel-add", href: "javascript:void(0)", onClick: this.openCancelModal }, "Cancel")));
    };
  }
  componentWillLoad() {
    window.eProtectCB = this.eProtectCB;
  }
  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  cancelAddCard(event) {
    event.preventDefault();
    if (this.cancelModalActive) {
      if (event.detail === "success") {
        this.cancelRedirectHandler();
      }
      else {
        setTimeout(() => {
          this.cancelModalActive = false;
          const modal = document.getElementsByTagName("cvs-modal");
          if ((modal === null || modal === void 0 ? void 0 : modal.length) === 1) {
            modal[0].remove();
          }
        }, 0);
      }
    }
  }
  render() {
    const { renderer } = this;
    const { initialValues, validationSchema } = AddCardData;
    return (h(Host, { id: "add-card" }, h("cvs-form", { initialValues: initialValues, validationSchema: validationSchema(), renderer: renderer, validateOnBlur: false, validateOnInput: false, onSubmit: this.handleSubmit }, h("slot", { name: "vantiv", slot: "vantiv-form" }))));
  }
  get el() { return getElement(this); }
};
CvsAddcardForm.style = cvsAddcardFormCss;

export { CvsAddcardForm as cvs_addcard_form };
