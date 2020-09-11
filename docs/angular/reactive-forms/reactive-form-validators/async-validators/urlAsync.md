---
title: urlAsync 
description: urlAsync validation  {{validatorType}}  will check that value entered in the property is in the correct url format or not.
author: rxcontributorone
category: async-validators
subcategory: String
type:tabs
linktitle: urlAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>urlAsync validation  {{validatorType}}  will check that value entered in the property is in the correct url format or not asynchronously.</p></div>

# When to use
Suppose you want to create a website-info form, which contains fields like AdminWebsiteurlAsync, CustomerWebsiteurlAsync, MaintenanceWebsiteurlAsync and you want the user to enter valid urlAsync asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
   <li>Adding AdminWebsiteurlAsync without any conditional expression.</li>
   <li>Adding Custom Message on MaintenanceWebsiteurlAsync Field.</li>
   <li>Shows the custom message on `Deployed Website urlAsync` field by using `messageKey` property.</li>
   <data-scope scope="['decorator','validator']">
   <li>Apply urlAsync validation dynamically based on server rules.</li>
   </data-scope>
</ol>
Let’s see how urlAsync {{validatorType}} fulfil the need.

# Basic urlAsync Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of AdminWebsiteurlAsync in the model to achieve the functional need of point 1.
<div component="app-code" key="urlAsync-add-model"></div> 
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
<div component="app-code" key="urlAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="urlAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-urlAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="urlAsync-edit-component"></div>
The below code is `web-site-info-model-data.json` for getting data from the server 
<div component="app-code" key="urlAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="urlAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-urlAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="urlAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="urlAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-urlAsync-add"></div>
</data-scope>

# ValidatorConfig
Type : `Observable`

validator config is used to dynamically resolve the value of the property according to the server rules by using the keyword `of` as below 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@urlAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.urlAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `urlAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#urlAsyncValidationType")'  title="urlAsyncValidationType">urlAsyncValidationType</a></td><td>To validate a urlAsync which is not containing a suffix by configuring urlAsyncValidationType which can be `FQDN`,`LocalHost`,`IntranetServer`</td></tr>
<tr><td><a  (click)='scrollTo("#message")'  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>


## urlAsyncValidationType
Type : number 

urlAsyncValidationType is used to validate urlAsync in which the hostname does not contain a suffix which is generally used while working with local servers. It can be configured as 
`FQDN`,`LocalHost`,`IntranetServer`.

1) urlAsyncValidationType:1 
A fully qualified domain name (FQDN), sometimes also referred to as an absolute domain name that specifies its exact location in the tree hierarchy of the Domain Name System (DNS)

2) urlAsyncValidationType:2
It will validate urlAsync having `localhost` as host name.

3) urlAsyncValidationType:3
The Intranet server lies inside the firewall and serves clients on the local network.

For example, if you want to validate localhost in urlAsync validator set `urlAsyncValidationType` as: 
<div component="app-code" key="urlAsync-urlAsyncValidationTypeExample-model"></div> 
<div component="app-example-runner" ref-component="app-urlAsync-urlAsyncValidationType" title="urlAsync {{validatorType}} with urlAsyncValidationType" key="urlAsyncValidationType"></div>

## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="urlAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-urlAsync-message" title="urlAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="urlAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-urlAsync-messageKey" title="urlAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete urlAsync Example

This Complete urlAsync example which includes all the DefaultConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-urlAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="urlAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="urlAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="urlAsync-complete-html"></div> 
# [/Html]
***


