"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5198],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5950:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],r={},s="Dialogue Manager",c={unversionedId:"bot-builder/Dialog",id:"bot-builder/Dialog",isDocsHomePage:!1,title:"Dialogue Manager",description:"Creating Dialogues",source:"@site/docs/bot-builder/3 - Dialog.md",sourceDirName:"bot-builder",slug:"/bot-builder/Dialog",permalink:"/docs/bot-builder/Dialog",editUrl:"https://docs.botlhale.xyz/documentation/docs/bot-builder/3 - Dialog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/docs/bot-builder/Entities"},next:{title:"Train",permalink:"/docs/bot-builder/Training"}},u=[{value:"Creating Dialogues",id:"creating-dialogues",children:[]},{value:"Dialogue Elements",id:"dialogue-elements",children:[{value:"User Intent",id:"user-intent",children:[]},{value:"Bot Response",id:"bot-response",children:[]},{value:"Bot Action",id:"bot-action",children:[]},{value:"Menu",id:"menu",children:[]}]},{value:"Example",id:"example",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dialogue-manager"},"Dialogue Manager"),(0,i.kt)("h2",{id:"creating-dialogues"},"Creating Dialogues"),(0,i.kt)("p",null,"To create more complex dialogues, we provide a dialogue and conversation  management interface on the dashboard."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm.PNG",alt:"create entity"})),(0,i.kt)("p",null,"This creates dialogues capable of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Multiple responses following an intent."),(0,i.kt)("li",{parentName:"ol"},"Hitting APIs which return plain text as a response to the end-user."),(0,i.kt)("li",{parentName:"ol"},"Using buttons as quick responses."),(0,i.kt)("li",{parentName:"ol"},"Collecting information from the user."),(0,i.kt)("li",{parentName:"ol"},"Rich responses such as images, PDFs, word docs, etc (coming soon).")),(0,i.kt)("p",null,"You create a new dialogue by pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"New dialogue")," button. Enter a dialogue name and press create dialogue, as shown in Figure 13. Unlike question-answer dialogue, this is more customisable. To edit the dialogue, simply click on the edit  button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-create.png",alt:"create entity"})),(0,i.kt)("h2",{id:"dialogue-elements"},"Dialogue Elements"),(0,i.kt)("p",null,"Dialogue elements allow multiple responses following an intent. These element types include text responses, actions and buttons. When adding a dialogue element, you have the option to create a new one or select an already existing one. All new dialogue elements require a name so that they can be reused in a different dialogue if required.\nTo add a new element to a dialogue, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"New Dialogue Element")," button and select the element type in the dropdown menu. To create a new element, enter the name of your element and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"create element")," button. To use an existing element, select the element name in the dropdown menu and then click on ",(0,i.kt)("inlineCode",{parentName:"p"},"select existing"),"."),(0,i.kt)("h3",{id:"user-intent"},"User Intent"),(0,i.kt)("p",null,"Note that every dialogue must start with an intent. This is the intent that will trigger that dialogue. If you are creating a new intent, provide the intent name then click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"create element")," button. To use an existing intent, select it from existing intent drop down menu and then click the ",(0,i.kt)("inlineCode",{parentName:"p"},"select existing")," button as shown in Figure 14. "),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-element.png",alt:"create entity"})),(0,i.kt)("p",null,"After creating an intent you can have different types of dialogue elements to allow multiple responses following an intent. These element types include text responses, actions and buttons. "),(0,i.kt)("h3",{id:"bot-response"},"Bot Response"),(0,i.kt)("p",null,"A bot response is the text response that the bot will return during the dialogue. In addition to having the option to create a new response or use an existing one, the bot response element also allows you to use response examples from an existing intent. This is done in the same way as using an existing response (the dropdown menu with existing responses will include existing intents). Once the bot response element has been added, you can add new response examples by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add examples")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-response.png",alt:"bot response"})),(0,i.kt)("h3",{id:"bot-action"},"Bot Action"),(0,i.kt)("p",null,"Bot actions allow your bot perform certain 'actions' during the dialogue. The actions that are available on our platform are form actions, custom actions and preset actions."),(0,i.kt)("h4",{id:"form-actions"},"Form Actions"),(0,i.kt)("p",null,"Form actions collect information (variables) from the user. Once a form action element has been added, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add form field")," button to add a new form field. Give the form field a name and then click on the variable dropdown menu to select the variable that you want to collect. Enter the message that the bot should send to ask for this variable. This text has to be entered in all of the languages that the bot speaks. Complete the process by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button. More form fields can be added to the form by repeating the process. You can edit or delete a form field by clicking on it."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-form-field.png",alt:"form"})),(0,i.kt)("h4",{id:"custom-actions"},"Custom Actions"),(0,i.kt)("p",null,"Custom actions can hit external APIs. Once a custom action has been created, clicking on a language allows you send a POST or GET request to a webhook endpoint for that language. You also have the option of sending the information collected from forms as part of your payload. At the moment, the APIs' responses are limited to plain text only."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-custom-webhook.png",alt:"custom"})),(0,i.kt)("h4",{id:"preset-actions"},"Preset Actions"),(0,i.kt)("p",null,'At present the platform only has one preset action called the "reset all slots" action. This action clears all the information collected from forms. We advise that you add this action at the end of all dialogues that include forms. If this is not done, the forms will retain the collected information if the dialogue is triggered again.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-preset.png",alt:"preset"})),(0,i.kt)("h3",{id:"menu"},"Menu"),(0,i.kt)("p",null,"The menu element allows you to add a menu funtionality to your chat in order to provide options or quick responses to your users. When adding a menu element, you have to specify the text to display along with that menu in all the languages that the bot speaks. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-menu-create.png",alt:"create entity"})),(0,i.kt)("p",null,"To add a button to the menu, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add button")," button and select the intent that the button should be linked to. This is the intent that will be triggered when that button is clicked. Also specify the title of the button (the text that should be displayed on the button) in all the languages that the bot speaks. Other buttons can be added by repeating the process. Click on a button to edit or delete it. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-menu-button.png",alt:"create entity"})),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The example below shows how these dialogue elements can be used together."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user sends text to the bot and the text is classified as a flight_search intent."),(0,i.kt)("li",{parentName:"ol"},"The bot then asks for two information items from the user: ",(0,i.kt)("inlineCode",{parentName:"li"},"departure_city")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"arrival_city"),"."),(0,i.kt)("li",{parentName:"ol"},"The bot then uses an action to hit an API and send the collected information on the API request. The response from the API is plain text and is displayed to the user."),(0,i.kt)("li",{parentName:"ol"},"A feedback question is also displayed to the user, along with two buttons that the user can click on.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://botlhale-docs.s3.amazonaws.com/dlm-components.png",alt:"create entity"})),(0,i.kt)("p",null,"Note that if you make any changes to the dialogue, you must make sure to save your progress before leaving the page otherwise your changes will be lost."))}p.isMDXComponent=!0}}]);