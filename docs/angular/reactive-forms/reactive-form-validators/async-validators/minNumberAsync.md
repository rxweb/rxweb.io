---
title: minNumberAsync 
description: minNumberAsync validation  {{validatorType}}  will allow user to enter the input greater than the minimum number value parameter.
author: rxcontributorone
category: async-validators
subcategory: Numeric
type:tabs
linktitle: minNumberAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>minNumberAsync validation  {{validatorType}}  will allow user to enter the input greater than the minimum number value parameter asynchronously.</p></div>

# When to use
Suppose you want to create a ResultInfo form, which contains fields like Maths, Science, Statistics and you want the user to enter number which should not be less than a minimum number asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
	<li>Allow number greater than 35 in Maths field.</li>
	<li>Apply minNumberAsync validation based on matched condition in the form, like if the input of Maths is 50, then only the minNumberAsync validation will be applied to Statistics field.</li>
	<li>Adding Custom Message on Science Field.</li>
	<data-scope scope="['decorator','validator']">
	<li>Apply minNumberAsync validation dynamically based on server rules.</li>
	</data-scope>
</ol>
Let’s see how minNumberAsync {{validatorType}} fulfil the need.

# Basic minNumberAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a ResultInfo class and define a property of Maths in the model to achieve the functional need of point 1.
<div component="app-code" key="minNumberAsync-add-model"></div> 
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
<div component="app-code" key="minNumberAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minNumberAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-minNumberAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="minNumberAsync-edit-component"></div>
The below code is `result-info-data.json` for getting data from the server 
<div component="app-code" key="minNumberAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="minNumberAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-minNumberAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="minNumberAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minNumberAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-minNumberAsync-add"></div>
</data-scope>

# NumberConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@minNumberAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.minNumberAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `minNumberAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td> Enter value which you want to restrict number in the property.</td></tr>
</table>


## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="minNumberAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-minNumberAsync-message" title="minNumberAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="minNumberAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-minNumberAsync-messageKey" title="minNumberAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value 
Type :  `number` 

enter value which you want to restrict number in the property

<div component="app-code" key="minNumberAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-minNumberAsync-value" title="minNumberAsync {{validatorType}} with value" key="value"></div>

# Complete minNumberAsync Example

This Complete minNumberAsync example which includes all the NumberConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-minNumberAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="minNumberAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="minNumberAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="minNumberAsync-complete-html"></div> 
# [/Html]
***


