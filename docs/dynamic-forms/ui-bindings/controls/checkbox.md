---
title: checkbox
author: rxcontributortwo
category: dynamic-forms
subcategory: controls
type: simple
linktitle: checkbox
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>

To create a checkbox in dynamic forms, you just need to mention `type: "checkbox"` and `source` which include the options to be selected.</p></div>

# Basic Example

<div component="app-code" key="checkbox-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="checkbox-complete-html"></div> 
<div component="app-example-runner" ref-component="app-checkbox-complete"></div>

# Single Select

If you want to select only one option, you do not have to pass any extra property for that.

<div component="app-tabs" key="single"></div>

[!TabGroup]
# [Component](#tab\singlecomponent)
<div component="app-code" key="checkbox-single-component"></div> 
# [/Component]

# [Html](#tab\singlehtml)
<div component="app-code" key="checkbox-single-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-checkbox-single"></div>

# Multi Select

If you want to select multiple options, you need to pass `multiselect:true`.

<div component="app-tabs" key="multiselect"></div>

[!TabGroup]
# [Component](#tab\multiselectcomponent)
<div component="app-code" key="checkbox-multiselect-component"></div> 
# [/Component]

# [Html](#tab\multiselecthtml)
<div component="app-code" key="checkbox-multiselect-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-checkbox-multiselect"></div>

# Checkbox Based upon custom key and value names
The name of key and value can be changed as per your requirement and they need to be passed in response from the server as `textPropName` and `valuePropName` respectively.

<div component="app-tabs" key="value"></div>

[!TabGroup]
# [Component](#tab\valuecomponent)
<div component="app-code" key="checkbox-value-component"></div> 
# [/Component]

# [Html](#tab\valuehtml)
<div component="app-code" key="checkbox-value-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-checkbox-value"></div>

# Inline Display

If you want to group checkboxes by displaying them inline i.e. in the same horizontal line, then you can set `inline: true` for that perticulare formControl. 

<div component="app-tabs" key="inline"></div>

[!TabGroup]
# [Component](#tab\inlinecomponent)
<div component="app-code" key="checkbox-inline-component"></div> 
# [/Component]

# [Html](#tab\inlinehtml)
<div component="app-code" key="checkbox-inline-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-checkbox-inline"></div>

# OnClick Selection of all Checkboxes

You can select and unselect all the checkboxes at once on a button click. You can write your custom logic for selecting all checkboxes in a model which can exteded from `FormControlConfig`.

<div component="app-tabs" key="selectall"></div>

[!TabGroup]
# [Component](#tab\selectallcomponent)
<div component="app-code" key="checkbox-selectall-component"></div> 
# [/Component]

# [Model](#tab\selectallmodel)
<div component="app-code" key="checkbox-selectall-model"></div> 
# [/Model]

# [Html](#tab\selectallhtml)
<div component="app-code" key="checkbox-selectall-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-checkbox-selectall"></div>