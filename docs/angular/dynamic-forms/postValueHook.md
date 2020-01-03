---
title: PostValue
author: rxcontributorone
category: dynamic-forms
type:simple
linktitle: postValueHook
---

PostValue hook is used when you want to return some value based upon condition after user enters some value.

Suppose you want to calculate the totalAmount based upon quantity and price field, you have to create a postValue in  UserModel and pass it into `controlConfigModels`. 

# Example

<div component="app-tabs" key="complete"></div>

[!TabGroup]

# [Model](#tab\completemodel)
<div component="app-code" key="postValueHook-complete-model"></div> 
# [/Model]

# [Component](#tab\completecomponent)
<div component="app-code" key="postValueHook-complete-component"></div> 
# [/Component]

# [Html](#tab\completehtml)
<div component="app-code" key="postValueHook-complete-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-postValueHook-complete"></div>