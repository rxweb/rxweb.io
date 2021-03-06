---
title: even 
description: Even validation {{validatorType}} will check whether the value entered by user is an even number or not.
author: rxcontributorone
category: form-validations
subcategory: Numeric
type: tabs
linktitle: even
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>even validation {{validatorType}} will check whether the value entered by user is an even number or not.</p></div>

# When to use
Suppose you want to create a user form, which contains fields like Number, Type, EvenNumber, Multiples of Even Number and you want the user to enter only even numbers. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>Allow only even numbers in EvenNumber’s field .</li>
    <li>Apply Even validation based on matched condition in the form, like if the type  is ‘Even’ then the number value should be even number (Conditional Expression with Function).</li>
    <li>Apply Even validation based on matched condition in the form, like if the type  is ‘Even’ then the EvenNumber field input value should be even number (Conditional Expression with String).</li>
    <li>Adding Custom Message on EvenNumber Field.</li>
    <li>Shows the custom message on `Other Even Number` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
      <li>Apply even validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how Even {{validatorType}} fulfil the need.

# Basic Even Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create  User class and define a property of even in the model to achieve the functional need of point 1.
<div component="app-code" key="even-add-model"></div> 
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
<div component="app-code" key="even-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="even-add-html"></div> 
<div component="app-example-runner" ref-component="app-even-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="even-edit-component"></div> 

The below default data which is coming from the server in this example of edit form which is set in the `user-data.json` in json format like this:
<div component="app-code" key="even-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="even-edit-html"></div> 
<div component="app-example-runner" ref-component="app-even-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="even-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="even-add-html"></div> 
<div component="app-example-runner" ref-component="app-even-add"></div>
</data-scope>

# BaseConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@even()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.even()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `even` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>Even validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

Even validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="even-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="even-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-even-conditionalExpression" title="even {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="even-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-even-message" title="even {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="even-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-even-messageKey" title="even {{validatorType}} with messageKey" key="messageKey"></div>

# Complete even Example

This Complete even example which includes all the BaseConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-even-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="even-complete-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="even-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="even-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic even Example

This Dynamic Even example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic even example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-even-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="even-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="even-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="even-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="even-dynamic-html"></div> 
# [/Html]
***
</data-scope>
