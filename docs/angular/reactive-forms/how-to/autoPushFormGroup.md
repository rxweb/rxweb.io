---
title: autoPushFormGroup
author: rxcontributorone
category: how-to
type:tabs
linktitle: autoPushFormGroup
---

In model based reactive forms whenever propArray is used for creating RxFormArray in the FormGroup a new formGroup is pushed everytime the user wants to add a new index  into the particular formGroup. But in a form taking accomplishing multiple actions required creating formGrop into the array based upon the addition of instance into the model class.

An example of such scenario is a `Cart` model in which the user can add number of products into the list and this cart model creates RxFormGroup object with propArray within it. Now In this case there arrises a need to automatically create the FormGroup and add into the FormArray whenever a new item is added into the Cart model class. Let's understand this with the help of code

The First step is to set `autoInstancePush` property true at global level into the app component

<div component="app-code" key="autoPushFormGroup-complete-autoInstance"></div> 

# Example 

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="autoPushFormGroup-complete-model"></div> 
</data-scope>0
<div component="app-code" key="autoPushFormGroup-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="autoPushFormGroup-complete-html"></div> 
<div component="app-example-runner" ref-component="app-autoPushFormGroup-complete"></div>