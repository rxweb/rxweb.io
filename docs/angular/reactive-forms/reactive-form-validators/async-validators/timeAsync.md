---
title: timeAsync 
description: timeAsync validation  {{validatorType}}  will allow user to enter the input only in the correct timeAsync format.
author: rxcontributorone
category: async-validators
subcategory: Date and timeAsync
type:tabs
linktitle: timeAsync
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>timeAsync validation  {{validatorType}}  will allow user to enter the input only in the correct time format asynchronously.</p></div>

# When to use
Suppose you want to create a AttendanceDetail form, which contains field of EntryPlace, EntrytimeAsync, TotaltimeAsyncOut and Exit timeAsync you want the user to enter valid time asynchronously. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>Allow timeAsync in EntrytimeAsync without seconds.</li>
<li>Allowing seconds in TotaltimeAsyncOut.</li>
<li>Adding Custom Message on exittimeAsync Field.</li>
<li>Shows the custom message on `Net In timeAsync` field by using `messageKey` property.</li>
<data-scope scope="['decorator','validator']">
<li>Apply timeAsync validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how timeAsync {{validatorType}} fulfil the need.

# Basic timeAsync Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a AttendanceDetail class and define a property of EntrytimeAsync in the model to achieve the functional need of point 1.
<div component="app-code" key="timeAsync-add-model"></div> 
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
<div component="app-code" key="timeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="timeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-timeAsync-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="timeAsync-edit-component"></div> 
The below code is `attendance-data.json` for getting data from the server
<div component="app-code" key="timeAsync-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="timeAsync-edit-html"></div> 
<div component="app-example-runner" ref-component="app-timeAsync-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="timeAsync-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="timeAsync-add-html"></div> 
<div component="app-example-runner" ref-component="app-timeAsync-add"></div>
</data-scope>

# timeAsyncConfig 
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@timeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.timeAsync({validatorConfig:of({&ltproperty_name&gt:&ltvalue&gt})})` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `timeAsync` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#allowseconds")' title="allowseconds">allowseconds</a></td><td>If you are allowed seconds in timeAsync format then you need to put this as true.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table >

## allowSeconds 
Type :  `boolean` 
If you are allowed seconds in timeAsync format then you need to put this as true.

<div component="app-code" key="timeAsync-allowSecondsExample-model"></div> 
<div component="app-example-runner" ref-component="app-timeAsync-allowSeconds" title="timeAsync {{validatorType}} with allowSeconds" key="allowSeconds"></div>


## message 
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="timeAsync-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-timeAsync-message" title="timeAsync {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="timeAsync-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-timeAsync-messageKey" title="timeAsync {{validatorType}} with messageKey" key="messageKey"></div>

# Complete timeAsync Example

This Complete timeAsync example which includes all the timeAsyncConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-timeAsync-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="timeAsync-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="timeAsync-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="timeAsync-complete-html"></div> 
# [/Html]
***


