---
title: ngxTranslateValidationMessage
author: rxcontributorone
category: how-to
type:tabs
linktitle: ngxTranslateValidationMessage
---

While using translation libraries like ngx-translate through which the translated validation messages are displayed using messageKey. There would be a lot of mapping of the validationMessage prop. In this case if you mark `isAddMessageKey` property true It will add messageKey to the refValues object. 

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="ngxTranslateValidationMessage-complete-model"></div> 
</data-scope>
<div component="app-code" key="ngxTranslateValidationMessage-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="ngxTranslateValidationMessage-complete-html"></div> 
<div component="app-example-runner" ref-component="app-ngxTranslateValidationMessage-complete"></div>