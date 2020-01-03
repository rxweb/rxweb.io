---
title: PreValue
author: rxcontributorone
category: dynamic-forms
type:simple
linktitle: preValueHook
---

PreValue hook is used when you want to validate some value based upon condition before user enters some value. 

Suppose you want to validate the quantity field such that it should only be a number, you have to create a preValue in  QuantityModel and pass it into `controlConfigModels`. 

# Example

<div component="app-tabs" key="complete"></div>

[!TabGroup]

# [Model](#tab\completemodel)
<div component="app-code" key="preValueHook-complete-model"></div> 
# [/Model]

# [Component](#tab\completecomponent)
<div component="app-code" key="preValueHook-complete-component"></div> 
# [/Component]

# [Html](#tab\completehtml)
<div component="app-code" key="preValueHook-complete-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-preValueHook-complete"></div>
