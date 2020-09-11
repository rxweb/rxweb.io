---
title: oneOfAsync
description: oneOfAsync validation  {{validatorType}}  will check whether the user has entered any one of the given inputs or not.
author: rxcontributorone
category: async-validators
subcategory: Array
type:tabs
linktitle: oneOfAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>oneOfAsync validation  {{validatorType}}  will check whether the user has entered any one of the given inputs or not asynchronously.</p></div>

# When to use
Let's assume that you are creating a employee form in which you want employee to enter any one value of a particular value which contains fields like department, hobbies and skills.Here the field is taken in the form of array and according to that the oneOfAsync is applied on the property by applying matchvalues asynchronouslys. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>The skills field in which you want the user to enter skills based upon matchvalues.</li>
<li>Apply oneOfAsync validation based on matched condition in the form, like if the department  is ‘dotnet’ then the skills value should be based upon matchvalues.</li>
<li>The Custom Message on Hobbies field.</li>
<li>Shows the custom message on `languages` field by using `messageKey` property.</li> 
<data-scope scope="['decorator','validator']">
<li>Apply oneOfAsync validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how oneOfAsync {{validatorType}} fulfil the need.

# Basic oneOfAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a employee Model class and define property of hobbies in the model to achieve the functional need of point 1.
<div component="app-code" key="oneOfAsync-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operation.

<div component="app-code" key="oneOfAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="oneOfAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-oneOfAsync-add"></div>
***

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@oneOfAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.oneOfAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `oneOfAsync` validation. If needed then use the below options.
</data-scope>
                     
<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a title="matchValues">matchValues</a></td><td>matchValues is the array based on which the validation property is set </td></tr>
<tr><td><a title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## matchValues 
Type :  `any[]` 
matchValues is the array based on which the validation property is set. According to it one of the values in the array should be matched.

<div component="app-code" key="oneOfAsync-matchValuesExample-model"></div> 
<div component="app-example-runner" ref-component="app-oneOfAsync-matchValues" title="oneOfAsync {{validatorType}} with matchValues" key="matchValues"></div>

## message
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="oneOfAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-oneOfAsync-message" title="oneOfAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="oneOfAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-oneOfAsync-messageKey" title="oneOfAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete oneOfAsync Example

This Complete oneOfAsync example which includes all the ArrayConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-oneOfAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="oneOfAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="oneOfAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="oneOfAsync-complete-html"></div> 
# [/Html]
***

