---
title: fileSizeAsync
description: fileSizeAsync validation {{validatorType}} allows user to enter the input which is in the proper fileSizeAsync size format.
author: rxcontributorone
category: async-validators
type: tabs
linktitle: fileSizeAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>fileSizeAsync validation {{validatorType}} allows user to enter the input which is in the proper fileSizeAsync size format asynchronously.</p></div>

# When to use
Suppose you want to create a UserInfo form, which contains fields like fileType , profilePhoto, videoFile , audioFile and imageFile, documentFile ,contactFile, profilePicture and you want the user to enter input which is a proper size format asynchronously. Here depending upon the requirement, these scenarios may arise..
<ol class='showHideElement'>
   <li>Allow profilePhoto which have proper size format.</li>
   <li>Adding custom message on ContactFile field</li>
   <li>Shows the custom message on `Excel File` field by using `messageKey` property.</li>
   <data-scope scope="['decorator','validator']">
   <li>Apply fileSizeAsync validation dynamically based on server rules.</li>
   </data-scope>
</ol>

Let's see how fileSizeAsync {{validatorType}} fulfil the need.
 
# Basic fileSizeAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a UserInfo model and define a property of videoFile in the model to achieve the functional need of point 1.
<div component="app-code" key="fileSizeAsync-add-model"></div> 
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
<div component="app-code" key="fileSizeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="fileSizeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-fileSizeAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="fileSizeAsync-edit-component"></div>

The below default data which is coming from the server in this example of edit form which is set in the `storage-capacity-data.json` in json format like this:
<div component="app-code" key="fileSizeAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="fileSizeAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-fileSizeAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="fileSizeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="fileSizeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-fileSizeAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@fileSizeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.fileSizeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `fileSizeAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#maxSize")' title="maxSize">maxSize</a></td><td>maxSize property of the SizeConfig is used to set the maximum fileSizeAsync size allowed to be entered.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>


## maxSize
Type :  `number` 

maxSize property of the SizeConfig is used to set the maximum fileSizeAsync size allowed to be entered.

<div component="app-code" key="fileSizeAsync-maxSizeExample-model"></div> 
<div component="app-example-runner" ref-component="app-fileSizeAsync-maxSize" title="fileSizeAsync {{validatorType}} with maxSize" key="maxSize"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="fileSizeAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-fileSizeAsync-message" title="fileSizeAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="fileSizeAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-fileSizeAsync-messageKey" title="fileSizeAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete fileSizeAsync Example

This Complete fileSizeAsync example which includes all the SizeConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-fileSizeAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="fileSizeAsync-complete-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="fileSizeAsync-complete-component"></div>
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="fileSizeAsync-complete-html"></div> 
# [/Html]
***


