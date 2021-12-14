import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';
import { g as getComponentId } from './uuidUtils-16ba74d9.js';
import { g as getErrorId, a as getAriaDescribedBy } from './textFormElements-b92e46f9.js';

const cvsSelectCss = ":host{display:block}cvs-select label{display:block;font-family:\"Helvetica\";font-size:0.875rem;font-weight:bold;line-height:1.3em;color:#262626;margin-bottom:0.5rem}cvs-select .wrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start}cvs-select .wrapperInner{position:relative;display:flex;align-items:center}cvs-select select{border-radius:0.25rem;border-width:0.125rem;border-style:solid;border-color:#262626;width:100%;height:2.75rem;background-color:#fff;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;padding-left:1rem;padding-right:2.5rem;color:#262626;overflow:hidden;text-overflow:ellipsis;font-family:\"Helvetica\";font-size:0.875rem;line-height:1.5em;font-weight:regular;box-sizing:border-box;cursor:pointer}.selectCaret{content:\"\";display:block;position:absolute;transition:opacity 0.1s 0.05s;top:1rem;right:1.125rem;border-style:solid;border-color:#262626;width:0.4rem;height:0.4rem;border-width:0 0.125rem 0.125rem 0;transform:rotate(45deg);box-sizing:content-box}select:focus{outline-width:0.1875rem;outline-style:solid;outline-color:#097fad;outline-offset:0.25rem}.disabled select{background-color:#ccc;border-color:#737373;border-width:0.125rem;border-radius:0.25rem;color:#474747;font-family:\"Helvetica\";font-size:0.875rem;line-height:1.5em;font-weight:regular;opacity:1}.disabled label{font-family:\"Helvetica\";font-size:0.875rem;font-weight:bold;line-height:1.3em;color:#474747}.disabled .selectCaret{border-color:#737373}.error .wrapperInner{margin-bottom:0.5rem}.error select{border-width:0.1875rem;border-style:solid;border-color:#d53220}.error .select-error{color:#d53220;font-size:0.875rem;line-height:1.3em;font-weight:bold;font-family:\"Helvetica\";display:flex}.error .select-error .form-error-icon{fill:#d53220}.error .select-error svg{margin-right:0.5rem;position:relative;top:0.02rem;height:1rem;width:1rem}cvs-select select::-ms-expand{display:none}";

const CvsSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.elementChange = createEvent(this, "elementChange", 7);
    this.elementFocus = createEvent(this, "elementFocus", 7);
    this.elementBlur = createEvent(this, "elementBlur", 7);
    /**
     * Specifies that the user is required to select a value before submitting the form
     */
    this.required = false;
    /**
     * Placeholder option
     */
    this.placeholder = "Choose an option";
    /**
     * Toggle for disabled state
     */
    this.disabled = false;
    /**
     * Text for error message
     */
    this.errorText = "";
    /**
     * Identifier for testing purposes
     */
    this.dataTest = "";
    /**
     * Identifier for if autofocus on pageload
     */
    this.autoFocus = false;
    this.handleChange = (event) => {
      this.elementChange.emit(event);
    };
    this.handleFocus = (event) => {
      this.elementFocus.emit(event);
    };
    this.handleBlur = (event) => {
      this.elementBlur.emit(event);
    };
  }
  render() {
    const { elementId, label, placeholder, errorText, disabled, required, dataTest, form, autoFocus, labelProps, groupProps, selectProps, states } = this;
    const id = (selectProps === null || selectProps === void 0 ? void 0 : selectProps.id) || getComponentId(elementId);
    const errorId = getErrorId(id);
    return (h(Host, Object.assign({ class: {
        "cvs-text-input": true,
        "disabled": disabled || false,
        "error": errorText
      } }, groupProps), h("div", { class: `wrapper ${errorText.length > 0 ? "error" : ""}` }, h("label", Object.assign({}, labelProps, { id: `${id}-label`, htmlFor: id, "data-test": dataTest ? `${dataTest}-label` : null }), label), h("div", { class: "wrapperInner" }, h("select", Object.assign({ name: name, disabled: disabled, required: required, autoFocus: autoFocus, form: form, "aria-required": required ? "true" : null, "aria-describedby": getAriaDescribedBy(null, errorText, id), "data-test": dataTest ? `${dataTest}-select` : null, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur }, selectProps), h("option", { value: "" }, placeholder), states.map((stateItem) => (h("option", { value: stateItem }, stateItem)))), h("div", { class: "selectCaret" })), errorText && (h("cvs-form-error", { errorId: errorId, text: errorText, class: "select-error" })))));
  }
};
CvsSelect.style = cvsSelectCss;

export { CvsSelect as cvs_select };
