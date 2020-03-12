---
title: middleware
author: rxcontributortwo
category: router
type: simple
linktitle: middleware
---

Whenever a request is made to the server, middleware runs in the front of each request made by the router at a specific route. Lets consider a scenario where you want to check whether the authorization token is present into the web storage. The `middleware` attribute of the @routerModule allows you to add a middleware during the route.  here is an example of using a middleware into `@routerModule` for resolving the multilingual data.

Here in this class, the global multilingual data is used for resolving the global multilingual data and component multilingual data is used  for resolving the component specific multilingual data. For more information related to multilingual data, have a look at <a class="redirect-link" href="/rxweb-localization/localization/localization-quick-start">Multilingual data</a>

<div component="app-code" key="middleware-router-component"></div> 

# middleware
Using @middleware helps yoy to add middleware at the component level. Here is an example of using login middleware for the login component which  
gets the anonymous web token generated. 

<div component="app-code" key="middleware-complete-model"></div> 

The second step is to pass the `@middleware` decorator into the component as below 

<div component="app-code" key="anonymous-complete-component"></div> 