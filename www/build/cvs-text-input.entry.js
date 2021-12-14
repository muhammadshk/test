import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';
import { g as getComponentId } from './uuidUtils-16ba74d9.js';
import { b as getHelperId, a as getAriaDescribedBy, g as getErrorId } from './textFormElements-b92e46f9.js';

const cvsTextInputCss = "cvs-text-input{margin-bottom:22px;display:block}cvs-text-input label{display:block;font-family:\"Helvetica\";font-size:0.875rem;font-weight:bold;line-height:1.3em;color:#262626;margin-bottom:0.5rem}cvs-text-input input{font-family:\"Helvetica\";font-size:0.875rem;line-height:1.3em;font-weight:regular;color:#262626;border-width:0.125rem;border-style:solid;border-color:#262626;border-radius:0.25rem;background-color:#fff;width:16.25rem;height:2.75rem;padding-left:1rem;box-sizing:border-box;cursor:pointer}cvs-text-input .helperText{color:#262626;font-family:\"Helvetica\";font-size:0.875rem;font-weight:regular;line-height:1.5em;margin-bottom:0.5rem}cvs-text-input input:focus{outline-width:0.1875rem;outline-style:solid;outline-color:#097fad;outline-offset:0.25rem}cvs-text-input input[disabled]{background-color:#ccc;border-color:#737373;border-radius:0.25rem;color:#474747;font-family:\"Helvetica\";font-size:0.875rem;line-height:1.3em;font-weight:regular;opacity:1}cvs-text-input label.disabled{color:#474747;font-family:\"Helvetica\";font-size:0.875rem;line-height:1.3em;font-weight:bold}cvs-text-input input.error-input{border-width:0.1875rem;border-style:solid;border-color:#d53220;border-radius:0.25rem;margin-bottom:0.5rem}cvs-text-input .textinput-error{color:#d53220;font-size:0.875rem;font-weight:bold;font-family:\"Helvetica\";line-height:1.3em;display:flex}.error .textinput-error svg{margin-right:0.5rem;position:relative;top:0.02rem;height:1rem;width:1rem}.error .textinput-error .form-error-icon{fill:#d53220}";

const CvsTextInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.elementChange = createEvent(this, "elementChange", 7);
    this.elementKeyPress = createEvent(this, "elementKeyPress", 7);
    this.elementKeyDown = createEvent(this, "elementKeyDown", 7);
    this.elementKeyUp = createEvent(this, "elementKeyUp", 7);
    this.elementFocus = createEvent(this, "elementFocus", 7);
    this.elementBlur = createEvent(this, "elementBlur", 7);
    /**
     * Toggle for disabled state
     */
    this.disabled = false;
    /**
     * Specifies that the user is required to input a value before submitting the form
     */
    this.required = false;
    this.handleChange = (event) => {
      this.elementChange.emit(event);
    };
    this.handleKeyPress = (event) => {
      this.elementKeyPress.emit(event);
    };
    this.handleKeyDown = (event) => {
      this.elementKeyDown.emit(event);
    };
    this.handleKeyUp = (event) => {
      this.elementKeyUp.emit(event);
    };
    this.handleFocus = (event) => {
      this.elementFocus.emit(event);
    };
    this.handleBlur = (event) => {
      this.elementBlur.emit(event);
    };
  }
  render() {
    var _a;
    const { groupProps, labelProps, inputProps, elementId, label, helperText, required, dataTest, errorText, disabled } = this;
    const id = getComponentId(inputProps.id || elementId);
    return (h(Host, Object.assign({}, groupProps, { class: {
        "cvs-text-input": true,
        "disabled": disabled || false,
        "error": errorText
      } }), h("label", Object.assign({ class: `${disabled ? "disabled" : ""}` }, labelProps), label), helperText && (h("div", { id: getHelperId(id), class: "helperText" }, helperText)), h("input", Object.assign({ class: { "error-input": ((_a = this.errorText) === null || _a === void 0 ? void 0 : _a.length) > 0 }, disabled: disabled, "aria-required": required && "true", "aria-describedby": getAriaDescribedBy(helperText, errorText, id), "data-test": dataTest && `${dataTest}-input`, required: required, onChange: this.handleChange, onKeyPress: this.handleKeyPress, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onFocus: this.handleFocus, onBlur: this.handleBlur }, inputProps)), errorText && (h("cvs-form-error", { id: getErrorId(id), text: errorText, class: "textinput-error" }))));
  }
};
CvsTextInput.style = cvsTextInputCss;

export { CvsTextInput as cvs_text_input };
