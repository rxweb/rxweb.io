---
title: managing input
author: rxcontributorone
category: learn
type: simple
linktitle: managing-input
---
# Managing Input  

After creating the components and adding the routes to it, lets proceed towards the creation of reactive forms and adding validations to it. Lets start by creating a user input form which will be model based reactive forms with addition of the in-built validations provided in the <a class="redirect-link" href="/getting-started">@rxweb/reactive-form-validators</a>.

> This guide describes the model driven approach, the same can be achieved using <a target="_blank" class="redirect-link" href="form-validations/alpha/validators">validator</b> approach 

1) Lets start by creating a model class with property initilialization in the model class. As we are going to add a user registration form, Create a user model class as below:

<div component="app-code" key="managing-input-add-model"></div>

2) Further using the generated model class to construct a form using `RxFormBuilder` of @rxweb/reactive-form-validators. 

<div component="app-code" key="managing-input-add-component"></div>

3) Displaying the validation messages from the global configuration using interpolation without multiple *ngIf conditions.

<div component="app-code" key="managing-input-add-html"></div>

4) After completing the following steps the form looks like :

<div class="container">
![Creating Projects](assets/rxwebcore/Images/managing-input.gif)
</div>