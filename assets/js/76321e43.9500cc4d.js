"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9371],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2404:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s=void 0,p={unversionedId:"live-bots/Deployments",id:"live-bots/Deployments",isDocsHomePage:!1,title:"Deployments",description:"Please ensure that you have selected a chat bot bot on the top-right markdown section of your screen.",source:"@site/docs/live-bots/1 - Deployments.md",sourceDirName:"live-bots",slug:"/live-bots/Deployments",permalink:"/docusaurus/docs/live-bots/Deployments",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/live-bots/1 - Deployments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/docusaurus/docs/bot-builder/Testing"},next:{title:"Analytics",permalink:"/docusaurus/docs/live-bots/Analytics"}},c=[{value:"Deployments",id:"deployments",children:[]},{value:"Deployed Bots",id:"deployed-bots",children:[]},{value:"Update Deployment",id:"update-deployment",children:[]},{value:"One-Click Deployments",id:"one-click-deployments",children:[]}],d={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please ensure that you have selected a chat bot ",(0,r.kt)("strong",{parentName:"p"},"bot")," on the top-right ",(0,r.kt)("em",{parentName:"p"},"markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"section of your screen"),"."))),(0,r.kt)("h2",{id:"deployments"},"Deployments"),(0,r.kt)("p",null,"This section is for chatbot deployment. It allows you to deploy your trained bot to your application. Once you have trained and tested your chatbot, you can now deploy it to an app such as Telegram, WhatsApp or Your Website.  To deploy, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy A Bot")," tab and select the language","[s]"," and the model","[s]"," (chatbot) you want to deploy. After specifying all the deployment parameters you can click on the Deploy button. You will be notified via email once the deployment has been successful."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-bot",src:n(1020).Z})),(0,r.kt)("h2",{id:"deployed-bots"},"Deployed Bots"),(0,r.kt)("p",null,"To view and test deployed bots, you need to be on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployed Bots")," tab. On this tab you can see deployed bots along with their ",(0,r.kt)("inlineCode",{parentName:"p"},"BotID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Date Deployed"),". This tab also provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"API Docs: Quick Start")," where you can see example requests to our API to interact with your deployed bot."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deployments",src:n(2614).Z})),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try it out!")," tab your can send requests to test you deployed bot. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/deployed-try.PNG",alt:"deploy"})),(0,r.kt)("h2",{id:"update-deployment"},"Update Deployment"),(0,r.kt)("p",null,"To update or delete a live chatbot, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Update Deployment")," tab and select the models of your choice for the respective languages as demonstarted below."),(0,r.kt)("h2",{id:"one-click-deployments"},"One-Click Deployments"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"One-click Deployments")," tab to get your chatbot to be live on the platform of your choice (",(0,r.kt)("inlineCode",{parentName:"p"},"Facebook"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WhatsApp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Telegram"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"One-Click-Deployments",src:n(207).Z})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To succssfully launch your chatbot on the platforms listed above, you will be prompted for an authentatication token or key. This information will be available to you upon getting you onboard."))))}u.isMDXComponent=!0},1020:function(e,t,n){t.Z=n.p+"assets/images/deploy-a-bot-e689fa3dc10f97521eb15c9f734e8df5.PNG"},2614:function(e,t,n){t.Z=n.p+"assets/images/deployments-decf2d1ba8c5bb532db9b632cbfe3fd8.PNG"},207:function(e,t,n){t.Z=n.p+"assets/images/one-click-54483f137e8780f60cea5f07d658587f.PNG"}}]);