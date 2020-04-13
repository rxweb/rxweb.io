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

<div component="app-code" key="stronglyType-add-model"></div> 
Now we create a FormGroup, but our FormGroup object type is IFormGroup<User>. IFormGroup is an interface which is inherited with the FormGroup class so that you can access the privileges of FormGroup as well as additional methods of RxFormGroup.

<div component="app-code" key="stronglyType-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="stronglyType-add-html"></div> 
<div component="app-example-runner" ref-component="app-stronglyType-add"></div>

# Maintaining formControl value as per the Defined Types
As properties defined in the model can have different data types according to the field requirement and the form is strongly typed with the model, the formControl value should be according the type mentioned in the model. 

This can be achieved using sanitizers of <a class="redirect-link" href="/rxweb-sanitizers/sanitizers-getting-started">@rxweb/sanitizers</a>. These sanitizers are used as decorator above the property in the model.

In the below scenario i have a strongly typed form in which the `accept` property is boolean therefore adding `toBoolean` decorator on the property which retrieve the `accept` formControl as boolean  

<div component="app-code" key="stronglyType-defined-model"></div> 

<div component="app-code" key="stronglyType-defined-component"></div> 
Next, we need to write html code.
<div component="app-code" key="stronglyType-defined-html"></div> 
<div component="app-example-runner" ref-component="app-stronglyType-defined"></div>
