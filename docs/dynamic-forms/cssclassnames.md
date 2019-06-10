---
title: cssClassNames
description: cssClassNames can be used inside ui feature to apply extra css classes other than the css classes which are already applied in the ui-component. cssClassNames can be applied statically or conditionally based on your requirements.
author: rxcontributortwo
category: ui-features
type: simple
linktitle: cssclassnames
---


<div class="title-bar"><p>cssClassNames can be used inside ui feature to apply extra css classes other than the css classes which are already applied in the ui-component. cssClassNames can be applied statically or conditionally based on your requirements.</p></div>

# Static cssClassNames

To apply the `cssClassNames` in your formControl, you can set the cssClassNames statically inside the `ui` property of the `serverData` in your component. cssClassNames is the array of names of the css classes to be applied.

<div component="app-code" key="cssClassNames-static-component"></div>
Next, we need to write html code.
<div component="app-code" key="cssClassNames-static-html"></div>
<div component="app-example-runner" ref-component="app-cssClassNames-static"></div>

# Conditional cssClassNames

To apply the `cssClassNames` conditionally in your formControl, you can set the cssClassNames property for that particular `formControl` by defining the cssClassNames function through `@action` of `rxDynamicForm` over a model class which inherits the properties of `FormControlConfig`. In that action method, you must set a `keyName` and `actions` which will contain the condition to be applied on that formControl. These `model` and `modelName` will be set inside the `dynamicFormConfiguration` and `serverData` in your component.

<div component="app-tabs" key="conditional"></div>

[!TabGroup]
# [Model](#tab\conditionalmodel)
<div component="app-code" key="cssClassNames-conditional-model"></div> 
# [/Model]
# [Component](#tab\conditionalcomponent)
<div component="app-code" key="cssClassNames-conditional-component"></div> 
# [/Component]
***

<div component="app-code" key="cssClassNames-conditional-html"></div>
<div component="app-example-runner" ref-component="app-cssClassNames-conditional"></div>