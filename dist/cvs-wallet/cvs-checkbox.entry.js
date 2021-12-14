import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';
import { g as getErrorId } from './textFormElements-b92e46f9.js';
import { g as getComponentId } from './uuidUtils-16ba74d9.js';

const cvsCheckboxCss = "cvs-checkbox{display:block;position:relative}cvs-checkbox input{cursor:pointer;height:1rem;margin:0;opacity:0;position:absolute;top:4px;width:1rem}cvs-checkbox input+label{display:inline-flex;position:relative;cursor:pointer;padding:0.8125rem 0;font-family:\"Helvetica\";color:#262626;font-size:0.875rem;line-height:1.3em;font-weight:regular}cvs-checkbox input+label:before{content:\"\";display:block;width:1.75rem;height:1.75rem;flex-shrink:0;background-color:#fff;border-width:0.125rem;border-style:solid;border-color:#262626;border-radius:0.125rem;margin-right:1rem;transition:border 0.1s, background-color 0.1s;position:relative;top:0.05rem;box-sizing:content-box}cvs-checkbox input.error-input+label:before{border-color:#c00;background-color:#fae6e6}cvs-checkbox input+label:after{content:\"\";display:block;position:absolute;opacity:0;transition:opacity 0.1s 0.05s;top:1.05rem;left:0.775rem;border-style:solid;border-color:#fff;width:0.25rem;height:1rem;border-width:0 0.225rem 0.225rem 0;transform:rotate(40deg);box-sizing:content-box}cvs-checkbox input:focus+label{outline-width:0.1875rem;outline-style:solid;outline-color:#097fad;outline-offset:-0.1875rem}cvs-checkbox input:disabled+label:before{background-color:#ccc;border-color:#737373}cvs-checkbox input:checked:not(:disabled)+label:before{border-color:#262626;background-color:#262626}cvs-checkbox input:checked+label:after{opacity:1}cvs-checkbox input:disabled+label{color:#474747;font-size:0.875rem;line-height:1.3em;font-weight:regular;font-family:\"Helvetica\"}cvs-checkbox input:disabled+label:after{border-color:#737373}cvs-checkbox input:focus:not(:checked,:disabled)+label:after{opacity:0.4}";

const CvsCheckbox = class {
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
    var _a, _b;
    const { elementId, name, value, label, disabled, checked, describedby, dataTest, groupProps, checkboxProps, labelProps } = this;
    const id = getComponentId(((_a = this.groupProps) === null || _a === void 0 ? void 0 : _a.id) || elementId);
    return (h(Host, Object.assign({ class: "cvs-checkbox" }, groupProps), h("input", Object.assign({ class: { "error-input": ((_b = this.errorText) === null || _b === void 0 ? void 0 : _b.length) > 0 }, id: id, type: "checkbox", checked: checked, disabled: disabled, name: name, value: value, "aria-describedby": describedby, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, "data-test": typeof dataTest === "string" ? `${dataTest}-input` : null }, checkboxProps)), h("label", Object.assign({ id: `${id}-label`, htmlFor: id, "data-test": typeof dataTest === "string" ? `${dataTest}-label` : null }, labelProps), label), this.errorText && (h("cvs-form-error", { id: getErrorId(id), text: this.errorText, class: "textinput-error" }))));
  }
};
CvsCheckbox.style = cvsCheckboxCss;

export { CvsCheckbox as cvs_checkbox };
