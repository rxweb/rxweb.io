---
title: maxLengthAsync 
description: maxLengthAsync validation  {{validatorType}}  will allow user to enter the input upto the maximum length value parameter.
author: rxcontributorone
category: async-validators
subcategory: String
type:tabs
linktitle: maxLengthAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>maxLengthAsync validation  {{validatorType}}  will allow user to enter the input upto the maximum length value parameter asynchronously.</p></div>

# When to use
Suppose you want to create a User form, which contains fields like FirstName, LastName, Username and you want the user to enter any string which should not exceed maximum length asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
	<li>Allow string less than 16 characters in FirstName.</li>
	<li>Apply maxLengthAsync validation based on matched condition in the form, like if the FirstName is `john`, then only the maxLengthAsync validation will be  applied to LastName field.</li> 
	<li>Adding Custom Message on Username Field.</li>
  <li>Shows the custom message on `Full Name` field by using `messageKey` property.</li>
  <data-scope scope="['decorator','validator']">
 	  <li>Apply maxLengthAsync validation dynamically based on server rules.</li>
  </data-scope>
</ol>
Let’s see how maxLengthAsync validator fulfil the need.

# Basic maxLengthAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of FirstName in the model to achieve the functional need of point 1.
<div component="app-code" key="maxLengthAsync-add-model"></div> 
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
<div component="app-code" key="maxLengthAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="maxLengthAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-maxLengthAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="maxLengthAsync-edit-component"></div>
The below code is `location-data.json` for getting data from the server 
<div component="app-code" key="maxLengthAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="maxLengthAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-maxLengthAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="maxLengthAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="maxLengthAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-maxLengthAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@maxLengthAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.maxLengthAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `maxLengthAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a   (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td> Enter value which you want to restrict string length in the property.</td></tr>
</table>

 
## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="maxLengthAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxLengthAsync-message" title="maxLengthAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="maxLengthAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxLengthAsync-messageKey" title="maxLengthAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value 
Type :  `number` 

enter value which you want to restrict string length in the property
 
<div component="app-code" key="maxLengthAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-maxLengthAsync-value" title="maxLengthAsync {{validatorType}} with value" key="value"></div>

# Complete maxLengthAsync Example

This Complete maxLengthAsync example which includes all the NumberConfig properties will fulfil the requirement of scenarios 1, 2, 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-maxLengthAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="maxLengthAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="maxLengthAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="maxLengthAsync-complete-html"></div> 
# [/Html]
***

