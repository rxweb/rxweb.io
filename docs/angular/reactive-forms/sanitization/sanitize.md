---
title: custom
description: Allows you to set condition in custom property of the sanitizer.
author: rxcontributorone
category: sanitization
type:decorators
linktitle: custom
---
 
<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>You can sanitize the value based upon your business logic.</p></div>

# Example  
let's create a user model and define a property of freeText in the model.
<div component="app-code" key="custom-add-model"></div> 

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="custom-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="custom-add-html"></div> 
<div component="app-example-runner" ref-component="app-custom-add"></div>
