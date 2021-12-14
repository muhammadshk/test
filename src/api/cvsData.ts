import fetch from "cross-fetch";
import { AddCardResponse, BillingInfo, SelectCard, DeleteCard } from "./types";
import { isSSR, getCurrentEnv, getDeviceType, getUrlPrefix } from "../utils/utils";

export class CvsData {
  private static readonly getCvsHeader = (type?: string) => ({
    apiKey: "" === getCurrentEnv() ? "a2ff75c6-2da7-4299-929d-d670d827ab4a" : "2e77f5eb-016f-44a6-8d73-d5f2e6a01a54",
    appName: "CVS_WEB",
    channelName: "WEB",
    deviceToken: "d9708df38d23192e",
    deviceType: getDeviceType(),
    responseFormat: "JSON",
    securityType: "apiKey",
    source: "CVS_WEB",
    lineOfBusiness: "RETAIL",
    type: type || "retleg"
  });

  private static readonly getCredentials = (): "include" | undefined => {
    if (isSSR()) {
      return process.env?.ENV === "local" ? undefined : "include";
    }
    return window.location.hostname.includes("localhost") ? undefined : "include";
  };

  private static readonly getReqInit = (data: any): RequestInit => {
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
      "accept": "application/json",
      "grid": CvsData.generateUUID()
    };

    if (getCurrentEnv() !== "") {
      headers["env"] = getCurrentEnv();
    }

    return {
      method: "POST",
      body: JSON.stringify(data),
      headers,
      credentials: CvsData.getCredentials()
    };
  };

  private static readonly generateUUID = function () {
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = ((d + Math.random()) * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  };

  public static readonly addUserCard = async (
    id: string,
    billingInfoObject: BillingInfo,
    idType: string = "MRN"
  ): Promise<AddCardResponse> => {
    const url = `${getUrlPrefix()}/RETAGPV2/CartModifierActor/V1/updateMDPPaymentDetails`;
    const header = CvsData.getCvsHeader("rmacop_com_p");
    const data = {
      request: {
        header,
        id,
        idType,
        flowType: "MC_MYCHART_ECLINIC",
        isRPP: "false",
        isPerformAuth: "true",
        billingInfo: [{ ...billingInfoObject }]
      }
    };

    const reqInit: RequestInit = CvsData.getReqInit(data);

    const res = await fetch(url, reqInit);
    if (!res.ok) throw new Error("Error in addUserCard. res.statusText: " + res.statusText);
    return await (await res.json()).response;
  };

  public static savePaymentInfo = async (cardInfo: any): Promise<any> => {
    const url = `${getUrlPrefix()}/RETAGPV2/ProfileActor/V1/updateProfilePaymentDetails`;
    const header = CvsData.getCvsHeader("rmau_com_pha");
    const data = {
      request: {
        header,
        payments: [cardInfo]
      }
    }
    const reqInit: RequestInit = CvsData.getReqInit(data);
    const res = await fetch(url, reqInit);
    if (!res.ok) throw new Error("Error in savePaymentInfo. res.statusText: " + res.statusText);
    return await (await res.json()).response;
  };

  public static readonly deleteCard = async (
    id: string,
    cardId: string,
    lastFour: string,
    idType: string = "MRN"
  ): Promise<DeleteCard> => {
    const url = `${getUrlPrefix()}/RETAGPV3/PaymentServices/V1/cardDelete`;
    const header = CvsData.getCvsHeader();
    const data = {
      request: {
        header,
        id: id,
        idType: idType,
        orderOrigin: "MC_MYCHART_ECLINIC",
        cardId,
        lastFour
      }
    };

    const reqInit: RequestInit = CvsData.getReqInit(data);

    const res = await fetch(url, reqInit);
    return res.ok ? await res.json() : res.ok;
  };

  public static readonly selectUserCard = async (
    id: string,
    cardId: string,
    lastFour: string,
    idType: string = "MRN"
  ): Promise<SelectCard> => {
    const url = `${getUrlPrefix()}/RETAGPV3/PaymentServices/V1/cardSelect`;
    const header = CvsData.getCvsHeader();
    const data = {
      request: {
        header,
        id: id,
        idType: idType,
        orderOrigin: "MC_MYCHART_ECLINIC", // orderOrigin in docs? flowType here????
        cardId,
        lastFour
      }
    };

    const reqInit: RequestInit = CvsData.getReqInit(data);

    const res = await fetch(url, reqInit);
    return res.ok ? await res.json() : res.ok;
  };

  public static readonly deleteCreditCard = async (
    cardId: string,
  ): Promise<DeleteCard> => {
    const url = `${getUrlPrefix()}/RETAGPV2/ProfileActor/V1/deleteProfilePaymentDetails`;
    const header = CvsData.getCvsHeader('rmau_com_pha');
    const data = {
      request: {
        header,
        cardId
      }
    };

    const reqInit: RequestInit = CvsData.getReqInit(data);

    const res = await fetch(url, reqInit);
    return res.ok ? await res.json() : res.ok;
  };
}
