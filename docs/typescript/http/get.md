---
title: get
author: rxcontributorone
category: http
type: simple
linktitle: get
---
# Rxhttp Methods:
For interacting with the backend using the HTTP services, RxHttp provides methods to perform read, write, update and delete operations with necessary options to be passed to the server. The return type varies based upon the selected `responseType` which is configured from the HttpRequestConfig. 

The `HttpRequestConfig` allows to configure the params, queryparams, hostUri while making request to the server

<div  component="app-code" key="app-register-complete"></div>

# Examples
We will illustrate this by creating a UserService class and globally declaring it in the app module. we will specify the path to the api as follows:

<div  component="app-code" key="app-register-service"></div>

## Get 
It is used for fetching the data which is list of the entity, It will retreive all the data from the server.

<div component="app-example-runner" ref-component="app-get-complete" title="Get" key="complete"></div>

## GetById
It is used for fetching data based upon id which is passed in the parameter.

<div component="app-example-runner" ref-component="app-get-getById" title="GetById" key="getById"></div>

## GetByQueryParams
It is used for fetching data based upon queryParams which is passed in the parameter.

<div component="app-example-runner" ref-component="app-get-getByQueryParams" title="GetByQueryParams" key="getByQueryParams"></div>

## GetByResponseType
It is used for fetching data based upon response type. It can be of `text`, `json`,`arrayBuffer` and `blob` type.

<div component="app-example-runner" ref-component="app-get-responseType" title="GetByResponseType" key="responseType"></div>

