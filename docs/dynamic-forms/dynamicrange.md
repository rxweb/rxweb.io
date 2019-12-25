---
title: range
author: rxcontributortwo
category: dynamic-forms
subcategory: controls
type: simple
linktitle: dynamicrange
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>

To create a formControl with type range in dynamic forms, you just need to mention `type: "range"` in the server response.</p></div>

# Basic Example

<div component="app-code" key="dynamicrange-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dynamicrange-complete-html"></div> 
<div component="app-example-runner" ref-component="app-dynamicrange-complete"></div>

# Specifying minimum and maximum number for range

If you want to set a finite range with proper minimum and maximum number, you can pass `min` and `max` properties in the `prop` property of `additionalConfig` in the server response.

<div component="app-code" key="dynamicrange-value-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dynamicrange-value-html"></div> 
<div component="app-example-runner" ref-component="app-dynamicrange-value"></div>

# Specifying step property for range

If you want to set a finite step for the range formControl, you can pass `step` property in the `prop` property of `additionalConfig` in the server response.

<div component="app-code" key="dynamicrange-step-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dynamicrange-step-html"></div> 
<div component="app-example-runner" ref-component="app-dynamicrange-step"></div>