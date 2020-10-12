---
title: Router authorization
author: rxcontributorone
category: router
type: simple
linktitle: router-authorization
---

# Global 

Authorization at the global level is done with the help of `@routerModule` which is configured in RxWeb module as shown in the <a class="redirect-link" href="">getting started</a> documentation.  

The `AuthorizationResolver` file in the security under domain folder of the angular portal project. The authorization resolver contains methods of Authorize and AuthorizeChildren methods to resolve the access modules based upon the user and roles.  

<div component="app-code" key="authorization-router-component"></div> 

# Component Based

Component based authorization is done using the decorators of the access and anoymous above the component to determine the access of the application modules based upon the user roles and db access modules. 

# anonymous

Authenticated APIs need an authentication token for accessing the api in the web application but some API need an authentication by pass. For example : Login.
For such Api we need `@anonymous` decorator in the component   

The second step is to pass the `@anonymous` decorator into the component as below 

<div component="app-code" key="authorization-anonymous-component"></div> 

# access

While performing role based authorization, It becomes important to maintain it on the client side as well. `@access` is used for managing the access based upon the role which is used for adjudging the role access based upon the application module and action.

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>accessLevel</td><td>Access level based upon the module</td></tr>
<tr><td>action</td><td>name of the action(HTTP Verb)</td></tr>
</table>

<div component="app-code" key="authorization-complete-model"></div> 

The second step is to pass the `@access` decorator into the component as below 

<div component="app-code" key="authorization-complete-component"></div> 