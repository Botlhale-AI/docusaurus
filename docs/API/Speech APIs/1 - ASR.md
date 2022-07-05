# Automatic Speech Recogniton
## ASR `POST`

```bash
https://dev-botlhale.xyz/asr
```
This endpoint handles single speech to text conversion.

Request Params | 
| ------------- | ------------- |
| SpeechFile  | `file` <br />This is required. Binary audio file of the user's message.| 
| LanguageCode  | `string` <br /> Required. This is the language the user is using to interact with the bot. See **list of supported languages** to get the language<!-- theme: info -->

>  Note\! You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token](../../1%20-%20Authentication.md#generate-a-bearer-token-post)
 codes. 


<br />

#### Request Example
<!--
type: tab
title: Python
-->

```python 
import requests

url = "https://dev-botlhale.xyz/asr"

payload={'LanguageCode': 'IsiZulu'}
files=[
  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('mPMBv3Y3c/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))
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
curl --location --request POST 'https://dev-botlhale.xyz/asr' \
--form 'SpeechFile=@"mPMBv3Y3c/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav"' \
--form 'LanguageCode="IsiZulu"'
```

<!--
type: tab
title: Javascipt
-->
```javascript 
var formdata = new FormData();
formdata.append("SpeechFile", fileInput.files[0], "[PROXY]");
formdata.append("LanguageCode", "IsiZulu");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev-botlhale.xyz/asr", requestOptions)
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
  'path': '/asr',
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

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SpeechFile\"; filename=\"[PROXY]\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('mPMBv3Y3c/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nIsiZulu\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

<!-- type: tab-end -->


#### Response body
```bash
{
    "DateReceived": "01/05/2021 15:39:41",
    "LanguageCode": "English",
    "Transcription": "Siyabonga"
}
```
