---
title: RxFormGroup 
author: rxcontributorone
category: api
type: simple
linktitle: RxFormGroup
---
You can create a FormControl through this service. This provides `patchModelValue`,`getErrorSummary`,`isDirty` and `toFormData`,`resetForm`.
Let's see in which cases we can use which method.

## patchModelValue
patchModelValue will update the value of the FormControl inside the FormGroup based on provided server JSON object or model object. It will update the particular FormControl's value from the FormGroup 

Let's see how `patchModelValue` can fulfil the need.

<data-scope scope="['decorator']">
<div component="app-code" key="RxFormGroup-patch-component"></div> 
</data-scope>
This method accepts the json value of the FormGroup from the FormGroup and will update it.

## getErrorSummary
Using this method, we can get all the errors of the FormControls whose status is `invalid`. It can be used to show all the error Messages at once.

<data-scope scope="['decorator']">
<div component="app-code" key="RxFormGroup-error-component"></div> 
</data-scope>

## toFormData
The value of the formControl is in json format, This method is used to convert json data to formData while posting it.

<data-scope scope="['decorator']">
<div component="app-code" key="RxFormGroup-toformdata-component"></div> 
</data-scope>

## isDirty
Most suitable cases to use dirty check in Edit form. This most common scenario where we need to check based upon provided value,if the value has been changed then the form become dirty. 

<data-scope scope="['decorator']">
<div component="app-code" key="RxFormGroup-isDirty-component"></div> 
</data-scope>

## resetForm
While using reactive forms, We initialize the value of formControls of the formGroup while creating its instance. 
 
RxFormBuilder provide a solution for reset form of angular reactive form object. If you want to reset the form as per the value initialized while creating an instance of the formControls, you can use `resetForm()`method of FormGroupExtension. 
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormGroup-resetForm-component"></div> 
</data-scope>
