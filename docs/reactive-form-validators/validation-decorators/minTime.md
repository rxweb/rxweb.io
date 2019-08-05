---
title: minTime 
description: minTime validation {{validatorType}} will allow user to enter the input time format which must be strictly greater than or greater than or equal to the minimum time mentioned in the config parameters.
author: rxcontributortwo
category: form-validations
subcategory: Date and Time
type: tabs
linktitle: minTime
---

<div class="title-bar"><p>minTime validation {{validatorType}} will allow user to enter the input time format which must be strictly greater than or greater than or equal to the minimum time mentioned in the config parameters.</p></div>

# When to use
Suppose you want to create a AttendanceDetail form, which contains field of EntryPlace, EntryTime, TotalTimeOut,Net In Time, Total In Time and Exit Time you want the user to enter valid time format which must not exceed the maximum time. Here depending upon the requirement these scenarios may arise..

<ol class='showHideElement'>
    <li>Allow minTime validation in `Opening Time` without seconds.</li>
    <li>Allowing seconds in TotalTimeOut.</li>
    <li>Apply minTime validation based on matched condition in the form, like if the EntryPlace is ‘Main Entry Gate’ then the `Total In Time` value should be in greater than `11:00` (Based on function).</li>
    <li>Apply minTime validation based on matched condition in the form, like if the EntryPlace is ‘Main Entry Gate’ then the EntryTime value should be in greater than `11:00` (Based on string datatype).</li>
    <li>Adding Custom Message on `Exit Time` Field.</li>
    <li>Allowing either `strictly greater than` or `greater than equal to` operator on `Required Hours` Field based on a particular value.</li>
    <li>Shows the custom message on `Net In Time` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply minTime validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how minTime {{validatorType}} fulfil the need.

# Basic minTime Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a AttendanceDetail class and define a property of `Opening Time` in the model to achieve the functional need of point 1.
<div component="app-code" key="minTime-add-model"></div> 
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
<div component="app-code" key="minTime-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minTime-add-html"></div> 
<div component="app-example-runner" ref-component="app-minTime-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="minTime-edit-component"></div> 
The below code is `attendance-data.json` for getting data from the server
<div component="app-code" key="minTime-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="minTime-edit-html"></div> 
<div component="app-example-runner" ref-component="app-minTime-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="minTime-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minTime-add-html"></div> 
<div component="app-example-runner" ref-component="app-minTime-add"></div>
</data-scope>

# MinTimeConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@minTime()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.minTime()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `minTime` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#allowseconds")' title="allowseconds">allowseconds</a></td><td>If you are allowed seconds in time format then you need to put this as true.</td></tr>
<tr><td><a (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>minTime validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a (click)='scrollTo("#fieldName")' title="fieldName">fieldName</a></td><td>fieldName property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular field input.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#operator")' title="operator">operator</a></td><td>operator is used to validate time based upon greater than or greater than equal to a particular value, The default validation is based upon greater than equal to.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>value property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular time.</td></tr>
</table >

## allowSeconds 
Type :  `boolean` 
If you are allowed seconds in time format then you need to put this as true.

<div component="app-code" key="minTime-allowSecondsExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTime-allowSeconds" title="minTime {{validatorType}} with allowSeconds" key="allowSeconds"></div>

## conditionalExpression 
Type :  `Function`  |  `string` 
minTime validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="minTime-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="minTime-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-minTime-conditionalExpression" title="minTime {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## fieldName 
Type :  `string` 
fieldName property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular field input.

<div component="app-code" key="minTime-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTime-fieldName" title="minTime {{validatorType}} with fieldName" key="fieldName"></div>

## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="minTime-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTime-message" title="minTime {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="minTime-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTime-messageKey" title="minTime {{validatorType}} with messageKey" key="messageKey"></div>

## operator
Type :  `string` 

`operator` is used to validate time based upon greater than or greater than equal to a particular value, The default validation is based upon greater than equal to.

<div component="app-code" key="minTime-operatorExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTime-operator" title="minTime {{validatorType}} with operator" key="operator"></div>

## value 
Type :  `string` 
value property of TimeRelationConfig can be used when the user wants to restricts the input time to be greater than any particular time.

<div component="app-code" key="minTime-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-minTime-value" title="minTime {{validatorType}} with value" key="value"></div>

# Complete minTime Example

This Complete minTime example which includes all the MaxTimeConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4, 5 and 6.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-minTime-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="minTime-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="minTime-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="minTime-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic minTime Example

This Dynamic minTime example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic minTime example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-minTime-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="minTime-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="minTime-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="minTime-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="minTime-dynamic-html"></div> 
# [/Html]
***
</data-scope>
