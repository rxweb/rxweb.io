---
title: focus
description: focus can be used inside ui feature to set focus on particular formControl in the dynamic-form. focus can be set statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: focus
---

<div class="title-bar"><p>focus can be used inside ui feature to set focus on particular formControl in the dynamic-form. focus can be set statically or conditionally based on your requirements.</p></div>

# Static Focus

To set the `focus` on particular formControl in your dynamic form, you can set the focus statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="focus-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="focus-static-html"></div>
<div component="app-example-runner" ref-component="app-focus-static"></div>

# Conditional Focus

To set the `focus` conditionally in your dynamic form, you can set the focus property of that particular `form control` by defining the focus function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `modelName`, `keyName` and `actions` which will contain the condition to be applied on that formControl. Defined `modelName` and `keyName` will be set inside the `serverData` in your component.

<div component="app-tabs" key="static"></div>

[!TabGroup]
# [Example](#tab\conditionalexample)
<div component="app-example-runner" ref-component="app-focus-conditional"></div>
# [/Example]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="focus-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="focus-conditional-component"></div> 
# [/Component]
# [Html](#tab\statichtml)
<div component="app-code" key="focus-conditional-html"></div> 
# [/Html]
***
