# Live Chats 

This tab enables your end-users to communicate with a LIVE human agent.

![live_chat.png](https://stoplight.io/api/v1/projects/cHJqOjU4NzU5/images/Qa56xllEezc)


This section covers the interaction between the human (and agent from Client) and the customer (end-user). This is triggered after the human hand-over function is activated on the chatbot by the customer.




## Human Handoff Integration
To hand over the conversation between a user and a bot to a human agent, the bot builder has a pre-defined dialogue that can be selected to enable the feature. The figure below shows the pre-defined dialogue option.

![deploy](https://botlhale-docs1-new.s3.amazonaws.com/create-live.PNG)

The human handoff dialogue contains two dialogue streams 1) provide_handoff_options and 2) execute_handoff as can be seen in the figure below. These 2 dialogues work off the shell and do not require any modifications. 

![deploy](https://botlhale-docs1-new.s3.amazonaws.com/create-live-show.PNG)

The human handoff capability uses Socket.IO (https://socket.io/docs/v3/) which is a library that allows message passing between a server and multiple clients. All chatbots with human handoff setup will need to connect to our socketIO server: https://app.botlhale.xyz/live_server

Below are code snippets to setup socket IO, and event listener and emitter functions to interface with our socket IO server. The code snippets are for a JavaScript client, however if your bot is integrated on a non-JS environment, there are also several client implementations in other languages at https://socket.io/docs/v3/

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
> *We are here to help! For any questions and queries about this feature, please email support@botlhale.ai*
:::


