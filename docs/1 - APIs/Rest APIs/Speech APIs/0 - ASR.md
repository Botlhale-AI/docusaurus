# Automatic Speech Recogniton
## ASR `POST`

```bash
https://api.botlhale.xyz/asr
```
This endpoint handles single speech to text conversion. This API returns a text transcript of the audio file provided. This API supports audio clips of up to 5 minutes.

Request Params | |
| ------------- | ------------- |
| SpeechFile  | `File` **Required.** Binary audio file of the user's message.| 
| SampleRate  | `Number` **Required.** The sample rate of the supplied audio clip in hertz e.g 8000 for 8kHz|
| LanguageCode  | `String` **Required.** This is the language spoken in the supplied audio clip. We use BCP-47 language tags. See [list of supported languages](../2%20-%20Languages.md) for supported languages and codes. |
| Diarization `coming soon`  | `Boolean`  **Optional.** Speaker diarization is used to identify different speakers in the clip as well as when the different speakers are speaking  * **False** - Default, Speaker diarization is enabled.  * **True** - Speaker diarization is enabled. `Note! This will have an impact on the cost of the request` |
| LanguageId  `coming soon` | `Boolean` **Optional.** This is used to automatically detect the language spoken on the audio clip. This is done at sentence level. When this is enabled, the provided LanguageCode will be ignored.* **False** - Default, Language identification is enabled. * **True** - Language identification is enabled. `Note! This will have an impact on the cost of the request`|

<br />

#### Supported formats
* `File Type` - We currently only support **wav, amr, flac and ogg.**

* `Sample Rate` - We support all sample rates between 8000Hz and 48000 Hz. If you can choose the sample rate of the source, record the audio at 16000 Hz. This is because sample rates below that may impair the accuracy of our models and sample rates above 16000 Hz have no significant impact on the accuracy of our models.  

<br />

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

```py
import requests

url = "https://api.botlhale.xyz/asr"

payload={'LanguageCode': 'zu-ZA',
'SampleRate': '16000'}

files=[
  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_V5v5DS992s.wav',open('mPMBv3Y3c/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav','rb'),'audio/wav'))
]

headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```js 
curl --location --request POST 'https://api.botlhale.xyz/asr' \
--header 'Authorization: Bearer <IdToken>' \
--form 'SpeechFile=@"mPMBv3Y3c/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav"' \
--form 'LanguageCode="zu-ZA"'\
--form 'SampleRate="16000"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <IdToken>");

var formdata = new FormData();
formdata.append("SpeechFile", fileInput.files[0], "[PROXY]");
formdata.append("LanguageCode", "zu-ZA");
formdata.append("SampleRate", "16000");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.botlhale.xyz/asr", requestOptions)
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
  'path': '/asr',
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

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"LanguageCode\"\r\n\r\nzu-ZA\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SpeechFile\"; filename=\"[PROXY]\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('VPIoG_uMJ/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SampleRate\"\r\n\r\n16000\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

</TabItem>
</Tabs>


#### Response body
```json
{
    "DateReceived": "01/05/2021 15:39:41",
    "LanguageCode": "zu-ZA",
    "Transcription": "Siyabonga"
}
```

