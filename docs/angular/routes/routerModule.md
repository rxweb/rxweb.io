---
title: routerModule
author: rxcontributortwo
category: router
type: simple
linktitle: routerModule
---

# routerModule

In an application having high end security and multilingual data, when we navigate into a single page application it becomes very necessary to resolve some  important information at the time of the page load. This includes resolving the user's authentication by retrieving the user's token, resolving the user's access based upon the role, To retrieve the global and component specific multilingual data.    

<b>Objectives</b>
 <ol class="bullet-list-ordered">
  <li>Authentication Resolver</li> 
  <li>Authorization Resolver</li>
  <li>Middlewares</li>
  <li>UrlEncyption</li>
</ol>  

The middlewares, authentication and authorization resolvers need to be configured globally in the `@routerModule` along with the information of the encryption and multilingual components data. 

The configuration of middlewares, authentication, authorization are done in routerModule as below : 

<div component="app-code" key="router-module-complete-component"></div> 
 
## authentication
As RxWeb provides token based authentication, the token is stored in the browser storage and later it is resolved using the Authentication Resolver.
In this parameter the Authentication resolver which resolves the necessary authentication requirements using the `resolveAuth()` method. 

<div component="app-code" key="router-module-authentication-component"></div> 

## authorization
Role based authorization retrives all the access based upon the role permissions based upon the user logged in. 
Whenever a user is logged in, the AuthorizeResolver makes a call to the server and stores all the necessary information required during the authorization process.

<div component="app-code" key="router-module-authorize-component"></div> 

## middlewares
Middleware are used whenever we want some action to be performed whenever the HTTP request is called. For example resolving the multilingual data of the component. It is done using the `BaseMultilingualResolver` which is provided as a middleware. 

<div component="app-code" key="router-module-middlewares-component"></div> 

## urlEncryption
For the url to be in the encryped form, this parameter is set to true.

<div component="app-code" key="router-module-url-component"></div> 
