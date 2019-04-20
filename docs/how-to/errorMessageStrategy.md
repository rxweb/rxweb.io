---
title: Globally Bind Error Message Strategy 
author: rxcontributorone
category: how-to
type:tabs
linktitle: errorMessageStrategy 
---

Whenever we want to bind error message conditionally while validating formControls in reactive forms, we bind it through error or model decorator but when the scenario arises that you have the same error message strategy throughout the application, it becomes bulky and unmanageable to declare it on every model. One better approach to that is configuring the errorbinding strategy globally 

If your form has nested formGroup or formArray then you dont need to set the property true of every nested formGroups and formArrays, you just have to set it true of the root formGroup only. 

To configure the errorBindingStrategy throughout the application. please refer <a href="api/reactive-form-config#errorMessageStrategy">`ReactiveFormConfig`</a>

If you are using error or model decorator it will override the global message binding strategy of particular formControl or formGroup

Based upon your need you can set the errorMessageBindingStrategy to these Strategies:

# ErrorBindingStrategy.OnSubmit
Whenever the `RxFormGroup` property `submitted` is true then the invalid FormControl error messages will be bind.

# ErrorBindingStrategy.OnDirty
Once the FormControl is dirty, after that invalid FormControl error messages will be bind accordingly. The FormControl should be marked as touched using `markAsDirty()`

# ErrorBindingStrategy.OnTouched
Once the FormControl is touched, after that invalid FormControl error messages will be bind when we set accordingly, The FormControl should be marked as touched using `markAsTouched()`

# ErrorBindingStrategy.OnDirtyOrTouched
Once the FormControl is Dirty or Touched, after that invalid FormControl error messages will be bind accordingly.

# ErrorBindingStrategy.OnDirtyOrSubmit
Once the FormControl is Dirty or Submitted, after that invalid FormControl error messages will be bind accordingly.

# ErrorBindingStrategy.OnTouchedOrSubmit
Once the FormControl is Dirty or Touched, after that invalid FormControl error messages will be bind accordingly.

# Example
To configure the errorBindingStrategy throughout the application, In this example the ErrorBindingStrategy is set to `OnSubmit` and that will work accordingly.
<div component="app-code" key="errormessagestrategy-reactiveForm-component"></div> 

This is example of `ErrorBindingStrategy.OnSubmit` in which all the errorMessage of formControl will bind on submit click when the `submitted` property is set true.

<data-scope scope="['decorator']">
<div component="app-code" key="errormessagestrategy-onsubmit-model"></div> 
</data-scope>
<div component="app-code" key="errormessagestrategy-onsubmit-component"></div> 
<div component="app-code" key="errormessagestrategy-onsubmit-html"></div> 
<div component="app-example-runner" ref-component="app-errormessagestrategy-onsubmit"></div>
***