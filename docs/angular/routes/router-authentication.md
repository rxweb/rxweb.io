---
title: Router Authentication
author: rxcontributorone
category: router
type: simple
linktitle: router-authentication
---

# Authentication

As RxWeb provides token based authentication, the token is stored in the browser storage and later it is resolved using the Authentication Resolver.
In this parameter the Authentication resolver which resolves the necessary authentication requirements using the `resolveAuth()` method. 

This method resolves the auth token from the local stroage and resolves the authentication details of the user. 

<div component="app-code" key="router-authentication-complete-component"></div> 