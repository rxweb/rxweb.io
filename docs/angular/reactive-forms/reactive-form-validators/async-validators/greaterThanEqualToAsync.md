---
title: greaterThanEqualToAsync 
description: Greater than equal to validation  {{validatorType}}  will check that input property is greater than or equal to the related field input.
author: rxcontributorone
category: async-validators
subcategory: Relational
type:tabs
linktitle: greaterThanEqualToAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>greater than equal to async validation  {{validatorType}}  will check that input property is greater than or equal to the related field input asynchronously.</p></div>

# When to use
Suppose you want to create a user form and you have fields like Age, VoterAge, OtherAge and you want user to enter Age such that VoterAge,OtherAge should be greater than or equal to Age asynchronously Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
<li>Specify Age as fieldName such that greaterThanEqualToAsync validation should be applied to the fieldname for comparing other fields.</li>
<li>Apply greaterThanEqualToAsync validation based on matched condition in the form, like if the Age is ‘18’ then the </li>VoterAge,OtherAge value should be Greater than or equal to 18.
<li>Adding Custom Message on OtherAge Field.</li>
<li>Shows the custom message on `Joining Age` field by using `messageKey` property.</li>
<data-scope scope="['decorator','validator']">
<li>Apply greaterThanEqualToAsync validation dynamically based on server rules.</li>
</data-scope>

Let’s see how greaterThanEqualToAsync  {{validatorType}}  fulfil the need.

# Basic greaterThanEqualToAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create User model class define a property of Age and VoterAge  in the model to achieve the functional need of point 1. 
<div component="app-code" key="greaterThanEqualToAsync-add-model"></div> 
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
<div component="app-code" key="greaterThanEqualToAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="greaterThanEqualToAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="greaterThanEqualToAsync-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="greaterThanEqualToAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="greaterThanEqualToAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="greaterThanEqualToAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="greaterThanEqualToAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 

<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@greaterThanEqualToAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `greaterThanEqualToAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a title="fieldName">fieldName</a></td><td>Greater than Equal to validation should be applied based on the `fieldName` for compare other field value</td></tr>
<tr><td><a  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>Greater than Equal to validation provides `value` property which is used To validate the formControl based upon configured static value.</td></tr>
</table>

## fieldName 
Type :  `string` 
Greater than Equal to validation should be applied based on the `fieldName` for compare other field value 

<div component="app-code" key="greaterThanEqualToAsync-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-fieldName" title="greaterThanEqualToAsync {{validatorType}} with fieldName" key="fieldName"></div>

## message 
Type :  `string`
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="greaterThanEqualToAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-message" title="greaterThanEqualToAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="greaterThanEqualToAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-messageKey" title="greaterThanEqualToAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value
Type : `number`

Greater than Equal to validation provides `value` property which is used To validate the formControl based upon configured static value.

<div component="app-code" key="greaterThanEqualToAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-value" title="greaterThanEqualToAsync {{validatorType}} with value" key="value"></div>

# Complete greaterThanEqualToAsync Example

This Complete greaterThanEqualToAsync example which includes all the RelationalOperatorConfig properties will fulfil the requirement of scenarios 1, 2, and 3

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-greaterThanEqualToAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="greaterThanEqualToAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="greaterThanEqualToAsync-complete-component"></div>
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="greaterThanEqualToAsync-complete-html"></div> 
# [/Html]
***

