---
title: Router authorization
author: rxcontributorone
category: router
type: simple
linktitle: router-authorization
---

# Global 

To assemble the rights of the user during the navigation in a single page application, global level authorization provides the authorized modules the accessibilty of the particular module for the logged in users    

Authorization at the global level is done with the help of `@routerModule` which is configured in the App Module. Whenever the route is changed the component will accommodate the user and its access towards the particular module inrespect to the type of its action

The `AuthorizationResolver` contains methods of Authorize and AuthorizeChildren methods to resolve the access modules based upon the user and roles. Authorize is used for the parent module and AuthorizeChildren are used for the child modules of the application. The Data for the access is resolved from the server and then it is resolved using this global resolver  

<div component="app-code" key="authorization-router-component"></div> 

# Component Based
The standard approach of angular uses the `canActivate` to determine the accessibility after the route is called and this leads to creation of mutiple canActivate which is difficult to manage in large applications. But here we will manage this using a single `BaseCanActivate` used thoroughly in the application using decorators in the component for component level authorization  

Individual component wise we can check whether the component is allowed to the particular user by the help of `@access` decorator which is used to determine the module access of the user for the particular component

Component based authorization is done using the decorators of the access and anoymous above the component to determine the access of the application modules based upon the user roles and db access modules. 

# anonymous
To allow anonymous users in any of the component throughout the application by using `@anonymous`
Authenticated APIs need an authentication token for accessing the api in the web application but some API need an authentication by pass. For example : Login.
For such Api we need `@anonymous` decorator in the component   

The second step is to pass the `@anonymous` decorator into the component as below 

<div component="app-code" key="authorization-anonymous-component"></div> 

# access

While performing Role based authorization, It becomes important to maintain it on the client side as well. `@access` is used for managing the access based upon the role which is used for adjudging the role access based upon the application module and action.

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>accessLevel</td><td>Access level based upon the module</td></tr>
<tr><td>action</td><td>name of the action(HTTP Verb)</td></tr>
</table>

<div component="app-code" key="authorization-complete-model"></div> 

The second step is to pass the `@access` decorator into the component as below 

<div component="app-code" key="authorization-complete-component"></div> 