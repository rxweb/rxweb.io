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
Global middleware are used for invoking an action pre-route navigation whenever the particular route is called throughout the application. 

This usage is explained using a case where the configuration of the application is resolved using the global middleware in which the configuration of the application from a configuration json stored in the assets of the application, These configuration store the keys like default language, change detection, default theme, cache keys etc.. which are resolved in a centralized manner.

Lets begin by creating a class `ConfigurationResolver` which implements `IMiddleware` interface to use the invoke method to resolve the configuration.

<div component="app-code" key="middleware-router-model"></div> 

Whenever the `invoke` method will be called it will resolve the configuration data and provide it to the component and to make it accessible globally it will be declared in the @routerModule decorator along with the middleware parameter 

<div component="app-code" key="middleware-router-component"></div> 

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-global-middleware-xwaxtb?file=src/app/security/middlewares/configuration-resolver.ts">Stackblitz</a>
</div>

# Component Based
For executing any action for an individual component based upon the data involved, it is specified in the `@middleware` decorator which is placed before the component class where it needs to be invoked.

Lets illustrate this by considering a scenario in which the login middleware is called which checks the authentication object in the local storage, based upon which it which check whether the user is logged in or not, If the auth token is not found it will remain on the login page else it will navigate to the mentioned component page
The login middleware class with some custom business logic is as below

<div component="app-code" key="middleware-complete-component"></div> 

The second step is to pass the `@middleware` decorator into the component as below 

<div component="app-code" key="middleware-complete-model"></div> 

Thats it see the working example :

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-global-middleware-qebfse?file=src/app/security/middlewares/logged-in-middleware.ts">Stackblitz</a>
</div>
