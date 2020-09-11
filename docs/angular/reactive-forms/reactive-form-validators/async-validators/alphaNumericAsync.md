---
title: alphaNumericAsync
description: Alpha Numeric Async validation {{validatorType}} will allow only alphabets and numbers to be entered. It will not allow any special character. 
author: rxcontributorone
category: async-validators
subcategory: String
type: tabs
linktitle: alphaNumericAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>alphaNumericAsync validation {{validatorType}} will allow only alphabets and numbers to be entered. It will not allow any special character asynchronously.</p></div>

# When to use
Suppose you want to create a Location form, which contains fields like AreaName, FlatAddress, PostalAddress, countryCode, CityCode and you want the user to enter only alphabets and numbers asynchronously. Here depending upon the requirement these scenarios may arise .

<ol class='showHideElement'>
    <li>Allow only alphabets and numbers in AreaName without space.</li>
    <li>Allowing WhiteSpace in FlatAddress.</li>
    <li>Adding Custom Message on PostalAddress Field.</li>
    <li>Shows the custom message on `Colony Name` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
        <li>Apply alphaNumericAsync validation dynamically based on server rules. </li>
    </data-scope>
</ol>

Let’s see how alphaNumericAsync {{validatorType}} fulfil the need.

# Basic alphaNumericAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a Location class and define a property of AreaName in the model to achieve the functional need of point 1.
<div component="app-code" key="alphaNumericAsync-add-model"></div> 
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
<div component="app-code" key="alphaNumericAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="alphaNumericAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="alphaNumericAsync-edit-component"></div> 

The below default data which is coming from the server in this example of edit form which is set in the `location-data.json` in json format like this:
<div component="app-code" key="alphaNumericAsync-edit-json"></div>  
Next, we need to write html code.
<div component="app-code" key="alphaNumericAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="alphaNumericAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="alphaNumericAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@alphaNumericAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.alphaNumericAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `alphaNumericAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#locale")' title="locale">locale</a></td><td>This will allow multilingual characters based upon the specified validation alphabet locale.</td></tr>
<tr><td><a  (click)='scrollTo("#allowwhitespace")' title="allowWhiteSpace">allowWhiteSpace</a></td><td>This will allow whitespace in particular control property. The default value is `false`.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## locale 
Type : `String`

This will allow multilingual characters based upon the specified validation alphabet locale. It can be set to Spanish, danish, french, german, russian.

<div component="app-code" key="alphaNumericAsync-localeExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-locale" title="alphaNumericAsync {{validatorType}} with locale" key="locale"></div>

## allowWhiteSpace 
Type :  `boolean` 

This will allow whitespace in particular FormControl value .The default value is `false`.

<div component="app-code" key="alphaNumericAsync-allowWhiteSpaceExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-allowWhiteSpace" title="alphaNumericAsync {{validatorType}} with allowWhiteSpace" key="allowWhiteSpace"></div>


## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="alphaNumericAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-message" title="alphaNumericAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="alphaNumericAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-alphaNumericAsync-messageKey" title="alphaNumericAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete alphaNumericAsync Example

This Complete alphaNumericAsync example which includes all the AlphaConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-alphaNumericAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="alphaNumericAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="alphaNumericAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="alphaNumericAsync-complete-html"></div> 
# [/Html]
***


