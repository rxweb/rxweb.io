---
title:  @model
author: rxcontributorone
category: decorators
type: decorators
linktitle: model
---
<div class="title-bar"><p>This is helpfull where your same validation as well as showing error messages conditionally.</p></div>

# Example 
let's create a user model and define a property of password in the model.
<div component="app-code" key="model-add-model"></div> 

You have to use RxFormBuilder service to create FormGroup in the component.

<div component="app-code" key="model-add-component"></div> 
<div component="app-code" key="model-add-html"></div> 
<div component="app-example-runner" ref-component="app-model-add"></div>

# elementClass
When you want to apply elementClass conditionally on multiple properties .

<div component="app-code" key="model-element-model"></div> 
<div component="app-code" key="model-element-component"></div> 
<div component="app-code" key="model-element-html"></div> 
<div component="app-example-runner" ref-component="app-model-element" title="element with model" key="element"></div>

# error 
When you want to set error property on more than two properties than it will be easier to set the `error` property in propsConfig of model decorator.

<div component="app-code" key="model-error-model"></div> 
<div component="app-code" key="model-error-component"></div> 
<div component="app-code" key="model-error-html"></div> 
<div component="app-example-runner" ref-component="app-model-error" title="error with model" key="error"></div>

# Exclude properties dynamically
When you have more than two properties than it will be easier to set the `ignore` property in propsConfig of model decorator.

<div component="app-code" key="model-exclude-model"></div> 
<div component="app-code" key="model-exclude-component"></div> 
<div component="app-code" key="model-exclude-html"></div> 
<div component="app-example-runner" ref-component="app-model-exclude" title="exclude with model" key="exclude"></div>