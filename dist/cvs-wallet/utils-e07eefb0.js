//comment out second line when not in stencil (ssr)
const isSSR = () => typeof window === "undefined";
//  || typeof process === 'object'; // uncomment when running ssr in stencil (npm run ssr)
const isMobile = () => isSSR() ? false : window.navigator.userAgent.toLowerCase().indexOf("mobi") !== -1;
/**
 * Checks whether code is run in prod env. Returns false when run on local or lower env
 * @returns boolean
 */
const isProd = () => {
  var _a;
  return isSSR()
    ? ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === "prod"
    : window.location.hostname !== "localhost" && !window.location.hostname.includes("-");
};

export { isMobile as a, isProd as b, isSSR as i };
