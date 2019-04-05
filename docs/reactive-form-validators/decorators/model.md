---
title:  Apply same validation set on multiple properties
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