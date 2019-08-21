---
title: Dropdown
author: rxcontributorone
category: dynamic-forms
subcategory: controls
type:simple
linktitle: dropdown
---

<div class="title-bar"><p>This is used to create dropdown in dynamic forms with type select. You can bind the dropdown statically or through cascading.</p></div>

# Static Dropdown
<div component="app-code" key="dropdown-static-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dropdown-static-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-static"></div>

# Cascading Dropdown
<div component="app-tabs" key="cascading"></div>

[!TabGroup]
# [Model](#tab\cascadingmodel)
<div component="app-code" key="dropdown-cascading-model"></div> 
# [/Model]
# [Component](#tab\cascadingcomponent)
<div component="app-code" key="dropdown-cascading-component"></div> 
# [/Component]

<div component="app-code" key="dropdown-cascading-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-cascading"></div>

# Dropdown Based upon changing key and value names
The name of key and value can be changed as per your requirement and they need to be passed in serverData as `textPropName` and `valuePropName` respectively.

<div component="app-code" key="dropdown-value-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dropdown-value-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-value"></div>


# Select multiple options in Dropdown

If you want to select multiple options in dropdown, then you can set `multiselect: true` in the `serverData`.

<div component="app-code" key="dropdown-multiselect-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dropdown-multiselect-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-multiselect"></div>
***