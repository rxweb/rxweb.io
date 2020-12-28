---
title: middleware
author: rxcontributorone
category: router
type: simple
linktitle: middleware
---
# Middleware 
Middlewares are constructed for the purpose to invoke an action to perform some task whenever any request is made to a specific route, pre-route navigation tasks can be invoked to perform communication and data management. Using @rxweb/angular-router it can be managed in these two different ways:

# Global
While accessing large amount of data from the server in a wide application there are chances that the data need to be used at mutiple times and accessed globally in the application.  Lets consider a scenario where there is data from the server  based upon which the page wise breadcrumbs are resolved and provided to the componnet whenever its route is called and rendered the same way throughout the application  at a centralized manner.   

Lets begin by creating a class `BreadCrumbContentResolver` which implements `IMiddleware` interface to use the invoke method to resolve the breadcrumb object 

<div component="app-code" key="middleware-router-model"></div> 

Whenever the `invoke` method will be called component wise the data of breadcrumb will be resolved and provided to the component pre-route navigation and to make it accessible globally it will be declared in the @routerModule decorator along with the middleware parameter 

<div component="app-code" key="middleware-router-component"></div> 

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-global-middleware-xu6qub?file=src/app/security/middlewares/bread-crumb-content-resolver.ts">Stackblitz</a>
</div>

# Component Based
For executing any action for an individual component based upon the data involved, it is specified in the `@middleware` decorator which is placed before the component class where it needs to be invoked.

Lets illustrate this by considering a scenario in which the login middleware is called which checks the authentication object in the local storage, based upon which it which check whether the user is logged in or not, If the auth token is not found it will remain on the login page else it will navigate to the mentioned component page
The loggin middleware class is as below

<div component="app-code" key="middleware-complete-component"></div> 

The second step is to pass the `@middleware` decorator into the component as below 

<div component="app-code" key="middleware-complete-model"></div> 

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-global-middleware-3hua2y?file=src/app/security/middlewares/bread-crumb-content-resolver.ts">Stackblitz</a>
</div>
