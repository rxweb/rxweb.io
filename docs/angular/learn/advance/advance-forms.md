---
title: Advance Forms
author: rxcontributorone
category: learn
type: simple
linktitle: advance-forms
---

After the completion of the basic reactive forms in the previous learn tutorial in which we bind a simple form using model driven approach along with making the use of built-in validators. 

In this section we will see advanced reactive forms having nested formGroups and formArrays which require custom validations along with use of unique validation   
In the above scenario we will see the reactive forms with nested FormGroup to store the user's address info and a formArray to store the user's hobby details which should be unique, the email field should not exist in the database.  

To register a new user into the application, we will select the decorator based approach in which we need to save the data of the user based upon the below scenarios:

# Saving Unique Users
Saving unique users will required a unique validation applied on the EmailId field to check whether the particular EmailId exists in the database. For this we will check the user input value using a custom function using `@async` decorator above the EmailId property

<div component="app-code" key="advance-forms-unique-model"></div> 

Futher we will build the user formGroup with the help of RxFormBuilder in the component as below :

<div component="app-code" key="advance-forms-unique-component"></div> 

Resolving the error messages globally using <a class="redirect-link" href="/api/reactive-form-config" target="_blank">ReactiveFormConfig</a> in the Html code:

<div component="app-code" key="advance-forms-unique-html"></div> 

<div class="container">
![Validating Unique Values](assets/rxwebcore/Images/unique-validation.gif)
</div>



