---
title: blacklist
description: Remove the characters form the user entered value.
author: ajayojha
category: sanitization
type:decorators
linktitle: blacklist
---

<div class="title-bar"><p>Remove the characters from the user entered value.</p></div>

# When to use
If you want to remove some specific text then apply in the blacklist. Whenever user enters the value in the respective HTML control at that time it will sanitize it and set the value in the FormControl/Model Property.

# Example  
let's create a user model and define a property of freeText in the model.
<div component="app-code" key="blacklist-add-model"></div> 

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="blacklist-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="blacklist-add-html"></div> 
<div component="app-example-runner" ref-component="app-blacklist-add"></div>
