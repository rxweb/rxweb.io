---
title: minLengthAsync 
description: minLengthAsync validation  {{validatorType}}  will allow user to enter the input length matching the minimum length value parameter.
author: rxcontributorone
category: async-validators
subcategory: String
type:tabs
linktitle: minLengthAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>minLengthAsync validation  {{validatorType}}  will allow user to enter the input length matching the minimum length value parameter asynchronously.</p></div>

# When to use
Suppose you want to create a Contact form, which contains fields like countryName, MobileNo, LandlineNo and you want the user to enter valid  Number which should be of the minimum specified length asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>Apply minLengthAsync validation based on matched condition in the form, like if the CountryName is ‘India’ then the countryCode value  should be of the minimum specified length.</li>
<li>Adding Custom Message on LandlineNo Field.</li>
<li>Adding value which you want to restrict number in the property. The Minimum length is '10'. </li>
  <li>Shows the custom message on `State Name` field by using `messageKey` property.</li>
<data-scope scope="['decorator','validator']">
<li>Apply minLengthAsync validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how minLengthAsync {{validatorType}} fulfil the need.

# Basic minLengthAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create Contact model class define a property of CountryName in the model to achieve the functional need of point 1.
<div component="app-code" key="minLengthAsync-add-model"></div> 
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
<div component="app-code" key="minLengthAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minLengthAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-minLengthAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="minLengthAsync-edit-component"></div> 
The below code is `contact-data.json` for getting data from the server
<div component="app-code" key="minLengthAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="minLengthAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-minLengthAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="minLengthAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="minLengthAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-minLengthAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 

<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@minLengthAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.minLengthAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `minLengthAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")' title="value">value</a></td><td>Enter value which you want to restrict string length in the property</td></tr>
</table>


## message 
Type :  `string` 
To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="minLengthAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-minLengthAsync-message" title="minLengthAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="minLengthAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-minLengthAsync-messageKey" title="minLengthAsync {{validatorType}} with messageKey" key="messageKey"></div>

## value 
Type :  `number` 
enter value which you want to restrict string length in the property.

<div component="app-code" key="minLengthAsync-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-minLengthAsync-value" title="minLengthAsync {{validatorType}} with value" key="value"></div>

# Complete minLengthAsync Example

This Complete minLengthAsync example which includes all the NumberConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-minLengthAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="minLengthAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="minLengthAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="minLengthAsync-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic minLengthAsync Example

This Dynamic minLengthAsync example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic minLengthAsync example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-minLengthAsync-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="minLengthAsync-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="minLengthAsync-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="minLengthAsync-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="minLengthAsync-dynamic-html"></div> 
# [/Html]
***
</data-scope>
