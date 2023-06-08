"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4800],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7294),r=t(9443);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(6010),i="tabItem_vU9c",l="tabItemActive_cw6a";var p=function(e){var n,t=e.lazy,r=e.block,p=e.defaultValue,u=e.values,d=e.groupId,c=e.className,m=a.Children.toArray(e.children),h=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,k=s(),f=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,a.useState)(g),v=N[0],b=N[1],A=[];if(null!=d){var _=f[d];null!=_&&_!==v&&h.some((function(e){return e.value===_}))&&b(_)}var T=function(e){var n=e.currentTarget,t=A.indexOf(n),a=h[t].value;b(a),null!=d&&(y(d,a),setTimeout((function(){var e,t,a,r,s,o,i,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,s=e.right,o=window,i=o.innerHeight,p=o.innerWidth,t>=0&&s<=p&&r<=i&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.target)+1;t=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.target)-1;t=A[r]||A[A.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},c)},h.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===n}),key:n,ref:function(e){return A.push(e)},onKeyDown:I,onFocus:T,onClick:T},null!=t?t:n)}))),t?(0,a.cloneElement)(m.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},1651:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),o=t(5064),i=t(8215),l=["components"],p={},u="Speech-to-Text API: Asynchronous Request",d={unversionedId:"APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/long ASR",id:"APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/long ASR",isDocsHomePage:!1,title:"Speech-to-Text API: Asynchronous Request",description:"Asynchronous recognition requests are another means of performing recognition on speech audio data. This request type requires you to first upload the audio file to our server for the asynchronous process to start. The asynchronous request initiates an asynchronous operation  and returns this operation immediately. Asynchronous speech recognition can be used for audio data with a length of up to 400 minutes.",source:"@site/docs/1 - APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/1 - long ASR.md",sourceDirName:"1 - APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton",slug:"/APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/long ASR",permalink:"/docs/APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/long ASR",editUrl:"https://botlhale-ai.github.io/documentation/docs/1 - APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/1 - long ASR.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Speech-to-Text API: Synchronous Request",permalink:"/docs/APIs/Rest APIs/Speech APIs/Automatic Speech Recogniton/ASR"},next:{title:"Platform Tutorials",permalink:"/docs/Tutorials/Platform Tutorials"}},c=[{value:"ASR Async upload <code>POST</code>",id:"asr-async-upload-post",children:[{value:"Upload via Presigned URL",id:"upload-via-presigned-url",children:[]}]},{value:"ASR Async get status <code>GET</code>",id:"asr-async-get-status-get",children:[]},{value:"ASR Async get data <code>GET</code>",id:"asr-async-get-data-get",children:[]}],m={toc:c};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"speech-to-text-api-asynchronous-request"},"Speech-to-Text API: Asynchronous Request"),(0,s.kt)("p",null,"Asynchronous recognition requests are another means of performing recognition on speech audio data. This request type requires you to first upload the audio file to our server for the asynchronous process to start. The asynchronous request initiates an asynchronous operation  and returns this operation immediately. Asynchronous speech recognition can be used for audio data with a length of up to 400 minutes."),(0,s.kt)("h2",{id:"asr-async-upload-post"},"ASR Async upload ",(0,s.kt)("inlineCode",{parentName:"h2"},"POST")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/asr/async/upload\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You need to include an ",(0,s.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See the ",(0,s.kt)("a",{parentName:"p",href:"../1%20-%20Authentication.md#generate-a-bearer-token-post"},"Authentication")," page of this documentation for information on how to generate authentication token codes."))),(0,s.kt)("p",null,"This endpoint generates a presigned URL that allows the user to upload a speech file for the async ASR request. This endpoint returns a presigned URL and the auto-generated filename."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,s.kt)("th",{parentName:"tr",align:null},"File Type"),(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"OrgID"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"String")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"Organisation ID")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"SampleRate"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Number")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"The sample rate of the supplied audio clip in hertz, for example, 8kHz rendered as 8 000")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"String")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Optional")),(0,s.kt)("td",{parentName:"tr",align:null},"This is the language spoken in the supplied audio clip. We use BCP-47 language tags. ",(0,s.kt)("br",null),"See the ",(0,s.kt)("a",{parentName:"td",href:"2%20-%20Languages.md"},"Supported Languages")," page for a list of supported languages and codes. If this information is not provided, the language is automatically detected. This is done at sentence level.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Diarization"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Optional")),(0,s.kt)("td",{parentName:"tr",align:null},"Speaker diarization is used to identify the different speakers in an audio clip, as well as when the different speakers are speaking. Valid values are as follows: ",(0,s.kt)("br",null),(0,s.kt)("em",{parentName:"td"},(0,s.kt)("strong",{parentName:"em"},"False")," - Default, Speaker diarization is disabled.")," ",(0,s.kt)("br",null),(0,s.kt)("em",{parentName:"td"},(0,s.kt)("strong",{parentName:"em"},"True")," - Speaker diarization is enabled."))))),(0,s.kt)("h4",{id:"request-example"},"Request Example"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nurl = \"https://api.botlhale.xyz/asr/async/upload\"\n\npayload={\n  'OrgID': '<OrgID>',\n  'LanguageCode': 'zu-ZA',\n  'SampleRate': '16000', \n  'Diarization': True,\n  }\n\nfiles=[\n\n]\n\nheaders = {\n  'Authorization': 'Bearer <IdToken>'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.json())\n"))),(0,s.kt)(i.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request POST 'https://api.botlhale.xyz/asr/async/upload' \\\n--header 'Authorization: Bearer <IdToken>' \\\n--form 'OrgID=\"<OrgID>\"' \\\n--form 'LanguageCode=\"zu-ZA\"' \\\n--form 'SampleRate=\"16000\"' \\\n--form 'Diarization=\"True\"'\n"))),(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'var myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer <IdToken>");\n\nvar formdata = new FormData();\nformdata.append("OrgID", "<OrgID>");\nformdata.append("LanguageCode", "zu-ZA");\nformdata.append("SampleRate", "16000");\nformdata.append("Diarization", "True");\n\nvar requestOptions = {\n  method: \'POST\',\n  headers: myHeaders,\n  body: formdata,\n  redirect: \'follow\'\n};\n\nfetch("https://api.botlhale.xyz/asr/async/upload", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))),(0,s.kt)(i.Z,{value:"nodejs",label:"Node JS - Request",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var request = require('request');\nvar options = {\n  'method': 'POST',\n  'url': 'https://api.botlhale.xyz/asr/async/upload',\n  'headers': {\n    'Authorization': 'Bearer <IdToken>'\n  },\n  formData: {\n    'OrgID': '<OrgID>',\n    'LanguageCode': 'zu-ZA',\n    'SampleRate': '16000',\n    'Diarization': 'True'\n  }\n};\nrequest(options, function (error, response) {\n  if (error) throw new Error(error);\n  console.log(response.body);\n});\n")))),(0,s.kt)("h4",{id:"response-body"},"Response body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fields": \n  {\n    "AWSAccessKeyId": "<>", \n    "key": "asr_a7ki4qpZ0635_zu-ZA_16000_19y3NDgP76m4.wav", \n    "policy": "<>", \n    "signature": "<>", \n    "x-amz-security-token": "<>"\n    }, \n  "url": "https://botlhale-api-asr-async.s3.amazonaws.com/"\n  }\n')),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"upload-via-presigned-url"},"Upload via Presigned URL"),(0,s.kt)("p",null,"The generated presigned URL includes both a URL and additional fields that must be passed as part of the subsequent ",(0,s.kt)("inlineCode",{parentName:"p"},"HTTP POST")," request. The following code demonstrates how to use the requests package with a presigned POST URL to perform a ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," request for file upload."),(0,s.kt)("h4",{id:"request-example-1"},"Request Example"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Demonstrate how another Python program can use the presigned URL to upload a file\nwith open('speechfile.wav', 'rb') as f:\n    files = {\n      'file': (response['fields']['key'], f)\n      }\n\n    http_response = requests.post(response['url'], data=response['fields'], files=files)\n\n# If successful, returns HTTP status code 204\nprint(f'File upload HTTP status code: {http_response.status_code}')\n"))),(0,s.kt)(i.Z,{value:"nodejs",label:"NodeJs - Request",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Demonstrate how another program can use the presigned URL to upload a file\nvar request = require('request');\nvar fs = require('fs');\n\nvar data = response['fields']\ndata['file'] = {\n    'value': fs.createReadStream(filepath),\n    'options': {\n        'filename': '',\n        'contentType': ''\n    }\n}\nvar options = {\n  'method': 'POST',\n  'url': response['url'],\n  'headers': {\n},\n  formData:data\n};\n\n// If successful, returns HTTP status code 204\nrequest(options, function (error, response) {\n  if (error) throw new Error(error);\n  console.log(response.statusCode);\n});\n\n")))),(0,s.kt)("h2",{id:"asr-async-get-status-get"},"ASR Async get status ",(0,s.kt)("inlineCode",{parentName:"h2"},"GET")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/asr/async/status\n")),(0,s.kt)("p",null," :::tip\nYou need to include an ",(0,s.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See the ",(0,s.kt)("a",{parentName:"p",href:"../1%20-%20Authentication.md#generate-a-bearer-token-post"},"Authentication")," page of this documentation for information on how to generate authentication token codes.\n:::"),(0,s.kt)("p",null,"This endpoint returns the status of the asynchronous request process."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,s.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"OrgID"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"String")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"Organisation ID")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"FileName"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Text")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"The filename generated from the async upload process.")))),(0,s.kt)("h4",{id:"request-example-2"},"Request Example"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nurl = \"https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>\"\n\npayload={\n\n  }\n\nfiles=[\n\n]\n\nheaders = {\n  'Authorization': 'Bearer <IdToken>'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload, files=files)\n\nprint(response.json())\n"))),(0,s.kt)(i.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request GET 'https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>' \\\n--header 'Authorization: Bearer <IdToken>' \n"))),(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer <IdToken>\");\n\nvar formdata = new FormData();\n\nvar requestOptions = {\n  method: 'GET',\n  headers: myHeaders,\n  body: formdata,\n  redirect: 'follow'\n};\n\nfetch(\"https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n"))),(0,s.kt)(i.Z,{value:"nodejs",label:"Node JS - Request",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var request = require('request');\nvar options = {\n  'method': 'GET',\n  'url': 'https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>',\n  'headers': {\n    'Authorization': 'Bearer <IdToken>'\n  },\n  formData: {\n\n  }\n};\nrequest(options, function (error, response) {\n  if (error) throw new Error(error);\n  console.log(response.body);\n});\n")))),(0,s.kt)("h4",{id:"response-body-1"},"Response body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "OrgID": "<>",\n            "id": 207891841473145364,\n            "process": "<>.wav",\n            "processTime": "",\n            "status": "running"\n        }\n    ]\n}\n')),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"asr-async-get-data-get"},"ASR Async get data ",(0,s.kt)("inlineCode",{parentName:"h2"},"GET")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"https://api.botlhale.xyz/asr/async/getdata\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You need to include an ",(0,s.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See the ",(0,s.kt)("a",{parentName:"p",href:"../1%20-%20Authentication.md#generate-a-bearer-token-post"},"Authentication")," page of this documentation for information on how to generate authentication token codes."))),(0,s.kt)("p",null,"This endpoint returns the status of the async process."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,s.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"OrgID"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"String")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"Organisation ID")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"FileName"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Text")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"The filename generated from the async upload process")))),(0,s.kt)("h4",{id:"request-example-3"},"Request Example"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"py",label:"Python",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nurl = \"https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>\"\n\npayload={\n\n  }\n\nfiles=[\n\n]\n\nheaders = {\n  'Authorization': 'Bearer <IdToken>'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload, files=files)\n\nprint(response.json())\n"))),(0,s.kt)(i.Z,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request GET 'https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>' \\\n--header 'Authorization: Bearer <IdToken>' \n"))),(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var myHeaders = new Headers();\nmyHeaders.append(\"Authorization\", \"Bearer <IdToken>\");\n\nvar formdata = new FormData();\n\nvar requestOptions = {\n  method: 'GET',\n  headers: myHeaders,\n  body: formdata,\n  redirect: 'follow'\n};\n\nfetch(\"https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n"))),(0,s.kt)(i.Z,{value:"nodejs",label:"Node JS - Request",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var request = require('request');\nvar options = {\n  'method': 'GET',\n  'url': 'https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>',\n  'headers': {\n    'Authorization': 'Bearer <IdToken>'\n  },\n  formData: {\n\n  }\n};\nrequest(options, function (error, response) {\n  if (error) throw new Error(error);\n  console.log(response.body);\n});\n")))),(0,s.kt)("h4",{id:"response-body-2"},"Response body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "audio_length": "30.0",\n    "filename": "/<filename>.wav",\n    "status": "complete",\n    "time": {\n        "diarization": 6.815945625305176,\n        "recognition": 4.098539113998413\n    },\n    "timestamps": [\n        {\n            "end": 1260.0000000000005,\n            "filename": "1_speaker_0_660.0000000000003_1260.0000000000005_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 660.0000000000003,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 2310.0000000000014,\n            "filename": "2_speaker_1_1260.000000000001_2310.0000000000014_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 1260.000000000001,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 2699.9999999999995,\n            "filename": "3_speaker_0_2309.9999999999995_2699.9999999999995_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 2309.9999999999995,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 6359.999999999998,\n            "filename": "4_speaker_1_2699.9999999999973_6359.999999999998_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 2699.9999999999973,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 6780.000000000008,\n            "filename": "5_speaker_0_6360.000000000008_6780.000000000008_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 6360.000000000008,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 7860.000000000012,\n            "filename": "6_speaker_1_6780.000000000012_7860.000000000012_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 6780.000000000012,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 8580.000000000022,\n            "filename": "7_speaker_0_7860.000000000021_8580.000000000022_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 7860.000000000021,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 13950.000000000011,\n            "filename": "8_speaker_1_8580.00000000001_13950.000000000011_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 8580.00000000001,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 15239.999999999889,\n            "filename": "9_speaker_1_14249.999999999887_15239.999999999889_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 14249.999999999887,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 15929.999999999867,\n            "filename": "10_speaker_0_15239.999999999867_15929.999999999867_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 15239.999999999867,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 18629.999999999854,\n            "filename": "11_speaker_1_15929.999999999853_18629.999999999854_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 15929.999999999853,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 19739.99999999995,\n            "filename": "12_speaker_0_18629.99999999995_19739.99999999995_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 18629.99999999995,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 21839.999999999993,\n            "filename": "13_speaker_1_19739.999999999993_21839.999999999993_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 19739.999999999993,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 22410.000000000073,\n            "filename": "14_speaker_0_21840.00000000007_22410.000000000073_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 21840.00000000007,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 24360.00000000009,\n            "filename": "15_speaker_1_22410.00000000009_24360.00000000009_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 22410.00000000009,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 25590.000000000167,\n            "filename": "16_speaker_0_24360.000000000167_25590.000000000167_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 24360.000000000167,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 26430.000000000215,\n            "filename": "17_speaker_1_25590.000000000215_26430.000000000215_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 25590.000000000215,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 28380.000000000244,\n            "filename": "18_speaker_0_26430.000000000244_28380.000000000244_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 26430.000000000244,\n            "transcription": "<transcription>"\n        },\n        {\n            "end": 29220.00000000032,\n            "filename": "19_speaker_1_28380.00000000032_29220.00000000032_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_1",\n            "start": 28380.00000000032,\n            "transcription": "transcription"\n        },\n        {\n            "end": 30000.000000000353,\n            "filename": "20_speaker_0_29220.00000000035_30000.000000000353_nso-ZA.wav",\n            "language": "nso-ZA",\n            "speaker": "speaker_0",\n            "start": 29220.00000000035,\n            "transcription": "<transcription>"\n        }\n    ]\n}\n')),(0,s.kt)("br",null))}h.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);