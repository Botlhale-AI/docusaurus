# Translation API
## translate `POST`

```bash
https://api.botlhale.xyz/translate
```

:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](../1%20-%20Authentication.md#generate-a-bearer-token-post) page of this documentation for information on how to generate authentication token codes.
:::

This endpoint handles translations from the specified language to English.

Request Params | Data Type | |Description
| ------------- | ------------- | ------------- | ------------- |
| Text  | `string` |**Required** |Text to be translated | 
| LanguageCode  | `string` |**Optional** |Source language of text to be translated <br/>See the [Supported Languages](2%20-%20Languages.md) page for a list of supported languages and codes. |


#### Request Example
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python" default>

```python 
import requests

url = "https://api.botlhale.xyz/translate"

payload={
  'Text': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.',
  'LanguageCode': 'xh-ZA'
  }
  
files=[

]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```


</TabItem>
<TabItem value="bash" label="Bash">

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
<TabItem value="nodejs" label="NodeJs - Request">

```js
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.botlhale.xyz/translate',
  'headers': {
    'Authorization': 'Bearer <IdToken>'
  },
  formData: {
    'LanguageCode': 'xh-ZA',
    'Text': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'
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
    "DateReceived": "01/05/2021 15:38:35",
    "LanguageCode": "xh-ZA",
    "Translation": "When you want to buy a car, click the first button.",
    "characters": "40"
}
```

:::info
> We are here to help! Please email support@botlhale.ai with any questions.
:::