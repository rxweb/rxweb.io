---
title: label
description: label can be used inside ui feature to generate a label in the dynamic-form. label can be generated statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: label
---

<div class="title-bar"><p>label can be used inside ui feature of to generate a label in the dynamic-form. label can be generated statically or conditionally based on your requirements.</p></div>

# Static Label

To display the `label` in your dynamic form, you can set the label statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="label-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="label-static-html"></div>
<div component="app-example-runner" ref-component="app-label-static"></div>

# Conditional Label

To display the `label` conditionally in your dynamic form, you can set the label property of that particular `form control` by defining the label function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `modelName`, `keyName` and `actions` which will contain the condition to be applied on that formControl. Defined `modelName` and `keyName` will be set inside the `serverData` in your component.

<div component="app-tabs" key="static"></div>

[!TabGroup]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="label-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="label-conditional-component"></div> 
# [/Component]
***

<div component="app-code" key="label-conditional-html"></div>
<div component="app-example-runner" ref-component="app-label-conditional"></div>