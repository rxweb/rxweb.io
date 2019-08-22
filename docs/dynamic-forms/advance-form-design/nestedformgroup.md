---
title: Nested FormGroup
author: rxcontributortwo
category: dynamic-forms
subcategory: advance-form-design
type: simple
linktitle: nestedformgroup
---
<div class="title-bar"><p>
To create a nested FormGroup in your dynamic form, you need to pass nested formControl details in the server response. In `additionalConfig` property , you need to mention the parent formGroup name and nested formControl names in the `childrens` array.</p></div>

# Example

<div component="app-code" key="nestedformgroup-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="nestedformgroup-complete-html"></div> 
<div component="app-example-runner" ref-component="app-nestedformgroup-complete"></div>