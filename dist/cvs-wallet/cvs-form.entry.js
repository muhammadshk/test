import { r as registerInstance, e as createEvent, g as getElement } from './index-6c675c57.js';

const isFormParticipantElement = (element) => !!element && ["input", "textarea", "select"].includes(element.tagName.toLowerCase());
const isInputElement = (element) => !!element && element.tagName.toLowerCase() === "input";
const isCheckboxType = ({ type }) => type === "checkbox";
const isNumberType = ({ type }) => ["number", "range"].includes(type);
const isDateType = ({ type }) => ["date", "datetime-local", "month", "time", "week"].includes(type);
/** TODO: Date gets funky here, because pickers are in UTC instead of local. wontfix, just document it */
const copyValidityState = (element) => {
  if (!element || (element && !element.validity))
    return;
  const { validity } = element;
  let state = {};
  for (let key in validity) {
    state = Object.assign(Object.assign({}, state), { [key]: validity[key] });
  }
  return state;
};
/** TODO: Date gets funky here, because pickers are in UTC instead of local. wontfix, just document it */
const getElementValue = (element) => {
  if (isFormParticipantElement(element)) {
    let value = element.value;
    if (isInputElement(element)) {
      if (isNumberType(element)) {
        value = element.valueAsNumber;
      }
      else if (isCheckboxType(element)) {
        value = element.checked;
      }
      // } else if (isDateType(element)) {
      //     value = (element as HTMLInputElement).valueAsDate;
      // }
    }
    return value;
  }
};

const cvsFormCss = ":host{display:block}";

