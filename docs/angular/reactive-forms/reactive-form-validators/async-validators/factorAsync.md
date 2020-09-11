---
title: factorAsync 
description: factorAsync validation {{validatorType}} will allow user to enter valid factor of a number which is called dividend.
author: rxcontributorone
category: async-validators
subcategory: Numeric
type: tabs
linktitle: factorAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>factorAsync validation {{validatorType}} will allow user to enter valid factorAsync of a number which is called dividend asynchronously.</p></div>

# When to use
Suppose you want to create a user form in which you want user to enter factorAsync of a particular value which contains fields like firstNumber, secondNumber, ThirdNumber, fourthNumber, fifthNumber and sixthNumber asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
   <li>Apply factorAsync validation on fifthNumber field based on 'firstName', so that input enterred in fifthNumber field must be a factorAsync of the input enterred in firstName.</li>
   <li>Apply factorAsync validation on `fourthNumber` field based of dividend. dividend is the value for which factors are calculated.</li>
   <li>Adding the Custom Validation Message on `sixthNumber` field.</li>
   <li>Shows the custom message on `Seventh Number` field by using `messageKey` property.</li>
   <data-scope scope="['decorator','validator']">
      <li>Apply factorAsync validation dynamically based on server rules.</li>
   </data-scope>
</ol>
Let’s see how factorAsync {{validatorType}} fulfil the need.

# Basic factorAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User Model class and define property of firstNumber in the model to achieve the basic functional need.
<div component="app-code" key="factorAsync-add-model"></div> 
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
<div component="app-code" key="factorAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="factorAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="factorAsync-edit-component"></div> 

The below default data which is coming from the server in this example of edit form which is set in the `user-data.json` in json format like this:
<div component="app-code" key="data-json"></div> 
Next, we need to write html code.
<div component="app-code" key="factorAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="factorAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="factorAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@factorAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.factorAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `factorAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a href="#dividend" (click)='scrollTo("#dividend")' title="dividend">dividend</a></td><td>dividend property of FactorConfig is used to assign a value whose factors to be enterred as input.</td></tr>
<tr><td><a href="#fieldName" (click)='scrollTo("#fieldName")' title="fieldName">fieldName</a></td><td>fieldName property is the name of the name of field for which the factors needed to be entered.</td></tr>
<tr><td><a href="#message" (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a href="#messageKey" (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## dividend 
Type :  `string` 

dividend property of FactorConfig is used to assign a value whose factors to be enterred as input.

<div component="app-code" key="factorAsync-dividendExample-model"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-dividend" title="factorAsync {{validatorType}} with dividend" key="dividend"></div>

## fieldName 
Type :  `string` 

fieldName property is the name of the name of field for which the factors needed to be entered.

<div component="app-code" key="factorAsync-fieldNameExample-model"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-fieldName" title="factorAsync {{validatorType}} with fieldName" key="fieldName"></div>

## message
Type :  `string` 
To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="factorAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-message" title="factorAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="factorAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-factorAsync-messageKey" title="factorAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete factorAsync Example

This Complete factorAsync example which includes all the FactorConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-factorAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="factorAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="factorAsync-complete-component"></div>
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="factorAsync-complete-html"></div> 
# [/Html]
***


