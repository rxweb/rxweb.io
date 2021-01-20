---
title: Router authorization
author: rxcontributorone
category: router
type: simple
linktitle: router-authorization
---

# Authorization
In every enterprise application there is a need of role based authorization to resolve the rights of the particular user to the application based upon the role after the user has logged-in 

Lets consider a scenario where the application has a candidate module which contains two component candidate add, list. The list component have few shared components. Lets understand the page level authorization for the list component, further we will discuss component level and control level authorization

### Page Level Authorization

<video controls>
<source src="assets/rxwebcore/Images/controller-page-level.mp4" type="video/mp4">
</video>

Page level authorization is required when some pages need to be accessed only by some specific users which are retrieved based upon the role of the user and the module(unit) of the application, In this case the page is accessed to logged-in user based upon the Json Schema retrieved from the server ad below 

# The User Role Object
This resolved authorization object which returns a json schema as below :

<div component="app-code" key="authorization-router-json"></div> 

In this json result, 1 is the Id of the application module along with the read, write, update and delete access to the user. Application modules are the units of the application 

> You can change the schema based upon your application role management object. 

# The Global Resolver
`@rxweb/angular-router` provides a mechanism to resolve the page access of the user globally whenever the route navigation takes place.  

To achieve this we need to create a class named `AuthorizationResolver` which implements the interface `IAuthorize` to add the methods to resolve the user access object . 
Next we need to create a method `authorize` which returns the user access from the server based upon the application module Id and the action type which is verified in the `verifyAuthorization` method where the `AuthorizeConfig` configuration's  access level is the module Id and action type(get, post). 
The business logic to fetch the user data based upon the schema is written in the below method, In this example the data is retrieved from the user-access.json file.

The Authentication Resolver class is as below : 

<div component="app-code" key="authorization-router-component"></div> 

Next we need to add the AuthorizationResolver class in the authorization parameter of `@routerModule` decorator at the root level module to make it globally accessible 

<div component="app-code" key="authorization-router-model"></div> 

# Page wise access provided
In this example there is a candidate list page whenever the admin user logs-in this page is accessed and the candidate list can be seen and whenever HR user logs-in the page is not accessed and the non authorized page is loaded.  

Next in the component class we need to add the `@access` decorator, The access level is the Id of the application module or the unit of the application where the authorization is applied and the action type which specifies on which action the authorization object should be resolved, The usage of this decorator is shown in the below component of candidate

<div component="app-code" key="authorization-candidate-component"></div> 

The standard approach of angular uses the `canActivate` gaurd to determine the accessibility according to the role after the route is called and this leads to creation of mutiple canActivate which is difficult to manage in large applications. But here we will manage this using a single `BaseCanActivate` used thoroughly in the application using decorators in the component for component level authorization

In the candidate routing file, we need to pass the `BaseCanActivate` along with the route in canActivate parameter as shown here

<div component="app-code" key="authorization-candidate-routing"></div> 

So far we have finished the implementation of page level access based upon the logged-in user access. Here is the working example have a
<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authorization-e8dq1f?file=src/app/security/authorization-resolver.ts">Stackblitz</a>
</div>

### Component Level Authorization
<video controls>
<source src="assets/rxwebcore/Images/controller-component-level.mp4" type="video/mp4">
</video>

In every application there are shared component/smart component which are the sub module of the main module, These are basically used as the selector in the application for these shared components the access is further kept to another level where it is sub divided based upon the role, If we talk about the candidate page which has a new candidate add form which is the child module of candidate

# Child Component Authorization
In this case we need to create a `authorizeChildren` method in the same AuthorizationResolver class which we created earlier to resolve the user access object, this method is used to resolve the access of the child module.

<div component="app-code" key="authorization-router-sharedcomponent"></div> 

# Component wise access provided
The CandidateAddComponent which uses the @access decorator to specify the authorization is as below :

<div component="app-code" key="authorization-router-candidateaddcomponent"></div> 

This component is authorized in the candidatelist component,The shared component is authorized which the help of *rxAuthorize template which includes the name of the component based upon which the authorization needs to be perfomed. 

Candidate List Html 
<div component="app-code" key="authorization-router-candidatelisthtml"></div>

Candidate List Component
<div component="app-code" key="authorization-router-candidatelistcomponent"></div>

The example is as below:
<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authorization-child-level-authorization?file=src/app/dashboard.component.html">Stackblitz</a>
</div>

### Control Level Authorization

<video controls>
<source src="assets/rxwebcore/Images/router-control-level.mp4" type="video/mp4">
</video>

While performing some operations on a certain entity there are some controls which need to be restricted from certain users, For example in the skill entity of the candidate module there is a control of add in which based upon the plus icon click event the skill can be added, This control needs to be authorized based upon the user role.

This can be done using `*rxAuthorize` in which the add component will be passed as the parameter value as shown in this html code

<div component="app-code" key="authorization-candidate-html"></div> 

The candidateAvailabilityAdd is the property whose value will be assigned in the component as the CandidateAvailabilityAddComponent, The authorization of the add button will be done based upon the access object retrieved from the candidate availability add component.

<div component="app-code" key="authorization-candidate-controlcomponent"></div> 

Control level authorization example :
<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authorization-control-level?file=src/app/candidate-list/candidate-list.component.ts">Stackblitz</a>
</div>