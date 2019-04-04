---
title: suffix
description: Allows you to add suffix to the input.
author: rxcontributorone
category: sanitization
type:decorators
linktitle: suffix
---
 
<div class="title-bar"><p>Allows you to add suffix to the input.</p></div>

# Example  
Let's create a user model and define a property of freeText in the model.
<div component="app-code" key="suffix-add-model"></div> 

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="suffix-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="suffix-add-html"></div> 
<div component="app-example-runner" ref-component="app-suffix-add"></div>