---
title: different 
description: Different validation {{validatorType}} will check two inputs whether they are different or not. It is just opposite of different decorator.
author: rxcontributortwo
category: form-validations
subcategory: Relational
type: tabs
linktitle: different
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>different validation {{validatorType}} will check two inputs whether they are different or not. It is just opposite of compare decorator.</p></div>

# When to use
Suppose you want to create a user form in which you want to different 2 input values which are entered by the user. The user form contains fields like firstname and lastname, password Here depending upon the requirement these scenarios may arise.

<ol>
    <li>Apply different validator on lastname field to different its input with firstname field.</li>
    <li>Displaying Custom Message on Password field and different its input with firstname field input.</li>
    <li>Shows the custom message on `Recovery Email Address` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply different validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how different {{validatorType}} fulfil the need.

# Basic Different Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User Model class and define property of First Name and Last Name in the model to achieve the functional need of point 1.
<div component="app-code" key="different-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operations. 

<div component="app-code" key="different-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="different-add-html"></div> 
<div component="app-example-runner" ref-component="app-different-add"></div>
***

# DifferentConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@different()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.different()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `different` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#fieldName")' title="fieldName">fieldName</a></td><td>Current property is matched with the particular property. So we need to pass particular property name.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl.</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## fieldName 
Type :  `string` 
Current property is matched with the particular property. so we need to pass particular property name.

<div component="app-code" key="different-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-different-fieldName" title="different {{validatorType}} with fieldName" key="fieldName"></div>

## message
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="different-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-different-message" title="different {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="different-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-different-messageKey" title="different {{validatorType}} with messageKey" key="messageKey"></div>

# Complete Different Example

This Complete Different example which includes all the DifferentConfig properties will fulfil the requirement of scenarios 1 and 2 

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-different-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="different-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="different-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="different-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic Different Example

This Dynamic Different example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic different example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-different-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="different-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="different-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="different-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="different-dynamic-html"></div> 
# [/Html]
***
</data-scope>
