import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-6c675c57.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-2088bffa.js';

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){"object"=='object'&&"undefined"!='object'?module.exports=e():"function"==typeof undefined&&undefined.amd?undefined(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e();}(commonjsGlobal,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
});

const defaultValidator = {
  validate: (_x) => true
};
function combineValidators(v1, v2) {
  let combined;
  combined = {
    validate: (x) => {
      const res1 = v1.validate(x);
      const res2 = v2 ? v2.validate(x) : true;
      if (!res1) {
        combined.errorMessage = v1.errorMessage;
      }
      else if (!res2) {
        combined.errorMessage = v2.errorMessage;
      }
      return res1 && res2;
    },
  };
  return combined;
}

const PasswordValidator = {
  validate: (value) => {
    try {
      let matchCount = 0;
      const pattern = /^[a-zA-Z0-9$-/:-?{-~!"^_`\[\\\]@# ]*$/;
      if (!pattern.test(value)) {
        return true;
      }
      if (value != undefined) {
        if (value.match(new RegExp('[a-zA-Z]'))) {
          matchCount++;
        }
        if (value.match(new RegExp('[0-9]'))) {
          matchCount++;
        }
      }
      if (2 <= matchCount) {
        return true;
      }
      else {
        return false;
      }
    }
    catch (e) {
      console.log('Exception in pwdValidator', e);
    }
  },
  errorMessage: 'Include at least 1 number and 1 letter'
};

var ValidatorsName;
(function (ValidatorsName) {
  ValidatorsName["password"] = "password";
})(ValidatorsName || (ValidatorsName = {}));
function getValidator(list) {
  return (list || []).map(v => {
    if (typeof v === 'string') {
      return validatorFactory(v, null);
    }
    else if (v && v.name) {
      v = v;
      return validatorFactory(v.name, v.options);
    }
    else {
      return v;
    }
  }).reduce(combineValidators, defaultValidator);
}
function validatorFactory(name, options) {
  options = options || {};
  switch (name) {
    case (ValidatorsName.password):
      return PasswordValidator;
    default:
      return defaultValidator;
  }
}

const cvsInputWithValidationCss = ":host{display:block}input{width:-webkit-fill-available;width:-moz-available;display:block;height:44px;margin:8px 0;color:#000;font-size:16px;font-weight:400;padding:0 13px;border:2px solid #000;border-radius:4px;font-family:\"Helvetica\", \"Arial\", sans-serif;line-height:18px}input.error{border:3px solid #d53220}input:focus{border:2px solid #000;background:white}label{font-family:\"Helvetica\", \"Arial\", sans-serif;font-weight:bold;font-size:14px;color:#000;text-align:left;line-height:18px}button{color:#fff;font-size:14px;font-weight:bold;height:48px;margin-top:8px;border-radius:12px;background:#c00;padding:0 10px;border:0;width:100%;line-height:18px}button:disabled{background-color:#c00;opacity:0.15}.textinput-error{color:#d53220;font-weight:bold;margin-bottom:0;font-size:14px;font-family:\"Helvetica\", \"Arial\", sans-serif;line-height:18px}.inline-err-img:before{background-image:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eC9JY29uL0Vycm9yPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik04LDAgQzEyLjQxODM2MzEsMCAxNiwzLjU4MTYzNjg2IDE2LDggQzE2LDEyLjQxODY5MjggMTIuNDE4MzYzMSwxNiA4LDE2IEMzLjU4MTYzNjg2LDE2IDAsMTIuNDE4MzYzMSAwLDggQzAsMy41ODE2MzY4NiAzLjU4MTYzNjg2LDAgOCwwIFogTTEyLjIsNyBMMy44LDcgQzMuMjQ3NzE1MjUsNyAyLjgsNy40NDc3MTUyNSAyLjgsOCBDMi44LDguNTUyMjg0NzUgMy4yNDc3MTUyNSw5IDMuOCw5IEwzLjgsOSBMMTIuMiw5IEMxMi43NTIyODQ3LDkgMTMuMiw4LjU1MjI4NDc1IDEzLjIsOCBDMTMuMiw3LjQ0NzcxNTI1IDEyLjc1MjI4NDcsNyAxMi4yLDcgTDEyLjIsNyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0ieC9JY29uL0Vycm9yIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgaWQ9Ikljb25BbGVydCIgZmlsbD0iI0Q1MzIyMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgIDwvZz4KPC9zdmc+\");background-repeat:no-repeat;background-size:contain;width:16px;height:16px;margin:0 8px 4px 0;content:\"\";display:table;clear:both}.helperText{font-size:14px;font-family:\"Helvetica\", \"Arial\", sans-serif;line-height:21px;padding-top:8px}.inline-err-div{display:flex;margin-bottom:10px}.eye-icon{float:right;margin-top:-40px;right:13px;position:relative;width:24px;height:17px}";

const CvsInputWithValidation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputValidated = createEvent(this, "inputValidated", 7);
    this.cvsAnalyticsEvent = createEvent(this, "cvsAnalyticsEvent", 7);
    this.errorTxt = [];
    this.isValid = true;
    this._validator = PasswordValidator;
    this.inputModeArray = ["text", "decimal", "numeric", "tel", "search", "email", "url"];
    this.showEye = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMjQgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXllLXNob3c8L3RpdGxlPgogICAgPGcgaWQ9ImV5ZS1zaG93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjY0MjgxNiwwLjc3Nzc4MDE3NyBDMTQuODA4MTI1NywwLjc3OTgxMjg3NiAxNy42MzE1MTQ1LDIuMDY0NTIwNjkgMjAuMDg5NjA5OCw0LjE5MzM0MzQ2IEMyMC45NDQ3ODM4LDQuOTMzOTYzMjEgMjEuNjk0NDE1NCw1LjcyNjU2MjY0IDIyLjMzNDIyMDQsNi41MTk4NDE2NSBDMjIuNTU4ODA3Nyw2Ljc5ODMwMjE1IDIyLjc1Mzk3MTcsNy4wNTc0OTM2NyAyMi45MTkxMDA0LDcuMjkxMDM1MzEgQzIzLjAxOTg0NDUsNy40MzM1MTc3NCAyMy4wODkyMDY0LDcuNTM3NDY1NjkgMjMuMTI2NTQyNSw3LjU5NjQ5ODcxIEwyMy4zMTE1Miw3Ljg4ODk3MTA1IEwyMy4xMjY0NjgzLDguMTgxMzk2NDUgQzIzLjA4OTEyMDMsOC4yNDA0MTUxNiAyMy4wMTk3MzYsOC4zNDQzNDg5MSAyMi45MTg5NjYxLDguNDg2ODE3MzEgQzIyLjc1Mzc4OTgsOC43MjAzNDMyOSAyMi41NTg1ODksOC45Nzk1MTk1IDIyLjMzMzk4MjQsOS4yNTc5NjUxNCBDMjEuNjk0MTE1MywxMC4wNTEyMTA5IDIwLjk0NDU3NzMsMTAuODQzNzgwNiAyMC4wODk3MDc1LDExLjU4NDM3NyBDMTcuNjI4MzkxOCwxMy43MTY2ODAxIDE0LjgwMjMzNzksMTUuMDAyMDI3IDExLjY1Njk2NjcsMTQuOTk5OTk3NyBDOC41MTE3NTg0OCwxNC45OTc5NjQxIDUuNzEwNTk1NTgsMTMuNzEyMDYyNSAzLjI5MTYwNDg4LDExLjU4MTQyMzUgQzIuNDQ5OTk4MjcsMTAuODQwMTM5MSAxLjcxNTA1OTU2LDEwLjA0Njg1MjkgMS4wOTAwNDgxNyw5LjI1Mjg3NTI1IEMwLjg3MDY0MDAzMiw4Ljk3NDE1MjA1IDAuNjgwMjk5NTA0LDguNzE0NzAxNDcgMC41MTk1MTE5NDYsOC40ODA5MDM0NCBDMC40MjEzNzYwNTcsOC4zMzgyMDU5NyAwLjM1Mzg4ODQ2Niw4LjIzNDA0NzUgMC4zMTc1NjcyOSw4LjE3NDgwNzMyIEwwLjE0MjI0MDA2OSw3Ljg4ODg0Njk3IEwwLjMxNzYwNDcwNCw3LjYwMjkwOTU3IEMwLjM1MzkyOTUxMiw3LjU0MzY4MDg2IDAuNDIxNDI0MDQ2LDcuNDM5NTMzNzMgMC41MTk1NjQ4NDksNy4yOTY4NDc0NCBDMC42ODAzNjQ1NDksNy4wNjMwNjE3OCAwLjg3MDcwNDUwNyw2LjgwMzYyMzI0IDEuMDkwMDk0MDMsNi41MjQ5MTE2NyBDMS43MTUwNTg1OCw1LjczMDk1OTIgMi40NDk4MTM5NCw0LjkzNzY5NTIxIDMuMjkxMDU5Myw0LjE5NjQyNzQzIEM1LjcxMzAyOTM0LDIuMDYyMjk1NzggOC41MTY5Njk2NSwwLjc3NTc1MDA0OCAxMS42NjQyODE2LDAuNzc3NzgwMTc3IFogTTExLjY2MzU3NTEsMS44NzE3OTY5MiBDOC44MTQwMzQ3NCwxLjg2OTk1ODg1IDYuMjUyMDE2MzUsMy4wNDU1MDIzNSA0LjAxNDMzMTUzLDUuMDE3MjUwMTEgQzMuMjI2MDE1MSw1LjcxMTg3OTI5IDIuNTM1NzgxNDIsNi40NTcwNzYzMiAxLjk0OTczNjk2LDcuMjAxNTg0ODcgQzEuNzU0MDc5MjgsNy40NTAxNDc2MSAxLjU4NDAzNzEyLDcuNjgxMTM5MTEgMS40NDAyMTA5Myw3Ljg4ODkxNTU1IEMxLjU4NDAwNzY2LDguMDk2NjcyOTkgMS43NTQwMjgyNiw4LjMyNzY0MzQ3IDEuOTQ5Njc2OTEsOC41NzYxODQwMSBDMi41MzU3MjY4MSw5LjMyMDY2NzMzIDMuMjI2MDkyODEsMTAuMDY1ODQyMiA0LjAxNDcxMTM4LDEwLjc2MDQ1NDggQzYuMjQ5NzM3MTYsMTIuNzI5MDU4MSA4LjgwOTQ5MzAzLDEzLjkwNDEzOTUgMTEuNjU3NjczMywxMy45MDU5ODEgQzE0LjUwNzk5NzQsMTMuOTA3ODE5OSAxNy4wOTUyNjU4LDEyLjczMTA3NzUgMTkuMzczMzYzMiwxMC43NTc1MDEzIEMyMC4xNzU5NDgxLDEwLjA2MjIwMDcgMjAuODgxMzQyMiw5LjMxNjMwOTMzIDIxLjQ4MjQ2NTcsOC41NzEwOTQxMSBDMjEuNjgxMzAzOSw4LjMyNDU5MzU0IDIxLjg1NDY1MjIsOC4wOTUzNDE3NyAyMi4wMDE4MjE3LDcuODg4ODI1NjQgQzIxLjg1NDcyMTQsNy42ODIzMzg0NCAyMS42ODE0Mzg5LDcuNDUzMTE5NzYgMjEuNDgyNjU3LDcuMjA2NjU0ODkgQzIwLjg4MTY0MzgsNi40NjE0NzI4NyAyMC4xNzYyMTYzLDUuNzE1NjExMjggMTkuMzczMzk4MSw1LjAyMDMzNDA3IEMxNy4wOTgyMDY5LDMuMDQ5OTE0NTUgMTQuNTEzMTE5MywxLjg3MzYzOTMxIDExLjY2MzU3NTEsMS44NzE3OTY5MiBaIE0xNi4wOTc1NjIxLDUuNjMxMzYxNiBDMTcuMzQ1MjAwNCw4LjA0NjAxMTMzIDE2LjM5NzE3OTgsMTEuMDE1NTI0IDEzLjk4MDgxMjksMTIuMjYzMjc1OSBDMTEuNTY2MDA0LDEzLjUwOTUwMTMgOC41OTYzNjg1OCwxMi41NjE0NDkzIDcuMzQ5OTExNjgsMTAuMTQ2NDkxMyBDNi4xMDM1NjkxMyw3LjczMDI3NDc4IDcuMDUwNzMyMDksNC43NjIzMjY3IDkuNDY2ODcwNTYsMy41MTQ2OTI3NSBDMTEuODgzMjUzNCwyLjI2ODQwMDUgMTQuODUxMzMxOCwzLjIxNTU5NzI2IDE2LjA5NzU2MjEsNS42MzEzNjE2IFogTTkuOTY4NTg5MzUsNC40ODY4ODE0MSBDOC4wODkzOTQ3Myw1LjQ1NzI1MDkzIDcuMzUyNzQ4MzUsNy43NjU1NDI0MyA4LjMyMjEzNTc0LDkuNjQ0ODQxMTIgQzkuMjkxNDM1NzMsMTEuNTIyODE5MiAxMS42MDEyMTg1LDEyLjI2MDIxNDEgMTMuNDc4OTc1NywxMS4yOTExNDg0IEMxNS4zNTg0OTkzLDEwLjMyMDYwOSAxNi4wOTU3OTY0LDguMDExMDMxOTUgMTUuMTI1NTQ5Miw2LjEzMzQyMDkzIEMxNC4xNTYyMjgsNC4yNTQyNTA4NiAxMS44NDc5Mzk3LDMuNTE3NTczMjcgOS45Njg1ODkzNSw0LjQ4Njg4MTQxIFogTTE0LjE1NDU3NDMsNi42MzQ0MjYyNiBDMTQuODQ2MjI3NSw3Ljk3NjY2ODY3IDE0LjMxOTk4MTMsOS42MjUyMzc0MyAxMi45NzkxMDIzLDEwLjMxODU5MyBDMTEuNjM3MDAzMSwxMS4wMTE2NjI5IDkuOTg3Nzk4MDgsMTAuNDg1NDI4MSA5LjI5NDQ1NzUsOS4xNDMzNTE2MyBDOC42MDExODQyMSw3LjgwMTQwNTQgOS4xMjc1NzM4NSw2LjE1MjM4NzE4IDEwLjQ2OTkyOTUsNS40NTkxODQ4OCBDMTEuODEyMDI4Nyw0Ljc2NjExNSAxMy40NjEyMzM3LDUuMjkyMzQ5OCAxNC4xNTQ1NzQzLDYuNjM0NDI2MjYgWiIgaWQ9Imktb3B0b21ldHJ5LWV5ZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
    this.hideEye = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMjQgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZXllLWhpZGUgPC90aXRsZT4KICAgIDxnIGlkPSJleWUtaGlkZS0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS42NjQyODE2LDEuNzc3NzgwMTggQzE0LjgwODEyNTcsMS43Nzk4MTI4OCAxNy42MzE1MTQ1LDMuMDY0NTIwNjkgMjAuMDg5NjA5OCw1LjE5MzM0MzQ2IEMyMC45NDQ3ODM4LDUuOTMzOTYzMjEgMjEuNjk0NDE1NCw2LjcyNjU2MjY0IDIyLjMzNDIyMDQsNy41MTk4NDE2NSBDMjIuNTU4ODA3Nyw3Ljc5ODMwMjE1IDIyLjc1Mzk3MTcsOC4wNTc0OTM2NyAyMi45MTkxMDA0LDguMjkxMDM1MzEgQzIzLjAxOTg0NDUsOC40MzM1MTc3NCAyMy4wODkyMDY0LDguNTM3NDY1NjkgMjMuMTI2NTQyNSw4LjU5NjQ5ODcxIEwyMy4zMTE1Miw4Ljg4ODk3MTA1IEwyMy4xMjY0NjgzLDkuMTgxMzk2NDUgQzIzLjA4OTEyMDMsOS4yNDA0MTUxNiAyMy4wMTk3MzYsOS4zNDQzNDg5MSAyMi45MTg5NjYxLDkuNDg2ODE3MzEgQzIyLjc1Mzc4OTgsOS43MjAzNDMyOSAyMi41NTg1ODksOS45Nzk1MTk1IDIyLjMzMzk4MjQsMTAuMjU3OTY1MSBDMjEuNjk0MTE1MywxMS4wNTEyMTA5IDIwLjk0NDU3NzMsMTEuODQzNzgwNiAyMC4wODk3MDc1LDEyLjU4NDM3NyBDMTcuNjI4MzkxOCwxNC43MTY2ODAxIDE0LjgwMjMzNzksMTYuMDAyMDI3IDExLjY1Njk2NjcsMTUuOTk5OTk3NyBDOC41MTE3NTg0OCwxNS45OTc5NjQxIDUuNzEwNTk1NTgsMTQuNzEyMDYyNSAzLjI5MTYwNDg4LDEyLjU4MTQyMzUgQzIuNDQ5OTk4MjcsMTEuODQwMTM5MSAxLjcxNTA1OTU2LDExLjA0Njg1MjkgMS4wOTAwNDgxNywxMC4yNTI4NzUyIEMwLjg3MDY0MDAzMiw5Ljk3NDE1MjA1IDAuNjgwMjk5NTA0LDkuNzE0NzAxNDcgMC41MTk1MTE5NDYsOS40ODA5MDM0NCBDMC40MjEzNzYwNTcsOS4zMzgyMDU5NyAwLjM1Mzg4ODQ2Niw5LjIzNDA0NzUgMC4zMTc1NjcyOSw5LjE3NDgwNzMyIEwwLjE0MjI0MDA2OSw4Ljg4ODg0Njk3IEwwLjMxNzYwNDcwNCw4LjYwMjkwOTU3IEMwLjM1MzkyOTUxMiw4LjU0MzY4MDg2IDAuNDIxNDI0MDQ2LDguNDM5NTMzNzMgMC41MTk1NjQ4NDksOC4yOTY4NDc0NCBDMC42ODAzNjQ1NDksOC4wNjMwNjE3OCAwLjg3MDcwNDUwNyw3LjgwMzYyMzI0IDEuMDkwMDk0MDMsNy41MjQ5MTE2NyBDMS43MTUwNTg1OCw2LjczMDk1OTIgMi40NDk4MTM5NCw1LjkzNzY5NTIxIDMuMjkxMDU5Myw1LjE5NjQyNzQzIEM1LjcxMzAyOTM0LDMuMDYyMjk1NzggOC41MTY5Njk2NSwxLjc3NTc1MDA1IDExLjY2NDI4MTYsMS43Nzc3ODAxOCBaIE0xMS42NjM1NzUxLDIuODcxNzk2OTIgQzguODE0MDM0NzQsMi44Njk5NTg4NSA2LjI1MjAxNjM1LDQuMDQ1NTAyMzUgNC4wMTQzMzE1Myw2LjAxNzI1MDExIEMzLjIyNjAxNTEsNi43MTE4NzkyOSAyLjUzNTc4MTQyLDcuNDU3MDc2MzIgMS45NDk3MzY5Niw4LjIwMTU4NDg3IEMxLjc1NDA3OTI4LDguNDUwMTQ3NjEgMS41ODQwMzcxMiw4LjY4MTEzOTExIDEuNDQwMjEwOTMsOC44ODg5MTU1NSBDMS41ODQwMDc2Niw5LjA5NjY3Mjk5IDEuNzU0MDI4MjYsOS4zMjc2NDM0NyAxLjk0OTY3NjkxLDkuNTc2MTg0MDEgQzIuNTM1NzI2ODEsMTAuMzIwNjY3MyAzLjIyNjA5MjgxLDExLjA2NTg0MjIgNC4wMTQ3MTEzOCwxMS43NjA0NTQ4IEM2LjI0OTczNzE2LDEzLjcyOTA1ODEgOC44MDk0OTMwMywxNC45MDQxMzk1IDExLjY1NzY3MzMsMTQuOTA1OTgxIEMxNC41MDc5OTc0LDE0LjkwNzgxOTkgMTcuMDk1MjY1OCwxMy43MzEwNzc1IDE5LjM3MzM2MzIsMTEuNzU3NTAxMyBDMjAuMTc1OTQ4MSwxMS4wNjIyMDA3IDIwLjg4MTM0MjIsMTAuMzE2MzA5MyAyMS40ODI0NjU3LDkuNTcxMDk0MTEgQzIxLjY4MTMwMzksOS4zMjQ1OTM1NCAyMS44NTQ2NTIyLDkuMDk1MzQxNzcgMjIuMDAxODIxNyw4Ljg4ODgyNTY0IEMyMS44NTQ3MjE0LDguNjgyMzM4NDQgMjEuNjgxNDM4OSw4LjQ1MzExOTc2IDIxLjQ4MjY1Nyw4LjIwNjY1NDg5IEMyMC44ODE2NDM4LDcuNDYxNDcyODcgMjAuMTc2MjE2Myw2LjcxNTYxMTI4IDE5LjM3MzM5ODEsNi4wMjAzMzQwNyBDMTcuMDk4MjA2OSw0LjA0OTkxNDU1IDE0LjUxMzExOTMsMi44NzM2MzkzMSAxMS42NjM1NzUxLDIuODcxNzk2OTIgWiBNMTYuMDk3NTYyMSw2LjYzMTM2MTYgQzE3LjM0NTIwMDQsOS4wNDYwMTEzMyAxNi4zOTcxNzk4LDEyLjAxNTUyNCAxMy45ODA4MTI5LDEzLjI2MzI3NTkgQzExLjU2NjAwNCwxNC41MDk1MDEzIDguNTk2MzY4NTgsMTMuNTYxNDQ5MyA3LjM0OTkxMTY4LDExLjE0NjQ5MTMgQzYuMTAzNTY5MTMsOC43MzAyNzQ3OCA3LjA1MDczMjA5LDUuNzYyMzI2NyA5LjQ2Njg3MDU2LDQuNTE0NjkyNzUgQzExLjg4MzI1MzQsMy4yNjg0MDA1IDE0Ljg1MTMzMTgsNC4yMTU1OTcyNiAxNi4wOTc1NjIxLDYuNjMxMzYxNiBaIE05Ljk2ODU4OTM1LDUuNDg2ODgxNDEgQzguMDg5Mzk0NzMsNi40NTcyNTA5MyA3LjM1Mjc0ODM1LDguNzY1NTQyNDMgOC4zMjIxMzU3NCwxMC42NDQ4NDExIEM5LjI5MTQzNTczLDEyLjUyMjgxOTIgMTEuNjAxMjE4NSwxMy4yNjAyMTQxIDEzLjQ3ODk3NTcsMTIuMjkxMTQ4NCBDMTUuMzU4NDk5MywxMS4zMjA2MDkgMTYuMDk1Nzk2NCw5LjAxMTAzMTk1IDE1LjEyNTU0OTIsNy4xMzM0MjA5MyBDMTQuMTU2MjI4LDUuMjU0MjUwODYgMTEuODQ3OTM5Nyw0LjUxNzU3MzI3IDkuOTY4NTg5MzUsNS40ODY4ODE0MSBaIE0xNC4xNTQ1NzQzLDcuNjM0NDI2MjYgQzE0Ljg0NjIyNzUsOC45NzY2Njg2NyAxNC4zMTk5ODEzLDEwLjYyNTIzNzQgMTIuOTc5MTAyMywxMS4zMTg1OTMgQzExLjYzNzAwMzEsMTIuMDExNjYyOSA5Ljk4Nzc5ODA4LDExLjQ4NTQyODEgOS4yOTQ0NTc1LDEwLjE0MzM1MTYgQzguNjAxMTg0MjEsOC44MDE0MDU0IDkuMTI3NTczODUsNy4xNTIzODcxOCAxMC40Njk5Mjk1LDYuNDU5MTg0ODggQzExLjgxMjAyODcsNS43NjYxMTUgMTMuNDYxMjMzNyw2LjI5MjM0OTggMTQuMTU0NTc0Myw3LjYzNDQyNjI2IFoiIGlkPSJpLW9wdG9tZXRyeS1leWUiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgPGxpbmUgeDE9IjIzLjU1NTU1NTYiIHkxPSIwLjQ0NDQ0NDQ0NCIgeDI9IjAuNDQ0NDQ0NDQ0IiB5Mj0iMTQuNjY2NjY2NyIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMjMuNTU1NTU1NiIgeTE9IjEuMzMzMzMzMzMiIHgyPSIwLjQ0NDQ0NDQ0NCIgeTI9IjE1LjU1NTU1NTYiIGlkPSJMaW5lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvbGluZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
    this.validateDOB = () => {
      let inputs = this.host.querySelectorAll("input");
      if (inputs[0].value.length === 0) { //Emits empty value verror 
        this.getError(this.input.emptyErrorText, "emptyError");
      }
      else if (!inputs[0].checkValidity() || !this.validateDate(inputs[0].value, "MM/DD/YYYY")) { //emits invalid error
        this.getError(this.input.errorText, "error");
      }
      else {
        this.errorTxt = [];
        inputs[0].setAttribute("aria-invalid", "false");
        this.inputValidated.emit(inputs[0].value);
        this.showError = false;
      }
    };
    this.getError = (errorStr, errorType) => {
      let inputs = this.host.querySelectorAll("input");
      this.errorTxt = [
        ...this.errorTxt,
        errorStr
      ];
      inputs[0].setAttribute("aria-invalid", "true");
      this.inputValidated.emit(errorType);
      this.showError = true;
    };
    this.validate = () => {
      let inputs = this.host.querySelectorAll("input");
      if (inputs[0].value.length === 0) { //emits empty value error
        this.getError(this.input.emptyErrorText, "emptyError");
      }
      else {
        if (!inputs[0].checkValidity()) { //emits invalid error
          this.getError(this.input.errorText, "error");
        }
        else {
          this.errorTxt = [];
          inputs[0].setAttribute("aria-invalid", "false");
          this.inputValidated.emit(inputs[0].value);
        }
      }
    };
    this.validateInput = () => {
      this.errorTxt = [];
      if (this.input.type === "dob") {
        this.validateDOB();
      }
      else if (this.input.type === "password") {
        this.validatePassword();
      }
      else {
        this.validate();
      }
    };
  }
  /**
   * @Method Method to show iniline error
   */
  async showInlineError() {
    this.errorTxt = [
      ...this.errorTxt,
      this.input.errorText
    ];
    this.showError = true;
  }
  componentWillLoad() {
    this._validator = getValidator(this.validator);
  }
  componentWillUpdate() {
    this._validator = getValidator(this.validator);
  }
  validateDate(date, format) {
    return dayjs_min(date, format).format(format) === date;
  }
  async validatePassword() {
    let inputs = this.host.querySelectorAll("input");
    if (inputs[0].value.length === 0) { //emits empty value error
      this.getError(this.input.emptyErrorText, "emptyError");
    }
    else {
      //Will call custom validator
      this.isValid = await this._validator.validate(inputs[0].value);
      if (inputs[0].value.length < 8) {
        this.getError(this.input.minLengthError, "minLengthError");
      }
      if (!this.isValid) {
        this.getError(this.input.customError, "customError");
      }
      if (this.isValid && inputs[0].value.length >= 8 && inputs[0].checkValidity()) {
        this.errorTxt = [];
        inputs[0].setAttribute("aria-invalid", "false");
        this.inputValidated.emit(inputs[0].value);
      }
    }
  }
  ;
  handleChange(event) {
    if (this.input.type === "dob") {
      if (event.target.value.length === 8) {
        let value = event.target.value;
        event.target.value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
      }
      else {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }
    }
  }
  showPassword(event) {
    if (event.keyCode === 13 || event.keyCode === 32 || event.type === 'click') {
      let inputField;
      let eyeImage;
      let eyeButton;
      //For running it in local
      //const inputField = document.querySelector('cvs-alert-banner').shadowRoot.getElementById('verify-dob');
      //const eyeImage = document.querySelector('cvs-alert-banner').shadowRoot.getElementById('eye')
      if (this.input.parentElement !== undefined) {
        inputField = document.querySelector(this.input.parentElement).shadowRoot.getElementById(this.input.id);
        eyeImage = document.querySelector(this.input.parentElement).shadowRoot.activeElement.getElementsByTagName('img')[0];
        eyeButton = document.querySelector(this.input.parentElement).shadowRoot.activeElement;
      }
      else {
        inputField = document.querySelector('cvs-input-with-validation').getElementsByTagName('input')[0];
        eyeImage = document.querySelector('cvs-input-with-validation').getElementsByTagName('img')[0];
        eyeButton = document.querySelector('cvs-input-with-validation').getElementsByTagName('div')[0];
      }
      this.showPwd = !this.showPwd;
      if (this.showPwd) {
        const tagObject = {
          linkName: 'custom: account: forgot password: password show and hide',
        };
        setTimeout(() => {
          this.triggerLinkTag(tagObject);
        }, 1000);
      }
      eyeImage['src'] = this.showPwd ? this.hideEye : this.showEye;
      eyeImage['alt'] = this.showPwd ? 'Hide eye icon' : 'Show eye icon';
      eyeButton['ariaLabel'] = this.showPwd ? 'Hide password' : 'Show password';
      this.showPwd ? inputField['type'] = 'text' : inputField['type'] = 'password';
    }
  }
  triggerLinkTag(tagObject) {
    this.analyticsData = {
      type: 'link',
      payload: {
        link_name: tagObject === null || tagObject === void 0 ? void 0 : tagObject.linkName,
        field_errors: tagObject === null || tagObject === void 0 ? void 0 : tagObject.fieldErrors
      }
    };
    this.cvsAnalyticsEvent.emit(this.analyticsData);
  }
  render() {
    if (this.inputModeArray.includes(this.input.inputMode)) {
      this.inputMode = this.input.inputMode;
    }
    return (h(Host, null, h("cvs-analytics", { data: this.analyticsData }), h("label", { id: this.input.id + "-label", htmlFor: this.input.id }, this.label), this.helperText && (h("div", null, h("div", { id: this.input.id + "__helper", class: "helperText" }, this.helperText))), h("input", { id: this.input.id, type: this.input.type, name: this.input.name, "aria-describedby": this.input.id + "__helper" + " " + this.input.id + "__error", value: this.value, onInput: (e) => this.handleChange(e), required: this.input.required, pattern: this.input.regex, minlength: this.input.minLength, maxlength: this.input.maxLength, inputmode: this.inputMode, "aria-required": this.input.required.toString(), autocomplete: this.input.autocomplete, class: {
        'error': this.showError
      } }), h("div", { class: "eye-icon", role: "button", "aria-label": "Show password", onClick: this.showPassword.bind(this), onKeyPress: this.showPassword.bind(this), tabindex: "0" }, this.input.type === 'password' && (h("img", { id: "eye", src: this.showEye, alt: "Show eye icon" }))), h("div", { id: this.input.id + "__error" }, this.errorTxt.length > 0 && this.errorTxt.map((errorString) => (h("div", { class: 'inline-err-div' }, h("div", { class: 'inline-err-img' }), h("div", { role: "region", "aria-live": "polite", class: "textinput-error" }, errorString))))), this.buttonTxt && (h("button", { type: "button", onClick: () => {
        this.validateInput();
      } }, this.buttonTxt))));
  }
  get host() { return getElement(this); }
};
CvsInputWithValidation.style = cvsInputWithValidationCss;

export { CvsInputWithValidation as cvs_input_with_validation };
