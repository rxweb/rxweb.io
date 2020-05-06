---
title: conditionalControlDisable
author: rxcontributorone
category: how-to
type:tabs
linktitle: conditionalControlDisable
---

For reactive forms which requires formControls which required to be disabled based upon some other input value, here is a property through which the input can be disbaled based upon the applied condition. `disableExpression` property is used to be used with the validation applied to achieve the same. 

Let's consider a scenario where there is a order placement form and it required current address details in such a way that if the user has saved addresses in the user profile he can place the order with the same and also add new address. In the above case if the checkbox of same as permanent address is set true, the currentAddress field will be disabled.

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="conditionalControlDisable-complete-model"></div> 
</data-scope>
<div component="app-code" key="conditionalControlDisable-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="conditionalControlDisable-complete-html"></div> 
<div component="app-example-runner" ref-component="app-conditionalControlDisable-complete"></div>


