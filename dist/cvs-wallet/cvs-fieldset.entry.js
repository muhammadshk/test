import { r as registerInstance, h, f as Host } from './index-6c675c57.js';
import { g as getComponentId } from './uuidUtils-16ba74d9.js';
import { g as getErrorId } from './textFormElements-b92e46f9.js';

const cvsFieldsetCss = "cvs-fieldset{display:block;}cvs-fieldset fieldset{border:0;padding:0;margin:0;min-width:0}cvs-fieldset legend{padding-left:0.75rem;padding-bottom:0.5rem;color:#262626;size:1rem;line-height:1.3em;font-weight:bold;font-family:\"Helvetica\"}cvs-fieldset .error cvs-radio-button input+label:before,cvs-fieldset .error cvs-checkbox input+label:before{border-width:0.1875rem;border-style:solid;border-color:#d53220}cvs-fieldset .error cvs-radio-button input+label:after{top:1.15rem;left:1.13rem;background-color:#d53220}cvs-fieldset .error cvs-checkbox input+label:after{left:1.19rem;top:0.97rem}cvs-fieldset .error cvs-checkbox input:checked:not(:disabled)+label:before{background-color:#d53220}cvs-fieldset .error fieldset{margin-bottom:0.5rem}cvs-fieldset .error .fieldset-error{color:#d53220;font-size:0.875rem;font-weight:bold;font-family:\"Helvetica\";line-height:1.3em;display:flex;padding-left:0.9rem}cvs-fieldset .error .fieldset-error svg{margin-right:0.5rem;position:relative;top:0.02rem;height:1rem;width:1rem}cvs-fieldset .error .fieldset-error .form-error-icon{fill:#d53220}";

const CvsFieldset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Toggle for disabled state
     */
    this.disabled = false;
    this.renderOptions = (errorId) => {
      const { _options, multi, errorText } = this;
      if (multi) {
        return _options.map((opt) => (h("cvs-checkbox", { key: opt.id, elementId: opt.id, label: opt.label, name: opt.name, value: opt.value, disabled: opt.disabled, describedby: errorText && errorId })));
      }
      else {
        return _options.map((opt) => (h("cvs-radio-button", { key: opt.id, elementId: opt.id, label: opt.label, name: opt.name, value: opt.value, disabled: opt.disabled, describedby: errorText && errorId })));
      }
    };
  }
  // This watcher handles converting options that are passed in as a string type
  optionsWatcher(newValue) {
    if (typeof newValue === "string") {
      try {
        this._options = JSON.parse(newValue);
      }
      catch (e) {
        console.warn("Error in parsing the new options");
      }
    }
    else {
      this._options = newValue;
    }
  }
  componentWillLoad() {
    this.optionsWatcher(this.options);
  }
  render() {
    const { elementId, legendText, name, disabled, errorText, dataTest, fieldsetProps } = this;
    const id = getComponentId((fieldsetProps === null || fieldsetProps === void 0 ? void 0 : fieldsetProps.id) || elementId);
    const errorId = getErrorId(id);
    return (h(Host, { class: {
        "cvs-fieldset": true,
        "disabled": disabled,
        "error": errorText !== undefined
      } }, h("fieldset", Object.assign({ id: id, name: name, "data-test": dataTest && `${dataTest}-fieldset`, disabled: disabled, "aria-describedby": errorText && errorId }, fieldsetProps), h("legend", null, legendText), this.options !== undefined ? this.renderOptions(errorId) : h("slot", null)), errorText && (h("cvs-form-error", { errorId: errorId, text: errorText, errorClassName: "fieldset-error" }))));
  }
  static get watchers() { return {
    "options": ["optionsWatcher"]
  }; }
};
CvsFieldset.style = cvsFieldsetCss;

export { CvsFieldset as cvs_fieldset };
