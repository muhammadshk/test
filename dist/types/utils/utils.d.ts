export declare const isSSR: () => boolean;
/**
 * Checks whether code is run in prod env. Returns false when run on local or lower env
 * @returns boolean
 */
export declare const isProd: () => boolean;
export declare const isMobile: () => boolean;
export declare const getUrlPrefix: () => "" | "https://www-uat3.cvs.com" | "https://www-it3.cvs.com" | "https://www-qa2.cvs.com" | "https://www-qa1.cvs.com" | "https://www.cvs.com";
export declare const getCurrentEnv: () => string;
export declare const getDeviceType: () => string;
export declare const decodeBase64: (data: string) => string;
export declare const getCookie: (key: string) => string | undefined;
