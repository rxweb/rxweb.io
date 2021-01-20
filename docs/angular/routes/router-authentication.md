---
title: Router Authentication
author: rxcontributorone
category: router
type: simple
linktitle: router-authentication
---

# Authentication

The initial step towards a secure application is to verify the authenticity of the user, second is to maintain the state of the user within the application which can be done using a global authentication resolver, This provides better security as there is no need to store the user object in the local storage and even after refreshing the page the user object will be available in the component as soon as it gets resolved

The below method decribes the `resolveAuth` method which makes the user object accessible for the particular component where the navigation takes place throughout the single page application after the user has sucessfully logged in. The server side API is accessed and the user data is resolved in the function, In this example we retrieve the user object from a user json file

<div component="app-code" key="router-authentication-complete-component"></div> 

Just place the Authentication resolver function in the parameter of Authentication in the `@routerModule` decorator in the root module to access the resolver throughout the application  as below :

<div component="app-code" key="router-authentication-component"></div> 

# Scenario:

As we have created the AuthResolver method and registered it into the root module, we are in need to create a login component in the application such that we can anonymously access the API, In this case we need to use the annotation of `@anonymous` above the component class as shown below: 

The login component code : 

<div component="app-code" key="router-authentication-login"></div> 

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authentication-koamys?file=src/app/security/authentication-resolver.ts">Stackblitz</a>
</div>


