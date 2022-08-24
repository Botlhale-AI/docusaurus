"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1376],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),s="tabItem_vU9c",u="tabItemActive_cw6a";var i=function(e){var t,n=e.lazy,a=e.block,i=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=i?i:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),b=g.tabGroupChoices,v=g.setTabGroupChoices,y=(0,r.useState)(h),k=y[0],T=y[1],x=[];if(null!=p){var P=b[p];null!=P&&P!==k&&f.some((function(e){return e.value===P}))&&T(P)}var N=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;T(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,l,s,i;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,s=l.innerHeight,i=l.innerWidth,n>=0&&o<=i&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2763:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5064),s=n(8215),u=["components"],i={},c="Text to Speech",p={unversionedId:"API/Speech APIs/TTS",id:"API/Speech APIs/TTS",isDocsHomePage:!1,title:"Text to Speech",description:"TTS POST",source:"@site/docs/API/Speech APIs/1 - TTS.md",sourceDirName:"API/Speech APIs",slug:"/API/Speech APIs/TTS",permalink:"/documentation/docs/API/Speech APIs/TTS",editUrl:"https://docs.botlhale.xyz/documentation/docs/API/Speech APIs/1 - TTS.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automatic Speech Recogniton",permalink:"/documentation/docs/API/Speech APIs/ASR"},next:{title:"Supported Languages",permalink:"/documentation/docs/API/Speech APIs/Languages"}},d=[{value:"TTS <code>POST</code>",id:"tts-post",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-to-speech"},"Text to Speech"),(0,o.kt)("h2",{id:"tts-post"},"TTS ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://app-dev.botlhale.xyz/tts\n")),(0,o.kt)("p",null,"This endpoint handles single text to speech conversion."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TextMsg"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ",(0,o.kt)("br",null),"Required. Text Message from the user to the bot.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ",(0,o.kt)("br",null)," Required. This is the language the user is using to interact with the bot. See ",(0,o.kt)("a",{parentName:"td",href:"/documentation/docs/API/Speech%20APIs/Languages"},"list of supported languages")," for supported languages and codes.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," Note","!"," You need to Include ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See how to\n","[Generate Auth Token]")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"request-example"},"Request Example"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"hhttps://app-dev.botlhale.xyz/tts\"\n\npayload={'LanguageCode': 'xh-ZA',\n'TextMsg': 'Molo Athi'}\nfiles=[\n\n]\nheaders = {}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(s.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://app-dev.botlhale.xyz/tts' \\\n--form 'LanguageCode=\"xh-ZA\"' \\\n--form 'TextMsg=\"hello\"'\n"))),(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("LanguageCode", "xh-ZA");\nformdata.append("TextMsg", "hello");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\'\n};\n\nfetch("https://app-dev.botlhale.xyz/tts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(s.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fs = require('fs');\n\nvar options = {\n  'method': 'POST',\n  'hostname': 'https://app-dev.botlhale.xyz',\n  'path': '/tts',\n  'headers': {\n  },\n  'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"LanguageCode\\\"\\r\\n\\r\\nIsiXhosa\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"TextMsg\\\"\\r\\n\\r\\nhello\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();\n")))),(0,o.kt)("h4",{id:"response-body"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "DateReceived": "01/05/2021 15:38:35",\n    "LanguageCode": "xh-ZA",\n    "SpeechResponseURL": "<URL>",\n    "TextMsg": "Molo Athi"\n}\n')))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);