# Response Codes

Botlhale AI uses conventional `HTTP` response codes to indicate the success or failure of an API request. In general: 

- Codes in the `2xx` range indicate success
- Codes in the `4xx` range indicate an error stemming from the information provided (for example, a required parameter was omitted, a charge failed, and so on)
- Codes in the `5xx` range indicate an error stemming from Botlhale's servers (these are rare)


## Successful execution

Successfully executed operations return `2xx` codes, and, where appropriate, they return the requested information directly in the response body. The following table shows the typical response codes, entities and headers used for the various HTTP verbs supported by the APIs.

|HTTP Status Code Summary | Description
| ------------- | ------------- |
| `200 - OK` | Everything worked as expected.| 

## Error Handling

As previously mentioned, unsuccessfully executed operations return either a `4xx` or `5xx` response code.
In the case where a standard HTTP error is sufficiently descriptive, for example, `401 (Not Authorized)`, or `404 (Not Found)`, the response body remains empty. In other cases, we use a generic response code for input errors (400), and the response body includes an error entity with additional details on the error, including an application error code and a human readable error description. The format of this error entity is shown in the following table.

| HTTP Status Code Summary | Description
| ------------- | ------------| 
| `400 - Bad Request` | The request was unacceptable, often due to missing a required parameter.| 
| `401 - Unauthorized` | No valid API key provided.| 
| `402 - Request Failed` | The parameters were valid but the request failed.| 
| `403 - Forbidden` | The API key doesn't have permissions to perform the request.| 
| `404 - Not Found` | The requested resource doesn't exist.| 
| `409 - Conflict` | The request conflicts with another request (perhaps due to using the same idempotent key).| 
| `429 - Too Many Requests` | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.| 
| `500, 502, 503, 504 - Server Errors` | Something went wrong on Botlhale's end (these are rare).

:::info
> We are here to help! Please email support@botlhale.ai with any questions.
:::
