---
title: Globally Bind Error Message Strategy 
author: rxcontributorone
category: dynamic-forms
type:tabs
linktitle: dynamicerrormessagestrategy 
---

Whenever we want to use the same error message strategy throughout the application we need to configure the errorbinding strategy globally.

If your form has nested formGroup or formArray then you dont need to set the property true of every nested formGroups and formArrays,you just have to set it true of the root formGroup only. 

To configure the errorBindingStrategy throughout the application. please refer <a href="api/reactive-form-config#errorMessageStrategy">`ReactiveFormConfig`</a>


# Example
To configure the errorBindingStrategy throughout the application, In this example the ErrorBindingStrategy is set to `OnSubmit` and that will work accordingly.
<div component="app-code" key="dynamicerrormessagestrategy-reactiveForm-component"></div> 

This is example of `ErrorBindingStrategy.OnSubmit` in which all the errorMessage of formControl will bind on submit click when the `submitted` property is set true.

<data-scope scope="['decorator']">
<div component="app-code" key="dynamicerrormessagestrategy-onsubmit-model"></div> 
</data-scope>
<div component="app-code" key="dynamicerrormessagestrategy-onsubmit-component"></div> 
<div component="app-code" key="dynamicerrormessagestrategy-onsubmit-html"></div> 
<div component="app-example-runner" ref-component="app-dynamicerrormessagestrategy-onsubmit"></div>


Based upon your need you can set the errorMessageBindingStrategy to these Strategies:

# ErrorBindingStrategy.OnSubmit
Whenever the `RxFormGroup` property `submitted` is true then the invalid FormControl error messages will be bind.

# ErrorBindingStrategy.OnDirty
Once the FormControl is dirty, after that invalid FormControl error messages will be bind accordingly. The FormControl should be marked as dirty using `markAsDirty()`

# ErrorBindingStrategy.OnTouched
Once the FormControl is touched, after that invalid FormControl error messages will be bind when we set accordingly, The FormControl should be marked as touched using `markAsTouched()`

# ErrorBindingStrategy.OnDirtyOrTouched
Once the FormControl is Dirty or Touched, after that invalid FormControl error messages will be bind accordingly.

# ErrorBindingStrategy.OnDirtyOrSubmit
Once the FormControl is Dirty or Submitted, after that invalid FormControl error messages will be bind accordingly.

# ErrorBindingStrategy.OnTouchedOrSubmit
Once the FormControl is Dirty or Touched, after that invalid FormControl error messages will be bind accordingly.


***