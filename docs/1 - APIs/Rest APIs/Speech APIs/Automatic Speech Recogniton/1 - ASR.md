# Speech-to-Text API: Synchronous Request

Synchronous recognition requests are the simplest means of performing recognition on speech audio data. The Speech-to-Text API can process up to 1 minute of speech audio data sent in a synchronous request. After the Speech-to-Text API processes and recognizes all of the audio, it returns a response. A sample request is shown in the section that follows:

## ASR `POST`

```bash
https://api.botlhale.xyz/asr
```

:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](../1%20-%20Authentication.md#generate-a-bearer-token-post) page of this documentation for information on how to generate authentication token codes.
:::


This endpoint handles single speech to text conversion. This API endpoint returns a text transcript of the audio file provided and supports audio clips of up to 1 minutes.

Request Params |File Type | | Description |
| ------------- | ------------- | ------------- | ------------- |
| SpeechFile  | `File`  | **Required** | This is the binary audio file of the user's message.| 
| SampleRate  | `Number`  | **Required** | This is the sample rate of the supplied audio clip in hertz. <br/>For example, an 8kHz sample rate would be input as 8000.|
| LanguageCode  | `String`  | **Required** | This is the language spoken in the supplied audio clip. We use BCP-47 language tags. <br/>See the [Supported Languages](2%20-%20Languages.md) page for a list of supported languages and codes. |


<br />

#### Request Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api.botlhale.xyz/asr"

payload={
  'LanguageCode': 'zu-ZA',
  'SampleRate': '16000'
  }

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
<TabItem value="bash" label="Bash">

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
<TabItem value="nodejs" label="NodeJs - Request">

```js
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'https://api.botlhale.xyz/asr',
  'headers': {
    'Authorization': 'Bearer <IdToken>'
  },
  formData: {
    'LanguageCode': 'zu-ZA',
    'SpeechFile': {
      'value': fs.createReadStream('mPMBv3Y3c/bot_YPBDDDGASKSEVTHT__V5v5DS992s.wav'),
      'options': {
        'filename': '',
        'contentType': null
      }
    },
    'SampleRate': '16000'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
</Tabs>


#### Response body

```json
{
    "DateReceived": "02/02/2023 10:29:55",
    "LanguageCode": "zu-ZA",
    "NewSampleRate": "16000",
    "SpeechFile": "asr_3mi1GR26M72f_zu-ZA__LLR3781Zc20b.wav",
    "Transcription": "izithombe zakhe umzimba zokuxhumana"
}
```

