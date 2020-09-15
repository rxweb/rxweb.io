---
title: extensionAsync
description: extensionAsync validation {{validatorType}} allows user to validate the input which is in the proper extensionAsync format.
author: rxcontributorone
category: async-validators
subcategory: String
type: tabs
linktitle: extensionAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>extensionAsync validation {{validatorType}} allows user to validate the input which is in the proper extensionAsync format asynchronously.</p></div>

# When to use
Suppose you want to create a UserInfo form, which contains fields like fileType, profilePicture ,imageFile ,documentFile ,contactFile and you want the user to upload file which have a proper extensionAsync format asynchronously. Here depending upon the requirement, these scenarios may arise..

<ol class='showHideElement'>
   <li>Allow user to select profilePicture which have proper extensionAsync format.</li>
   <li>Adding custom message on `ContactFile` field.</li>
   <li>Shows the custom message on `Excel File` field by using `messageKey` property.</li>
   <data-scope scope="['decorator','validator']">
      <li>Apply extensionAsync validation dynamically based on server rules.</li>
   </data-scope>
</ol>
Let's see how extensionAsync {{validatorType}} fulfil the need.
 
# Basic extensionAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a UserInfo model and define a property of profilePicture in the model to achieve the functional need of point 1.
<div component="app-code" key="extensionAsync-add-model"></div> 
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
<div component="app-code" key="extensionAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="extensionAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="extensionAsync-edit-component"></div>

The below default data which is coming from the server in this example of edit form which is set in the `user-data.json` in json format like this:
<div component="app-code" key="extensionAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="extensionAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="extensionAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="extensionAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@extensionAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.extensionAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `extensionAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#extensions")'  title="extensions">extensions</a></td><td>extensions property of ExtensionConfig is an array of multiple extensions which are allowed to be selected by the user.</td></tr>
<tr><td><a  (click)='scrollTo("#message")'  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>


## extensions
Type :  `string[]` 

extensions property of ExtensionConfig is an array of multiple extensions which are allowed to be selected by the user.

<div component="app-code" key="extensionAsync-extensionsExample-model"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-extensions" title="extensionAsync {{validatorType}} with extensions" key="extensions"></div>

## isExcludeExtensions
Type :  `boolean` 

This property is used to exclude the extensions mentioned in the extensions array. It is restrict the `extensions` mentioned 

<div component="app-code" key="extensionAsync-isExcludeExtensionsExample-model"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-isExcludeExtensions" title="extensionAsync {{validatorType}} with extensions" key="isExcludeExtensions"></div>


## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="extensionAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-message" title="extensionAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="extensionAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-extensionAsync-messageKey" title="extensionAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete extensionAsync Example

This Complete extensionAsync example which includes all the ExtensionConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-extensionAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="extensionAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="extensionAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="extensionAsync-complete-html"></div> 
# [/Html]
***


