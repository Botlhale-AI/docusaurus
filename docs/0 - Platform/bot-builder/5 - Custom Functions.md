# Custom Functions

Introducing our state-of-the-art bot builder platform, designed to empower you with the capabilities of natural language processing (NLP) and enhance your conversational AI solutions. As part of our commitment to delivering a truly tailored experience, we are delighted to offer a range of custom functions (some preset/predefined, some customizable) that will revolutionize the way your bots interact with your end users and/or customer. Custom functions enable you to create personalized and dynamic conversational flows, allowing your bots to understand user intents, extract key information, and generate intelligent responses. With our platform, you can effortlessly integrate custom functions to perform tasks such as third party integrations, hitting end-points on a server, processing specific documents, and much more. These functions not only streamline the user experience but also provide you with invaluable insights and increased efficiency. We are excited to bring you this cutting-edge technology and invite you to explore the endless possibilities it offers.


:::info Human HandOff Integration to External Parties
:::

## Human Handoff Integration

The Botlhale NLP Toolkit has a predefined dialogue that can be selected to enable the human handoff feature. See the [Dialogue Manager](https://github.com/Botlhale-AI/documentation/blob/master/docs/0%20-%20Platform/bot-builder/3%20-%20Dialogue%20Manager.md#create-preset-dialogues) section of this documentation for information on how to enable this preset dialogue.

The human handoff dialogue contains the following two dialogue streams: 

- provide_handoff_options 
- execute_handoff 

These two dialogues work off the shell and do not require any modifications. 

The human handoff capability uses [Socket.IO](https://socket.io/docs/v3/), a library that allows message passing between a server and multiple clients. All chatbots with human handoff set up need to connect to Botlhale AI's [Socket.IO server](https://app.botlhale.xyz/live_server)

The following code snippets can be used to set up socket IO, as well as event listener and emitter functions to interface with Botlhale AI's Socket.IO server. The code snippets use JavaScript. However, if your bot is integrated in a non-JavaScript environment, there are several client implementations available in other languages. See the [Socket.IO documentation](https://socket.io/docs/v3/) for additional information.

```js
<script src="https://cdn.socket.io/3.1.3/socket.io.min.js" 
integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh" crossorigin="anonymous"></script>

// SOCKET IO initialisation !
const socket = io.connect('https://app.botlhale.io/live_agent', {autoConnect: false});

// first time connecting to the main socket !
socket.on('startConversation', function() {
   socket.emit('username', {
       "ConversationID": ConversationID,
       "BotID": BotID
   });
});
 
// receiving a message !
socket.on('to_user', function(data) {
   let text = data.message;
   setBotResponse(text);
});
 
// send messages to clients !
socket.on('messages', function(data) {
   let messages = []
   // populate messages variable with user-bot conversation !
   // each element in the array must have the following format:
   // {'sender': String, 'message': String}
   // if message belongs to the user, then the value of 'sender' must be 'user'
   // if message belongs to the bot, then the value of 'sender' must be 'bot'
   socket.emit('messages_to_client', {
       "messages": messages,
       "bot_id": BotID
   });
});
 
// disconnecting socket !
socket.on('disconnect_socket', function(data) {
   socket.disconnect();
});

 // Sending a message
if (socket.connected) {
  // Send a message to socket 
   socket.emit('from_user', {
       "message": message,
       "ConversationID": ConversationID,
       "BotID": BotID
   });
 
} else {
  // Send a message bot
}

```


:::info
> We are here to help! For any questions regarding this feature, please email support@botlhale.ai
:::
