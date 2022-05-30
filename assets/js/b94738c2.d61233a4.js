"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9234],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4575:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],l={},u="Text to Speech",i={unversionedId:"API/Speech APIs/TTS",id:"API/Speech APIs/TTS",isDocsHomePage:!1,title:"Text to Speech",description:"TTS POST",source:"@site/docs/API/Speech APIs/2 - TTS.md",sourceDirName:"API/Speech APIs",slug:"/API/Speech APIs/TTS",permalink:"/docusaurus/docs/API/Speech APIs/TTS",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/Speech APIs/2 - TTS.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automatic Speech Recogniton",permalink:"/docusaurus/docs/API/Speech APIs/ASR"},next:{title:"Platform Tutorials",permalink:"/docusaurus/docs/Tutorials/Platform Tutorials"}},c=[{value:"TTS <code>POST</code>",id:"tts-post",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-to-speech"},"Text to Speech"),(0,a.kt)("h2",{id:"tts-post"},"TTS ",(0,a.kt)("inlineCode",{parentName:"h2"},"POST")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://dev-botlhale.xyz/tts\n")),(0,a.kt)("p",null,"This endpoint handles single text to speech conversion."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Request Params"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TextMsg"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ",(0,a.kt)("br",null),"Required. Text Message from the user to the bot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LanguageCode"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ",(0,a.kt)("br",null)," Required. This is the language the user is using to interact with the bot. See ",(0,a.kt)("strong",{parentName:"td"},"list of supported languages")," to get the languae")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," Note","!"," You need to Include ",(0,a.kt)("inlineCode",{parentName:"p"},"Authentication Token")," in request headers. See how to\n","[Generate Auth Token]")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = \"hhttps://dev-botlhale.xyz/tts\"\n\npayload={'LanguageCode': 'IsiXhosa',\n'TextMsg': 'hello'}\nfiles=[\n\n]\nheaders = {}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload, files=files)\n\nprint(response.text)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://dev-botlhale.xyz/tts' \\\n--form 'LanguageCode=\"IsiXhosa\"' \\\n--form 'TextMsg=\"hello\"'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var formdata = new FormData();\nformdata.append("LanguageCode", "IsiXhosa");\nformdata.append("TextMsg", "hello");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\'\n};\n\nfetch("https://dev-botlhale.xyz/tts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var https = require('follow-redirects').https;\nvar fs = require('fs');\n\nvar options = {\n  'method': 'POST',\n  'hostname': 'https://dev-botlhale.xyz',\n  'path': '/tts',\n  'headers': {\n  },\n  'maxRedirects': 20\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData = \"------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"LanguageCode\\\"\\r\\n\\r\\nIsiXhosa\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW\\r\\nContent-Disposition: form-data; name=\\\"TextMsg\\\"\\r\\n\\r\\nhello\\r\\n------WebKitFormBoundary7MA4YWxkTrZu0gW--\";\n\nreq.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');\n\nreq.write(postData);\n\nreq.end();\n")),(0,a.kt)("h4",{id:"response-body"},"Response body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "DateReceived": "01/05/2021 15:38:35",\n    "LanguageCode": "IsiXhosa",\n    "SpeechResponseURL": "<URL>",\n    "TextMsg": "molo Xolisani"\n}\n')))}d.isMDXComponent=!0}}]);