---
title: notEmpty
description: notEmpty validation  {{validatorType}}  will check whether the value entered by the user is not empty, It will not allow white space.
author: rxcontributorone
category: form-validations
type:tabs
linktitle: notEmpty
---

<div class="title-bar"><p>notEmpty validation  {{validatorType}}  will check whether the value entered by the user is not empty, It will not allow white space.</p></div>

# When to use
Suppose you want to create a UserInfo form, which contains fields like FirstName, LastName, Username and you want the user to must enter anything in that field. That field can not be empty. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>Make the FirstName a notEmpty field without any condition.</li>
<li>Apply notEmpty validation based on matched condition in the form, like if the FirstName is `John`, then only the notEmpty validation will be applied to LastName field.</li>
<li>Adding Custom Message on Username Field.</li>
<data-scope scope="['decorator','validator']">
<li>Apply notEmpty validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how notEmpty {{validatorType}} fulfil the need.

# Basic notEmpty Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User class and define a property of FirstName in the model to achieve the functional need of point 1.
<div component="app-code" key="notEmpty-add-model"></div> 
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
<div component="app-code" key="notEmpty-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="notEmpty-add-html"></div> 
<div component="app-example-runner" ref-component="app-notEmpty-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="notEmpty-edit-component"></div> 
The below code is `user-data.json` for getting data from the server
<div component="app-code" key="notEmpty-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="notEmpty-edit-html"></div> 
<div component="app-example-runner" ref-component="app-notEmpty-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="notEmpty-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="notEmpty-add-html"></div> 
<div component="app-example-runner" ref-component="app-notEmpty-add"></div>
</data-scope>

# BaseConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@notEmpty()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.notEmpty()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `notEmpty` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>notEmpty validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

notEmpty validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="notEmpty-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="notEmpty-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-notEmpty-conditionalExpression" title="notEmpty {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom error message on respective FormControl

<div component="app-code" key="notEmpty-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-notEmpty-message" title="notEmpty {{validatorType}} with message" key="message"></div>

# Complete notEmpty Example

This Complete notEmpty example which includes all the RequiredConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-notEmpty-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="notEmpty-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="notEmpty-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="notEmpty-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic notEmpty Example

This Dynamic notEmpty example which execute based on json passed. conditional expression with function would be not apply in dynamic notEmpty example. 

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-notEmpty-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="notEmpty-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="notEmpty-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="notEmpty-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="notEmpty-dynamic-html"></div> 
# [/Html]
***
</data-scope>
