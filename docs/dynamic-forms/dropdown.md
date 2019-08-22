---
title: DropDown
author: rxcontributorone
category: dynamic-forms
type:simple
linktitle: dropdown
---

To create dropdown in dynamic forms with type select. They can be of two types static and cascading.
Cascading dropdown can be performed using `@action` in which the logic is written.

The action keyName is mentioned in the serverData for which action you want to perform.

# Static Dropdown
<div component="app-code" key="DropDown-static-component"></div> 
Next, we need to write html code.
<div component="app-code" key="DropDown-static-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-static"></div>

# Cascading Dropdown
<div component="app-tabs" key="cascading"></div>

[!TabGroup]
# [Model](#tab\cascadingmodel)
<div component="app-code" key="DropDown-cascading-model"></div> 
# [/Model]
# [Component](#tab\cascadingcomponent)
<div component="app-code" key="DropDown-cascading-component"></div> 
# [/Component]

<div component="app-code" key="DropDown-cascading-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-cascading"></div>

# DropDown Based upon changing key and value names
The name of key and value can be changed and they need to be passed in serverData as `textPropName` and `valuePropName`
respectively.

<div component="app-code" key="DropDown-value-component"></div> 
Next, we need to write html code.
<div component="app-code" key="DropDown-value-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-value"></div>
***


