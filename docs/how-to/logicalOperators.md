---
title: Use multiple validations using logical operators.
author: rxcontributorone
category: how-to
type:tabs
linktitle: logicalOperators
---

While developing a complex forms then logical validation plays important role in that. Try to set logical condition easy, you can use three logical validators based on your need. The logical validators are as below:

# or operator Example
This can be used, if we want to validate the control based upon anyone validator will be passed, For example there is a email field and you want either contains validation or endsWith validation to be passed.

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="or-complete-model"></div> 
</data-scope>
<div component="app-code" key="or-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="or-complete-html"></div> 
<div component="app-example-runner" ref-component="app-or-complete"></div>

# and operator Example
This can be used, if we want to validate the control based upon all validators passed, For example there is Flat Address field in your user form and you want it to be validated such that alphanumeric and maxLength both should be passed. 

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="and-add-model"></div> 
</data-scope>
<div component="app-code" key="and-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="and-add-html"></div> 
<div component="app-example-runner" ref-component="app-and-add"></div>

# not operator Example
not operator is used when you want validation to perform its inverse. Suppose there is age field and you want to validate it such that age should be between 9 to 100 using minNumber and maxNumber validation with not operator.

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="not-digit-model"></div> 
</data-scope>
<div component="app-code" key="not-digit-component"></div> 
Next, we need to write html code.
<div component="app-code" key="not-digit-html"></div> 
<div component="app-example-runner" ref-component="app-not-digit"></div>
