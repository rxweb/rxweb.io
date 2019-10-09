---
title: url 
description: Url validation  {{validatorType}}  will check that value entered in the property is in the correct url format or not.
author: rxcontributorone
category: form-validations
subcategory: String
type:tabs
linktitle: url
---

<div class="title-bar"><p>url validation  {{validatorType}}  will check that value entered in the property is in the correct url format or not.</p></div>

# When to use
Suppose you want to create a website-info form, which contains fields like AdminWebsiteUrl, CustomerWebsiteUrl, MaintenanceWebsiteUrl and you want the user to enter valid url. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
   <li>Adding AdminWebsiteUrl without any conditional expression.</li>
   <li>Apply url validation based on matched condition in the form, like if the adminWebsiteUrl is ‘https://google.co.in’ then the customerWebsiteUrl value should be in proper format of url.</li>
   <li>Adding Custom Message on MaintenanceWebsiteUrl Field.</li>
   <li>Shows the custom message on `Deployed Website Url` field by using `messageKey` property.</li>
   <data-scope scope="['decorator','validator']">
   <li>Apply url validation dynamically based on server rules.</li>
   </data-scope>
</ol>
Let’s see how url {{validatorType}} fulfil the need.

# Basic url Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of AdminWebsiteUrl in the model to achieve the functional need of point 1.
<div component="app-code" key="url-add-model"></div> 
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
<div component="app-code" key="url-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="url-add-html"></div> 
<div component="app-example-runner" ref-component="app-url-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="url-edit-component"></div>
The below code is `web-site-info-model-data.json` for getting data from the server 
<div component="app-code" key="url-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="url-edit-html"></div> 
<div component="app-example-runner" ref-component="app-url-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="url-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="url-add-html"></div> 
<div component="app-example-runner" ref-component="app-url-add"></div>
</data-scope>

# DefaultConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@url()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.url()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `url` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")'  title="conditionalExpression">conditionalExpression</a></td><td>url validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#urlValidationType")'  title="urlValidationType">urlValidationType</a></td><td>To validate a url which is not containing a suffix by configuring urlValidationType which can be `FQDN`,`LocalHost`,`IntranetServer`</td></tr>
<tr><td><a  (click)='scrollTo("#message")'  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

Url validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="url-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="url-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-url-conditionalExpression" title="url {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## urlValidationType
Type : number 

urlValidationType is used to validate url in which the hostname does not contain a suffix which is generally used while working with local servers. It can be configured as 
`FQDN`,`LocalHost`,`IntranetServer`.

1) urlValidationType:1 
A fully qualified domain name (FQDN), sometimes also referred to as an absolute domain name that specifies its exact location in the tree hierarchy of the Domain Name System (DNS)

2) urlValidationType:2
It will validate url having `localhost` as host name.

3) urlValidationType:3
The Intranet server lies inside the firewall and serves clients on the local network.

For example, if you want to validate localhost in url validator set `urlValidationType` as: 
<div component="app-code" key="url-urlValidationTypeExample-model"></div> 
<div component="app-example-runner" ref-component="app-url-urlValidationType" title="url {{validatorType}} with urlValidationType" key="urlValidationType"></div>

## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="url-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-url-message" title="url {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="url-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-url-messageKey" title="url {{validatorType}} with messageKey" key="messageKey"></div>

# Complete url Example

This Complete url example which includes all the DefaultConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-url-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="url-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="url-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="url-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic url Example

This Dynamic url example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic url example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-url-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="url-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="url-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="url-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="url-dynamic-html"></div> 
# [/Html]
***
</data-scope>
