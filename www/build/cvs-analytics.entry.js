import { r as registerInstance, h, f as Host } from './index-6c675c57.js';
import { i as isSSR, a as isMobile } from './utils-e07eefb0.js';

const CvsAnalytics = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * counter (class variable) to persist the retry attempts
     */
    this.counter = 0;
    this.userDetails = {
      state_logged_in: "false",
      state_authentication: "rx registration status unknown",
      state_extracare_link: "false"
    };
    this.previousPageUrl = "";
  }
  dataUpdated() {
    let parsedData;
    if (typeof this.data === "string") {
      try {
        parsedData = JSON.parse(this.data);
        this.fnTagger(parsedData.type, parsedData.payload);
      }
      catch (e) {
        console.warn("Error in parsing the value of path attr for cvs-breadcrumbs");
      }
    }
    else if (this.data !== undefined) {
      parsedData = this.data;
      this.fnTagger(parsedData.type, parsedData.payload);
    }
  }
  /**
   * @listens: cvsAnalyticsEvent
   *
   * @description: gets executed once the cvsAnalyticsEvent is fired from any component
   */
  fireEvent(data) {
    if (isSSR())
      return;
    const eventData = data.detail;
    try {
      if (window === null || window === void 0 ? void 0 : window.utag) {
        this.fnTagger(eventData.type, eventData.payload);
      }
      else if (this.counter === 0) {
        setTimeout(() => {
          this.counter++;
          this.fnTagger(eventData.type, eventData.payload);
        }, 2000);
      }
    }
    catch (e) {
      setTimeout(() => {
        this.fnTagger(eventData.type, eventData.payload);
      }, 1000);
    }
  }
  /**
   * @listens: loginEvent
   *
   * @description: gets executed once the login event is fired from cvs-header (external module)
   */
  loginData(data) {
    const eventData = data === null || data === void 0 ? void 0 : data.detail;
    this.getHeaderData(eventData);
  }
  componentDidLoad() {
    if (isSSR())
      return;
    this.getHeaderData();
    setTimeout(() => {
      this.dataUpdated();
    }, 500);
  }
  fnTagger(type, udo) {
    try {
      if (window.utag) {
        utag.cfg.noview = true;
      }
      const header_data = this.userDetails;
      const subSection = (window.location.pathname + window.location.hash)
        .replace(/\/#\//g, "/ice/")
        .split("/");
      let hierarchy = "cvs|" + (isMobile() ? "mweb" : "desktop");
      let _count = 0;
      subSection &&
        subSection.forEach((val) => {
          if (val && _count < 4) {
            _count++;
            hierarchy = hierarchy + "|" + val;
            if (1 == _count) {
              udo["sub_section" + _count] = hierarchy;
            }
          }
        });
      if (this.previousPageUrl !== hierarchy) {
        this.previousPageUrl = hierarchy;
      }
      udo.adobe_prop3 = hierarchy + (udo.page_name ? "|" + udo.page_name : "");
      udo.cc = "USD";
      udo.prop5 = (udo === null || udo === void 0 ? void 0 : udo.page_category) ? udo.page_category : "search";
      udo.hierarchy = hierarchy;
      udo.prop3 = (udo === null || udo === void 0 ? void 0 : udo.prop3) ? udo.prop3 : "storelocator";
      udo.previous_prop3 = this.previousPageUrl;
      udo.prop9 = (udo === null || udo === void 0 ? void 0 : udo.prop9) ? udo.prop9 : "cvs react";
      udo.previous_page_url = document.referrer;
      udo.platform = this.getPlatform("screen");
      udo.bb_cplptest = this.getCookie("bb_cplptest");
      udo.bb_splptest = this.getCookie("bb_splptest");
      udo.breadcrumb = udo.breadcrumb || utag.data.breadcrumb || "";
      udo.design = this.getPlatform("clientWidth");
      udo.state_authentication = header_data.state_authentication;
      udo.state_logged_in = this.getLoginStatus();
      udo.bb_sabtest = this.getCookie("bb_sabtest");
      udo.domain = window.location.hostname;
      udo.local_time = this.getLocalTime();
      udo.environment = "" === this.getCurrentEnv() ? "prod" : "dev";
      udo.adobe_mid = "D=mid";
      udo.page_url = location.href;
      udo.document_title = document.title;
      udo.query_string = location.search;
      udo.user_agent = "D=User-Agent";
      udo.state_extracare_link = header_data.state_authentication;
      udo.store_id = udo.store_id || utag.data.store_id || "";
      /*
      if (header_data.city_state_ip) {
        udo.city_state_ipaddress_zipcode = header_data.city_state_ip;
      }
      */
      if (header_data.ec_card) {
        udo.ec_card = header_data.ec_card;
      }
      if (header_data.emailAddress) {
        udo.emailAddress = header_data.emailAddress;
      }
      if (header_data.user_id) {
        udo.user_id = `Retail:${header_data.user_id}`;
      }
      if (header_data.profile_id) {
        udo.cvs_profile_id = header_data.profile_id;
      }
      if (type === "view" &&
        udo.page_name === "store locator: store details" &&
        !!(sessionStorage === null || sessionStorage === void 0 ? void 0 : sessionStorage.getItem("fav-store-changed"))) {
        sessionStorage.removeItem("fav-store-changed");
        udo["key_activity"] = "user set mycvs";
      }
      utag[type](udo);
    }
    catch (exe) {
      let retryCounter = 0;
      const interval = setInterval(() => {
        try {
          retryCounter++;
          if (window.utag) {
            utag.cfg.noview = true;
            utag[type](udo);
            clearTimeout(interval);
          }
          else if (retryCounter > 5) {
            clearTimeout(interval);
          }
        }
        catch (e) { }
      }, 500);
    }
  }
  getCurrentEnv() {
    const host = window.location.hostname;
    let env = "";
    if (host === "localhost") {
      env = "qa";
    }
    if (host.split("-").length > 1) {
      env = host.split("-")[1].split(".")[0];
    }
    return env;
  }
  getPlatform(prop) {
    const width = prop === "screen" ? screen.width : document.body.clientWidth;
    let platform = "dweb";
    if (width < 768) {
      platform = "mweb";
    }
    else if (width < 1025) {
      platform = "tweb";
    }
    return platform;
  }
  getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = document.cookie;
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  getLocalTime() {
    var newDate = new Date();
    let padValue = (value) => {
      return value < 10 ? "0" + value : value;
    };
    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "AM";
    var iHourCheck = sHour;
    if (iHourCheck === 12) {
      sAMPM = "PM";
    }
    else if (iHourCheck > 12) {
      sAMPM = "PM";
      sHour = iHourCheck - 12;
    }
    else if (iHourCheck === 0) {
      sHour = 12;
    }
    sHour = padValue(sHour);
    return sMonth + "/" + sDay + "/" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
  }
  getLoginStatus() {
    let _status = "false";
    try {
      if (this.userDetails) {
        if ("loggedIn" === this.userDetails.state_logged_in) {
          _status = "true";
        }
        else if (this.userDetails.state_logged_in === "rememberMe") {
          _status = "remembered";
        }
        else {
          _status = "false";
        }
      }
      return _status;
    }
    catch (err) {
      return "false";
    }
  }
  getHeaderData(header_details) {
    var _a, _b, _c, _d, _e;
    if (header_details) {
      const response = header_details === null || header_details === void 0 ? void 0 : header_details.response;
      const loggedInState = response === null || response === void 0 ? void 0 : response.loggedInState;
      const isUserLoggedIn = (response === null || response === void 0 ? void 0 : response.loggedInState) === "loggedIn";
      const rxTied = ((_a = response === null || response === void 0 ? void 0 : response.userDetails) === null || _a === void 0 ? void 0 : _a.rxTied) === "Y";
      const ecTied = ((_b = response === null || response === void 0 ? void 0 : response.userDetails) === null || _b === void 0 ? void 0 : _b.ecTied) === "Y";
      const city_state_ipaddress_zipcode = response === null || response === void 0 ? void 0 : response.city_state_ipaddress_zipcode;
      this.userDetails = {
        state_logged_in: loggedInState === "rememberMe" ? "rememberMe" : isUserLoggedIn.toString(),
        state_authentication: isUserLoggedIn && rxTied
          ? "rx registered"
          : isUserLoggedIn && !rxTied
            ? "rx unregistered"
            : "rx registration status unknown",
        state_extracare_link: ecTied ? "true" : "false",
        city_state_ip: city_state_ipaddress_zipcode,
        ec_card: (_c = response === null || response === void 0 ? void 0 : response.extracareInfo) === null || _c === void 0 ? void 0 : _c.extracareCardNo,
        emailAddress: (_d = response === null || response === void 0 ? void 0 : response.userDetails) === null || _d === void 0 ? void 0 : _d.emailAddress,
        profile_id: response === null || response === void 0 ? void 0 : response.unencrypted_cvs_profile_id,
        user_id: (_e = response === null || response === void 0 ? void 0 : response.ice) === null || _e === void 0 ? void 0 : _e.rxConnectId
      };
    }
    else {
      this.userDetails = {
        state_logged_in: "false",
        state_authentication: "rx registration status unknown",
        state_extracare_link: "false"
      };
    }
  }
  render() {
    return h(Host, null);
  }
};

export { CvsAnalytics as cvs_analytics };
