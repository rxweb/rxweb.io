---
title: custom
description: Allows you to set condition in custom property of the sanitizer.
author: rxcontributorone
category: sanitization
type:decorators
linktitle: custom
---
 
<div class="title-bar"><p>Allows you to use conditional sanitizer based on your custom rule.</p></div>

# When to use
If you want to add a condition based upon which you want the string to be sanitized, you need to set the condition in custom sanitizer. Whenever a user enters a value in the HTML control it will sanitize it based upon the condition in the `custom` property.

# Example  
let's create a user model and define a property of freeText in the model.
<div component="app-code" key="custom-add-model"></div> 

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="custom-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="custom-add-html"></div> 
<div component="app-example-runner" ref-component="app-custom-add"></div>
