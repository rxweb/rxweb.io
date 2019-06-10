---
title: readonly
description: readonly can be used inside ui feature to convert the particular formControl in readonly state in your dynamic-form. You can set readonly statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: readonly
---

<div class="title-bar"><p>readonly can be used inside ui feature to convert the particular formControl in readonly state in your dynamic-form. You can set readonly statically or conditionally based on your requirements.</p></div>

# Static Readonly

To make a particular formControl readonly in your dynamic form, you can set the `readonly` statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="readonly-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="readonly-static-html"></div>
<div component="app-example-runner" ref-component="app-readonly-static"></div>

# Conditional Readonly

To make a particular formControl readonly conditionally in your dynamic form, you can set the readonly property for that particular `formControl` by defining the readonly function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `keyName` and `actions` which will contain the condition to be applied on that formControl. These `model` and `modelName` will be set inside the `dynamicFormConfiguration` and `serverData` in your component.

<div component="app-tabs" key="conditional"></div>

[!TabGroup]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="readonly-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="readonly-conditional-component"></div> 
# [/Component]
***

<div component="app-code" key="readonly-conditional-html"></div>
<div component="app-example-runner" ref-component="app-readonly-conditional"></div>