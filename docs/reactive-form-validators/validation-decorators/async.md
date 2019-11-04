---
title: async
description: Async validation {{validatorType}} will allow the field to validate the unique value from server for that particular field. This async validation can be customized according to the need.
author: rxcontributortwo
category: form-validations
subcategory: Custom
type: tabs
linktitle: async
---

<div class="title-bar"><p>async validation {{validatorType}} will allow the field to validate the unique value from server for that particular field. This async validation can be customized according to the need.</p></div>

# When to use
Suppose you want to create a user form, which contains field like userName and email and you want the user to enter unique Username. This unique value of username will be validated from server. You can make a custom validator function. Here depending upon the requirement these scenarios may arise. 

<ol class='showHideElement'>
 
    <li>Apply async validation on the userName field to check whether the input entered by the user is unique or not.</li>    
<data-scope scope="['decorator']">
    <li>You can customize this validator according to your need.</li>
</data-scope>  
</ol>
Let's see how async {{validatorType}} fulfil the need.

<data-scope scope="['template-driven-directives']">

# Complete Async Example

<div component="app-example-runner" ref-component="app-async-complete" title="complete example async" key="complete"></div>

</data-scope>

<data-scope scope="['decorator']">

# Global Function Based Async Example

When you want to use async validator function globally in multiple components, you can use Global based Async Function. 

<div component="app-example-runner" ref-component="app-async-global" title="Global Function Based with prop" key="global"></div>
</data-scope>

<data-scope scope="['decorator']">

# Component Function Based Async Example

When you want to use async validator function within your component, you can use Component based Async Function.

<div component="app-example-runner" ref-component="app-async-component" title="Component Function Based with prop" key="component"></div>

</data-scope>

