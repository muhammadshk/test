import { r as registerInstance, h, f as Host } from './index-6c675c57.js';
import { b as isProd } from './utils-e07eefb0.js';

const cvsVantivCss = ":host{display:block}";

const CvsVantiv = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eProtectReady = false;
    /** vantivConfig object */
    this.vantivConfig = {
      paypageId: "DrQ54xd7fiJjp2Xf",
      style: "leanCheckoutVantiv6",
      reportGroup: "ABCDEFGH",
      timeout: 5000,
      div: "eProtect",
      height: 180,
      callback: (res) => console.log(res),
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
    /**
     * appends Vantiv script to DOM
     * @private @readonly @returns Promise
     */
    this.loadVantiv = () => new Promise((resolve, reject) => {
      const url = isProd()
        ? "https://request.eprotect.vantivcnp.com/eProtect/js/eProtect-iframe-client3.min.js"
        : "https://request.eprotect.vantivprelive.com/eProtect/js/eProtect-iframe-client3.min.js";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      script.async = true;
      script.onerror = (error) => reject(error);
      return resolve(document.body.appendChild(script));
    });
    /**
     * initializes vantiv config
     * @private @readonly @returns Promise
     */
    this.configureVantiv = () => new Promise((resolve) => {
      const timeout = setTimeout(() => {
        clearInterval(interval);
        resolve((this.eProtectReady = true));
      }, 5000);
      const interval = setInterval(() => {
        if (typeof EprotectIframeClient !== "undefined") {
          clearTimeout(timeout);
          clearInterval(interval);
          return resolve((this.eProtectReady = true));
        }
      }, 50);
    });
  }
  async componentWillLoad() {
    return await this.loadVantiv().then(() => this.configureVantiv());
  }
  render() {
    const { vantivConfig: c } = this;
    return (h(Host, null, h("div", { id: c.div }), this.eProtectReady && (h("script", null, `
            let eProtectiframeClient;
            const configure = {
              paypageId: "${c.paypageId}",
              style: "${c.style}",
              reportGroup: "${c.reportGroup}",
              timeout: ${c.timeout},
              div: "${c.div}",
              height: ${c.height},
              callback: ${c.callback},
              inputsEmptyCallback: ${c.inputsEmptyCallback},
              showCvv: ${c.showCvv},
              months: ${JSON.stringify(c.months, null, 2)},
              numYears: ${c.numYears},
              tooltipText: "${c.tooltipText}",
              tabIndex: ${JSON.stringify(c.tabIndex, null, 2)},
              placeholderText: ${JSON.stringify(c.placeholderText, null, 2)},
              enhancedUxFeatures: ${JSON.stringify(c.enhancedUxFeatures, null, 2)}
             };
            if (typeof EprotectIframeClient === "undefined") {
                alert("We are experiencing technical difficulties. Please try again or call us to complete your order");
            }
            else {
                eProtectiframeClient = new EprotectIframeClient(configure);
                eProtectiframeClient.autoAdjustHeight();
            }
          `))));
  }
};
CvsVantiv.style = cvsVantivCss;

export { CvsVantiv as cvs_vantiv };
