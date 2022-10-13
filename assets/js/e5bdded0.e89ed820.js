"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6976],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Train",c={unversionedId:"Platform/bot-builder/Training",id:"Platform/bot-builder/Training",isDocsHomePage:!1,title:"Train",description:"This section is for training a chatbot with the intents and user examples provided in the previous sections. A training dataset is composed of many sentences organised into intents that represent what users say to your chatbot. The training dataset is used to train the bot to understand the user\u2019s needs and to trigger the right piece of conversation, to reply correctly, and to have a smooth conversation.",source:"@site/docs/0 - Platform/bot-builder/4-Training.md",sourceDirName:"0 - Platform/bot-builder",slug:"/Platform/bot-builder/Training",permalink:"/docs/Platform/bot-builder/Training",editUrl:"https://botlhale-ai.github.io/documentation/docs/0 - Platform/bot-builder/4-Training.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dialogue Manager",permalink:"/docs/Platform/bot-builder/Dialog"},next:{title:"Test",permalink:"/docs/Platform/bot-builder/Testing"}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"train"},"Train"),(0,a.kt)("p",null,"This section is for training a chatbot with the intents and user examples provided in the previous sections. A training dataset is composed of many sentences organised into intents that represent what users say to your chatbot. The training dataset is used to train the bot to understand the user\u2019s needs and to trigger the right piece of conversation, to reply correctly, and to have a smooth conversation."),(0,a.kt)("p",null,"To train you need to select the Language (you can only train one language at a time), specify the number of Epochs (the number times that the learning algorithm will work through the entire training dataset), Batch size (the number of samples to work through before updating the internal model parameters), Training samples (single rows of data that contain inputs that are fed into the algorithm and an output that is used to compare to the prediction and calculate an error), and Fallback. We recommend that you leave the default values for all these parameters."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/train.png",alt:"Training parameters"})),(0,a.kt)("p",null,"After setting the parameters, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Train")," button and your chatbot will start training. When your chatbot is training, the saved model section will show the model being trained with a status value of \u2018In progress\u2019 while the ones that have completed training will have the status of \u2018Done\u2019 as shown in Figure 18."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/train-status.png",alt:"Training progress status"})))}d.isMDXComponent=!0}}]);