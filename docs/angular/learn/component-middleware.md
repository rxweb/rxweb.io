---
title: Component Middleware
author: rxcontributorone
category: learn
type: simple
linktitle: component-middleware
---
# Component based middleware

With the help of the authentication resolver we have the information of the user after the user has logged-in. This will be used to manage the login route based upon checking whether the user is logged in or not, In this case if the user is logged-in the navigation should take place to the dashboard and if not the login page should be displayed.

The login middleware code is as below :

<div component="app-code" key="component-middleware-add-component"></div>

To achieve this we need to create a login middleware and pass it to the `@middleware` decorator provided by @rxweb/angular-router as below 

<div component="app-code" key="component-middleware-add-html"></div>


