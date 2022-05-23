# Text to Speech
## TTS `POST`

```bash
https://dev-botlhale.xyz/tts
```
This endpoint handles single text to speech conversion.

Request Params | 
| ------------- | ------------- |
| TextMsg  | `string` <br />Required. Text Message from the user to the bot.| 
| LanguageCode  | `string` <br /> Required. This is the language the user is using to interact with the bot. See **list of supported languages** to get the languae
<!-- theme: info -->

>  Note\! You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token]


<br />

#### Request Example
<!--
type: tab
title: Python
-->

```python 
import requests

url = "hhttps://dev-botlhale.xyz/tts"

payload={'LanguageCode': 'IsiXhosa',
'TextMsg': 'hello'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

<!--
type: tab
title: cURL
-->
```bash 
curl --location --request POST 'https://dev-botlhale.xyz/tts' \
--form 'LanguageCode="IsiXhosa"' \
--form 'TextMsg="hello"'
```

<!--
type: tab
title: Javascipt
-->
```javascript 
var formdata = new FormData();
formdata.append("LanguageCode", "IsiXhosa");
formdata.append("TextMsg", "hello");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev-botlhale.xyz/tts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

<!--
type: tab
title: NODEJS - NATIVE
-->

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://dev-botlhale.xyz',
  'path': '/tts',
  'headers': {
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

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nIsiXhosa\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"TextMsg\"\r\n\r\nhello\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

<!-- type: tab-end -->


#### Response body
```bash
{
    "DateReceived": "01/05/2021 15:38:35",
    "LanguageCode": "IsiXhosa",
    "SpeechResponseURL": "<URL>",
    "TextMsg": "molo Xolisani"
}
```
