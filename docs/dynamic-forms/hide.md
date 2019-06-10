---
title: hide
description: hide can be used inside ui feature to hide the particular formControl in the dynamic-form. You can  hide a formControl statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: hide
---

<div class="title-bar"><p>hide can be used inside ui feature to hide the particular formControl in the dynamic-form. You can  hide a formControl statically or conditionally based on your requirements.</p></div>

# Static Hide

To `hide` a particular formControl in your dynamic form, you can set the hide statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="hide-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="hide-static-html"></div>
<div component="app-example-runner" ref-component="app-hide-static"></div>

# Conditional Hide

To `hide` a particular formControl conditionally in your dynamic form, you can set the hide property for that particular `form control` by defining the hide function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `keyName` and `actions` which will contain the condition to be applied on that formControl. These `model` and `modelName` will be set inside the `dynamicFormConfiguration` and `serverData` in your component.

<div component="app-tabs" key="conditional"></div>

[!TabGroup]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="hide-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="hide-conditional-component"></div> 
# [/Component]
***

<div component="app-code" key="hide-conditional-html"></div>
<div component="app-example-runner" ref-component="app-hide-conditional"></div>