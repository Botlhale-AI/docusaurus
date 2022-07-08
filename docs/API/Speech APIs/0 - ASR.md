# Automatic Speech Recogniton
## ASR `POST`

```bash
https://dev-botlhale.xyz/asr
```
This endpoint handles single speech to text conversion. This API returns a text transcript of the audio file provided. This API supports audio clips of up to 15 minutes.

Request Params | |
| ------------- | ------------- |
| SpeechFile  | `File` <br />**Required.** Binary audio file of the user's message.| 
| SampleRate  | `Number` <br /> **Optional.** The sample rate of the supplied audio clip in hertz e.g 8000 for 8kHz|
| LanguageCode  | `String` <br /> **Required.** This is the language spoken in the supplied audio clip. We use BCP-47 language tags. See [list of supported languages](2%20-%20Languages.md) for supported languages and codes. |
| Diarization  | `Boolean` <br /> **Optional.** Speaker diarization is used to identify different speakers in the clip as well as when the different speakers are speaking <br><br/> * **False** - Default, Speaker diarization is disabled. <br/> * **True** - Speaker diarization is enabled  |
| LanguageId  | `Boolean` <br /> **Optional.** This is used to automatically detect the language spoken on the audio clip. This is done at sentence level. When this is enabled, the provided LanguageCode will be ignored.<br><br> * **False** - Default, Language identification is disabled. <br/> * **True** - Language identification is enabled|


<!-- theme: info -->

>  Note\! You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token](../1%20-%20Authentication.md#generate-a-bearer-token-post)
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

payload={'LanguageCode': 'zu-ZA'}
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
--form 'LanguageCode="zu-ZA"'
```

<!--
type: tab
title: Javascipt
-->
```javascript 
var formdata = new FormData();
formdata.append("SpeechFile", fileInput.files[0], "[PROXY]");
formdata.append("LanguageCode", "zu-ZA");

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
    "LanguageCode": "zu-ZA",
    "Transcription": "Siyabonga"
}
```
#### Supported formats
* `File Type` - We currently only support **wav, flac and ogg.**

* `Sample Rate` - We support all sample rates between 8000Hz and 48000 Hz. If you can choose the sample rate of the source, record the audio at 16000 Hz. This is because sample rates below that may impair the accuracy of our models and sample rates above 16000 Hz have no significant impact on the accuracy of our models.  
<br>
