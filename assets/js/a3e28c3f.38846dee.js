"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9660],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_vU9c",l="tabItemActive_cw6a";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,p=e.values,d=e.groupId,c=e.className,m=a.Children.toArray(e.children),f=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),k=g.tabGroupChoices,v=g.setTabGroupChoices,b=(0,a.useState)(h),y=b[0],N=b[1],A=[];if(null!=d){var S=k[d];null!=S&&S!==y&&f.some((function(e){return e.value===S}))&&N(S)}var T=function(e){var t=e.currentTarget,n=A.indexOf(t),a=f[n].value;N(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,r,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.target)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.target)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:P,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4705:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),s=n(8215),l=["components"],u={},p="Automatic Speech Recogniton",d={unversionedId:"APIs/Rest APIs/Speech APIs/ASR",id:"APIs/Rest APIs/Speech APIs/ASR",isDocsHomePage:!1,title:"Automatic Speech Recogniton",description:"ASR POST",source:"@site/docs/1 - APIs/Rest APIs/Speech APIs/0 - ASR.md",sourceDirName:"1 - APIs/Rest APIs/Speech APIs",slug:"/APIs/Rest APIs/Speech APIs/ASR",permalink:"/docs/APIs/Rest APIs/Speech APIs/ASR",editUrl:"https://botlhale-ai.github.io/documentation/docs/1 - APIs/Rest APIs/Speech APIs/0 - ASR.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate APIs",permalink:"/docs/APIs/Rest APIs/translate"},next:{title:"Text to Speech",permalink:"/docs/APIs/Rest APIs/Speech APIs/TTS"}},c=[{value:"ASR <code>POST</code>",id:"asr-post",children:[]}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automatic-speech-recogniton"},"Automatic Speech Recogniton"),(0,o.kt)("h2",{id:"asr-post"},"ASR ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/asr\n")),(0,o.kt)("p",null,"This endpoint handles single speech to text conversion. This API returns a text transcript of the audio file provided. This API supports audio clips of up to 5 minutes."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SpeechFile"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"File")," ",(0,o.kt)("strong",{parentName:"td"},"Required.")," Binary audio file of the user's message.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SampleRate"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Number")," ",(0,o.kt)("strong",{parentName:"td"},"Required.")," The sample rate of the supplied audio clip in hertz e.g 8000 for 8kHz")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")," ",(0,o.kt)("strong",{parentName:"td"},"Required.")," This is the language spoken in the supplied audio clip. We use BCP-47 language tags. See ",(0,o.kt)("a",{parentName:"td",href:"/docs/APIs/Rest%20APIs/Speech%20APIs/Languages"},"list of supported languages")," for supported languages and codes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Diarization ",(0,o.kt)("inlineCode",{parentName:"td"},"coming soon")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean"),"  ",(0,o.kt)("strong",{parentName:"td"},"Optional.")," Speaker diarization is used to identify different speakers in the clip as well as when the different speakers are speaking  ",(0,o.kt)("em",{parentName:"td"}," ",(0,o.kt)("strong",{parentName:"em"},"False")," - Default, Speaker diarization is enabled.  ")," ",(0,o.kt)("strong",{parentName:"td"},"True")," - Speaker diarization is enabled. ",(0,o.kt)("inlineCode",{parentName:"td"},"Note! This will have an impact on the cost of the request"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LanguageId  ",(0,o.kt)("inlineCode",{parentName:"td"},"coming soon")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean")," ",(0,o.kt)("strong",{parentName:"td"},"Optional.")," This is used to automatically detect the language spoken on the audio clip. This is done at sentence level. When this is enabled, the provided LanguageCode will be ignored.",(0,o.kt)("em",{parentName:"td"}," ",(0,o.kt)("strong",{parentName:"em"},"False")," - Default, Language identification is enabled. ")," ",(0,o.kt)("strong",{parentName:"td"},"True")," - Language identification is enabled. ",(0,o.kt)("inlineCode",{parentName:"td"},"Note! This will have an impact on the cost of the request"))))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"supported-formats"},"Supported formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"File Type")," - We currently only support ",(0,o.kt)("strong",{parentName:"p"},"wav, amr, flac and ogg."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Sample Rate")," - We support all sample rates between 8000Hz and 48000 Hz. If you can choose the sample rate of the source, record the audio at 16000 Hz. This is because sample rates below that may impair the accuracy of our models and sample rates above 16000 Hz have no significant impact on the accuracy of our models.  "))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to Include ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See how to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/APIs/Authentication#generate-a-bearer-token-post"},"Generate Auth Token"),"\ncodes."))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"request-example"},"Request Example"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nurl = \"https://api.botlhale.xyz/asr\"\n\npayload={'LanguageCode': 'zu-ZA',\n'SampleRate': '16000'}\n\nfiles=[\n  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_V5v5DS992s.wav',open('mPMBv3Y3c/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav','rb'),'audio/wav'))\n]\n\nheaders = {\n  'Authorization': 'Bearer <IdToken>'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n"))),(0,o.kt)(s.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request POST 'https://api.botlhale.xyz/asr' \\\n--header 'Authorization: Bearer <IdToken>' \\\n--form 'SpeechFile=@\"mPMBv3Y3c/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav\"' \\\n--form 'LanguageCode=\"zu-ZA\"'\\\n--form 'SampleRate=\"16000\"'\n"))),(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer <IdToken>");\n\nvar formdata = new FormData();\nformdata.append("SpeechFile", fileInput.files[0], "[PROXY]");\nformdata.append("LanguageCode", "zu-ZA");\nformdata.append("SampleRate", "16000");\n\nvar requestOptions = {\n  method: \'POST\',\n  headers: myHeaders,\n  body: formdata,\n  redirect: \'follow\'\n};\n\nfetch("https://api.botlhale.xyz/asr", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,o.kt)(s.Z,{value:"nodejs",label:"Node JS - Native",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fs = require('fs');\n\nvar options = {\n  'method': 'POST',\n  'hostname': 'https://api.botlhale.xyz',\n  'path': '/asr',\n  'headers': {\n    'Authorization': 'Bearer <IdToken>'\n  },\n  'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"LanguageCode\\\"\\r\\n\\r\\nzu-ZA\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"SpeechFile\\\"; filename=\\\"[PROXY]\\\"\\r\\nContent-Type: \\\"{Insert_File_Content_Type}\\\"\\r\\n\\r\\n\" + fs.readFileSync('VPIoG_uMJ/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav') + \"\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"SampleRate\\\"\\r\\n\\r\\n16000\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();\n")))),(0,o.kt)("h4",{id:"response-body"},"Response body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "DateReceived": "01/05/2021 15:39:41",\n    "LanguageCode": "zu-ZA",\n    "Transcription": "Siyabonga"\n}\n')))}f.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);