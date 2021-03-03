---
title: Navigating Advance Routes
author: rxcontributorone
category: learn
type: simple
linktitle: navigating-routes-advance
---

# Navigating Routes 
In the previous section of the learn of the basic application, we learnt about the adding routes in the angular application along with the global authentication resolver, authorization resolver and middlewares which made the use of a component based middleware which checks whether the user has been logged in or not and based upon which it navigates to the user component or remains on the route after the refresh.

A middleware to resolve the configuration data based upon the user which has logged in which needs to be managed in a global way. For this we will make the use of @routerModule decorator to set the global middleware and use it whenever any of the pages is called.     

Lets start by creating a global data resolver middleware by making the use of the invoke method as below:

<div component="app-code" key="navigating-advance-routes-complete-middleware"></div>

This will be injected into the `@routerModule` of the main module in the middleware parameter.

<div component="app-code" key="navigating-advance-routes-complete-routermodule"></div>



