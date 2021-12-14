//comment out second line when not in stencil (ssr)
export const isSSR = () => typeof window === "undefined";
//  || typeof process === 'object'; // uncomment when running ssr in stencil (npm run ssr)

/**
 * Checks whether code is run in prod env. Returns false when run on local or lower env
 * @returns boolean
 */
export const isProd = (): boolean =>
  isSSR()
    ? process?.env?.NODE_ENV === "prod"
    : window.location.hostname !== "localhost" && !window.location.hostname.includes("-");

export const isMobile = (): boolean =>
  isSSR() ? false : window.navigator.userAgent.toLowerCase().indexOf("mobi") !== -1;

export const getUrlPrefix = () => {
  if (isSSR()) {
    switch (process.env?.ENV) {
      case "local":
        return "https://www-uat3.cvs.com";
      case "it3":
        return "https://www-it3.cvs.com";
      case "qa2":
        return "https://www-qa2.cvs.com";
      case "qa1":
        return "https://www-qa1.cvs.com";
      default:
        return "https://www.cvs.com";
    }
  }
  return window.location.hostname.includes("localhost") ? "https://www-uat3.cvs.com" : "";
};

export const getCurrentEnv = (): string => {
  if (isSSR()) {
    if (process.env?.ENV === undefined) return "";
    switch (process.env.ENV) {
      case "local":
        return "UAT3";
      case "prod":
        return "";
      default:
        return process.env.ENV.toUpperCase();
    }
  }
  const host = window?.location?.hostname;
  const prodHost = ["m.cvs.com", "www.cvs.com"];
  if (prodHost.indexOf(host) > -1) return "";
  let env: string = "UAT3";
  if (host?.split("-")?.length > 1) {
    env = host.split("-")[1].split(".")[0]?.toUpperCase();
  }
  return env;
};

export const getDeviceType = (): string => {
  // Other
  let deviceType: string = "DESKTOP";
  if (isSSR()) return deviceType;
  const ua: string = window?.navigator?.userAgent;

  // Android Specific Checks
  if (/Android/i.test(ua)) {
    // Android Mobile
    if (/Mobile/i.test(ua)) {
      deviceType = "AND_MOBILE";
    } else if (/Glass/i.test(ua)) {
      // Android Glass
      deviceType = "AND_GLASS";
    } else {
      // Android Tablet
      deviceType = "AND_TABLET";
    }
  } else if (/iPhone|iPod/i.test(ua)) {
    // iOS Mobile
    deviceType = "IOS_MOBILE";
  } else if (/iPad/i.test(ua)) {
    // iOS Tablet
    deviceType = "IOS_TABLET";
  } else if (/IEMobile/i.test(ua)) {
    // Windows
    deviceType = "WIN_MOBILE";
  } else if (/webOS|BlackBerry|Opera Mini/i.test(ua)) {
    // Other Identified Vendor
    deviceType = "OTH_MOBILE";
  }
  return deviceType;
};

export const decodeBase64 = (data: string): string => (isSSR() ? Buffer.from(data, "base64").toString() : atob(data));

export const getCookie = (key: string): string | undefined =>
  isSSR()
    ? undefined
    : document?.cookie
        .split("; ")
        .find((row) => row.startsWith(key))
        ?.split("=")?.[1];
