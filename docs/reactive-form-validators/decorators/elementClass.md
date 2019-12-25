---
title:  Apply a class conditionally to the form control element
author: rxcontributorone
category: decorators
type: decorators
linktitle: elementClass
---
<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>You can set the element class conditionaly through your TS code.</p></div>


# Basic elementClass decorator  
let's create a user model and define a property of password in the model.
<div component="app-code" key="elementClass-add-model"></div> 

You have to use RxFormBuilder service to create FormGroup in the component.

<div component="app-code" key="elementClass-add-component"></div> 
<div component="app-code" key="elementClass-add-html"></div> 
<div component="app-example-runner" ref-component="app-elementClass-add"></div>