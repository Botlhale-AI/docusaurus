"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3685],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},646:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Custom Functions",c={unversionedId:"Platform/bot-builder/Custom Functions",id:"Platform/bot-builder/Custom Functions",isDocsHomePage:!1,title:"Custom Functions",description:"Introducing our state-of-the-art bot builder platform, designed to empower you with the capabilities of natural language processing (NLP) and enhance your conversational AI solutions. As part of our commitment to delivering a truly tailored experience, we are delighted to offer a range of custom functions (some preset/predefined, some customizable) that will revolutionize the way your bots interact with your end users and/or customer. Custom functions enable you to create personalized and dynamic conversational flows, allowing your bots to understand user intents, extract key information, and generate intelligent responses. With our platform, you can effortlessly integrate custom functions to perform tasks such as third party integrations, hitting end-points on a server, processing specific documents, and much more. These functions not only streamline the user experience but also provide you with invaluable insights and increased efficiency. We are excited to bring you this cutting-edge technology and invite you to explore the endless possibilities it offers.",source:"@site/docs/0 - Platform/bot-builder/5 - Custom Functions.md",sourceDirName:"0 - Platform/bot-builder",slug:"/Platform/bot-builder/Custom Functions",permalink:"/docs/Platform/bot-builder/Custom Functions",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dialogue Elements",permalink:"/docs/Platform/bot-builder/Dialogue Elements"},next:{title:"Train",permalink:"/docs/Platform/bot-builder/Training"}},u=[{value:"Human Handoff Integration",id:"human-handoff-integration",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-functions"},"Custom Functions"),(0,r.kt)("p",null,"Introducing our state-of-the-art bot builder platform, designed to empower you with the capabilities of natural language processing (NLP) and enhance your conversational AI solutions. As part of our commitment to delivering a truly tailored experience, we are delighted to offer a range of custom functions (some preset/predefined, some customizable) that will revolutionize the way your bots interact with your end users and/or customer. Custom functions enable you to create personalized and dynamic conversational flows, allowing your bots to understand user intents, extract key information, and generate intelligent responses. With our platform, you can effortlessly integrate custom functions to perform tasks such as third party integrations, hitting end-points on a server, processing specific documents, and much more. These functions not only streamline the user experience but also provide you with invaluable insights and increased efficiency. We are excited to bring you this cutting-edge technology and invite you to explore the endless possibilities it offers."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard.png",alt:"actions dasboard"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard-error.png",alt:"actions dasboard error"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard-success.png",alt:"actions dasboard success"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Human HandOff Integration to External Parties")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"human-handoff-integration"},"Human Handoff Integration"),(0,r.kt)("p",null,"The Botlhale NLP Toolkit has a predefined dialogue that can be selected to enable the human handoff feature. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Botlhale-AI/documentation/blob/master/docs/0%20-%20Platform/bot-builder/3%20-%20Dialogue%20Manager.md#create-preset-dialogues"},"Dialogue Manager")," section of this documentation for information on how to enable this preset dialogue."),(0,r.kt)("p",null,"The human handoff dialogue contains the following two dialogue streams: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"provide_handoff_options "),(0,r.kt)("li",{parentName:"ul"},"execute_handoff ")),(0,r.kt)("p",null,"These two dialogues work off the shell and do not require any modifications. "),(0,r.kt)("p",null,"The human handoff capability uses ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v3/"},"Socket.IO"),", a library that allows message passing between a server and multiple clients. All chatbots with human handoff set up need to connect to Botlhale AI's ",(0,r.kt)("a",{parentName:"p",href:"https://app.botlhale.xyz/live_server"},"Socket.IO server")),(0,r.kt)("p",null,"The following code snippets can be used to set up socket IO, as well as event listener and emitter functions to interface with Botlhale AI's Socket.IO server. The code snippets use JavaScript. However, if your bot is integrated in a non-JavaScript environment, there are several client implementations available in other languages. See the ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v3/"},"Socket.IO documentation")," for additional information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script src=\"https://cdn.socket.io/3.1.3/socket.io.min.js\" \nintegrity=\"sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh\" crossorigin=\"anonymous\"><\/script>\n\n// SOCKET IO initialisation !\nconst socket = io.connect('https://app.botlhale.io/live_agent', {autoConnect: false});\n\n// first time connecting to the main socket !\nsocket.on('startConversation', function() {\n   socket.emit('username', {\n       \"ConversationID\": ConversationID,\n       \"BotID\": BotID\n   });\n});\n \n// receiving a message !\nsocket.on('to_user', function(data) {\n   let text = data.message;\n   setBotResponse(text);\n});\n \n// send messages to clients !\nsocket.on('messages', function(data) {\n   let messages = []\n   // populate messages variable with user-bot conversation !\n   // each element in the array must have the following format:\n   // {'sender': String, 'message': String}\n   // if message belongs to the user, then the value of 'sender' must be 'user'\n   // if message belongs to the bot, then the value of 'sender' must be 'bot'\n   socket.emit('messages_to_client', {\n       \"messages\": messages,\n       \"bot_id\": BotID\n   });\n});\n \n// disconnecting socket !\nsocket.on('disconnect_socket', function(data) {\n   socket.disconnect();\n});\n\n // Sending a message\nif (socket.connected) {\n  // Send a message to socket \n   socket.emit('from_user', {\n       \"message\": message,\n       \"ConversationID\": ConversationID,\n       \"BotID\": BotID\n   });\n \n} else {\n  // Send a message bot\n}\n\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"We are here to help! Please email ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@botlhale.ai"},"support@botlhale.ai")," with any questions.")))))}d.isMDXComponent=!0}}]);