"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7077],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9024:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Variables",u={unversionedId:"bot-builder/Entities",id:"bot-builder/Entities",isDocsHomePage:!1,title:"Variables",description:"Variables are words or small groups of words that are relevant for that particular conversation. They can be names of people, organizations, cities, products, brands etc. These variables are usually extracted from the sentence to use later on for an API-call, product recommendation or to redirect to the right flow.",source:"@site/docs/bot-builder/2 - Entities.md",sourceDirName:"bot-builder",slug:"/bot-builder/Entities",permalink:"/docs/bot-builder/Entities",editUrl:"https://docs.botlhale.xyz/documentation/docs/bot-builder/2 - Entities.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intents",permalink:"/docs/bot-builder/Intents"},next:{title:"Dialogue Manager",permalink:"/docs/bot-builder/Dialog"}},s=[{value:"Creating Variables.",id:"creating-variables",children:[]},{value:"Variable Tagging",id:"variable-tagging",children:[]},{value:"Deleting a Variable",id:"deleting-a-variable",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"variables"},"Variables"),(0,o.kt)("p",null,"Variables are words or small groups of words that are relevant for that particular conversation. They can be names of people, organizations, cities, products, brands etc. These variables are usually extracted from the sentence to use later on for an API-call, product recommendation or to redirect to the right flow."),(0,o.kt)("h2",{id:"creating-variables"},"Creating Variables."),(0,o.kt)("p",null,"To create variables, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"New variable")," button. You will be have the option of using a pre-trained variable or creating a custom one. Pre-trained variables do not require examples and the available ones can be selected from a dropdown list. When creating a custom variable, you will have to provide a variable name. When you are done completing the form, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"create variable")," button as shown in Figure 7."),(0,o.kt)("p",null,"![create entity]"),(0,o.kt)("p",null,"Once a variable has been created, click on the edit variable button to add variable examples. To add a new variable example, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"New variable example"),". You will be prompted to enter a variable example for the newly created variable, then click create variable example, as shown in Figure 8."),(0,o.kt)("p",null,"![add entity examples]"),(0,o.kt)("p",null,"Once you have added a new variable example, you can add synonyms of the example by clicking on the edit variable example button. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," button to save the added synonyms."),(0,o.kt)("p",null,"![entity synonyms]"),(0,o.kt)("p",null,"You should provide variable examples to the appropriate language. To change between defined languages, select the language from the drop-down list of the language(s) that you defined when creating the bot."),(0,o.kt)("p",null,"![entity change lang]"),(0,o.kt)("h2",{id:"variable-tagging"},"Variable Tagging"),(0,o.kt)("p",null,"The intent manager allows you to tag variables in the example user messages that you provide for an intent. Simply highlight the variable example in your example text and a modal will pop up prompting you to select the variable that the example belongs to. Intents are discussed in more detail in the ","[Intents]"," section of the Bot Builder documentation."),(0,o.kt)("p",null,"![entity tagging]"),(0,o.kt)("h2",{id:"deleting-a-variable"},"Deleting a Variable"),(0,o.kt)("p",null,"To delete a variable, click on the Delete button. If you delete an intent, you also delete all of its related content and you can not restore it. You will be asked to confirm the action by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete variable")," button as shown on Figure 11."),(0,o.kt)("p",null,"![entity delete]"))}p.isMDXComponent=!0}}]);