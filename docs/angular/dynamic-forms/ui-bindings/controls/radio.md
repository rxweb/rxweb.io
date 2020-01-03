---
title: radio
author: rxcontributortwo
category: dynamic-forms
subcategory: controls
type: simple
linktitle: radio
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>

To create a radio button in dynamic forms, you just need to mention `type: "radio"` and `source` which include the options to be selected.</p></div>

# Basic Example
<div component="app-code" key="radio-static-component"></div> 
Next, we need to write html code.
<div component="app-code" key="radio-static-html"></div> 
<div component="app-example-runner" ref-component="app-radio-static"></div>

# Radio button Based upon custom key and value names
The name of key and value can be changed as per your requirement and they need to be passed in serverData as `textPropName` and `valuePropName` respectively.

<div component="app-code" key="radio-value-component"></div> 
Next, we need to write html code.
<div component="app-code" key="radio-value-html"></div> 
<div component="app-example-runner" ref-component="app-radio-value"></div>

# Inline Display

If you want to group radio buttons by displaying them inline i.e. in the same horizontal line, then you can set `inline: true` for that perticulare formControl in the `serverData`. 

<div component="app-code" key="radio-inline-component"></div> 
Next, we need to write html code.
<div component="app-code" key="radio-inline-html"></div> 
<div component="app-example-runner" ref-component="app-radio-inline"></div>
***
