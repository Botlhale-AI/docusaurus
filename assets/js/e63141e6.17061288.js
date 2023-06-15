"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3115],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?o.createElement(h,l(l({ref:t},m),{},{components:n})):o.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6309:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],r={},s="Dialogue Elements",p={unversionedId:"Platform/bot-builder/Dialogue Elements",id:"Platform/bot-builder/Dialogue Elements",isDocsHomePage:!1,title:"Dialogue Elements",description:"As mentioned in the previous section, dialogues outline a script for your chatbot to follow during a conversation. The flow of the conversation sequence is determined by the intent put forward by the end user. Dialogue elements constitute the building blocks for the continuation of this conversation flow. Dialogue elements allow for multiple response types following an intent. These element types include bot text responses, actions, and buttons.",source:"@site/docs/0 - Platform/bot-builder/4 - Dialogue Elements.md",sourceDirName:"0 - Platform/bot-builder",slug:"/Platform/bot-builder/Dialogue Elements",permalink:"/docs/Platform/bot-builder/Dialogue Elements",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dialogue Manager",permalink:"/docs/Platform/bot-builder/Dialogue Manager"},next:{title:"Custom Functions",permalink:"/docs/Platform/bot-builder/Custom Functions"}},m=[{value:"Bot Response",id:"bot-response",children:[]},{value:"Bot Action",id:"bot-action",children:[{value:"Form Actions",id:"form-actions",children:[]},{value:"Custom Actions",id:"custom-actions",children:[]},{value:"Preset Actions",id:"preset-actions",children:[]},{value:"Reset Action",id:"reset-action",children:[]}]},{value:"Bot Buttons (Menu)",id:"bot-buttons-menu",children:[]}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dialogue-elements"},"Dialogue Elements"),(0,i.kt)("p",null,"As mentioned in the previous section, dialogues outline a script for your chatbot to follow during a conversation. The flow of the conversation sequence is determined by the intent put forward by the end user. Dialogue elements constitute the building blocks for the continuation of this conversation flow. Dialogue elements allow for multiple response types following an intent. These element types include bot text responses, actions, and buttons. "),(0,i.kt)("h2",{id:"bot-response"},"Bot Response"),(0,i.kt)("p",null,"A bot response is the free-form text response that the bot returns during the dialogue. With this element type, you have the option of creating a new response or using an existing one. In addition to this, you have the option of using the response examples from an existing intent to create this type of dialogue element.  "),(0,i.kt)("p",null,"To add a bot response element:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Dialogue Manager page, create a new custom dialogue. See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-custom-dialogues"},"Dialogue Manager")," section of this documentation for information on how to go about this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the Edit icon that corresponds to your newly created custom dialogue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You are taken to a new page, illustrated in the image that follows."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/new-dialogue-element.png",alt:"new dialogue element"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"New Dialogue Element")," button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A pop-up window, illustrated in the image that follows, appears, prompting you to choose a name and type for your new element."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/create-dialogue-element.png",alt:"create dialogue element"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All dialogues must begin with an intent. So, first set the type to ",(0,i.kt)("strong",{parentName:"p"},"User Intent")," and either create a new intent element or select an existing intent from the drop-down menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click either the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create element")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select existing")," button based on the field you filled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your intent element is created and appears on the page. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," to retain your changes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Repeat steps 4 and 5.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the element type to ",(0,i.kt)("strong",{parentName:"p"},"Bot Response"),". Once again, either create a new element or select an existing one from the dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click either the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create element")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select existing")," button based on the field you filled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your Bot Response element is created and appears on the page. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," to retain your changes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now begin adding examples to your dialogue elements. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add examples")," button that corresponds to the element you wish to add examples to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A new page, illustrated in the image that follows, is shown, prompting you to add examples for your intent."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/element-examples.png",alt:"element examples"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add as many examples as needed and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"Element examples must be added in all the languages supported by your bot. Use the language tab to toggle between your supported languages when adding examples.")))))),(0,i.kt)("h2",{id:"bot-action"},"Bot Action"),(0,i.kt)("p",null,"Bot actions allow your chatbot to perform certain operations during the dialogue. The bot actions available on our platform are form actions, custom actions, and preset actions."),(0,i.kt)("h3",{id:"form-actions"},"Form Actions"),(0,i.kt)("p",null,"Form actions collect information (variables) from the user. "),(0,i.kt)("p",null,"To add a form action to your dialogue:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Dialogue Manager page, click the Edit icon corresponding to the dialogue to which you wish to add a form action.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"New Dialogue Element"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the pop-up window that appears, ensure the element type is set to ",(0,i.kt)("strong",{parentName:"p"},"Bot Action")," and the action type is set to ",(0,i.kt)("strong",{parentName:"p"},"Form"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Either enter a name for your new form action or select an existing form action from the drop-down menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click either the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create element")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select existing")," button based on the field you filled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your Form action element is created and listed on the page. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," to retain your changes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now begin adding entities to your new form action element. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add entity")," button to do this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A pop-up window, illustrated in the image that follows, appears, prompting you to name and configure the new entity."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/new-element-entity.png",alt:"new element entity"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the requested information and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,"The following description list defines the fields found in the Add entity pop-up window."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Form item name")),(0,i.kt)("p",null,"This is the name you wish to give your form item."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Entity type")),(0,i.kt)("p",null,"This is a dropdown field which allows you to select the type of entity you give your form item. The two entity types available for selection are as follows:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"from_text:")," If this option is selected, the chatbot extracts the user's response to the form action via free-form text. In the event your chatbot has ASR capabilities, the user input is extracted from a transcript of the voicenote. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"from_entity:")," If this option is selected, you can select the entity you wish to associate with the response to this form action sent by the end user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Entity")),(0,i.kt)("p",null,'This field is only visible when the selected entity type is "from_entity". This is a dropdown field from which you can select the entity you wish to associate with the user response. '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Form item request question")),(0,i.kt)("p",null,"This is the message sent by the chatbot to obtain the information needed from your bot form action. The text in this field must be entered in all the languages supported by your chatbot. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Present as button")),(0,i.kt)("p",null,'This field is only visible when the selected entity type is "from_entity". Selecting this checkbox allows you to add buttons to the form request question. The buttons visible to the end user are obtained from the entity examples you set for the selected entities. See the ',(0,i.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Entities"},"Entities")," section of this documentation for more information about entity examples."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Attach role to entity")),(0,i.kt)("p",null,'This field is only visible when the selected entity type is "from_entity". Selecting this checkbox allows you to attach a role to your selected entity for disambiguation purposes. See the ',(0,i.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Entities"},"Entities")," section of this documentation for more information about entity roles."),(0,i.kt)("h3",{id:"custom-actions"},"Custom Actions"),(0,i.kt)("p",null,"Custom actions can hit external APIs. Once a custom action has been created, clicking on a language allows you to send a POST or GET request to a webhook endpoint for that language. You also have the option of sending the information collected from forms as part of your payload. At the moment, API responses are limited to plain text only."),(0,i.kt)("p",null,"Use the following steps to create a custom action."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this custom bot action element."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"New Dialogue Element"),"."),(0,i.kt)("li",{parentName:"ol"},"Ensure the element type is set to ",(0,i.kt)("strong",{parentName:"li"},"Bot Action")," and the action is set to ",(0,i.kt)("strong",{parentName:"li"},"Custom"),"."),(0,i.kt)("li",{parentName:"ol"},"You have the option of naming and creating a new custom action element, or selecting an existing one from the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Click either the ",(0,i.kt)("inlineCode",{parentName:"li"},"Create element")," or the ",(0,i.kt)("inlineCode",{parentName:"li"},"Select existing")," button based on the field you filled."),(0,i.kt)("li",{parentName:"ol"},"The element is created and is listed in the Dialogue Manager window.")),(0,i.kt)("h3",{id:"preset-actions"},"Preset Actions"),(0,i.kt)("p",null,"Preset actions are preconfigured bot actions which allow your bot to perform certain operations. At present, there are four preset actions available to you on the platform. These are described in the following list."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Human handoff")),(0,i.kt)("p",null,"This preset action triggers a human handoff sequence of the end user to a live agent. To add this element to a dialogue, simply create a preset human handoff dialogue. See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-preset-dialogues"},"Dialogue Manager")," section of this documentation for more information on preset dialogues. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Check contact list")),(0,i.kt)("p",null,"This preset action checks if an end user's information is available in the Contact List prior to handoff. If the user's contact information is not found, your chatbot obtains this information prior to executing a handoff. To add this element to a dialogue, simply create a preset human handoff dialogue. See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-preset-dialogues"},"Dialogue Manager")," section of this documentation for more information on preset dialogues. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Change language")),(0,i.kt)("p",null,"This preset action allows your end user to switch between languages during a conversation with the chatbot. To add this element to a dialogue, simply create a preset change language dialogue. See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-preset-dialogues"},"Dialogue Manager")," section of this documentation for more information on preset dialogues. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Reset all form items")),(0,i.kt)("p",null,"This preset action clears all the information collected by your chatbot from forms. It is recommended that you add this action to the end of all dialogues that include forms. If this is not done, the forms will retain all previously collected information if the dialogue is triggered again.\nTo add this preset bot action dialogue element:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this reset element."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"New Dialogue Element"),"."),(0,i.kt)("li",{parentName:"ol"},"Ensure the element type is set to ",(0,i.kt)("strong",{parentName:"li"},"Bot Action")," and the action is set to ",(0,i.kt)("strong",{parentName:"li"},"Preset"),"."),(0,i.kt)("li",{parentName:"ol"},"In the preset dropdown field, select the ",(0,i.kt)("em",{parentName:"li"},"reset_all_form_items")," option."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Select existing")," button."),(0,i.kt)("li",{parentName:"ol"},"The element is created and is listed in the Dialogue Manager window.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"This reset element will only clear the information from form elements that precede it in placement in the dialogue. As such, it's recommended that you place the ",(0,i.kt)("em",{parentName:"p"},"reset_all_form_items")," dialogue element after all the form elements in your dialogue. Simply drag and drop the element to change its position in the dialogue.")))),(0,i.kt)("h3",{id:"reset-action"},"Reset Action"),(0,i.kt)("p",null,"This bot action element clears the information collected from specific forms. This is useful if you have several form elements in a dialogue but only need the information cleared from certain forms.\nTo add this bot action element to your dialogue:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this reset element.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"New Dialogue Element"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure the element type is set to ",(0,i.kt)("strong",{parentName:"p"},"Bot Action")," and the action is set to ",(0,i.kt)("strong",{parentName:"p"},"Reset"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have the option of naming and creating a new reset element, or selecting an existing one from the dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click either the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create element")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select existing")," button based on the field you filled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The element is created and is listed in the Dialogue Manager window.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now begin adding entities to your new element by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add element")," button."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"The entities added here need to match the entities associated with the form action you would like to clear.")))))),(0,i.kt)("h2",{id:"bot-buttons-menu"},"Bot Buttons (Menu)"),(0,i.kt)("p",null,"The bot buttons or menu element allows you to add a menu functionality to your chat that gives your users the option of using buttons rather than free-form text.",(0,i.kt)("br",{parentName:"p"}),"\n","Use the following steps to add this element to your dialogue."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this menu element.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"New Dialogue Element"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A pop-window, illustrated in the following image, appears, prompting you to fill in the required fields."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/add-button-element.png",alt:"bot buttons"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure the element type is set to ",(0,i.kt)("strong",{parentName:"p"},"Bot Button"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the button group name. This is the collective name you wish to assign to the buttons in this new element.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the text you want displayed before the buttons. This text must be entered in all the languages your chatbot supports.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create element"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your new button element is created and listed in your dialogue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now begin adding the individual buttons (options) for your new menu element. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add button")," to do this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A pop-window, illustrated in the following image, appears, prompting you to fill in the required fields."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/bot-button.png",alt:"new button"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the payload type from the drop-down menu.\na. Selecting ",(0,i.kt)("em",{parentName:"p"},"from_intent")," as the payload type prompts you to select the intent your button should be linked to.\nb. Selecting ",(0,i.kt)("em",{parentName:"p"},"from_faq")," as the payload type prompts you to select the frequently asked question your button should be linked to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have the option of attaching an entity to your button. To do so, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attach entity to payload")," checkbox and choose the entity you would like to attach from the dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the title for your new button in the field provided. This is the text that should be displayed on the button. This text needs to be entered in all the languages your chatbot supports.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),". Your new button is now added.  "))),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example shows how these dialogue elements can be used together."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user sends text to the bot. This text is classified as a flight_search intent."),(0,i.kt)("li",{parentName:"ol"},"The bot then requests two information items from the user: ",(0,i.kt)("inlineCode",{parentName:"li"},"departure_city")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"arrival_city"),"."),(0,i.kt)("li",{parentName:"ol"},"The user responds with the requested information."),(0,i.kt)("li",{parentName:"ol"},"The bot then uses an action to hit an API and send the collected information in the API request. The response from the API is in plain text and displayed to the user."),(0,i.kt)("li",{parentName:"ol"},"A feedback question is also displayed to the user, along with two buttons that the user can click.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"We are here to help! Please email ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@botlhale.ai"},"support@botlhale.ai")," with any questions.")))))}u.isMDXComponent=!0}}]);