# Speech to Text API Overview
This document is a guide to the basics of using Speech to Text. This conceptual guide covers the types of requests you can make to Speech to Text, how to construct those requests, and how to handle their responses. We recommend that all users of Speech to Text read this guide before diving into the API itself.

## Speech requests

Speech-to-Text has two main methods to perform speech recognition. These are listed below:

#### [Synchronous Requests](1%20-%20ASR.md) 

Synchronous requests (REST) sends audio data to the Speech to Text API, performs recognition on that data, and returns results after all audio has been processed. Synchronous recognition requests are limited to audio data of 1 minute or less in duration.

#### [Asynchronous Requests](1%20-%20long%20ASR.md)

Asynchronous Recognition (REST) sends audio data to the Speech to Text API and initiates a Long Running Operation. Using this operation, you can periodically poll for recognition results. Use asynchronous requests for audio data of any duration up to 400 minutes.

<br />

Content Limit | Audio Length |
| ------------- | ------------- |
| Synchronous Request  | `~ 60 seconds` | 
| Asynchronous Request  | `~ 400 minutes` |


## Supported formats

* `File Type` - We currently only support **wav, amr, flac and ogg.**

* `Sample Rate` - We support all sample rates between 8000Hz and 48000 Hz. If you can choose the sample rate of the source, record the audio at 16000 Hz. This is because sample rates below that may impair the accuracy of our models and sample rates above 16000 Hz have no significant impact on the accuracy of our models.  

