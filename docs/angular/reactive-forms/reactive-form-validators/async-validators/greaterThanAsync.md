---
title: greaterThanAsync
description: Greater than validation {{validatorType}} will check that user's input is greater than related field input.
author: rxcontributorone
category: async-validators
subcategory: Relational
type: tabs
linktitle: greaterThanAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>greater than validation {{validatorType}} will check that user's input is greater than related field input asynchronously.</p></div>

#  When to use
Suppose you want to create a User form, which contains fields like Age, RetirementAge, MemberAge, VoterAge, OtherAge and you want the user to enter input which is greater than a related field input asynchronously. Here depending upon the requirement these scenarios may arise.   
<ol class='showHideElement'>
  <li>Apply greaterThanAsync validation on retiermentAge based on fieldName.</li>
  <li>Allow numbers which are greater than a perticular field like in VoterAge.</li>
  <li>Adding Custom Message on OtherAge Field.</li>
  <li>Shows the custom message on `Joining Age` field by using `messageKey` property.</li>
  <data-scope scope="['decorator','validator']">
    <li>Apply greaterThanAsync validation dynamically based on server rules.</li>
  </data-scope>
</ol>
Let’s see how greaterThanAsync {{validatorType}} fulfil the need.

# Basic greaterThanAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of Age and VoterAge with the requirement of VoterAge must be greater than Age field in the model to achieve the functional need of point 1.
<div component="app-code" key="greaterThanAsync-add-model"></div> 
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
<div component="app-code" key="greaterThanAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="greaterThanAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-greaterThanAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="greaterThanAsync-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="greaterThanAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="greaterThanAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-greaterThanAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="greaterThanAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="greaterThanAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-greaterThanAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@greaterThanAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.greaterThanAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `greaterThanAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#fieldname")' title="fieldname">fieldname</a></td><td>Greater than validation should be applied based on the `fieldName` for compare other field value</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>Greater than validation provides `value` property which is used To validate the formControl based upon configured static value.</td></tr>
</table>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="greaterThanAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanAsync-message" title="greaterThanAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="greaterThanAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanAsync-messageKey" title="greaterThanAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value
Type : `number`

Greater than validation provides `value` property which is used To validate the formControl based upon configured static value.

<div component="app-code" key="greaterThanAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-greaterThanAsync-value" title="greaterThanAsync {{validatorType}} with value" key="value"></div>

# Complete greaterThanAsync Example

This Complete greaterThanAsync example which includes all the RelationalOperatorConfig properties will fulfil the requirement of scenarios 1, 2, and 3

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-greaterThanAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="greaterThanAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="greaterThanAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="greaterThanAsync-complete-html"></div> 
# [/Html]
***