var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
};
let formIds = 0;
const CvsForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onFormSubmit = createEvent(this, "submit", 7);
    this.groups = {};
    this.inputs = [];
    this.formId = `cvs-form-${formIds++}`;
    this.dirty = false;
    this.isValid = false;
    this.isValidating = false;
    this.isSubmitting = false;
    this.submitAttempted = false;
    this.submitCount = 0;
    this.focused = null;
    this.values = {};
    this.touched = {};
    this.validity = {};
    this.errors = {};
    /** Renderer function */
    this.renderer = () => null;
    /** Tells Form to validate the form on each input's onInput event */
    this.validateOnInput = true;
    /** Tells Form to validate the form on each input's onBlur event */
    this.validateOnBlur = true;
    /** Tell Form if initial form values are valid or not on first render */
    this.isInitialValid = true;
    this.setSubmitting = (value) => {
      this.isSubmitting = value;
    };
    this.validateAll = async () => {
      var e_1, _a;
      if (!!this.validationSchema) {
        try {
          for (var _b = __asyncValues(this.inputs), _c; _c = await _b.next(), !_c.done;) {
            const input = _c.value;
            const validity = copyValidityState(input);
            const { validationMessage } = input;
            let formValidity = Object.assign(Object.assign({}, this.validity), { [input.name]: validity });
            let formErrors = Object.assign(Object.assign({}, this.errors), { [input.name]: validationMessage });
            const resetCustomValidity = () => {
              input.setCustomValidity("");
              const validity = copyValidityState(input);
              formValidity = Object.assign(Object.assign({}, formValidity), { [input.name]: validity });
              formErrors = Object.assign(Object.assign({}, formErrors), { [input.name]: input.validationMessage });
            };
            const setCustomValidity = (message) => {
              // setCustomValidity because we want to #usetheplatform
              // allows users to style with :valid and :invalid
              input.setCustomValidity(message);
              const validity = copyValidityState(input);
              formValidity = Object.assign(Object.assign({}, formValidity), { [input.name]: validity });
              formErrors = Object.assign(Object.assign({}, formErrors), { [input.name]: message });
            };
            const yupErrors = () => {
              const promise = this.validationSchema.validateAt(input.name, this.values);
              return new Promise((resolve, reject) => {
                promise.then(() => resolve(resetCustomValidity()), (err) => {
                  if (err.name === "ValidationError") {
                    resolve(setCustomValidity(err.message));
                  }
                  reject(err);
                });
              });
            };
            if (this.validationSchema) {
              this.isValidating = true;
              setTimeout(() => (this.isValidating = false), 20);
              await yupErrors();
            }
            this.validity = formValidity;
            this.errors = formErrors;
          }
        }
        catch (e_1_1) {
          e_1 = { error: e_1_1 };
        }
        finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              await _a.call(_b);
          }
          finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    };
    this.handleSubmit = async (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.submitAttempted = true;
      await this.validateAll();
      const isValid = event.target.checkValidity();
      this.isValid = isValid;
      if (!this.isValid)
        return;
      this.isSubmitting = true;
      this.submitCount++;
      const { setSubmitting } = this;
      this.onFormSubmit.emit({ values: this.values, actions: { setSubmitting } });
    };
    this.handleReset = () => {
      this.isSubmitting = false;
      this.submitCount = 0;
      this.submitAttempted = false;
    };
    this.handleValidation = async (field, target) => {
      const validity = copyValidityState(target);
      const { validationMessage } = target;
      let formValidity = Object.assign(Object.assign({}, this.validity), { [field]: validity });
      let formErrors = Object.assign(Object.assign({}, this.errors), { [field]: validationMessage });
      const resetCustomValidity = (_field) => {
        const localTarget = this.inputs.find((x) => x.name === _field);
        localTarget.setCustomValidity("");
        const validity = copyValidityState(localTarget);
        formValidity = Object.assign(Object.assign({}, formValidity), { [_field]: validity });
        formErrors = Object.assign(Object.assign({}, formErrors), { [_field]: localTarget.validationMessage });
      };
      const setCustomValidity = (_field) => (message) => {
        const localTarget = this.inputs.find((x) => x.name === _field);
        // setCustomValidity because we want to #usetheplatform
        // allows users to style with :valid and :invalid
        localTarget.setCustomValidity(message);
        const validity = copyValidityState(localTarget);
        formValidity = Object.assign(Object.assign({}, formValidity), { [_field]: validity });
        formErrors = Object.assign(Object.assign({}, formErrors), { [_field]: message });
      };
      const yupErrors = (_field) => {
        const promise = this.validationSchema.validateAt(field, this.values);
        return new Promise((resolve, reject) => {
          promise.then(() => resolve(resetCustomValidity(_field)), (err) => {
            if (err.name === "ValidationError") {
              resolve(setCustomValidity(_field)(err.message));
            }
            reject(err);
          });
        });
      };
      if (this.validationSchema) {
        this.isValidating = true;
        await yupErrors(field);
        setTimeout(() => (this.isValidating = false), 20);
      }
      if (typeof this.validate === "function") {
        this.isValidating = true;
        let validatorState = {};
        for (let [key, value] of Object.entries(this.values)) {
          if (this.touched[key])
            resetCustomValidity(key);
          validatorState = Object.assign(Object.assign({}, validatorState), { [key]: {
              value,
              validity: formValidity[field],
              error: formErrors[field],
              setCustomValidity: setCustomValidity(key)
            } });
        }
        await this.validate(validatorState);
        setTimeout(() => (this.isValidating = false), 20);
      }
      this.validity = formValidity;
      this.errors = formErrors;
    };
    this.handleInput = (field) => async (event) => {
      const target = event.target;
      const value = getElementValue(target);
      this.values = Object.assign(Object.assign({}, this.values), { [field]: value });
      /** Validate, if user wants to validateOnInput */
      if (this.validateOnInput)
        this.handleValidation(field, target);
    };
    this.handleBlur = (field) => (event) => {
      if (this.focused !== null)
        this.focused = null;
      const target = event.target;
      const value = getElementValue(target);
      this.values = Object.assign(Object.assign({}, this.values), { [field]: value });
      /** Validate, if user wants to validateOnBlur */
      if (this.validateOnBlur)
        this.handleValidation(field, target);
    };
    this.handleFocus = (field) => () => {
      this.focused = field;
      if (!this.touched[field])
        this.touched = Object.assign(Object.assign({}, this.touched), { [field]: true });
    };
    this.composedState = () => {
      const { focused, values, errors, validity, touched, isValidating, isSubmitting, submitCount, submitAttempted } = this;
      return {
        focused,
        values,
        errors,
        validity,
        touched,
        isValidating,
        isSubmitting,
        submitCount,
        submitAttempted
      };
    };
    this.composedHandlers = () => {
      const { handleSubmit, handleReset, handleInput, handleFocus, handleBlur } = this;
      return { handleSubmit, handleReset, handleInput, handleFocus, handleBlur };
    };
    this.computeProps = () => {
      this.dirty = !Object.values(this.touched).every((x) => !x);
      this.isValid = Object.values(this.validity).every((x) => x.valid);
    };
    this.composedComputedProps = () => {
      this.computeProps();
      const { dirty, isValid, initialValues } = this;
      return { dirty, isValid, initialValues };
    };
    this.composedUtils = () => {
      this.inputs = [];
      const groupProps = (field) => ({
        "data-for": field,
        "class": {
          "input-group": true,
          "was-touched": this.touched[field],
          "has-focus": this.focused === field,
          "has-value": typeof this.values[field] === "string"
            ? !!this.values[field]
            : typeof this.values[field] === "number"
              ? typeof this.values[field] !== null
              : false,
          "has-error": !this.validity[field] || (this.validity[field] && !this.validity[field].valid)
        },
        "ref": (el) => (this.groups = Object.assign(Object.assign({}, this.groups), { [field]: el }))
      });
      const inputProps = (field) => ({
        name: field,
        ref: (el) => (this.inputs = [...this.inputs, el]),
        type: "text",
        onInput: this.handleInput(field),
        onBlur: this.handleBlur(field),
        onFocus: this.handleFocus(field),
        id: `${this.formId}-input-${field}`,
        value: this.values[field]
      });
      const radioProps = (field, value) => (Object.assign(Object.assign({}, inputProps(field)), { type: "radio", id: `${this.formId}-input-${field}-radio-${value}`, value: value, checked: this.values[field] === value }));
      const checkboxProps = (field) => (Object.assign(Object.assign({}, inputProps(field)), { type: "checkbox", value: null, checked: !!this.values[field] }));
      const selectProps = (field) => ({
        name: field,
        id: `${this.formId}-input-${field}`,
        value: this.values[field],
        ref: (el) => (this.inputs = [...this.inputs, el]),
        onChange: this.handleInput(field),
        onBlur: this.handleBlur(field),
        onFocus: this.handleFocus(field)
      });
      const labelProps = (field, value) => ({
        htmlFor: typeof value === "undefined"
          ? `${this.formId}-input-${field}`
          : `${this.formId}-input-${field}-radio-${value}`,
        id: typeof value === "undefined"
          ? `${this.formId}-input-${field}-label`
          : `${this.formId}-input-${field}-radio-${value}-label`
      });
      const formProps = {
        action: "javascript:void(0);",
        onSubmit: this.handleSubmit,
        id: this.formId
      };
      return {
        groupProps,
        inputProps,
        selectProps,
        checkboxProps,
        radioProps,
        labelProps,
        formProps
      };
    };
  }
  componentWillLoad() {
    this.isValid = this.isInitialValid;
    this.values = this.initialValues;
    for (const field of Object.keys(this.values)) {
      this.touched[field] = false;
      this.errors[field] = this.validationSchema ? "" : this.isInitialValid ? "" : null;
    }
  }
  async componentDidLoad() {
    if (!this.isInitialValid && !!this.validationSchema) {
      return await this.validateAll();
    }
    else {
      for (const input of this.inputs) {
        this.validity = Object.assign(Object.assign({}, this.validity), { [input.name]: Object.assign({}, copyValidityState(input)) });
      }
    }
  }
  render() {
    const state = this.composedState();
    const handlers = this.composedHandlers();
    const computedProps = this.composedComputedProps();
    const utils = this.composedUtils();
    const renderProps = Object.assign(Object.assign(Object.assign(Object.assign({}, state), handlers), computedProps), utils);
    return this.renderer(renderProps);
  }
  get el() { return getElement(this); }
};
CvsForm.style = cvsFormCss;

export { CvsForm as cvs_form };
