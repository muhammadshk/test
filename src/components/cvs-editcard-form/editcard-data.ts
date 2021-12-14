import { EditCardErrors, EditCardLabels, EditCardValues } from "./editcard-types";
import { SchemaOf, boolean, mixed, object, string } from "yup";
import {
  AllInputsEmpty,
  VantivConfig,
  VantivResponse
} from "@cvsdigital_components/cvs-core/dist/types/components/cvs-vantiv/cvsVantivTypes";
import { isProd } from "../../utils/utils";

const REGEX = {
  ZIPCODE: /^[0-9]*$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  CITY: /^[a-zA-ZÀ-ÿ0-9_,.\-`‘’' ]*$/,
  ADDRESS: /^[a-zA-ZÀ-ÿ0-9_\-` ]*$/,
  NAME: /^[a-zA-ZÀ-ÿ0-9_,.\-`‘’' ]*$/,
  MOBILE: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$|^$/
};

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export class EditCardData {
  static readonly initialValues: EditCardValues = {
    paymentId: "",
    cardType: "CC",
    month: "",
    year: "",
    cardNum: "",
    fName: "",
    mName: "",
    lName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    mobile: "",
    authorization: false,
    carePassEnrolled:""
  };

  static readonly validationSchema = (): SchemaOf<EditCardValues> => {
    const { errorLabels: e } = EditCardData;
    return object().shape({
      paymentId: string().notRequired(),
      cardType: mixed().oneOf(["FSA", "CC"]).required(),
      month: string()
        .required(e.month[0])
        .when("year", {
          is: (val) => val == currentYear,
          then: string().test("expired", e.month[1], function (value) {
            let month = EditCardData.months.indexOf(value);
            if (month < currentMonth) {
              return false;
            } else return true;
          })
        }),
      year: string()
        .required(e.year[0])
        .test("expired", e.year[1], function (value) {
          let v = parseInt(value, 10);
          if (v >= currentYear) {
            return true;
          } else return false;
        }),
      cardNum: string().notRequired(),
      cardLogo: string().notRequired(),
      mobile: string().required(e.mobile[0]).matches(REGEX.MOBILE, e.mobile[0]),
      fName: string().required(e.fName[0]).matches(REGEX.ALPHANUMERIC, e.fName[1]),
      mName: string().notRequired(),
      lName: string().required(e.lName[0]).matches(REGEX.ALPHANUMERIC, e.lName[1]),
      address1: string().required(e.address1[0]).matches(REGEX.ADDRESS, e.address1[1]),
      address2: string().notRequired(),
      city: string().required(e.city[0]).matches(REGEX.CITY, e.city[1]),
      state: string().required(e.state[0]),
      zip: string().required(e.zip[0]).matches(REGEX.ZIPCODE, e.zip[1]),
      authorization: boolean().oneOf([true], e.authorization[0]),
      carePassEnrolled: string().notRequired()
    });
  };

  static readonly labels: EditCardLabels = {
    paymentId: "",
    cardType: "Card Type",
    month: "Month",
    year: "Year",
    cardNum: "1234",
    mobile: "Mobile number",
    fName: "First name",
    mName: "Middle initial (optional)",
    lName: "Last name",
    address1: "Street address",
    address2: "Unit, apartment, etc. (optional)",
    city: "City",
    state: "State",
    zip: "ZIP code",
    authorization: "Yes, I have read and accept the Authorization to Store and Use Credit Card for Future Services",
    carePassEnrolled: ""
  };

  private static readonly errorLabels: EditCardErrors = {
    month: ["Select an expiration month", "Enter a nonexpired month"],
    year: ["Select an expiration year", "Enter a nonexpired year"],
    mobile: ["Enter a 10-digit mobile number"],
    fName: ["Enter a first name", "Enter a valid first name"],
    lName: ["Enter a last name", "Enter a valid last name"],
    address1: ["Enter a street address", "Enter a valid street address"],
    city: ["Enter a city", "Enter a valid city"],
    state: ["Select a state"],
    zip: ["Enter a ZIP code", "Enter a valid ZIP code"],
    authorization: ["Accept the legal authorization"]
  };

  static readonly vantivConfig: VantivConfig = {
    paypageId: isProd() ? "Ct9F6zAdMcrx5w8L" : "n7tkqZp253hRLGJs",
    style: "leanCheckoutVantiv6",
    reportGroup: "eClinic",
    timeout: 5000,
    div: "eProtect",
    height: 180,
    callback: (res: VantivResponse) => window.eProtectCB(res),
    inputsEmptyCallback: (res: AllInputsEmpty) => window.eProtectInputsEmptyCB(res),
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
    tooltipText:
      "A CVV is the 3 digit code on the back of your Visa, MasterCard and Discover or a 4 digit code on the front of your American Express",
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

  static readonly months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  static readonly years: number[] = [
    currentYear,
    currentYear + 1,
    currentYear + 2,
    currentYear + 3,
    currentYear + 4,
    currentYear + 5,
    currentYear + 6,
    currentYear + 7,
    currentYear + 8,
    currentYear + 9
  ];

  static readonly states: string[] = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MP",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UM",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ];
}
