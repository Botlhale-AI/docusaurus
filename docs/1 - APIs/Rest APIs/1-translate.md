# Translate APIs
## translate `POST`

```bash
https://api.botlhale.xyz/translate
```
This endpoint handles translate from specified language to English.

Request Params | 
| ------------- | ------------- |
| Text  | `string` <br />Required. Text to be translate. | 
| LanguageCode  | `string` <br /> Required. This is the language the user is using to interact with the bot. See [list of supported languages](2%20-%20Languages.md) for supported languages and codes. |


:::info

You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token](../1%20-%20Authentication.md#generate-a-bearer-token-post)
 codes.
:::


#### Request Example
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/translate"

payload={'Text': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.',
'LanguageCode': 'xh-ZA'}
files=[

]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```


</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/translate' \
-H 'Authorization: Bearer <IdToken>' \
--form 'Text="Xa ufuna ukuthenga imoto cofa iqhosha lokuqala."' \
--form 'LanguageCode="xh-ZA"'
```


</TabItem>
<TabItem value="js" label="JavaScript" default>

```javascript 
var formdata = new FormData();
formdata.append("Text", "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.");
formdata.append("LanguageCode", "xh-ZA");

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

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Text\"\r\n\r\Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\xh-ZA\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

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
    "Translation": "When you want to buy a car, click the first button."
}
```
