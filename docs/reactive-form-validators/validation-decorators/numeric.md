---
title: numeric
description: numeric validation  {{validatorType}}  will check whether the value entered is a valid numberic value or not.The validation can be set according to requirement, it can be either decimal,negative number or positive number.
author: rxcontributortwo
category: form-validations
subcategory: Numeric
type:tabs
linktitle: numeric
---

<div class="title-bar"><p>numeric validation  {{validatorType}}  will check whether the value entered is a valid numberic value or not.The validation can be set according to requirement, it can be either decimal,negative number or positive number.</p></div>

# When to use
Suppose you want to create a user form, which contains fields like DataType, integerNumber, integerNumber and you want the user to enter only numeric value depending on validation of the property. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>Allow only positive numbers in integerNumber.</li>
<li>Allow only Negative numbers in integerNumber.</li>
<li>Allow decimal value in integerNumber  </li>
<li>Apply numeric validation based on matched condition in the form, like if the dataType  is ‘Integer’ then the number value should be Integer number.</li>
<li>Adding Custom Message on Negative value Field.</li>
<li>Shows the custom message on `Positive Non Decimal Number` field by using `messageKey` property.</li>
<data-scope scope="['decorator','validator']">
<li>Apply numeric validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how Numeric {{validatorType}} fulfil the need.

# Basic Numeric Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of Integer Number in the model to achieve the functional need of point 1.
<div component="app-code" key="numeric-add-model"></div> 
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
<div component="app-code" key="numeric-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="numeric-add-html"></div> 
<div component="app-example-runner" ref-component="app-numeric-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="numeric-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="numeric-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="numeric-edit-html"></div> 
<div component="app-example-runner" ref-component="app-numeric-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="numeric-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="numeric-add-html"></div> 
<div component="app-example-runner" ref-component="app-numeric-add"></div>
</data-scope>

# NumericConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@numeric()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.numeric()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `numeric` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#acceptValue")' title="acceptValue">acceptValue</a></td><td> To apply validation based on checking positive or negative value or both. </td></tr>
<tr><td><a   (click)='scrollTo("#allowDecimal")' title="allowDecimal">allowDecimal</a></td><td>This will allow decimal in particular control property.The default value is `false`.</td></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>Numeric validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a (click)='scrollTo("#digitsInfo")' title="digitsInfo">digitsInfo</a></td><td> Once the blur event is fired, digitsInfo option will limit the decimal input upto a finite number after the decimal. </td></tr>
<tr><td><a (click)='scrollTo("#isFormat")' title="isFormat">isFormat</a></td><td> This will format a particular control property.The default value is `false`. </td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## acceptValue 
Type :  `NumericValueType` 

<div component="app-code" key="numeric-acceptValueExample-model"></div> 
<div component="app-example-runner" ref-component="app-numeric-acceptValue" title="numeric {{validatorType}} with acceptValue" key="acceptValue"></div>

## allowDecimal 
Type :  `boolean` 

This will allow decimal in particular control property.The default value is `false`.

<div component="app-code" key="numeric-allowDecimalExample-model"></div> 
<div component="app-example-runner" ref-component="app-numeric-allowDecimal" title="numeric {{validatorType}} with allowDecimal" key="allowDecimal"></div>

## conditionalExpression 
Type :  `Function`  |  `string` 

Numeric validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="numeric-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object. 
<div component="app-code" key="numeric-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-numeric-conditionalExpression" title="numeric {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## digitsInfo
Type: `string`

Once the blur event is fired, digitsInfo option will limit the decimal input upto a finite number after the decimal.

<div component="app-code" key="numeric-digitsInfoExample-model"></div> 
<div component="app-example-runner" ref-component="app-numeric-digitsInfo" title="numeric {{validatorType}} with digitsInfo" key="digitsInfo"></div>

## isFormat
Type: `boolean`

This will format a particular control property.The default value is `false`.

<div component="app-code" key="numeric-isFormatExample-model"></div> 
<div component="app-example-runner" ref-component="app-numeric-isFormat" title="numeric {{validatorType}} with isFormat" key="isFormat"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="numeric-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-numeric-message" title="numeric {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="numeric-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-numeric-messageKey" title="numeric {{validatorType}} with messageKey" key="messageKey"></div>

# Complete numeric Example

This Complete numeric example which includes all the NumericConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-numeric-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="numeric-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="numeric-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="numeric-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic numeric Example

This Dynamic numeric example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic numeric example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-numeric-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="numeric-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="numeric-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="numeric-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="numeric-dynamic-html"></div> 
# [/Html]
***
</data-scope>
