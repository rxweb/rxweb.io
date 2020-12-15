---
title: Router Authentication
author: rxcontributorone
category: router
type: simple
linktitle: router-authentication
---

# Authentication

After the user logs in the primary need for every application is to maintain the state of the user whenever any navigation occurs. This gives us a better security as they is no need to store the user object in the local storage 

Even after refreshing the page the user object will be available in the component

The below method decribes the `resolveAuth` method which makes the user object accessible for the particular component where the navigation takes place throughout the single page application after the user has sucessfully logged in. In this code the data is fetched from the users json file the custom business logic to hit the server API is written in this method.   

<div component="app-code" key="router-authentication-complete-component"></div> 

Just place the Authentication resolver function in the parameter of Authentication in the @routerModule decorator in the root module as below :

<div component="app-code" key="router-authentication-component"></div> 

For hiting the authentication api for the unlogged user the login component contains  `@allowAnonymous` annotation, after the authentic user enters the application
it will redirect to dashboard using the standard approach of  angular router with resloved user object

The login component code : 

<div component="app-code" key="router-authentication-login"></div> 

After the server returns a valid response the authenticated user is redirected to the dashboard component which extends the `CoreComponent` abstract class which contains methods used to resolve user data, navigate and check access from the server

The Dashboard component is as below :

<div component="app-code" key="router-authentication-dashboard"></div> 

<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authentication-koamys?file=src/app/security/authentication-resolver.ts">Stackblitz</a>


