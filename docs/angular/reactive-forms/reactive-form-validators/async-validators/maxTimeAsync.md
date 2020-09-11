---
title: maxTimeAsync 
description: maxTimeAsync validation  {{validatorType}}  will allow user to enter the input time format which must be less than or equal to the maximum time mentioned in the config parameters.
author: rxcontributorone
category: async-validators
subcategory: Date and Time
type: tabs
linktitle: maxTimeAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>maxTimeAsync validation  {{validatorType}}  will allow user to enter the input time format which must be less than or equal to the minimum time mentioned in the config parameters asynchronously.</p></div>

# When to use
Suppose you want to create a AttendanceDetail form, which contains field of EntryPlace, EntryTime, TotalTimeOut,Net In Time, Total In Time and Exit Time you want the user to enter valid time format which must not exceed the maximum time asynchronously. Here depending upon the requirement these scenarios may arise..

<ol class='showHideElement'>
    <li>Allow maxTimeAsync validation in `Closing Time` without seconds.</li>
    <li>Allowing seconds in TotalTimeOut.</li>
    <li>Adding Custom Message on `Exit Time` Field.</li>
    <li>Allowing either `strictly less than` or `less than equal to` operator on Break Hours Field based on a particular value.</li>
    <li>Shows the custom message on `Net In Time` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply minTime validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how maxTimeAsync {{validatorType}} fulfil the need.

# Basic maxTimeAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a AttendanceDetail class and define a property of `Closing Time` in the model to achieve the functional need of point 1.
<div component="app-code" key="maxTimeAsync-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope> 

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="maxTimeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="maxTimeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="maxTimeAsync-edit-component"></div> 
The below code is `attendance-data.json` for getting data from the server
<div component="app-code" key="maxTimeAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="maxTimeAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="maxTimeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="maxTimeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@maxTimeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.maxTimeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `maxTimeAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#allowseconds")' title="allowseconds">allowseconds</a></td><td>If you are allowed seconds in time format then you need to put this as true.</td></tr>
<tr><td><a (click)='scrollTo("#fieldName")' title="fieldName">fieldName</a></td><td>fieldName property of TimeRelationConfig can be used when the user wants to restricts the input time to be less than any particular field input.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#operator")' title="operator">operator</a></td><td>operator is used to validate time based upon less than or less than equal to a particular value, The default validation is based upon less than equal to.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>value property of TimeRelationConfig can be used when the user wants to restricts the input time to be less than any particular time.</td></tr>
</table >

## allowSeconds 
Type :  `boolean` 
If you are allowed seconds in time format then you need to put this as true.

<div component="app-code" key="maxTimeAsync-allowSecondsExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-allowSeconds" title="maxTimeAsync {{validatorType}} with allowSeconds" key="allowSeconds"></div>

## fieldName 
Type :  `string` 
fieldName property of TimeRelationConfig can be used when the user wants to restricts the input time to be less than any particular field input.

<div component="app-code" key="maxTimeAsync-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-fieldName" title="maxTimeAsync {{validatorType}} with fieldName" key="fieldName"></div>

## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="maxTimeAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-message" title="maxTimeAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="maxTimeAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-messageKey" title="maxTimeAsync {{validatorType}} with messageKey" key="messageKey"></div>

## operator
Type :  `string` 

`operator` is used to validate time based upon less than or less than equal to a particular value, The default validation is based upon less than equal to.

<div component="app-code" key="maxTimeAsync-operatorExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-operator" title="maxTimeAsync {{validatorType}} with operator" key="operator"></div>

## value 
Type :  `string` 
value property of TimeRelationConfig can be used when the user wants to restricts the input time to be less than any particular time.

<div component="app-code" key="maxTimeAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxTimeAsync-value" title="maxTimeAsync {{validatorType}} with value" key="value"></div>

# Complete maxTimeAsync Example

This Complete maxTimeAsync example which includes all the maxTimeAsyncConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4, 5 and 6.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-maxTimeAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="maxTimeAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="maxTimeAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="maxTimeAsync-complete-html"></div> 
# [/Html]
***

