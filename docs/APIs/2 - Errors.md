# Response Codes

Botlhale AI uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Botlhale's servers (these are rare).

## Successful execution

Operations that execute successfully will return 2xx codes, and, where appropriate, will return the information requested directly in the response body. The table below shows the typical response codes, entities and headers used for the various HTTP verbs supported by the APIs.

|HTTP Status Code Summary | 
| ------------- | ------------- |
| `200 - OK` | Everything worked as expected.| 

## Error Handling
Operations that result in an error due to a problem on the client's part (eg invalid input) will return 4xx codes. Operations that result in an error due to a problem in the Botlhale AI server will return 5xx codes.

Where a standard HTTP error is suffiently descriptive, e.g. 401 (Not Authorized) or 404 (Not Found), the response body will be empty. For other cases, we will use the generic response code for client error (400), and the response will include an error entity that gives further details about the error, including an application error code and a human readable error description. The format of this error entity is below.

| HTTP Status Code Summary | 
| ------------- | ------------| 
| `400 - Bad Request` | The request was unacceptable, often due to missing a required parameter.| 
| `401 - Unauthorized` | No valid API key provided.| 
| `402 - Request Failed` | The parameters were valid but the request failed.| 
| `403 - Forbidden` | The API key doesn't have permissions to perform the request.| 
| `404 - Not Found` | The requested resource doesn't exist.| 
| `409 - Conflict` | The request conflicts with another request (perhaps due to using the same idempotent key).| 
| `429 - Too Many Requests` | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.| 
| `500, 502, 503, 504 - Server Errors` | Something went wrong on Botlhale's end (these are rare).
