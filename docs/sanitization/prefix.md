---
title: prefix
description: Allows you to add prefix to the input.
author: rxcontributorone
category: sanitization
type:decorators
linktitle: prefix
---
 
<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>Allows you to add prefix to the input.</p></div>

# Example  
Let's create a user model and define a property of freeText in the model.
<div component="app-code" key="prefix-add-model"></div> 

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="prefix-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="prefix-add-html"></div> 
<div component="app-example-runner" ref-component="app-prefix-add"></div>