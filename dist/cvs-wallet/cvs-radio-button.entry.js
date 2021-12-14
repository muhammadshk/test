import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';
import { g as getComponentId } from './uuidUtils-16ba74d9.js';

const cvsRadioButtonCss = "cvs-radio-button{display:block;position:relative;}cvs-radio-button input{cursor:pointer;height:1rem;margin:0;opacity:0;position:absolute;top:4px;width:1rem}cvs-radio-button input+label{display:inline-flex;position:relative;cursor:pointer;padding:0.8125rem;font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;font-weight:regular;color:#262626;line-height:1.3em}cvs-radio-button input+label:before{content:\"\";display:block;width:0.75rem;height:0.75rem;flex-shrink:0;border-width:0.125rem;border-style:solid;border-color:#262626;border-radius:100%;background-color:#fff;margin-right:1rem;transition:border 0.1s, background-color 0.1s;position:relative;top:0.03rem;box-sizing:content-box}cvs-radio-button input.error-border+label:before{border-color:#cc0000}cvs-radio-button input+label:after{content:\"\";display:block;position:absolute;opacity:0;transition:opacity 0.1s 0.05s;top:1.09rem;left:1.0625rem;background-color:#262626;width:0.5rem;height:0.5rem;border-radius:100%}cvs-radio-button input:focus+label{outline-width:0.1875rem;outline-style:solid;outline-color:#097fad;outline-offset:-0.1875rem}cvs-radio-button input:disabled+label{color:#474747;font-size:0.875rem;line-height:1.3em;font-weight:regular;font-family:\"Helvetica\", \"Arial\", sans-serif}cvs-radio-button input:disabled+label:before{background-color:#ccc;border-color:#737373}cvs-radio-button input:disabled+label:after{background-color:#737373}cvs-radio-button input:checked+label:after{opacity:1}cvs-radio-button input:focus:not(:checked,:disabled)+label:after{opacity:0.4}";

const CvsRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.elementChange = createEvent(this, "elementChange", 7);
    this.elementFocus = createEvent(this, "elementFocus", 7);
    this.elementBlur = createEvent(this, "elementBlur", 7);
    /**
     * Toggle for disabled state
     */
    this.disabled = false;
    /**
     * Toggle for checked state
     */
    this.checked = false;
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
    const { elementId, name, value, label, disabled, checked, describedby, dataTest, radioProps, labelProps, slotClass, errorDisplay } = this;
    const id = getComponentId(elementId);
    return (h(Host, null, h("input", Object.assign({ class: `cvs-radio-button ${errorDisplay ? "error-border" : ""}`, id: id, type: "radio", disabled: disabled, checked: checked, value: value, name: name, "aria-describedby": describedby, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, "data-test": dataTest !== undefined ? `${dataTest}-input` : null }, radioProps)), h("label", Object.assign({ id: `${id}-label`, htmlFor: id, "data-test": dataTest !== undefined ? `${dataTest}-label` : null }, labelProps, { class: slotClass }), label === undefined ? h("slot", null) : label)));
  }
};
CvsRadioButton.style = cvsRadioButtonCss;

export { CvsRadioButton as cvs_radio_button };
