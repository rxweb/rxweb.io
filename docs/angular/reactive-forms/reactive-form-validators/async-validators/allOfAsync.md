---
title: allOfAsync
description: allOfAsync validation {{validatorType}} will check whether the user has entered all of the values of given field or not.
author: rxcontributorone
category: async-validators
subcategory: Array
type: tabs
linktitle: allOfAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>allOfAsync validation {{validatorType}} will check whether the user has entered all of the values of given field or not asynchronously.</p></div>

# When to use

Suppose you want to create an employee form which contain fields like department, projectDomains, qualifications, skills and hobbies. You want the user to enter all values of a particular field. Here the field is taken in the form of array and according to that the choice is applied on the property by providing matchValues asynchronously. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>Apply allOfAsync validation on the `projectDomains` field in which you want the user to select all the project domain mentioned in the matchValues.</li>
    <li>Shows the custom validation message on `hobbies` field.</li>
    <li>Shows the custom message on `languages` field by using `messageKey` property.</li> 
    <data-scope scope="['decorator','validator']">
        <li>Apply allOfAsync validation dynamically based on server rules.</li>
    </data-scope>
</ol>
Let’s see how allOfAsync {{validatorType}} fulfil the need.

# Basic allOfAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create an Employee Model and define a property of projectDomains in the model to achieve the functional need of point 1.
<div component="app-code" key="allOfAsync-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operation.

<div component="app-code" key="allOfAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="allOfAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-allOfAsync-add"></div>

***

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@allOfAsync(({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})}))` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.allOfAsync(({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})}))` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `allOfAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#matchValues")' title="#matchValues">matchValues</a></td><td>matchValues is the array based on which the value is matched for validation. According to it, all the values in the array should be matched</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>


## matchValues 
Type :  `any[]` 

matchValues is the array based on which the value is matched for validation. According to it, all the values in the array should be matched.

<div component="app-code" key="allOfAsync-matchValuesExample-model"></div> 
<div component="app-example-runner" ref-component="app-allOfAsync-matchValues" title="allOfAsync {{validatorType}} with matchValues" key="matchValues"></div>

## message
Type :  `string`
To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="allOfAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-allOfAsync-message" title="allOfAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="allOfAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-allOfAsync-messageKey" title="allOfAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete allOfAsync Example

This Complete allOfAsync example which includes all the ArrayConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-allOfAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="allOfAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="allOfAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="allOfAsync-complete-html"></div> 
# [/Html]
***



