---
title: iban  
description: iban validation  {{validatorType}}  will allow user to enter only the input in proper Hex Color format.
author: rxcontributortwo
category: form-validations
subcategory: String
type:tabs
linktitle: iban
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>iban validation  {{validatorType}} will validate an international bank account number based upon the country code.</p></div>

# When to use
Suppose you want to create a User form, which contains fields like GBBankAccountNumber, BHBankAccountNumber, CHBankAccountNumber, CRBankAccountNumber and you want the user to enter valid international bank account number. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>Allow UK account number in GBBankAccountNumber field.</li>
    <li>Apply iban validation based on matched condition in the form, like if the GBBankAccountNumber is `GB33BUKB20201555555555`, then only the BHBankAccountNumber field will be validated to Bahrain validator.</li>
    <li>Adding Custom Message on CHBankAccountNumber field.</li>
    <li>Shows the custom message on `CRBankAccountNumber` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
    <li>Apply iban validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how iban  {{validatorType}}  fulfil the need.

# Basic iban Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of Color in the model to achieve the functional need of point 1.
<div component="app-code" key="iban-add-model"></div> 
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
<div component="app-code" key="iban-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="iban-add-html"></div> 
<div component="app-example-runner" ref-component="app-iban-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="iban-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="iban-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="iban-edit-html"></div> 
<div component="app-example-runner" ref-component="app-iban-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="iban-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="iban-add-html"></div> 
<div component="app-example-runner" ref-component="app-iban-add"></div>
</data-scope>

# HexColorConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@iban()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.iban()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `iban` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  title="conditionalExpression">conditionalExpression</a></td><td>iban validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

iban validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="iban-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="iban-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-iban-conditionalExpression" title="iban {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="iban-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-iban-message" title="iban {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="iban-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-iban-messageKey" title="iban {{validatorType}} with messageKey" key="messageKey"></div>

# Complete iban Example

This Complete iban example which includes all the HexColorConfig properties will fulfil the requirement of scenarios 1, 2, 3,4 and 5

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-iban-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="iban-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="iban-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="iban-complete-html"></div>
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic iban Example

This Dynamic iban example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic iban example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-iban-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="iban-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="iban-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="iban-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="iban-dynamic-html"></div> 
# [/Html]
***
</data-scope>
