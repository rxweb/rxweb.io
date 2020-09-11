---
title: minTimeAsync 
description: minTimeAsync validation {{validatorType}} will allow user to enter the input time format which must be strictly greater than or greater than or equal to the minimum time mentioned in the config parameters.
author: rxcontributorone
category: async-validators
subcategory: Date and Time
type: tabs
linktitle: minTimeAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>minTimeAsync validation {{validatorType}} will allow user to enter the input time format which must be strictly greater than or greater than or equal to the minimum time mentioned in the config parameters asynchronously.</p></div>

# When to use
Suppose you want to create a AttendanceDetail form, which contains field of EntryPlace, EntryTime, TotalTimeOut,Net In Time, Total In Time and Exit Time you want the user to enter valid time format which must not exceed the maximum time asynchronously. Here depending upon the requirement these scenarios may arise..

<ol class='showHideElement'>
    <li>Allow minTimeAsync validation in `Opening Time` without seconds.</li>
    <li>Allowing seconds in TotalTimeOut.</li>
    <li>Adding Custom Message on `Exit Time` Field.</li>
    <li>Allowing either `strictly greater than` or `greater than equal to` operator on `Required Hours` Field based on a particular value.</li>
    <li>Shows the custom message on `Net In Time` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply minTimeAsync validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how minTimeAsync {{validatorType}} fulfil the need.

# Basic minTimeAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a AttendanceDetail class and define a property of `Opening Time` in the model to achieve the functional need of point 1.
<div component="app-code" key="minTimeAsync-add-model"></div> 
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
<div component="app-code" key="minTimeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minTimeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="minTimeAsync-edit-component"></div> 
The below code is `attendance-data.json` for getting data from the server
<div component="app-code" key="minTimeAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="minTimeAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="minTimeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minTimeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@minTimeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.minTimeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `minTimeAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#allowseconds")' title="allowseconds">allowseconds</a></td><td>If you are allowed seconds in time format then you need to put this as true.</td></tr>
<tr><td><a (click)='scrollTo("#fieldName")' title="fieldName">fieldName</a></td><td>fieldName property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular field input.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#operator")' title="operator">operator</a></td><td>operator is used to validate time based upon greater than or greater than equal to a particular value, The default validation is based upon greater than equal to.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>value property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular time.</td></tr>
</table >

## allowSeconds 
Type :  `boolean` 
If you are allowed seconds in time format then you need to put this as true.

<div component="app-code" key="minTimeAsync-allowSecondsExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-allowSeconds" title="minTimeAsync {{validatorType}} with allowSeconds" key="allowSeconds"></div>


## fieldName 
Type :  `string` 
fieldName property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular field input.

<div component="app-code" key="minTimeAsync-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-fieldName" title="minTimeAsync {{validatorType}} with fieldName" key="fieldName"></div>

## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="minTimeAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-message" title="minTimeAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="minTimeAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-messageKey" title="minTimeAsync {{validatorType}} with messageKey" key="messageKey"></div>

## operator
Type :  `string` 

`operator` is used to validate time based upon greater than or greater than equal to a particular value, The default validation is based upon greater than equal to.

<div component="app-code" key="minTimeAsync-operatorExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-operator" title="minTimeAsync {{validatorType}} with operator" key="operator"></div>

## value 
Type :  `string` 
value property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular time.

<div component="app-code" key="minTimeAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTimeAsync-value" title="minTimeAsync {{validatorType}} with value" key="value"></div>

# Complete minTimeAsync Example

This Complete minTimeAsync example which includes all the MaxTimeConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4, 5 and 6.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-minTimeAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="minTimeAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="minTimeAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="minTimeAsync-complete-html"></div> 
# [/Html]
***


