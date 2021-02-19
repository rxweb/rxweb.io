---
title: Authentication Resolver
author: rxcontributorone
category: learn
type: simple
linktitle: authentication-resolver
---

# Authenticating Routes
Here we will globally manage the authenticating routes when the user has logged in to the system whenever the navigation route takes place. We will implement this by creating an authentication resolver class 

1) Creating the `AuthResolver` class : 
Lets begin by creating an authentication resolver class which makes a call to the user api and retrives the user object once the user credentials are verified.

<div component="app-code" key="authentication-resolver-add-component"></div> 

2) Registering it globally into the app module using the `@routerModule`

<div component="app-code" key="authentication-resolver-add-model"></div>

3) Using `BaseCanActivate` into the routes

<div component="app-code" key="authentication-resolver-add-html"></div>


