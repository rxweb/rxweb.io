---
title: conditional description
author: rxcontributorone
category: dynamic-forms
subcategory: conditional-binding
type:simple
linktitle: conditionaldescription
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>To apply description on the particular control conditionally, You need to pass `modelName` and pass it into `controlConfigModels` along with `formGroup` method.
</p></div>

# Example

First we need to create a model class and apply condition into it.
<div component="app-code" key="conditionaldescription-conditional-model"></div> 
<div component="app-code" key="conditionaldescription-conditional-component"></div> 
Next, we need to write html code.
<div component="app-code" key="conditionaldescription-conditional-html"></div> 
<div component="app-example-runner" ref-component="app-conditionaldescription-conditional"></div>