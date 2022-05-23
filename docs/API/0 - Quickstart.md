# Quickstart Guide

Botlhale AI's API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Overview

Authentication to the all API endpoints is performed via Bearer Authentication. To perform Bearer Authentication you first need to provide your API key as the basic auth username value and password to `generateAuthToken` endpoint and use `IdToken` in the response as Bearer token for all other endpoints. 

Botlhale uses conventional `HTTP` response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the `5xx` range indicate an error with Botlhale's servers (these are rare).

1. [Authentication]
2. [ResponseCodes]

## Chatbot API

See what you can do with our Chatbot APIs!

<!-- theme: info -->
> These are examples of how your can intergrate our APIs to different platforms: 
[flaskTemplate](https://github.com/Botlhale-AI/flaskTemplate), [facebookTemplate](https://github.com/Botlhale-AI/facebookTemplate), [WhatsAppTemplate](https://github.com/Botlhale-AI/WhatsAppTemplate). 

1. [Start a Conversation]
2. [Send Text Message]
3. [Send Speech Message]
4. [Recieve Speech Response]

## Speech APIs

See what you can do with our Speech APIs!

1. [Convert Speech to Text] - point to asr
2. [Convert Text to Speech] - point to tts
