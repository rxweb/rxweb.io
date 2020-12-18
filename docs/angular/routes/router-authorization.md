---
title: Router authorization
author: rxcontributorone
category: router
type: simple
linktitle: router-authorization
---

# Authorization
In every enterprise application there is a need of role based authorization to resolve the rights of the particular user to the application based upon the role after the user has logged in, lets consider a scenario where the application has a candidate module in the application having candidate form, A list to display the details of the candidate, a shared component which displays the skills of the candidate along with a button control to add and update skills, In this case the role based authorization should be done in such as way that the candidate page should be displayed to the role of the user depending upon the authorization level which will be divided into three categories :

1) Page level authorization
2) Component level authorization
3) Control level authorization

![Role Based Authorization](Images/roles-snap2.png)

# Page Level Authorization
As mentioned in the above scenario, There is a candidate page which consists of a form which is displayed whenever the candidate module route is called after user logs in, In this case we will resolve the access towards the candidate page for the user whenever its route is called. The json schema which will be retrieved as per the case is as below :

<div component="app-code" key="authorization-router-json"></div> 

In this json result, 1 is the Id of the application module along with the read, write, update and delete access to the user. 

> This schema may differ from the application based upon the complexity and need

To achieve this we need to create a class named `AuthorizationResolver` which implements the interface `IAuthorize` to add the methods to resolve the user access object.
Next we need to create a method `authorize` which returns the user access from the server based upon the application module Id and the action type which is verified in the `verifyAuthorization` method where the `AuthorizeConfig` configuration's  access level is the module Id and action type(get, post). You need to write the business logic here based upon the schema here the data is retrieved from the user-access.json file. 

The Authentication Resolver class is as below : 

<div component="app-code" key="authorization-router-component"></div> 

Next in the component class we need to add the `@access` decorator in which the application module id as the access level  and the action type as action as shown in the below component of candidate

<div component="app-code" key="authorization-candidate-component"></div> 

The standard approach of angular uses the `canActivate` gaurd to determine the accessibility according to the role after the route is called and this leads to creation of mutiple canActivate which is difficult to manage in large applications. But here we will manage this using a single `BaseCanActivate` used thoroughly in the application using decorators in the component for component level authorization

In the candidate routing file, we need to pass the `BaseCanActivate` along with the route in canActivate parameter as shown here

<div component="app-code" key="authorization-candidate-routing"></div> 

At the last we need to add the AuthorizationResolver class in the authorization parameter of `@routerModule` decorator at the root level module to make it globally accessible 

<div component="app-code" key="authorization-router-model"></div> 

# Component Level Authorization
In every application there are shared component/smart component which are the sub module of the main module, for these shared components the access is further kept to another level where it is sub divided based upon the role, If we talk about the candidate page which has a list component which displays the data of the candidate which is the child module of candidate

In this case we need to create a `authorizeChildren` method in the same AuthorizationResolver class which we created earlier to resolve the user access object, this method is used to resolve the access of the child module.

<div component="app-code" key="authorization-router-sharedcomponent"></div> 

Further `@access` decorator will be added in the CandidateListComponent(shared module) in which the access level and the action type will be passed the same way as we had done in the page level component

The CandidateListComponent is as below :

<div component="app-code" key="authorization-router-candidatelistcomponent"></div> 

Add the  `BaseCanActivate` Authgaurd in the routing file of the candidate module for CandidateList module

<div component="app-code" key="authorization-router-candidatelistrouting"></div> 

# Control Level Authorization
While performing some operations on a certain entity there are some controls which need to be restricted from certain users, For example in the skill entity of the candidate module there is a control of add in which based upon the plus icon click event the skill can be added, This control needs to be authorized based upon the user role.

This can be done using `*rxAuthorize` in which the add component will be passed as the parameter value as shown in this html code

<div component="app-code" key="authorization-candidate-html"></div> 

The skillAdd is the property whose value will be assigned in the component as the SkillAddComponent, The authorization of the add button will be done based upon the access object retrieved from the skill add component.

<div component="app-code" key="authorization-candidate-controlcomponent"></div> 

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/router-authorization-e8dq1f?file=src/app/security/authorization-resolver.ts">Stackblitz</a>
</div>
