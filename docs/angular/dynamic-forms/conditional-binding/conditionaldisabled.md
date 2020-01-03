---
title: conditional disabled
author: rxcontributorone
category: dynamic-forms
subcategory: conditional-binding
type:simple
linktitle: conditionaldisabled
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>To disable a control conditionally, You need to pass `modelName` and pass it into `controlConfigModels` along with `formGroup` method.
</p></div>

# Example

First we need to create a model class and apply condition into it.
<div component="app-code" key="conditionaldisabled-conditional-model"></div> 
<div component="app-code" key="conditionaldisabled-conditional-component"></div> 
Next, we need to write html code.
<div component="app-code" key="conditionaldisabled-conditional-html"></div> 
<div component="app-example-runner" ref-component="app-conditionaldisabled-conditional"></div>