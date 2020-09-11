---
title: noneOfAsync
description: noneOfAsync validation  {{validatorType}}  will check whether the none of the values is selected from the given inputs.
author: rxcontributorone
category: async-validators
subcategory: Array
type:tabs
linktitle: noneOfAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>noneOfAsync validation  {{validatorType}}  will check whether the none of the values is selected from the given inputs asynchronously.</p></div>

# When to use
Let's assume that you are creating a employee form in which you want employee to enter none of the value of a particular value which contains fields like department, hobbies and skills.Here the field is taken in the form of array and according to that the choice is applied on the property by applying matchvalues asynchronously.  Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
	<li>The skills field in which you want the user to enter skills based upon matchvalues.</li>
    <li>Apply noneOfAsync validation based on matched condition in the form, like if the department  is ‘dotnet’ then the skills value should be based upon matchvalues.</li>
    <li>The Custom Message on Hobbies field.</li>
    <li>Shows the custom message on `languages` field by using `messageKey` property.</li> 
    <data-scope scope="['decorator','validator']">
 	<li>Apply noneOfAsync validation dynamically based on server rules.</li>
     </data-scope>
</ol>
Let’s see how noneOfAsync {{validatorType}} fulfil the need.

# Basic noneOfAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a employee Model class and define property of hobbies in the model to achieve the functional need of point 1.
<div component="app-code" key="noneOfAsync-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operation.

<div component="app-code" key="noneOfAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="noneOfAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-noneOfAsync-add"></div>
***

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@noneOfAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.noneOfAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `noneOfAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#matchValues")' title="matchValues">matchValues</a></td><td>MatchValues is the array based on which the value is matched for validation. According to it none of the values in the array should be matched.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>


## matchValues 
Type :  `any[]` 

matchValues is the array based on which the value is matched for validation. According to it none of the values in the array should be matched

<div component="app-code" key="oneOf-matchValuesExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOfAsync-matchValues" title="noneOfAsync {{validatorType}} with matchValues" key="matchValues"></div>

## message
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="noneOfAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOfAsync-message" title="noneOfAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="noneOfAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOfAsync-messageKey" title="noneOfAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Non Array Value

The noneOfAsync validator can also validate the textbox value, which is a non array value. If any user enter the duplicate values, then the formControl should mark it as invalid.

<div component="app-code" key="noneOfAsync-nonArrayValueExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOfAsync-nonArrayValue" title="noneOfAsync {{validatorType}} with nonArrayValue" key="nonArrayValue"></div>

# Complete noneOfAsync Example

This Complete noneOfAsync example which includes all the ArrayConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-noneOfAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="noneOfAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="noneOfAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="noneOfAsync-complete-html"></div> 
# [/Html]
***


