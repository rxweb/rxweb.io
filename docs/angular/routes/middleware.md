---
title: middleware
author: rxcontributortwo
category: router
type: simple
linktitle: middleware
---

# middleware

Whenever a request is made to the server, middleware runs in the front of each request made by the router at a specific route. Lets consider a scenario where you want to check whether the authorization token is present into the web storage. For this we need to create a login middleware class for the 

<div component="app-code" key="middleware-complete-model"></div> 

The second step is to pass the `@middleware` decorator into the component as below 

<div component="app-code" key="anonymous-complete-component"></div> 