---
title: rangeAsync 
description: rangeAsync validation  {{validatorType}}  will check that the entered value is in the specified rangeAsync.
author: rxcontributorone
category: async-validators
subcategory: Numeric
type:tabs
linktitle: rangeAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>rangeAsync validation  {{validatorType}}  will check that the entered value is in the specified range asynchronously.</p></div>

# When to use
Suppose you want to create a employeeInfo form, which contains field of employeeAge, employeeExperience, salary and you want the user to enter value in a specified range asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
 <li>Adding value which you want to restrict number in the property. The minimum number is 18 and maximum number is 60.</li> 
 <li>Apply rangeAsync validation based on matched condition in the form, like if the age is greater than ‘25’ then the employeeExperience value should be between 2 to 20.</li>
 <li>Adding Custom Message on Salary Field.</li>
 <li>Shows the custom message on `Number of Projects` field by using `messageKey` property.</li>
 <data-scope scope="['decorator','validator']">
 <li>Apply rangeAsync validation dynamically based on server rules.</li>
 </data-scope>
</ol>
Let’s see how rangeAsync {{validatorType}} fulfil the need.

# Basic rangeAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create employeeInfo model class define a property of employeeAge in the model to achieve the functional need of point 1.
<div component="app-code" key="rangeAsync-add-model"></div> 
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
<div component="app-code" key="rangeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="rangeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="rangeAsync-edit-component"></div>
The below code is `employee-info-data.json` for getting data from the server 
<div component="app-code" key="rangeAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="rangeAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="rangeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="rangeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@rangeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.rangeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `rangeAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#maximumNumber")' title="maximumNumber">maximumNumber</a></td><td> Maximum number is for define a maximum number of rangeAsync.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#minimumNumber")' title="minimumnumber">minimumNumber</a></td><td> Minimum number is for define a minimum number of rangeAsync.</td></tr>
</table>

<data-scope scope="['decorator']">

# Allow Decimal Values
To allow decimal values in rangeAsync validation, you need to add `@numeric` decorator on the field name along with setting rangeAsync decorator and set the `allowDecimal` property of numeric decorator `true`.

<div component="app-code" key="rangeAsync-allowDecimalExample-model"></div> 

<div component="app-example-runner" ref-component="app-rangeAsync-allowDecimal" title="rangeAsync {{validatorType}} with allowDecimal" key="allowDecimal"></div>

</data-scope>

## maximumNumber 
Type :  `string` 
Maximum number is for define a maximum number of rangeAsync

<div component="app-code" key="rangeAsync-maximumNumberExample-model"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-maximumNumber" title="rangeAsync {{validatorType}} with maximumNumber" key="maximumNumber"></div>

## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="rangeAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-message" title="rangeAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="rangeAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-messageKey" title="rangeAsync {{validatorType}} with messageKey" key="messageKey"></div>

## minimumNumber 
Type :  `string` 
Minimum number is for define a minimum number of rangeAsync

<div component="app-code" key="rangeAsync-minimumNumberExample-model"></div> 
<div component="app-example-runner" ref-component="app-rangeAsync-minimumNumber" title="rangeAsync {{validatorType}} with minimumNumber" key="minimumNumber"></div>

# Complete rangeAsync Example

This Complete rangeAsync example which includes all the rangeAsyncConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-rangeAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="rangeAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="rangeAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="rangeAsync-complete-html"></div> 
# [/Html]
***


