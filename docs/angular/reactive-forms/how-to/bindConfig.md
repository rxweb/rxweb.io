---
title: Dynamically Bind Validation Config
author: rxcontributorone
category: how-to
type:tabs
linktitle: bindConfig
---

While developing large forms, we have multiple needs to validate the FormControl. For that we are going to write the custom business logic a lot to manage the complex scenarios.

The benefit of using this is don't have worry about when this validator will call, this will be called whatever properties you have used in the dynamicConfig function. Those thing the framework automatically take cares of it.

Here is an example for a scenerio such that there are two fields Purchase price and Resale Price and the resaleprice is validated such that Resale price must be at least 30% more than Purchase price, This can be achieved using dynamicConfig. Lets see how:

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="bind-complete-model"></div> 
</data-scope>
<div component="app-code" key="bind-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="bind-complete-html"></div> 
<div component="app-example-runner" ref-component="app-bind-complete"></div>

# Merge dynamicConfig returned object with base config
Only those properties you want to return dynamically needs to be configured rest all are already defined while initializing the respective validator.

Here in this example, Only `acceptValue` is returned through the `dynamicConfig` whereas `allowDecimal` and `message` are already configured. So in this case if the validation fails in the field negativeNumber it will display message `Positive Number`

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="bind-return-model"></div> 
</data-scope>
<div component="app-code" key="bind-return-component"></div> 
Next, we need to write html code.
<div component="app-code" key="bind-return-html"></div> 
<div component="app-example-runner" ref-component="app-bind-return"></div>

***
