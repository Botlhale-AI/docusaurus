"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3063:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Knowledge Base",c={unversionedId:"Platform/live-bots/Knowledge Base",id:"Platform/live-bots/Knowledge Base",isDocsHomePage:!1,title:"Knowledge Base",description:"Botlhale's NLP Toolkit platform contains a Knowledge Base page from which you can continually train and improve your chatbot once it's been deployed. The following screenshot gives you a view of the Knowledge Base page.",source:"@site/docs/0 - Platform/live-bots/3 - Knowledge Base.md",sourceDirName:"0 - Platform/live-bots",slug:"/Platform/live-bots/Knowledge Base",permalink:"/docs/Platform/live-bots/Knowledge Base",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Analytics",permalink:"/docs/Platform/live-bots/Analytics"},next:{title:"Live Chats",permalink:"/docs/Platform/help-desk/Live Chats"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"knowledge-base"},"Knowledge Base"),(0,r.kt)("p",null,"Botlhale's NLP Toolkit platform contains a Knowledge Base page from which you can continually train and improve your chatbot once it's been deployed. The following screenshot gives you a view of the Knowledge Base page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/knowledge-base.png",alt:"knowledge base"})),(0,r.kt)("p",null,"In the view from the previous screenshot, the chatbot in question has been deployed and end users have begun to interact with it. The Knowledge Base gives you a view of all the unique messages sent to your bot and the intent each of these messages were classified as."),(0,r.kt)("p",null,"On the Knowledge Base page, you have the option of reclassifying one or more messages to a different intent. Use the following steps to perform this action. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Knowledge Base page, ensure the appropriate chatbot and language are selected. Use the arrows to toggle between chatbots and languages."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Intents column of a specific row to reclassify a message to a different intent. Use the dropdown menu to toggle between intents."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Update"),". You have successfully reclassified a message in the Knowledge Base."),(0,r.kt)("li",{parentName:"ol"},"Repeat these steps for as many messages as needed. ")),(0,r.kt)("p",null,"For these changes to take effect, you must retrain your bot. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Training"},"Train")," section of this documentation for additional information on training your chatbot.   "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"We are here to help! Please email ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@botlhale.ai"},"support@botlhale.ai")," with any questions.")))))}m.isMDXComponent=!0}}]);