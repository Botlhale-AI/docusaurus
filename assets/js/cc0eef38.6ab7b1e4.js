"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9203],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_vU9c",u="tabItemActive_cw6a";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,d=e.className,h=r.Children.toArray(e.children),m=null!=c?c:h.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),b=k.tabGroupChoices,y=k.setTabGroupChoices,v=(0,r.useState)(f),g=v[0],A=v[1],T=[];if(null!=p){var P=b[p];null!=P&&P!==g&&m.some((function(e){return e.value===P}))&&A(P)}var N=function(e){var t=e.currentTarget,n=T.indexOf(t),r=m[n].value;A(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.target)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.target)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9715:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),u=["components"],s={},c="Authentication",p={unversionedId:"API/Authentication",id:"API/Authentication",isDocsHomePage:!1,title:"Authentication",description:"The Botlhale API uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. You can get your API keys by going to Profile > API on the platform.",source:"@site/docs/API/1 - Authentication.md",sourceDirName:"API",slug:"/API/Authentication",permalink:"/docs/API/Authentication",editUrl:"https://botlhale-ai.github.io/documentation/docs/API/1 - Authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart Guide",permalink:"/docs/API/Quickstart"},next:{title:"Response Codes",permalink:"/docs/API/Errors"}},d=[{value:"What is Bearer Authentication?",id:"what-is-bearer-authentication",children:[]},{value:"Generate A Bearer Token <code>POST</code>",id:"generate-a-bearer-token-post",children:[{value:"Request Example",id:"request-example",children:[]}]},{value:"API Auth",id:"api-auth",children:[]}],h={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The Botlhale API uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. You can get your API keys by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile > API")," on the platform."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can get your API keys by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile > API")," on the platform.")),(0,o.kt)("p",null,"Authentication to the all API endpoints is performed via Bearer Authentication. To perform Bearer Authentication you first need to provide your API key as the basic auth username value and password to ",(0,o.kt)("inlineCode",{parentName:"p"},"generateAuthToken")," endpoint and use ",(0,o.kt)("inlineCode",{parentName:"p"},"IdToken")," in the response as Bearer token for all other endpoints. "),(0,o.kt)("h2",{id:"what-is-bearer-authentication"},"What is Bearer Authentication?"),(0,o.kt)("p",null,"Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The name ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer authentication")," can be understood as ",(0,o.kt)("inlineCode",{parentName:"p"},"give access to the bearer of this token.")," The bearer token is a cryptic string, usually generated by the server in response to a login request. The client must send this token in the Authorization header when making requests to protected resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Authorization: Bearer <token>\n")),(0,o.kt)("p",null,"All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,o.kt)("h2",{id:"generate-a-bearer-token-post"},"Generate A Bearer Token ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hxyzps://app-dev-botlhale.xyz/generateAuthToken\n")),(0,o.kt)("p",null,"Generates Bearer Auth Token. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Auth Token"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ",(0,o.kt)("br",null),"Required. Text Message from the user to the bot.")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"request-example"},"Request Example"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nurl = "https://app-dev.botlhale.xyz/generateAuthToken"\n\npayload={\'REFRESH_TOKEN\': <REFRESH_TOKEN>,}\nfiles=[]\n\nheaders = {}\n\nresponse = requests.request("POST", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n'))),(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var formdata = new FormData();\nformdata.append(\"REFRESH_TOKEN\", REFRESH_TOKEN);\n\nvar requestOptions = {\nmethod: 'POST',\nbody: formdata,\nredirect: 'follow'\n};\n\nfetch(\"https://app-dev.botlhale.xyz/generateAuthToken\", requestOptions)\n.then(response => response.text())\n.then(result => console.log(result))\n.catch(error => console.log('error', error));   \n"))),(0,o.kt)(l.Z,{value:"js1",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fsxyz require('fs');\n\nvar options = {\n'method': 'POST',\n'hostname': 'https://app-dev.botlhale.xyz',\n'path': '/generateAuthToken',\n'headers': {\n},\n'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\nvar chunks = [];\n\nres.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n});\n\nres.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n});\n\nres.on(\"error\", function (error) {\n    console.error(error);\n});\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"REFRESH_TOKEN\\\"\\r\\n\\r\\n<REFRESH_TOKEN>.ai\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();  \n"))),(0,o.kt)(l.Z,{value:"js2",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request POST 'https://dev-botlhale.io/generateAuthToken' \\\n--form 'REFRESH_TOKEN=<REFRESH_TOKEN>'\n")))),(0,o.kt)("h2",{id:"api-auth"},"API Auth"),(0,o.kt)("p",null,"Include ",(0,o.kt)("inlineCode",{parentName:"p"},"IdToken")," as Bearer Token in headers for Authorization on other API endpoints. All API endpoints require a Bearer Token in header for example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'headers = {"Authorization": "Bearer <IdToken>"}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'-H "Authorization: Bearer <IdToken>"\n')))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);