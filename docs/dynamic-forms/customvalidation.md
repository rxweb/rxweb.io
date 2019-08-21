---
title: Custom Validation
author: rxcontributortwo
category: dynamic-forms
type: simple
linktitle: customvalidation
---

<div class="title-bar"><p>

If you want to apply your custom validation on the particular formControl of your dynamically generated form, for that you just have to set the `modelName` for the particular formControl in the `serverData` and bind this `modelName` and your custom validation name in the `model` property of `controlConfigModels`. Set this complete object to `DynamicFormConfiguration` object. 
</p></div>


# Example

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Model](#tab\completemodel)
<div component="app-code" key="customvalidation-complete-model"></div> 
# [/Model]

# [Component](#tab\completecomponent)
<div component="app-code" key="customvalidation-complete-component"></div> 
# [/Component]

# [Html](#tab\completehtml)
<div component="app-code" key="customvalidation-complete-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-customvalidation-complete"></div>