# Speech-to-Text API Overview
This page outlines the fundamentals of using the Speech-to-Text API. Covered in this page is information on the types of requests you can make using Speech-to-Text, how to construct those requests, and how to handle their responses. It's recommended that you read this page in its entirety before diving into the Speech API.

## Speech requests

Speech-to-Text has two main methods of performing speech recognition. These are listed and described as follows:

#### [Synchronous Requests](1%20-%20ASR.md) 

With synchronous requests (REST), audio data is sent to the Speech-to-Text API, recognition is performed on that data, and results are returned once all audio has been processed. Synchronous recognition requests are limited to audio data of 1 minute or less in duration.

#### [Asynchronous Requests](1%20-%20long%20ASR.md)

With asynchronous requests (REST), audio data is sent to the Speech-to-Text API and a Long Running Operation is initiated. Using this operation, you can periodically poll for recognition results. Asynchronous requests can be used for audio data with a duration up to 400 minutes.

<br />

|Request Type | Audio Length Limit |
| ------------- | ------------- |
| Synchronous Request  | `≤ 60 seconds` | 
| Asynchronous Request  | `≤ 400 minutes` |


## Supported formats

* `File Type` - We currently only support **wav, amr, flac, and ogg.** audio files.

* `Sample Rate` - We support all sample rates between 8 000 Hz and 48 000 Hz. If you can choose the sample rate of the source, record the audio at 16 000 Hz. This is because sample rates below that might affect the accuracy of our models, and sample rates above 16 000 Hz have no significant impact on the accuracy of our models.  

