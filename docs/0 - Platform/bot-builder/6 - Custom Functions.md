# Custom Functions

Botlhale AI's platform allows for a range of custom functions that can be used to tailor and personalise the way your chatbot interacts with the end user. These custom functions are either predefined or customisable. Integrating custom functions on the platform allows you to integrate with third parties, hit endpoints on a server, process specific documents, and much more. These functions not only streamline and enhance the user's experience, but also provide you with invaluable insights and increased efficiency.

Custom functions are configurable and visible on the Actions Dashboard page of Botlhale's NLP Toolkit platform. The following image shows a code snippet of a custom action that allows your chatbot to process images.  

![actions dasboard](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard.png)

The Actions Dashboard also flags any errors in your code, highlighting the erroneous code. You are able to resolve these errors within the Actions Dashboard window. The following screenshots illustrate this. 

![actions dashboard error](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard-error.png)
![actions dashboard success](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/actions-dashboard-success.png)

:::caution
Adding preset or custom bot actions to your dialogue via Dialogue Manager automatically will override any previous related configuration done in the Actions Dashboard. See the section on [Bot Action](https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Elements#bot-action) for more information.
:::

:::info Human Handoff Integration to External Parties
:::

## Human Handoff Integration

The Botlhale NLP Toolkit has a predefined dialogue that can be selected to enable the human handoff feature. See the [Dialogue Manager](https://github.com/Botlhale-AI/documentation/blob/master/docs/0%20-%20Platform/bot-builder/3%20-%20Dialogue%20Manager.md#create-preset-dialogues) section of this documentation for information on how to enable this preset dialogue.

The human handoff dialogue contains the following two dialogue streams: 

- provide_handoff_options 
- execute_handoff 

These two dialogues work off the shell and do not require any modifications. 

The human handoff capability uses [Socket.IO](https://socket.io/docs/v3/), a library that allows message passing between a server and multiple clients. All chatbots with human handoff set up need to connect to Botlhale AI's [Socket.IO server](https://app.botlhale.xyz/live_server).

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
> We are here to help! Please email support@botlhale.ai with any questions.
:::
