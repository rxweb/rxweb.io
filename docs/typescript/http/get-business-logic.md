---
title: get-business-logic
author: rxcontributorone
category: http
type: tabs
linktitle: get
---
# Rxhttp Methods:
For interacting with the backend using the HTTP services, RxHttp provides methods to perform read, write, update and delete operations with necessary options to be passed to the server. The return type varies based upon the selected `responseType` which is configured from the HttpRequestConfig. 

# Examples
We will illustrate this by examining different scenarios where the data is returned from the server and based upon the business logic the data is retrived to the component according to the use case. 

## Get 
In the below example the list of the active users is retrived from the service and it is further rendered in the component.

<div component="app-example-runner" ref-component="app-get-customlogic" title="Get" key="customlogic"></div>

## GetById
The user object is returned from the server based upon the id, from which the above component needs to bind the fullName of the user.

<div component="app-example-runner" ref-component="app-get-customgetById" title="GetById" key="customgetById"></div>
 
## GetByQueryParams
In the below example the list of the user is retrived based upon the query params, In this case the list of the users whose firstName starts with 'J' are retrived.

<div component="app-example-runner" ref-component="app-get-customgetByParams" title="GetByQueryParams" key="customgetByParams"></div>

# GetByResponseType
It is used for fetching the data based upon the responseType mentioned. It can be of `text`, `json`,`arrayBuffer` and `blob` type. In this case the list of all active users is retrived with type text

<div component="app-example-runner" ref-component="app-get-custombyresponsetype" title="GetByResponseType" key="custombyresponsetype"></div>