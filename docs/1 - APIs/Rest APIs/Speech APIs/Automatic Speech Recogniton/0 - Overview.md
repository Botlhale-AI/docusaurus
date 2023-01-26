# Speech to Text API 
Converts speech to text using Botlhale AI's deep learning models.

<br/>

Botlhale AI's Speech to text has two types of API requests based on audio content.

Content Limit | Audio Length |
| ------------- | ------------- |
| Synchronous Request  | `~ 60 seconds` | 
| Asynchronous Request  | `~ 400 minutes` |

<br />

#### [Synchronous Requests](1%20-%20ASR.md) 

The audio file content should be approximately 1 minute to make a synchronous request. In this type of request, the user does not have to upload the data to Botlhale AI's API. This provides the flexibility to users to store the audio file in their local computer or server and reference the API to get the text.

#### [Asynchronous Requests](1%20-%20long%20ASR.md)

The audio file content should be approximately 400 minutes(7 hours). In this type of request, the user have to upload their data to Botlhale AI's API.

