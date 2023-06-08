# Chatbot API

## startConversation `POST`

```bash
https://api.botlhale.xyz/startConversation
```

:::tip
You need to include an `Authentication Token` in request headers. See the [Authentication](../1%20-%20Authentication.md#generate-a-bearer-token-post) page of this documentation for information on how to generate authentication token codes.
:::

This endpoint allows you to generate a `ConversationID` valid for 24 hours. This is a unique ID you need to provide to keep track of different conversations.

Request Params |Data Type | |Description | 
| ------------- | ------------- | ------------- | ------------- |
| BotID  | `string` |**Required** |Specifies the bot to which the message should be sent| 
| LanguageCode  | `string`  |**Required** |This is the language in which the user interacts with the bot. <br/>See the [Supported Languages](2%20-%20Languages.md) page for a list of supported languages and codes. |


#### Request Example
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python" default>

```python 
import requests

url = "https://api.botlhale.xyz/startConversation"

payload={
  'BotID': 'YPBDDDGASKSEVTHT',
  'LanguageCode': 'English'
  }
  
files=[

]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```


</TabItem>
<TabItem value="bash" label="Bash" >

```bash 
curl --location --request POST 'https://api.botlhale.xyz/startConversation' \
-H 'Authorization: Bearer <IdToken>' \
--form 'BotID="YPBDDDGASKSEVTHT"' \
--form 'LanguageCode="English"'
```


</TabItem>
<TabItem value="js" label="JavaScript" >

```javascript 
var formdata = new FormData();
formdata.append("BotID", "YPBDDDGASKSEVTHT");
formdata.append("LanguageCode", "English");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
};

fetch("https://api.botlhale.xyz/startConversation", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```


</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/startConversation',
  'headers': {
      "Authorization": "Bearer <IdToken>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"BotID\"\r\n\r\nYPBDDDGASKSEVTHT\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

</TabItem>
</Tabs>


#### Response body
```json
{
    "ConversationID": "p52C32Li4xx5"
}
```


## Message  `POST`

```bash
https://api.botlhale.xyz/message
```

:::tip
You need to include an `Authentication Token` in request headers. See the [Authentication](../1%20-%20Authentication.md#generate-a-bearer-token-post) page of this documentation for information on how to generate authentication token codes.
:::
 
This endpoint handles the messages. It receives messages from the user and returns the bot response in JSON format.

Request Params | Data Type | |Description |
| ------------- | ------------- | ------------- | ------------- |
| BotID  | `string` |Required | Specifies the bot to which the message should be sent.| 
| LanguageCode  | `string` | Required | This is the language in which the user interacts with the bot. <br/>See the [Supported Languages](2%20-%20Languages.md) page for a list of supported languages and codes. |
| ConversationID  | `string` | Required | This is a unique Id you need to provide to keep track of different conversations.| 
| MessageType  | `string` | Required |Specifies whether the user message is speech or text.| 
| ResponseType  | `string` | Required | Specifies whether the response should be speech or text.|
| TextMsg  | `string` | Required if MessageType = 'text' |Text message from the user |
| SpeechFile  | `file` | Required if MessageType = 'speech' | Binary audio file of the user's message|


### Text - Text  `example request`


<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'BotID': 'YPBDDDGASKSEVTHT',
'LanguageCode': 'English',
'ConversationID': 'p52C32Li4xx5',
'MessageType': 'text',
'ResponseType': 'text',
'TextMsg': 'hello'}
files=[

]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <IdToken>" \
--form 'BotID="YPBDDDGASKSEVTHT"' \
--form 'LanguageCode="English"' \
--form 'ConversationID="p52C32Li4xx5"' \
--form 'MessageType="text"' \
--form 'ResponseType="text"' \
--form 'TextMsg="hello"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("BotID", "YPBDDDGASKSEVTHT");
formdata.append("LanguageCode", "English");
formdata.append("ConversationID", "p52C32Li4xx5");
formdata.append("MessageType", "text");
formdata.append("ResponseType", "text");
formdata.append("TextMsg", "hello");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
  
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```


</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
    "Authorization": "Bearer <IdToken>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"BotID\"\r\n\r\nYPBDDDGASKSEVTHT\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ConversationID\"\r\n\r\np52C32Li4xx5\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"MessageType\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ResponseType\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"TextMsg\"\r\n\r\nhello\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```
</TabItem>
</Tabs>

#### Response body
```json
{
    "BotID":"<BotID>",
    "Buttons":[{
         "payload":"/small",
         "title":"Small"
     },
         {
         "payload":"/medium",
         "title":"Medium"
     }, 
          {
         "payload":"/large",
         "title":"Large"
     }, 
     ],
    "Confidence":1.0,
    "ConversationID":"<ConversationID>",
    "DateReceived":"16/06/2021 10:36:26",
    "Entities":[{
        "confidence_entity": 0.8229705691337585,
        "end": 17,
        "entity": "coffee_type",
        "start": 12,
        "value": "caffe latte",
     }],
    "Intent":"order_coffee",
    "LanguageCode":"English",
    "MessageID":"<MessageID>",
    "TextMsg":"Can I get a latte",
    "TextResponse":["What size would you like?"]
}
```

### Text - Speech  `example request`


<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'BotID': 'YPBDDDGASKSEVTHT',
'LanguageCode': 'English',
'ConversationID': 'p52C32Li4xx5',
'MessageType': 'text',
'ResponseType': 'speech',
'TextMsg': 'hello'}
files=[

]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <IdToken>"
--form 'BotID="YPBDDDGASKSEVTHT"' \
--form 'LanguageCode="English"' \
--form 'ConversationID="p52C32Li4xx5"' \
--form 'MessageType="text"' \
--form 'ResponseType="speech"' \
--form 'TextMsg="hello"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("BotID", "YPBDDDGASKSEVTHT");
formdata.append("LanguageCode", "English");
formdata.append("ConversationID", "p52C32Li4xx5");
formdata.append("MessageType", "text");
formdata.append("ResponseType", "speech");
formdata.append("TextMsg", "hello");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
    "Authorization": "Bearer <IdToken>",
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"BotID\"\r\n\r\nYPBDDDGASKSEVTHT\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ConversationID\"\r\n\r\np52C32Li4xx5\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"MessageType\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ResponseType\"\r\n\r\nspeech\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"TextMsg\"\r\n\r\nhello\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```
</TabItem>
</Tabs>

#### Response body
```json
{
    "BotID":"<BotID>",
    "Buttons":[{
         "payload":"/small",
         "title":"Small"
     },
         {
         "payload":"/medium",
         "title":"Medium"
     }, 
          {
         "payload":"/large",
         "title":"Large"
     }, 
     ],
    "Confidence":1.0,
    "ConversationID":"<ConversationID>",
    "DateReceived":"16/06/2021 10:36:26",
    "Entities":[{
        "confidence_entity": 0.8229705691337585,
        "end": 17,
        "entity": "coffee_type",
        "start": 12,
        "value": "caffe latte"
     }],
    "Intent":"order_coffee",
    "LanguageCode":"English",
    "MessageID":"<MessageID>",
    "SpeechResponseURL": "<URL>",
    "TextMsg":"Can I get a latte",
    "TextResponse":["What size would you like?"]
}
```


### Speech - Text  `example request`


<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'BotID': 'dshfgjdsgfd',
'LanguageCode': 'English',
'ConversationID': 'fdgsgfd',
'MessageType': 'speech',
'ResponseType': 'text'}
files=[
  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))
]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <IdToken>" \
--form 'BotID="dshfgjdsgfd"' \
--form 'LanguageCode="English"' \
--form 'ConversationID="fdgsgfd"' \
--form 'MessageType="speech"' \
--form 'ResponseType="text"' \
--form 'SpeechFile=@"6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("BotID", "dshfgjdsgfd");
formdata.append("LanguageCode", "English");
formdata.append("ConversationID", "fdgsgfd");
formdata.append("MessageType", "speech");
formdata.append("ResponseType", "text");
formdata.append("SpeechFile", fileInput.files[0], "[PROXY]");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
   "Authorization": "Bearer <IdToken>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"BotID\"\r\n\r\ndshfgjdsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ConversationID\"\r\n\r\nfdgsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"MessageType\"\r\n\r\nspeech\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ResponseType\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SpeechFile\"; filename=\"[PROXY]\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

