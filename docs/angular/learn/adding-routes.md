---
title: Adding Routes
author: rxcontributorone
category: learn
type: simple
linktitle: adding-routes
---
# Navigating Routes

In this guide section we will learn a centralized way to manage all the routes within the application along with the centralized integration of authentication and authorization and a component based middleware. Here we will make the use of angular routing to navigate through the application

As listed below are the features which need to be covered when we talk about the router implemented with the help of @rxweb/angular-router package :

<ul class="bullet-list">
  <li class="overview-nav-item">Centralized authentication and authorization resolvers</li> 
  <li class="overview-nav-item">Middleware using decorator</li>
  <li class="overview-nav-item">Single BaseCanActivate all over the application</li>
</ul>

## Authenticating Routes
Here we will globally manage the authenticating routes when the user has logged in to the system whenever the navigation route takes place. We will implement this by creating a global authentication resolver as described in <a class="redirect-link" href="/rxweb-router/angular-router/router-authentication" target="_blank">this</a> documentation.  

We will pass this using a `BaseCanActive` in the dashboard component to resolve the user object whenever the route is called.

1) `BaseCanActive` in the routes whenever the route is called
<div component="app-code" key="adding-routes-add-model"></div> 

3) Importing the `@routerModule` decorator in the module class
<div component="app-code" key="adding-routes-add-component"></div> 

## Authorizing Routes 
To navigate the user to the provided route along with the retrieval of the access rights of the user. Create a global authorization resolver to get the access whenever the particular route is called.

The creation of <a class="redirect-link" target="_blank" href="/rxweb-router/angular-router/router-authorization">authorization route</a> is described in this documentation.  

1) Passing the `@access` in the User component

<div component="app-code" key="adding-routes-add-html"></div> 

2) `BaseCanActive` in the routes whenever the route is called

<div component="app-code" key="adding-routes-add-canactivate"></div> 

## Middleware
With the help of the authentication resolver we have the information of the user after the user has logged-in. Now one question may arise that <b>how to manage the login route based upon checking whether the user is logged in or not</b>, In this case if the user is logged-in the navigation should take place to the dashboard and if not the login page should be displayed. The functionality of the <a class="redirect-link" target="_blank" href="/rxweb-router/angular-router/middleware">login middleware</a> is explained here.

To achieve this we need to create a login middleware and pass it to the `@middleware` decorator provided by @rxweb/angular-router as below 

<div component="app-code" key="adding-routes-add-middleware"></div>


