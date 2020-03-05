---
title: routerModule
author: rxcontributortwo
category: router
type: simple
linktitle: routerModule
---

# routerModule

The middlewares, authentication and authorization resolvers need to be configured globally in the `@routerModule` along with the information of the encryption and multilingual components

The configuration of middlewares, authentication, authorization are done in routerModule as below 

<div component="app-code" key="router-module-complete-component"></div> 

## authentication
In this parameter the Authentication resolver which resolves the necessary authentication requirements using the `resolveAuth()` method.

<div component="app-code" key="router-module-authentication-component"></div> 

## authorization
To resolve the access to the particular user in respect to the module the Authorization resolver is used. 

<div component="app-code" key="router-module-authorize-component"></div> 

## middlewares
The application middleware used in the application used for the particular action to be called whenever any http request is called. For example 
: GlobalMultilingualContentResolver, ComponentMultilingualContentResolver which are used to resolve global and component wise multilingual data.

<div component="app-code" key="router-module-middlewares-component"></div> 

## urlEncryption
If the routing is to be done in encrypted form it is set to true.

<div component="app-code" key="router-module-url-component"></div> 
