---
title: Update data only changed column value
author: rxcontributorone
category: how-to
type:tabs
linktitle: modifiedValue
---

While using large forms whenever the user wants to patch value and send only those data which has been changed `RxFormGroup` provides `modifiedValue` property for it.  

It will update value of the `RxFormGroup` only changed column value.

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="modifiedValue-complete-model"></div> 
</data-scope>
<div component="app-code" key="modifiedValue-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="modifiedValue-complete-html"></div> 
<div component="app-example-runner" ref-component="app-modifiedValue-complete"></div>