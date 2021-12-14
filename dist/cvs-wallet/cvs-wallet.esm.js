import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-6c675c57.js';
import { g as globalScripts } from './app-globals-8eaa27eb.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = "";
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __sc_import_cvs_wallet(/* webpackChunkName: "polyfills-dom" */ './dom-bd0bf1dc.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["cvs-editcard-form",[[4,"cvs-editcard-form",{"token":[1],"noCard":[1,"no-card"],"noValidCard":[1,"no-valid-card"],"editCard":[1,"edit-card"],"formValid":[32],"formValues":[32],"apiFailure":[32],"error":[32]},[[16,"modalEvent","cancelEditCard"]]]]],["cvs-addcard-form",[[4,"cvs-addcard-form",{"token":[1],"noCard":[1,"no-card"],"noValidCard":[1,"no-valid-card"],"formValid":[32],"formValues":[32],"apiFailure":[32]},[[16,"modalEvent","cancelAddCard"]]]]],["cvs-select-payment",[[1,"cvs-select-payment",{"myChartUrl":[1,"my-chart-url"],"correctFlow":[4,"correct-flow"],"cardAdded":[4,"card-added"],"userId":[1,"user-id"],"subText":[1,"sub-text"],"showContinue":[4,"show-continue"],"hideHeader":[4,"hide-header"],"addCardText":[1,"add-card-text"],"validCards":[1,"valid-cards"],"expiredCards":[1,"expired-cards"],"parsedData":[32]}]]],["cvs-card-management",[[1,"cvs-card-management",{"userId":[1,"user-id"],"validCards":[1,"valid-cards"],"allowEdit":[4,"allow-edit"],"expiredCards":[1,"expired-cards"],"addCardText":[1,"add-card-text"],"cardAdded":[4,"card-added"],"showAlert":[32],"alertData":[32],"selectedCard":[32],"parsedData":[32]},[[0,"handleDeleteEvent","handleDelete"],[0,"handleDeleteEvent","handleEdit"],[16,"modalEvent","deleteCard"]]]]],["wallet-wrapper",[[1,"wallet-wrapper",{"funds":[32],"deposit":[64]}]]],["cvs-confirm-payment",[[1,"cvs-confirm-payment",{"goBack":[1,"go-back"],"selectSuccess":[4,"select-success"]}]]],["cvs-container",[[1,"cvs-container",{"headerImgUrl":[1,"header-img-url"],"headerImgAltTag":[1,"header-img-alt-tag"],"pageTitle":[1,"page-title"],"prevPageName":[1,"prev-page-name"],"prevPageCustomUrl":[1,"prev-page-custom-url"],"showPrevPage":[4,"show-prev-page"]}]]],["cvs-analytics",[[1,"cvs-analytics",{"data":[1]},[[4,"cvsAnalyticsEvent","fireEvent"],[4,"loginEvent","loginData"]]]]],["cvs-input-with-validation",[[0,"cvs-input-with-validation",{"label":[1],"helperText":[1,"helper-text"],"preValue":[1,"pre-value"],"disabled":[4],"required":[4],"buttonTxt":[1,"button-txt"],"input":[16],"validator":[16],"errorTxt":[32],"value":[32],"showError":[32],"isValid":[32],"showInlineError":[64]}]]],["cvs-accordion",[[1,"cvs-accordion",{"accordionTitle":[1,"accordion-title"],"subtitle":[1],"analyticsData":[16],"expanded":[4],"open":[32]}]]],["cvs-breadcrumbs",[[1,"cvs-breadcrumbs",{"path":[1],"analyticsData":[16],"parsedPath":[32]}]]],["cvs-copyright",[[0,"cvs-copyright",{"company":[1]}]]],["cvs-donut-graph",[[1,"cvs-donut-graph",{"foreGround":[1,"fore-ground"],"backGround":[1,"back-ground"],"value":[2],"max":[2],"width":[1],"strokeWidth":[2,"stroke-width"]}]]],["cvs-form-debug",[[1,"cvs-form-debug",{"state":[8],"display":[16]}]]],["cvs-half-overlay",[[1,"cvs-half-overlay"]]],["cvs-wallet",[[1,"cvs-wallet"]]],["cvs-radio-button",[[4,"cvs-radio-button",{"elementId":[1,"element-id"],"value":[1],"name":[1],"label":[1],"disabled":[4],"checked":[4],"describedby":[1],"dataTest":[1,"data-test"],"radioProps":[8,"radio-props"],"labelProps":[8,"label-props"],"slotClass":[1,"slot-class"],"errorDisplay":[4,"error-display"]}]]],["cvs-form-error",[[1,"cvs-form-error",{"errorId":[1,"error-id"],"text":[1],"errorClassName":[1,"error-class-name"],"ariaLive":[1,"aria-live"]}]]],["cvs-select-payment-form",[[1,"cvs-select-payment-form",{"myChartUrl":[1,"my-chart-url"],"subText":[1,"sub-text"],"userId":[1,"user-id"],"showContinue":[4,"show-continue"],"validCards":[16],"selectedCardError":[32],"apiFailure":[32]}]]],["cvs-card-management-tile",[[1,"cvs-card-management-tile",{"card":[16],"allowEdit":[4,"allow-edit"]}]]],["cvs-loading-spinner",[[1,"cvs-loading-spinner",{"label":[1]}]]],["cvs-previous-page",[[1,"cvs-previous-page",{"pageName":[1,"page-name"],"customUrl":[1,"custom-url"],"analyticsData":[16]}]]],["display-funds",[[1,"display-funds",{"funds":[2]}]]],["test-wallet",[[1,"test-wallet",{"earn":[16],"spend":[16]}]]],["cvs-fieldset",[[4,"cvs-fieldset",{"elementId":[1,"element-id"],"legendText":[1,"legend-text"],"options":[1],"multi":[4],"name":[1],"disabled":[4],"errorText":[1,"error-text"],"dataTest":[1,"data-test"],"fieldsetProps":[8,"fieldset-props"]}]]],["cvs-modal",[[1,"cvs-modal",{"data":[1],"analyticsData":[16],"parsedData":[32]}]]],["cvs-card-auth",[[1,"cvs-card-auth",{"analyticsModalData":[16]},[[16,"modalEvent","changeMyStore"]]]]],["cvs-select",[[0,"cvs-select",{"elementId":[1,"element-id"],"label":[1],"name":[1],"required":[4],"placeholder":[1],"disabled":[4],"errorText":[1,"error-text"],"dataTest":[1,"data-test"],"form":[1],"autoFocus":[4,"auto-focus"],"groupProps":[8,"group-props"],"labelProps":[8,"label-props"],"selectProps":[8,"select-props"],"states":[8]}]]],["cvs-text-input",[[0,"cvs-text-input",{"inputProps":[8,"input-props"],"groupProps":[8,"group-props"],"labelProps":[8,"label-props"],"errorText":[1,"error-text"],"elementId":[1,"element-id"],"label":[1],"helperText":[1,"helper-text"],"disabled":[4],"dataTest":[1,"data-test"],"required":[4]}]]],["cvs-add-a-card",[[1,"cvs-add-a-card",{"addCardText":[1,"add-card-text"]}]]],["cvs-vantiv",[[0,"cvs-vantiv",{"vantivConfig":[16],"eProtectReady":[32]}]]],["cvs-checkbox",[[0,"cvs-checkbox",{"elementId":[1,"element-id"],"value":[1],"name":[1],"label":[1],"disabled":[4],"checked":[4],"describedby":[1],"dataTest":[1,"data-test"],"groupProps":[8,"group-props"],"checkboxProps":[8,"checkbox-props"],"labelProps":[8,"label-props"],"errorText":[1,"error-text"]}]]],["cvs-card-summary",[[1,"cvs-card-summary",{"cardType":[1,"card-type"],"cardNum":[1,"card-num"],"isValid":[4,"is-valid"],"showDetails":[4,"show-details"],"expDate":[1,"exp-date"],"billingAddress":[16],"active":[4]}]]],["cvs-form",[[0,"cvs-form",{"initialValues":[16],"renderer":[16],"validate":[16],"validateOnInput":[4,"validate-on-input"],"validateOnBlur":[4,"validate-on-blur"],"isInitialValid":[4,"is-initial-valid"],"validationSchema":[16],"isValid":[32],"isValidating":[32],"isSubmitting":[32],"submitAttempted":[32],"submitCount":[32],"focused":[32],"values":[32],"touched":[32],"validity":[32],"errors":[32]}]]],["cvs-alert-banner",[[1,"cvs-alert-banner",{"alertType":[1,"alert-type"],"targetComponent":[16],"actions":[16]}]]]], options);
});
