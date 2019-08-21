---
title: file
author: rxcontributortwo
category: dynamic-forms
subcategory: controls
type: simple
linktitle: dynamicfile
---

<div class="title-bar"><p>To create a formControl with type file in dynamic forms, you need to mention the formControl name and type in the `serverData` and pass it in the `formGroup` method of `RxDynamicFormBuilder`.</p></div>

# Example

<div component="app-code" key="dynamicfile-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dynamicfile-complete-html"></div> 
<div component="app-example-runner" ref-component="app-dynamicfile-complete"></div>

# Uploading multiple files in File Control

If you want to upload multiple files in file cotrol, then you can set `multiple: true` in the `prop` property of `additionalConfig` in the `serverData`.

<div component="app-code" key="dynamicfile-multiple-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dynamicfile-multiple-html"></div> 
<div component="app-example-runner" ref-component="app-dynamicfile-multiple"></div>
***