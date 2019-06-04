---
title: placeholder
description: placeholder can be used inside ui feature to display placeholder for the particular formControl in the dynamic-form. placeholder can be generated statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: placeholder
---

<div class="title-bar"><p>placeholder can be used inside ui feature to display placeholder for the particular formControl in the dynamic-form. placeholder can be generated statically or conditionally based on your requirements.</p></div>

# Static Placeholder

To display the `placeholder` in your dynamic form, you can set the placeholder statically inside the `ui` property of the `serverData` in your component.

<div component="app-code" key="placeholder-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="placeholder-static-html"></div>
<div component="app-example-runner" ref-component="app-placeholder-static"></div>

# Conditional Placeholder

To display the `placeholder` conditionally in your dynamic form, you can set the placeholder property of that particular `form control` by defining the placeholder function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `modelName`, `keyName` and `actions` which will contain the condition to be applied on that formControl. Defined `modelName` and `keyName` will be set inside the `serverData` in your component.

<div component="app-code" key="placeholder-conditional-component"></div>
Next, we need to write html code.
<div component="app-code" key="placeholder-conditional-html"></div>
<div component="app-example-runner" ref-component="app-placeholder-conditional"></div>
