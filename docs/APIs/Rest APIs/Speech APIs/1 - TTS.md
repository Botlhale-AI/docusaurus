# Text to Speech
## TTS `POST`

```bash
https://api.botlhale.xyz/tts
```
This endpoint handles single text to speech conversion.

Request Params | |
| ------------- | ------------- |
| TextMsg  | `string` <br />Required. Text Message from the user to the bot.| 
| LanguageCode  | `string` <br /> Required. This is the language the user is using to interact with the bot. See [list of supported languages](2%20-%20Languages.md) for supported languages and codes. |

:::info

You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token](../../1%20-%20Authentication.md#generate-a-bearer-token-post)
 codes.
:::


<br />

#### Request Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "hhttps://api.botlhale.xyz/tts"

payload={'LanguageCode': 'xh-ZA',
'TextMsg': 'Molo Athi'}
files=[

]
headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>


```bash 
curl --location --request POST 'https://api.botlhale.xyz/tts' \
--header 'Authorization: Bearer <IdToken>' \
--form 'LanguageCode="xh-ZA"' \
--form 'TextMsg="hello"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <IdToken>");

var formdata = new FormData();
formdata.append("LanguageCode", "xh-ZA");
formdata.append("TextMsg", "hello");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.botlhale.xyz/tts", requestOptions)
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
  'path': '/tts',
  'headers': {
    'Authorization': 'Bearer <IdToken>'
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

</TabItem>
</Tabs>

#### Response body
```json
{
    "DateReceived": "01/05/2021 15:38:35",
    "LanguageCode": "xh-ZA",
    "SpeechResponseURL": "<URL>",
    "TextMsg": "Molo Athi"
}
```
