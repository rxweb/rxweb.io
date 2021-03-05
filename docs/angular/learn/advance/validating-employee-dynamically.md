---
title: Validating Employee Dynamically
author: rxcontributorone
category: learn
type: simple
linktitle: validating-employee-dynamically
---

# Validating Employee Dynamically

In this guide we illustrate an example of validating an entity employee which require applying the validation based upon the server rules. The validation of the entity is applied on the basis of the server rules resolved by making the request to the server.

The Employee Entity model:
<div component="app-code" key="validating-employee-dynamically-complete-model"></div>

We will validate the employee entity based upon the server rules including the validation registered in the configuration stored in the json assets of the application. We will resolve the json based upon the server rules by making the use of <a href="" target="_blank" class="redirect-link">FormBuilderConfiguration</a> through which the dynamic validation messages are set.

## Applying the validations dynamically
The configuration json of the server based upon which the validation will be applied is as below:

<div component="app-code" key="validating-employee-dynamically-complete-json"></div>

Using the employee model and its configuration we will apply the validations dynamically using the FormBuilderConfiguration object in the component as shown in the below code :

<div component="app-code" key="validating-employee-dynamically-complete-component"></div>

## Setting the validation messages dynamically
The validation messages coming from server side will be appended using the setBackendMessages method of RxFormGroup which the respective error messages as below

<div component="app-code" key="validating-employee-dynamically-message-component"></div>

The component Html code to display the errorMessages based upon the server configuration is as below:

<div component="app-code" key="validating-employee-dynamically-message-html"></div>