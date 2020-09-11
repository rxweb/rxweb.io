---
title: lessThanEqualToAsync
description: Less than equal to validation {{validatorType}} will allow the user to enter only that value which is less than or equal to the value in the pre defined field.
author: rxcontributorone
category: async-validators
subcategory: Relational
type:tabs
linktitle: lessThanEqualToAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>less than equal to validation  {{validatorType}}  will allow the user to enter only that value which is less than oe equal to the value in the pre defined field asynchronously.</p></div>

# When to use
Suppose you want to create a user form and you have fields like TotalMarks, ObtainedMarks, OtherMarks and you want user to enter ObtainedMarks, OtherMarks such that they should be less than or equal to TotalMarks asynchronously Here depending upon the requirement these scenarios may arise
<ol class='showHideElement'>
   <li>Specify TotalMarks as fieldName such that lessThanEqualToAsync validation should be applied to the fieldname for comparing other fields.</li>
   <li>Apply lessThanEqualToAsync validation based on matched condition in the form, like if the TotalMarks is ‘100’ then the ObtainedMarks,OtherMarks value  should be less than or equal to 100.</li>
   <li>Adding Custom Message on OtherMarks Field.</li>
    <li>Shows the custom message on `Discipline Marks` field by using `messageKey` property.</li>
   <data-scope scope="['decorator','validator']">
   <li>Apply lessThanEqualToAsync validation dynamically based on server rules.</li>
   </data-scope>
</ol>
Let’s see how lessThanEqualToAsync {{validatorType}} fulfil the need.

# Basic lessThanEqualToAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create User model class define a property of Marks and TotalMarks model to achieve the functional need of point 1. 
<div component="app-code" key="lessThanEqualToAsync-add-model"></div> 
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
<div component="app-code" key="lessThanEqualToAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="lessThanEqualToAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="lessThanEqualToAsync-edit-component"></div>
The below code is `user-data.json` for getting data from the server 
<div component="app-code" key="lessThanEqualToAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="lessThanEqualToAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="lessThanEqualToAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="lessThanEqualToAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@lessThanEqualToAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.lessThanEqualToAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `lessThanEqualToAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#fieldName")' title="fieldName">fieldName</a></td><td>Current property is matched with the particular property. so we need to pass particular property name.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>Less than Equal To validation provides `value` property which is used To validate the formControl based upon configured static value.</td></tr>
</table>

## fieldName 
Type :  `string` 
Less than Equal to validation should be applied based on the `fieldName` for compare other field value. 

<div component="app-code" key="lessThanEqualToAsync-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-fieldName" title="lessThanEqualToAsync {{validatorType}} with fieldName" key="fieldName"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="lessThanEqualToAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-message" title="lessThanEqualToAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="lessThanEqualToAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-messageKey" title="lessThanEqualToAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value
Type : `number`

Less than Equal To validation provides `value` property which is used To validate the formControl based upon configured static value.

<div component="app-code" key="lessThanEqualToAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-value" title="lessThanEqualToAsync {{validatorType}} with value" key="value"></div>

# Complete lessThanEqualToAsync Example

This Complete lessThanEqualToAsync example which includes all the RelationalOperatorConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-lessThanEqualToAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="lessThanEqualToAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="lessThanEqualToAsync-complete-component"></div>
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="lessThanEqualToAsync-complete-html"></div> 
# [/Html]
***


