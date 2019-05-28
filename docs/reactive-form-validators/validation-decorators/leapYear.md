---
title: leapYear
description: LeapYear validation  {{validatorType}}  will check whether the value entered is a leap year or not.
author: rxcontributortwo
category: form-validations
subcategory: Numeric
type:tabs
linktitle: leapYear
---

<div class="title-bar"><p>leapYear validation  {{validatorType}}  will check whether the value entered is a leap year or not.</p></div>

# When to use
Suppose you want to create a user value form, which contains fields like name, birth year, joining year and you want the user to enter value which is in leap year format Here depending upon the requirement these scenarios may arise..
<ol class='showHideElement'>
    <li>Allow only leap year in the field of birthyear.</li>
    <li>Apply leapyear validation based on matched condition in the form, like if the name  is ‘John’ then the birthYear value should be leapyear.</li>
    <li>Adding Custom Message on joining Field.</li>
    <li>Shows the custom message on `Promotion Year` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
    <li>Apply leapyear validation dynamically based on server rules.</li>
    </data-scope>
</ol>
Let’s see how LeapYear  {{validatorType}}  fulfil the need.

# Basic LeapYear Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create ea User class and define a property of leapyear in the model to achieve the functional need of point 1.
<div component="app-code" key="leapYear-add-model"></div> 
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
<div component="app-code" key="leapYear-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="leapYear-add-html"></div> 
<div component="app-example-runner" ref-component="app-leapYear-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="leapYear-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="leapYear-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="leapYear-edit-html"></div> 
<div component="app-example-runner" ref-component="app-leapYear-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="leapYear-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="leapYear-add-html"></div> 
<div component="app-example-runner" ref-component="app-leapYear-add"></div>
</data-scope>

# BaseConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@leapYear()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.leapYear()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `leapYear` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  title="conditionalExpression">conditionalExpression</a></td><td>LeapYear validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

LeapYear validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="leapYear-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="leapYear-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-leapYear-conditionalExpression" title="leapYear {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="leapYear-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-leapYear-message" title="leapYear {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="leapYear-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-leapYear-messageKey" title="leapYear {{validatorType}} with messageKey" key="messageKey"></div>

# Complete LeapYear Example

This Complete LeapYear example which includes all the BaseConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-leapYear-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="leapYear-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="leapYear-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="leapYear-complete-html"></div>
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic LeapYear Example

This Dynamic leapYear example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic leapYear example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-leapYear-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="leapYear-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="leapYear-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="leapYear-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="leapYear-dynamic-html"></div> 
# [/Html]
***
</data-scope>
