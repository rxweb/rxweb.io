---
title: latitude
description: latitude validation  {{validatorType}}  allows user to enter value which is valid latitude.
author: rxcontributortwo
category: form-validations
subcategory: Numeric
type:tabs
linktitle: latitude
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>latitude validation  {{validatorType}}  allows user to enter value which is valid latitude.</p></div>

# When to use
Suppose you want to create a country form, which contains fields like continent, firstCountryLatitude, secondCountryLatitude and thirdCountryLatitude and you want the user to enter input which is a proper latitude format. Here depending upon the requirement, these scenarios may arise..

<ol class='showHideElement'>
    <li>Apply validation on firstCountryLatitude field and add Custom Message on it.</li>
    <li>Apply latitude validation on secondCountryLatitude field based on matched condition in the form, like if the continent is 'Asia', then the secondCountryLatitude must be a latitude format (Used as a function).</li>
    <li>Apply latitude validation on thirdCountryLatitude field  based on matched condition in the form, like if the continent is 'Asia', then the thirdCountryLatitude must be a latitude format (Used as a string datatype).</li>
    <li>Shows the custom message on `Fourth Country Latitude` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
    <li>Apply latitude validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let's see how latitude  {{validatorType}}  fulfil the need.

# Basic latitude Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a model and define a property of firstCountryLatitude in the model to achieve the functional need of point 1.
<div component="app-code" key="latitude-add-model"></div> 
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
<div component="app-code" key="latitude-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="latitude-add-html"></div> 
<div component="app-example-runner" ref-component="app-latitude-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="latitude-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="latitude-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="latitude-edit-html"></div> 
<div component="app-example-runner" ref-component="app-latitude-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="latitude-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="latitude-add-html"></div> 
<div component="app-example-runner" ref-component="app-latitude-add"></div>
</data-scope>

# BaseConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@latitude()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.latitude()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `latitude` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  title="conditionalExpression">conditionalExpression</a></td><td>Latitude validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

latitude validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="latitude-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="latitude-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-latitude-conditionalExpression" title="latitude {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="latitude-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-latitude-message" title="latitude {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="latitude-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-latitude-messageKey" title="latitude {{validatorType}} with messageKey" key="messageKey"></div>

# Complete latitude Example

This Complete Latitude example which includes all the BaseConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-latitude-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="latitude-complete-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="latitude-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="latitude-complete-html"></div>
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic latitude Example

This Dynamic latitude example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic latitude example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-latitude-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="latitude-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="latitude-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="latitude-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="latitude-dynamic-html"></div> 
# [/Html]
***
</data-scope>
