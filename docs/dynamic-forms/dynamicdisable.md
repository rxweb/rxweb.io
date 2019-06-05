---
title: disable
description: disable can be used inside ui feature to disable the particular formControl in the dynamic-form. disable can be generated statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: dynamicdisable
---

<div class="title-bar"><p>disable can be used inside ui feature of to disable the particular formControl in the dynamic-form. disable can be generated statically or conditionally based on your requirements.</p></div>

# Static Disable

To `disable` a particular formControl in your dynamic form, you can set the disable statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="disable-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="disable-static-html"></div>
<div component="app-example-runner" ref-component="app-disable-static"></div>

# Conditional Disable

To `disable` a particular formControl conditionally in your dynamic form, you can set the disable property for that particular `form control` by defining the disable function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `modelName`, `keyName` and `actions` which will contain the condition to be applied on that formControl. Defined `modelName` and `keyName` will be set inside the `serverData` in your component.

<div component="app-tabs" key="static"></div>

[!TabGroup]
# [Example](#tab\conditionalexample)
<div component="app-example-runner" ref-component="app-disable-conditional"></div>
# [/Example]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="disable-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="disable-conditional-component"></div> 
# [/Component]
# [Html](#tab\statichtml)
<div component="app-code" key="disable-conditional-html"></div> 
# [/Html]
***
