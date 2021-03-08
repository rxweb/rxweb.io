---
title: Adding Multilingual Validation Messages Globally
author: rxcontributorone
category: learn
type: simple
linktitle: adding-mutlingual-validation-messages-globally
---

In our application we have mutiple languages based upon which the data is retrieved, while accessing the data in the forms, we are in a need to access validation messages acccording to the language and the validation message. 

In case of creating reactive forms and showing the validation messages based upon the error-messages coming in the form, we manage the messages in a centralized way, these messages are configured into the <a class="redirect-link" href="/api/reactive-form-config" target="_blank">ReactiveFormConfig</a> of the application.

While accessing the multilingual data in the application we need to translate these validation messages based upon the error type.

# Managing Multilingual Validation Messages Centrally
For registering the validation messages centrally, the first step is to be add the ReactiveFormConfig globally in the app component. Below code represents the app component of the application

<div component="app-code" key="adding-mutilingual-validation-messages-globally-complete-model"></div> 

# Adding the Translate object in the component
Add the <a class="redirect-link" href="/ngx-translate-extension/decorator" target="_blank">@translate</a> in the app component to resolve the translation keys. 

<div component="app-code" key="adding-mutilingual-validation-messages-globally-complete-component"></div> 

# Forming the Json
Forming the json based upon validation messages in the respective language global files as below :

<div component="app-code" key="adding-mutilingual-validation-messages-globally-complete-json"></div>

<div class="container">
![Multilingual Validation Messages](assets/rxwebcore/Images/validation-messages.gif)
</div>
