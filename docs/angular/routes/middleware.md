---
title: middleware
author: rxcontributortwo
category: router
type: simple
linktitle: middleware
---
# Middleware 
The role of the middleware is to run in the front to make each request which is created by the router at a specific route, Using @rxweb it can be applied at global as well as component level. 

# Global
Global level middleware is set using the RxwebModule which contains a property of middleware where the specific middleware is passed. Whenever any request is made at the global level of the application this middleware is invoked. 

The below example describes a middleware used at the global level `MessageMiddleware` which sends the message to multiple users at the same time

<div component="app-code" key="middleware-router-component"></div> 

It is passed along with the middleware property of the <a class="redirect-link">RxwebModule</a> 

# Component Based
Component specific middleware are applied using `@middleware` decorator will is called whenever the route of the particular component is called.

Using @middleware helps you to add middleware at the component level. Here is an example of using login middleware for the login component which  
gets the anonymous web token generated. 

<div component="app-code" key="middleware-complete-model"></div> 

The second step is to pass the `@middleware` decorator into the component as below 

<div component="app-code" key="middleware-complete-component"></div> 