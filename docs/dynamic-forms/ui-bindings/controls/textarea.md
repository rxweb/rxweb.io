---
title: textarea
author: rxcontributortwo
category: dynamic-forms
subcategory: controls
type: simple
linktitle: textarea
---

<div class="title-bar"><p>To create a formControl of type textarea, you need to mention the formControl name and type in the `serverData` and pass it in the `formGroup` method of `RxDynamicFormBuilder`.</p></div>

# Example

<div component="app-code" key="textarea-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="textarea-complete-html"></div> 
<div component="app-example-runner" ref-component="app-textarea-complete"></div>

# Specifying rows and cols for textarea

If you want to specify rows and cols in textarea cotrol, then you can set `rows` and `cols` in the `prop` property of `additionalConfig` in the `serverData`.

<div component="app-code" key="textarea-size-component"></div>
Next, we need to write html code.
<div component="app-code" key="textarea-size-html"></div> 
<div component="app-example-runner" ref-component="app-textarea-size"></div>

# Specifying maxlength and minlength for textarea

If you want to limit maxlength and minlength in textarea input, then you can set `maxlength` and `minlength` in the `prop` property of `additionalConfig` in the `serverData`.

<div component="app-code" key="textarea-inputlength-component"></div>
Next, we need to write html code.
<div component="app-code" key="textarea-inputlength-html"></div> 
<div component="app-example-runner" ref-component="app-textarea-inputlength"></div>
***