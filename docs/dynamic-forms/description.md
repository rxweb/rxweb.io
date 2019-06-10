---
title: description
description: description can be used inside ui feature to display description for the particular formControl in the dynamic-form. description can be generated statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: description
---

<div class="title-bar"><p>description can be used inside ui feature to display description for the particular formControl in the dynamic-form. description can be generated statically or conditionally based on your requirements.</p></div>

# Static Description

To set the `description` for a particular formControl in your dynamic form, you can set the description property statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="description-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="description-static-html"></div>
<div component="app-example-runner" ref-component="app-description-static"></div>

# Conditional Description

To set the `description` conditionally in your dynamic form, you can set the description property of that particular `formControl` by defining the description function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `keyName` and `actions` which will contain the condition to be applied on that formControl. These `model` and `modelName` will be set inside the `dynamicFormConfiguration` and `serverData` in your component.

<div component="app-tabs" key="conditional"></div>

[!TabGroup]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="description-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="description-conditional-component"></div> 
# [/Component]
***

<div component="app-code" key="description-conditional-html"></div>
<div component="app-example-runner" ref-component="app-description-conditional"></div>