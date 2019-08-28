---
title: conditional label
author: rxcontributorone
category: dynamic-forms
subcategory: conditional-binding
type:simple
linktitle: conditionallabel
---

<div class="title-bar"><p>To bind label on the particular control conditionally, You need to pass `modelName` and pass it into `controlConfigModels` along with `formGroup` method.
</p></div>

# Example

First we need to create a model class and apply condition into it.
<div component="app-code" key="conditionallabel-conditional-model"></div> 
<div component="app-code" key="conditionallabel-conditional-component"></div> 
Next, we need to write html code.
<div component="app-code" key="conditionallabel-conditional-html"></div> 
<div component="app-example-runner" ref-component="app-conditionallabel-conditional"></div>