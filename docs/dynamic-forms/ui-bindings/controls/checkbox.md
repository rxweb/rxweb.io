---
title: checkbox
author: rxcontributortwo
category: dynamic-forms
subcategory: controls
type: simple
linktitle: checkbox
---

<div class="title-bar"><p>This is used to create a formControl with type checkbox to select multiple values in dynamic forms. For that you need to mention formControl name and `source` which include the options you want to be selected in the `serverData` and pass it in the `formGroup` method of `RxDynamicFormBuilder`.</p></div>

# Example

<div component="app-code" key="checkbox-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="checkbox-complete-html"></div> 
<div component="app-example-runner" ref-component="app-checkbox-complete"></div>

# Checkbox Based upon changing key and value names
The name of key and value can be changed as per your requirement and they need to be passed in serverData as `textPropName` and `valuePropName` respectively.

<div component="app-code" key="checkbox-value-component"></div> 
Next, we need to write html code.
<div component="app-code" key="checkbox-value-html"></div> 
<div component="app-example-runner" ref-component="app-checkbox-value"></div>

# Inline Display

If you want to group checkboxes by displaying them inline i.e. in the same horizontal line, then you can set `inline: true` for that perticulare formControl in the `serverData`. 

<div component="app-code" key="checkbox-inline-component"></div> 
Next, we need to write html code.
<div component="app-code" key="checkbox-inline-html"></div> 
<div component="app-example-runner" ref-component="app-checkbox-inline"></div>