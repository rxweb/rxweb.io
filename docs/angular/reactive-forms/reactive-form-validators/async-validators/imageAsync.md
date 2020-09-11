---
title: imageAsync
description: imageAsync validation  {{validatorType}}  allows user to validate imageAsync like height,width etc.
author: rxcontributorone
category: async-validators
subcategory: File
type:tabs
linktitle: imageAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>imageAsync validation  {{validatorType}}  allows user to validate imageAsync like height,width etc asynchronously.</p></div>

# When to use
Suppose you want to create a User form, which contains fields like ProfilePhoto, Signature, DrivingLicense,IdentityCard,DrvingLicense,VoterId,AadharCard, and you want the user to enter only the hex color format asynchronously. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>Allow validation using maxwidth on field of ProfilePhoto.</li>
    <li>Apply imageAsync validation based on maxheight in Signature</li>
    <li>Adding Custom Message on VoterId field.</li>
    <li>Adding custom message on residenceProof field.</li>
    <li>Shows the custom message on `passport` field by using `messageKey` property.</li>
    <data-scope scope="['decorator','validator']">
    <li>Apply imageAsync validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how imageAsync  {{validatorType}}  fulfil the need.

# Basic imageAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of ProfilePhoto in the model to achieve the functional need of point 1.
<div component="app-code" key="imageAsync-add-model"></div> 
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
<div component="app-code" key="imageAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="imageAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="imageAsync-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="imageAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="imageAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="imageAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="imageAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@imageAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.imageAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `imageAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a title="maxHeight">maxHeight</a></td><td>To set the maximum Height of the imageAsync</td></tr>
<tr><td><a title="maxWidth">maxWidth</a></td><td>To set the maximum Width of the imageAsync</td></tr>
<tr><td><a title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a title="minHeight">minHeight</a></td><td>To set the minimum Height of the imageAsync</td></tr>
<tr><td><a title="minWidth">minWidth</a></td><td>To set the minimum Width of the imageAsync</td></tr>
</table>

## maxHeight
Type :  `number` 

To set the maximum Height of the imageAsync.

<div component="app-code" key="imageAsync-maxHeightExample-model"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-maxHeight" title="imageAsync {{validatorType}} with maxHeight" key="maxHeight"></div>

## maxWidth
Type :  `number` 

To set the maximum Width of the imageAsync.

<div component="app-code" key="imageAsync-maxWidthExample-model"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-maxWidth" title="imageAsync {{validatorType}} with maxWidth" key="maxWidth"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="imageAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-message" title="imageAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="imageAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-messageKey" title="imageAsync {{validatorType}} with messageKey" key="messageKey"></div>

## minHeight
Type :  `number` 

To set the minimum Height of the imageAsync.

<div component="app-code" key="imageAsync-minHeightExample-model"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-minHeight" title="imageAsync {{validatorType}} with minHeight" key="minHeight"></div>

## minWidth
Type :  `number` 

To set the minimum Width of the imageAsync.

<div component="app-code" key="imageAsync-minWidthExample-model"></div> 
<div component="app-example-runner" ref-component="app-imageAsync-minWidth" title="imageAsync {{validatorType}} with minWidth" key="minWidth"></div>

# Complete imageAsync Example

This Complete imageAsync example which includes all the imageConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4, 5, 6 and 7

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-imageAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="imageAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="imageAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="imageAsync-complete-html"></div>
# [/Html]
***



