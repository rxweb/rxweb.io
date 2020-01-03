---
title: requiredTrue 
description: requiredTrue true validation  {{validatorType}}  will check that the user has entered the value in the property or not.
author: rxcontributortwo
category: form-validations
type:tabs
linktitle: requiredTrue
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>requiredTrue validation  {{validatorType}}  will check that the checkbox formControl value should be true.</p></div>

# When to use
Suppose you want to create a UserInfo form, which contains fields like Agree to terms and conditions, Is Checked, check Me out, IsActive and IsBlocked and you want the user to check all the values true. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>Make the FirstName a requiredTrue field without any condition.</li>
<li>Apply requiredTrue validation based on matched condition in the form, like if the Agree to terms and conditions is true, then only the requiredTrue validation will be applied to Is Checked field.</li>
<li>Adding Custom Message on IsActive Field.</li>
<li>Shows the custom message on `IsBlocked` field by using `messageKey` property.</li>
<data-scope scope="['decorator','validator']">
<li>Apply requiredTrue validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how requiredTrue {{validatorType}} fulfil the need.

# Basic requiredTrue Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of FirstName in the model to achieve the functional need of point 1.
<div component="app-code" key="requiredTrue-add-model"></div> 
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
<div component="app-code" key="requiredTrue-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="requiredTrue-add-html"></div> 
<div component="app-example-runner" ref-component="app-requiredTrue-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="requiredTrue-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="requiredTrue-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="requiredTrue-edit-html"></div> 
<div component="app-example-runner" ref-component="app-requiredTrue-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="requiredTrue-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="requiredTrue-add-html"></div> 
<div component="app-example-runner" ref-component="app-requiredTrue-add"></div>
</data-scope>

# requiredTrueConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@requiredTrue()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.requiredTrue()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `requiredTrue` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>requiredTrue validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

requiredTrue validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="requiredTrue-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="requiredTrue-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-requiredTrue-conditionalExpression" title="requiredTrue {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="requiredTrue-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-requiredTrue-message" title="requiredTrue {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="requiredTrue-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-requiredTrue-messageKey" title="requiredTrue {{validatorType}} with messageKey" key="messageKey"></div>

# Complete requiredTrue Example

This Complete requiredTrue example which includes all the requiredTrueConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-requiredTrue-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="requiredTrue-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="requiredTrue-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="requiredTrue-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic requiredTrue Example

This Dynamic requiredTrue example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic requiredTrue example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-requiredTrue-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="requiredTrue-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="requiredTrue-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="requiredTrue-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="requiredTrue-dynamic-html"></div> 
# [/Html]
***
</data-scope>
