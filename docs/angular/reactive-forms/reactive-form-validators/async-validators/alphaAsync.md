---
title: alphaAsync
description: alphaAsync validation {{validatorType}} will allow only alphabets to be entered. It will not allow any digit or special character.
author: rxcontributorone
category: async-validators
subcategory: String
type: simple
linktitle: alphaAsync
---

 <div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>alphaAsync validation {{validatorType}} will allow only alphabets to be entered. It will not allow any digit or special character asynchronously.</p></div>

# When to use

Suppose you want to create a AddressInfo form, which contains fields like CountryName, CountryCode, StateName, StateCode and you want the user to enter only alphabets and you want the validation rules to be performed asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
	<li>Allow only alphabets in CountryName without space.</li>
	<li>Allowing WhiteSpace in StateName.</li>
	<li>Adding Custom Message on StateCode Field.</li>
  <li>Shows the custom message on `City Code` field by using `messageKey` property.</li>
</ol>
Let's see how alphaAsync {{validatorType}} fulfil the need.
 
# Basic alphaAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a AddressInfo class and define a property of CountryName in the model to achieve the functional need of point 1.
<div component="app-code" key="alphaAsync-add-model"></div> 
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
<div component="app-code" key="alphaAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="alphaAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="alphaAsync-edit-component"></div> 

The below default data which is coming from the server in this example of edit form which is set in the `country-data.json` in json format like this:
<div component="app-code" key="alphaAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="alphaAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="alphaAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="alphaAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 

<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@alphaAsync(({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})}))` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.alphaAsync(({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})}))` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `alphaAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#locale")' title="locale">locale</a></td><td>This will allow multilingual characters based upon the specified validation alphabet locale.</td></tr>
<tr><td><a (click)='scrollTo("#allowwhitespace")' title="allowWhiteSpace">allowWhiteSpace</a></td><td>This will allow whitespace in particular control property. The default value is `false`.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## locale 
Type : `String`

his will allow multilingual characters based upon the specified validation alphabet locale. It can be set to Spanish, danish, french, german, russian.

<div component="app-code" key="alphaAsync-localeExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-locale" title="alphaAsync {{validatorType}} with locale" key="locale"></div>


## allowWhiteSpace 
Type :  `boolean` 

This will allow whitespace in particular FormControl value .The default value is `false`.

<div component="app-code" key="alphaAsync-allowWhiteSpaceExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-allowWhiteSpace" title="alphaAsync {{validatorType}} with allowWhiteSpace" key="allowWhiteSpace"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="alphaAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-message" title="alphaAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="alphaAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaAsync-messageKey" title="alphaAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete alphaAsync Example

This Complete alphaAsync example which includes all the AlphaConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-alphaAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="alphaAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="alphaAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="alphaAsync-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">


