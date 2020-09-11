---
title: choiceAsync 
description: choiceAsync validation {{validatorType}} will check that whether the value entered by user is matching the range defined in the properties.
author: rxcontributorone
category: async-validators
subcategory: Array
type: tabs
linktitle: choiceAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>choiceAsync validation {{validatorType}} will check that whether the value entered by user is matching the range defined in the properties asynchronously.</p></div>

# When to use
Suppose you want to create an employee form which contains fields like department, projectDomains, qualifications, skills and hobbies. You want user to select a specific range of value for a particular choiceAsync. Here the field is taken in the form of array and according to that the choiceAsync is applied on the property by applying minlength and maxLength asynchronously. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>The projectDomains field in which you want the user to enter minimum three domains.</li>
    <li>The qualifications field in which you want the user to enter maximum four qualifications.</li>
    <li>Adding Custom Message on Hobbies Field.</li>
    <li>Shows the custom message on `Certifications` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply choiceAsync validation dynamically based on server rules.</li>
    </data-scope>
</ol>
Let’s see how choiceAsync {{validatorType}} fulfil the need.

# Basic choiceAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a Employee Model and define a property of hobbies in the model to achieve the functional need of point 1.
<div component="app-code" key="choiceAsync-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope>

<data-scope scope="['decorator']">
<div component="app-code" key="choiceAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="choiceAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-choiceAsync-add"></div>
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="choiceAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="choiceAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-choiceAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 

<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@choiceAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.choiceAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `choiceAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#maxLength")' title="#maxLength">maxLength</a></td><td>MaxLength  is to define a maximum number of values to be selected for a particular field which is in form of array</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#minLength")' title="#minLength">minLength</a></td><td>MinLength is to define a minimum number of values to be selected for a particular field which is in form of array</td></tr>
</table>

## maxLength 
Type :  `number`

MaxLength  is to define a maximum number of values to be selected for a particular field which is in form of array.

<div component="app-code" key="choiceAsync-maxLengthExample-model"></div> 
<div component="app-example-runner" ref-component="app-choiceAsync-maxLength" title="choiceAsync {{validatorType}} with maxLength" key="maxLength"></div>

## message
Type :  `string`

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="choiceAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-choiceAsync-message" title="choiceAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="choiceAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-choiceAsync-messageKey" title="choiceAsync {{validatorType}} with messageKey" key="messageKey"></div>

## minLength 
Type :  `number`

MinLength is to define a minimum number of values to be selected for a particular field which is in form of array.

<div component="app-code" key="choiceAsync-minLengthExample-model"></div> 

<div component="app-example-runner" ref-component="app-choiceAsync-minLength" title="choiceAsync {{validatorType}} with minLength" key="minLength"></div>

# Complete choiceAsync Example

This Complete choiceAsync example which includes all the choiceAsyncConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-choiceAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="choiceAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="choiceAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="choiceAsync-complete-html"></div> 
# [/Html]
***

