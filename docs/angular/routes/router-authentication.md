---
title: Router Authentication
author: rxcontributorone
category: router
type: simple
linktitle: router-authentication
---

# Authentication

The initial step towards a secure application is to verify the authenticity of the user, second is to maintain the state of the user within the application which can be done using a global authentication resolver, This provides better security as there is no need to store the user object in the local storage and even after refreshing the page the user object will be available in the component as soon as it gets resolved

The below method decribes the `resolveAuth` method which makes the user object accessible for the particular component where the navigation takes place throughout the single page application after the user has sucessfully logged in. In this code the data is fetched from the users json file the custom business logic to hit the server API is written in this method.   

<div component="app-code" key="router-authentication-complete-component"></div> 

Just place the Authentication resolver function in the parameter of Authentication in the `@routerModule` decorator in the root module to access the resolver throughout the application  as below :

<div component="app-code" key="router-authentication-component"></div> 

As we created the AuthResolver method and registered it into the root module, we will next create a login component to check the user details when the user loads the application and as we are in a need to hit the server API without the user object we need to add `@anonymous` annotation above the component class as shown below 

The login component code : 

<div component="app-code" key="router-authentication-login"></div> 

After the server returns a valid response the authenticated user is redirected to the dashboard component along with the user object which extends the `CoreComponent` abstract class which contains methods used to resolve user data, navigate and check access from the server

The Dashboard component is as below :

<div component="app-code" key="router-authentication-dashboard"></div> 

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authentication-koamys?file=src/app/security/authentication-resolver.ts">Stackblitz</a>
</div>


