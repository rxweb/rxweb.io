---
title: Multilingual Validation Messages 
author: rxcontributorone
category: how-to
type:tabs
linktitle: multilingualValidationMessage
---

For using the multililingual validation messages in angular reactive forms while using `@rxweb/reactive-form-validators`, This is done by setting the configuration of `ReactiveFormConfig` in the root component, the `errorMessage` property in the component html will bind the validation message according to the selected language. For multilingual validation message setup. Please refer <a class="redirect-link" target="_blank" href="https://docs.rxweb.io/ngx-translate-extension/validation-message">Validation Message Using ngx-translate-extension</a> 

# Root Module Configuration 

<div component="app-code" key="multilingualValidationMessage-complete-config"></div>

Lets see how multilingual validation message is achieved using reactive form validators

# Example
In the below example, the firstName has the required validator applied and the userName field has alpha validator applied. The validation messages are resolved from the `i18n` folder of the assets and bind using the errorMessage property.

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-multilingualValidationMessage-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="multilingualValidationMessage-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="multilingualValidationMessage-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="multilingualValidationMessage-complete-html"></div> 
# [/Html]
***