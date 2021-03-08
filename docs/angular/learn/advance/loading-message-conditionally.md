---
title: loading message conditionally
author: rxcontributorone
category: learn
type: simple
linktitle: Loading Message Conditionally
---

While resolving the multilingual global data, in some cases there arises a scenario where we need to resolve some data based upon a specific condition. 
For example if you want to resolve conditional data based upon the some specific condition.

In our application the type of the user will be bind based upon the user role, This will be rendered based upon the condition using the json file. 

Lets start by creating a function of getting the user role type and based upon that the role name will be rendered on the UI. The function based upon which the user role will be resolved is as below:

<div component="app-code" key="loading-message-conditionally-complete-component"></div> 

Forming the Json based upon the conditional to render it based upon the user role type.

<div component="app-code" key="loading-message-conditionally-complete-json"></div> 


