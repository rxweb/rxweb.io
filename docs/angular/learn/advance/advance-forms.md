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

# Nested FormGroup 
The userdetails form is having an address info formGroup which is constructed for the purpose to store the value of city, state, areaName etc. we will start making a reactive form with fields of firstName, lastName and email and create a nested reactive form for the fields which are related to the adress entity. We will create a form with the use of RxFormGroup.  

<div component="app-code" key="advance-forms-complete-component"></div> 

# Form Array
Moving further with our UserDetails form by adding a field of hobbyName into the reactive form such that each value entered into the input should be unique. In this case we will make the use of <a class="redirect-link"  href="/form-validations/unique/validators">unique</a> validator. 

<div component="app-code" key="advance-forms-formarray-component"></div> 

# Get File Object
For the profilePhoto field we have applied the built-in image validator we will further enhance it by converting it into formData with the help of `toFormData()` method provided by `RxFormGroup`. 

<div component="app-code" key="advance-forms-fileobject-component"></div>

# ErrorMessage
Displaying the error messages in a better way to globally resolve the validation messages and show the error messages without writing multiple `*ngIf` conditions in the html of the component.

<div component="app-code" key="advance-forms-errormessage-component"></div>

# Conditional Validation
In the cases where we want to fire a validation based upon some user's selected value. Here we fire the required validation on the address formGroup based upon the `isPermanentAddress` set to true.       

<div component="app-code" key="advance-forms-conditionalvalidation-component"></div>

# What we Built

<div class="container">
![Creating Projects](assets/rxwebcore/Images/advance-form-user.PNG)
</div>



