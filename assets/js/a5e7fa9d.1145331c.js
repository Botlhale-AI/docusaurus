"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5914],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4881:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Intents",c={unversionedId:"Platform/bot-builder/Intents",id:"Platform/bot-builder/Intents",isDocsHomePage:!1,title:"Intents",description:'Intent is all about the motive of a given chatbot user. It\u2019s the goal behind each message the chatbot receives from the user. Intents categorize text based on the goal or purpose expressed in the user\u2019s message. For example, the intent "greetings" enables your bot to understand when the user says "Hi". This creates a simple question-answer dialogue that provides a response to messages categorised to a specific intent.',source:"@site/docs/0 - Platform/bot-builder/1 - Intents.md",sourceDirName:"0 - Platform/bot-builder",slug:"/Platform/bot-builder/Intents",permalink:"/docs/Platform/bot-builder/Intents",editUrl:"https://botlhale-ai.github.io/documentation/docs/0 - Platform/bot-builder/1 - Intents.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bot Creation",permalink:"/docs/Platform/bot-builder/Bot Creation"},next:{title:"Variables",permalink:"/docs/Platform/bot-builder/Entities"}},d=[{value:"Create Intents",id:"create-intents",children:[]},{value:"Edit Intents",id:"edit-intents",children:[]},{value:"Delete Intents",id:"delete-intents",children:[]}],p={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intents"},"Intents"),(0,i.kt)("p",null,'Intent is all about the motive of a given chatbot user. It\u2019s the goal behind each message the chatbot receives from the user. Intents categorize text based on the goal or purpose expressed in the user\u2019s message. For example, the intent "greetings" enables your bot to understand when the user says "Hi". This creates a simple question-answer dialogue that provides a response to messages categorised to a specific intent.'),(0,i.kt)("h2",{id:"create-intents"},"Create Intents"),(0,i.kt)("p",null,"Use the following steps to add intents to your selected chatbot."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the My Chatbots page, click on the Edit icon of the chatbot you wish to add intents to. You are directed to the Intents Manager page."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"New Intent")," button."),(0,i.kt)("li",{parentName:"ol"},"A pop-up window appears, prompting you to enter an intent name. Fill in the required field, and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Intent"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create intent",src:n(2785).Z})),(0,i.kt)("h2",{id:"edit-intents"},"Edit Intents"),(0,i.kt)("p",null,"Once an intent has been created, you can begin editing it to add various categories for text based on the purpose of the user's message. Use the following steps to edit intents."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Intents Manager page, click on the Edit icon corresponding to the intent you wish to modify. "),(0,i.kt)("li",{parentName:"ol"},"You are directed to a new page where you can provide example messages and reponses for each intent. This is illustrated in the following image.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"add intent examples and responses",src:n(3821).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to provide example messages and responses for each language you selected when creating your chatbot. This is because on the backend, an intent classifier is trained for each language. A pre-trained language model for each intent classifier is used to create embeddings for the classifier to train accurately with fewer example messages. To toggle between predefined languages, select the desired language from the drop-down list of the language tab."))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Once you have provided a list of example messages and possible responses in your various predefined languages, click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Save")," button to save the created intents of your bot.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"change language",src:n(7605).Z})),(0,i.kt)("h2",{id:"delete-intents"},"Delete Intents"),(0,i.kt)("p",null,"Before you delete an intent, ensure it is not in use in the Dialogue Manager. If the intent you wish to delete is in use, you must first delete the dialogue using the intent before you can delete the intent."),(0,i.kt)("p",null,"Use the following steps to delete an intent."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Intents Manager page, click on the Delete icon corresponding to the intent you wish to remove. "),(0,i.kt)("li",{parentName:"ol"},"A pop-up window appears, prompting you to confirm this action by clickling the ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete Intent")," button. ")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deleting an intent deletes all of its related content. This cannot be restored."),(0,i.kt)("p",{parentName:"div"},"Deleting an intent also permanently deletes all the examples and responses also get permanently deleted. This also cannot be restored."))))}u.isMDXComponent=!0},2785:function(e,t,n){t.Z=n.p+"assets/images/create-intent-17fe8943b685a6b381162d5dfe778e6e.PNG"},7605:function(e,t,n){t.Z=n.p+"assets/images/intent-examples-change-language-b315cdeef6862684b2f18a4b9995b121.PNG"},3821:function(e,t,n){t.Z=n.p+"assets/images/intent-examples-664433def2d0cb176d38eba8ca6aaa23.PNG"}}]);