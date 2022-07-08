"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2719],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s="Response Codes",d={unversionedId:"API/Errors",id:"API/Errors",isDocsHomePage:!1,title:"Response Codes",description:"Botlhale AI uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Botlhale's servers (these are rare).",source:"@site/docs/API/2 - Errors.md",sourceDirName:"API",slug:"/API/Errors",permalink:"/documentation/docs/API/Errors",editUrl:"https://botlhale-ai.github.io/docusaurus/docs/API/2 - Errors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/documentation/docs/API/Authentication"},next:{title:"Automatic Speech Recogniton",permalink:"/documentation/docs/API/Speech APIs/ASR"}},u=[{value:"Successful execution",id:"successful-execution",children:[]},{value:"Error Handling",id:"error-handling",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"response-codes"},"Response Codes"),(0,o.kt)("p",null,"Botlhale AI uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Botlhale's servers (these are rare)."),(0,o.kt)("h2",{id:"successful-execution"},"Successful execution"),(0,o.kt)("p",null,"Operations that execute successfully will return 2xx codes, and, where appropriate, will return the information requested directly in the response body. The table below shows the typical response codes, entities and headers used for the various HTTP verbs supported by the APIs."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"HTTP Status Code Summary"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"200 - OK")),(0,o.kt)("td",{parentName:"tr",align:null},"Everything worked as expected.")))),(0,o.kt)("h2",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"Operations that result in an error due to a problem on the client's part (eg invalid input) will return 4xx codes. Operations that result in an error due to a problem in the Botlhale AI server will return 5xx codes."),(0,o.kt)("p",null,"Where a standard HTTP error is suffiently descriptive, e.g. 401 (Not Authorized) or 404 (Not Found), the response body will be empty. For other cases, we will use the generic response code for client error (400), and the response will include an error entity that gives further details about the error, including an application error code and a human readable error description. The format of this error entity is below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"HTTP Status Code Summary"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"400 - Bad Request")),(0,o.kt)("td",{parentName:"tr",align:null},"The request was unacceptable, often due to missing a required parameter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"401 - Unauthorized")),(0,o.kt)("td",{parentName:"tr",align:null},"No valid API key provided.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"402 - Request Failed")),(0,o.kt)("td",{parentName:"tr",align:null},"The parameters were valid but the request failed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"403 - Forbidden")),(0,o.kt)("td",{parentName:"tr",align:null},"The API key doesn't have permissions to perform the request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"404 - Not Found")),(0,o.kt)("td",{parentName:"tr",align:null},"The requested resource doesn't exist.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"409 - Conflict")),(0,o.kt)("td",{parentName:"tr",align:null},"The request conflicts with another request (perhaps due to using the same idempotent key).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"429 - Too Many Requests")),(0,o.kt)("td",{parentName:"tr",align:null},"Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"500, 502, 503, 504 - Server Errors")),(0,o.kt)("td",{parentName:"tr",align:null},"Something went wrong on Botlhale's end (these are rare).")))))}p.isMDXComponent=!0}}]);