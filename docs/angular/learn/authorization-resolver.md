---
title: Authorization Resolver
author: rxcontributorone
category: learn
type: simple
linktitle: authorization-resolver
---

# Authorization Routes
Authorizing routes include navigating the user along with retrieval of the user accesses whenever the particular route is called. This will be achieved by following   
these steps

1) Creating the `Authorization` class for retrieving the user roles

<div component="app-code" key="authorization-resolver-add-component"></div> 

2) Registering it globally into the app module using `@routerModule`

<div component="app-code" key="authorization-resolver-add-component"></div> 

3) Using `@access` into the component

<div component="app-code" key="authorization-resolver-add-function"></div> 

4)  Using `BaseCanActivate` into the routes

<div component="app-code" key="authorization-resolver-add-html"></div>
