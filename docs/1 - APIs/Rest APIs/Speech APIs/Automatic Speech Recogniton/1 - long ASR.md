# Speech to Text API Async

An asynchronous Speech to Text API recognition request requires you to first upload the file to our server for the asyncromous prosess to start. The asynchronous request will initiate a asynchronous Operation  and return this operation immediately. You can use asynchronous speech recognition with audio of any length up to 400 minutes.

## ASR Async upload `POST`

```bash
https://api.botlhale.xyz/asr/upload
```

This endpoint generates a presigned url that allows the user to upload a speech file for the async ASR. This endpoint returns a presigned url and the auto generated filename.

Request Params | |
| ------------- | ------------- |
| SampleRate  | `Number` **Required.** The sample rate of the supplied audio clip in hertz e.g 8000 for 8kHz|
| LanguageCode  | `String` **Optional.** This is the language spoken in the supplied audio clip. We use BCP-47 language tags. See [list of supported languages](../../2%20-%20Languages.md) for supported languages and codes. If not provided we automatically detect the language spoken on the audio clip. This is done at sentence level.|
| Diarization | `Boolean`  **Optional.** Speaker diarization is used to identify different speakers in the clip as well as when the different speakers are speaking  * **False** - Default, Speaker diarization is enabled.  * **True** - Speaker diarization is enabled. `Note! This will have an impact on the cost of the request` |

<br />

:::info

You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token](../../../1%20-%20Authentication.md#generate-a-bearer-token-post)
 codes.
:::


<br />

#### Request Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api.botlhale.xyz/asr/upload"

payload={
  'LanguageCode': 'zu-ZA',
  'SampleRate': '16000', 
  'Diarization': True,
  }

files=[

]

headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.json())
```

</TabItem>
<TabItem value="bash" label="Bash" >

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
  "fields": 
  {
    "AWSAccessKeyId": "<>", 
    "key": "asr_a7ki4qpZ0635_zu-ZA_16000_19y3NDgP76m4.wav", 
    "policy": "<>", 
    "signature": "<>", 
    "x-amz-security-token": "<>"
    }, 
  "url": "https://botlhale-api-asr-async.s3.amazonaws.com/"
  }
```
<br />

The generated presigned URL includes both a URL and additional fields that must be passed as part of the subsequent HTTP POST request. The following code demonstrates how to use the requests package with a presigned POST URL to perform a POST request to upload a file.

#### Request Example

<Tabs>
<TabItem value="py" label="Python" default>

```py
# Demonstrate how another Python program can use the presigned URL to upload a file
with open('speechfile.wav', 'rb') as f:
    files = {
      'file': (response['fields']['key'], f)
      }

    http_response = requests.post(response['url'], data=response['fields'], files=files)

# If successful, returns HTTP status code 204
print(f'File upload HTTP status code: {http_response.status_code}')
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




## ASR Async get status `POST`

```bash
https://api.botlhale.xyz/asr/async/status
```

This endpoint returns the status of the async process and results if the process is done.

Request Params | |
| ------------- | ------------- |
| FileName  | `Text` **Required.** The filename generated from the async upload process. |

<br />

:::info

You need to Include `Authentication Token` in request headers. See how to 
[Generate Auth Token](../../../1%20-%20Authentication.md#generate-a-bearer-token-post)
 codes.
:::


<br />

#### Request Example

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api.botlhale.xyz/asr/async/status"

payload={'FileName': 'asr_x95mC54S71nD_zu-ZA_16000_6Y9uBRn9x395'}
files=[

]
headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.json())
```

</TabItem>
<TabItem value="bash" label="Bash" >

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
    "audio_length": "40.40275 seconds",
    "filename": "audios/asr_x95mC54S71nD_zu-ZA_16000_6Y9uBRn9x395.wav",
    "status": "done",
    "timestamps": [
        {
            "end": 10199.999999999987,
            "filename": "1_speaker_0_3929.999999999989_10199.999999999987_zu-ZA.wav",
            "speaker": "speaker_0",
            "start": 3929.999999999989,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 12119.99999999995,
            "filename": "2_speaker_1_11279.99999999995_12119.99999999995_en-ZA.wav",
            "speaker": "speaker_1",
            "start": 11279.99999999995,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 15929.999999999918,
            "filename": "3_speaker_1_12509.999999999925_15929.999999999918_zu-ZA.wav",
            "speaker": "speaker_1",
            "start": 12509.999999999925,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 19829.999999999873,
            "filename": "4_speaker_0_16679.999999999876_19829.999999999873_zu-ZA.wav",
            "speaker": "speaker_0",
            "start": 16679.999999999876,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 25020.00000000003,
            "filename": "5_speaker_1_20640.000000000025_25020.00000000003_zu-ZA.wav",
            "speaker": "speaker_1",
            "start": 20640.000000000025,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 26580.00000000021,
            "filename": "6_speaker_0_25530.00000000021_26580.00000000021_zu-ZA.wav",
            "speaker": "speaker_0",
            "start": 25530.00000000021,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 30840.00000000028,
            "filename": "7_speaker_0_27360.00000000028_30840.00000000028_zu-ZA.wav",
            "speaker": "speaker_0",
            "start": 27360.00000000028,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 34830.00000000044,
            "filename": "8_speaker_0_31620.00000000044_34830.00000000044_zu-ZA.wav",
            "speaker": "speaker_0",
            "start": 31620.00000000044,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 36570.00000000056,
            "filename": "9_speaker_1_34830.00000000056_36570.00000000056_af-ZA.wav",
            "speaker": "speaker_1",
            "start": 34830.00000000056,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        },
        {
            "end": 39600.00000000066,
            "filename": "10_speaker_0_37560.00000000066_39600.00000000066_zu-ZA.wav",
            "speaker": "speaker_0",
            "start": 37560.00000000066,
            "language": "zu-ZA",
            "transcription": "<transcription>"
        }
    ]
}
```
<br />