---
title: containsAsync  
description: containsAsync  validation {{validatorType}} will check whether a particular value is in the input. It will not allow user to enter input that does not containsAsync the predefined value.
author: rxcontributorone
category: async-validators
subcategory: String
type: tabs
linktitle: containsAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>containsAsync validation {{validatorType}} will check whether a particular value is in the input. It will not allow user to enter input that does not containsAsync the predefined value asynchronously.</p></div>

# When to use
Suppose you want to create a User form, which containsAsync fields like Email Address, BusinessEmailAddress RecoveryEmailAddress, OtherEmailAddress and you want the user to enter the input which containsAsync the predefined value asynchronously. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
	<li>Allow input which containsAsync the predefined value in EmailAddress.</li>
	<li>Adding Custom Message on OtherEmailAddress Field.</li>
     <li>Shows the custom message on `Organization Email Address` field by using `messageKey` property.</li>
	<data-scope scope="['decorator','validator']">
		<li>Apply containsAsync validation dynamically based on server rules.</li>
	</data-scope>
</ol>

Let’s see how containsAsync {{validatorType}} fulfil the need.

# Basic containsAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of EmailAddress in the model to achieve the functional need of point 1.
<div component="app-code" key="containsAsync-add-model"></div> 
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
<div component="app-code" key="containsAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="containsAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-containsAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="containsAsync-edit-component"></div>

The below default data which is coming from the server in this example of edit form which is set in the `user-data.json` in json format like this:
<div component="app-code" key="containsAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="containsAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-containsAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="containsAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="containsAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-containsAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 

<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@containsAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.containsAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `containsAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a   (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>value property of containsAsyncConfig is used to assign a value which must be present in the field input.</td></tr>
</table>


## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="containsAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-containsAsync-message" title="containsAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="containsAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-containsAsync-messageKey" title="containsAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value 
Type :  `string` 

value property of containsAsyncConfig is used to assign a value which must be present in the field input.

<div component="app-code" key="containsAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-containsAsync-value" title="containsAsync {{validatorType}} with value" key="value"></div>

# Complete containsAsync Example

This Complete containsAsync example which includes all the containsAsyncConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-containsAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="containsAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="containsAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="containsAsync-complete-html"></div>
# [/Html]
***