</TabItem>
</Tabs>

#### Response body
```json
{
    "BotID":"<BotID>",
    "Buttons":[{
         "payload":"/small",
         "title":"Small"
     },
         {
         "payload":"/medium",
         "title":"Medium"
     }, 
          {
         "payload":"/large",
         "title":"Large"
     }, 
     ],
    "Confidence":1.0,
    "ConversationID":"<ConversationID>",
    "DateReceived":"16/06/2021 10:36:26",
    "Entities":[{
        "confidence_entity": 0.8229705691337585,
        "end": 17,
        "entity": "coffee_type",
        "start": 12,
        "value": "caffe latte",
     }],
    "Intent":"order_coffee",
    "LanguageCode":"English",
    "MessageID":"<MessageID>",
    "Transcription": "Can I get a latte",
    "TextResponse":["What size would you like?"]
}
```


### Speech - Speech  `example request`

<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'BotID': 'dshfgjdsgfd',
'LanguageCode': 'English',
'ConversationID': 'fdgsgfd',
'MessageType': 'speech',
'ResponseType': 'text'}
files=[
  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))
]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <IdToken>" \
--form 'BotID="dshfgjdsgfd"' \
--form 'LanguageCode="English"' \
--form 'ConversationID="fdgsgfd"' \
--form 'MessageType="speech"' \
--form 'ResponseType="text"' \
--form 'SpeechFile=@"jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("BotID", "dshfgjdsgfd");
formdata.append("LanguageCode", "English");
formdata.append("ConversationID", "fdgsgfd");
formdata.append("MessageType", "speech");
formdata.append("ResponseType", "text");
formdata.append("SpeechFile", fileInput.files[0], "[PROXY]");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
     "Authorization": "Bearer <IdToken>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"BotID\"\r\n\r\ndshfgjdsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ConversationID\"\r\n\r\nfdgsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"MessageType\"\r\n\r\nspeech\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ResponseType\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SpeechFile\"; filename=\"[PROXY]\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```
</TabItem>
</Tabs>


#### Response body
```json
{
    "BotID":"<BotID>",
    "Buttons":[{
         "payload":"/small",
         "title":"Small"
     },
         {
         "payload":"/medium",
         "title":"Medium"
     }, 
          {
         "payload":"/large",
         "title":"Large"
     }, 
     ],
    "Confidence":1.0,
    "ConversationID":"<ConversationID>",
    "DateReceived":"16/06/2021 10:36:26",
    "Entities":[{
        "confidence_entity": 0.8229705691337585,
        "end": 17,
        "entity": "coffee_type",
        "start": 12,
        "value": "caffe latte"
     }],
    "Intent":"order_coffee",
    "LanguageCode":"English",
    "MessageID":"<MessageID>",
    "SpeechResponseURL": "<URL>",
    "Transcription": "Can I get a latte",
    "TextResponse":["What size would you like?"]
}
```
