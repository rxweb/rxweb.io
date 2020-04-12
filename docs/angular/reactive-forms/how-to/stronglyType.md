---
title: Strongly Typed Reactive Form
author: rxcontributorone
category: how-to
type:tabs
linktitle: stronglyType
---

While developing complex forms then respective FormControls should be strongly typed with the model.
That can be achieved through 'IFormGroup' interface.
Let's see how it works.

# Example

First, we create a User model and define the property of fullName.

<div component="app-code" key="stronglyType-complete-model"></div> 
Now we create a FormGroup, but our FormGroup object type is IFormGroup<User>. IFormGroup is an interface which is inherited with the FormGroup class so that you can access the privileges of FormGroup as well as additional methods of RxFormGroup.

<div component="app-code" key="stronglyType-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="stronglyType-complete-html"></div> 
<div component="app-example-runner" ref-component="app-stronglyType-complete"></div>


