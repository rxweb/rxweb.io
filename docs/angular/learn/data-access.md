---
title: data access
author: rxcontributorone
category: learn
type: simple
linktitle: data-access
---

# Accessing the data

After the creation of the user registration form, lets proceed towards interacting with the server for fetching, writing, updating and deleting the data, using the @http decorator provided by the `@rxweb/http` package. <a class="redirect-link" href="/rxweb-http/http-getting-started" target="_blank">@rxweb/http</a> is a typescript compatible package to make request to the server and interact with the data.

1) Lets begin towards globally registering the HttpClientConfig in the app component    

<div component="app-code" key="data-access-add-component"></div> 

2) Creating user service class 
Creating user service class and creating add user method to be further used in component.

<div component="app-code" key="data-access-add-service"></div> 

3) Injecting the service in the user component

<div component="app-code" key="data-access-add-model"></div> 

