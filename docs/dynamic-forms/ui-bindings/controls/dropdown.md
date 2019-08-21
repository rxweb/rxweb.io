---
title: Dropdown
author: rxcontributorone
category: dynamic-forms
subcategory: controls
type:simple
linktitle: dropdown
---

<div class="title-bar"><p>

To create a dropdown in dynamic forms, you just need to mention `type: "select"` and `source` which include the options to be selected.</p></div>

# Dropdown with Non-Async source
<div component="app-code" key="dropdown-static-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dropdown-static-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-static"></div>

# Cascading Dropdown

You can create cascading dropdown with sync and async source binding.

## Cascading Dropdown with Sync Source Binding

<div component="app-tabs" key="sync"></div>

[!TabGroup]
# [Model](#tab\syncmodel)
<div component="app-code" key="dropdown-sync-model"></div> 
# [/Model]

# [Component](#tab\synccomponent)
<div component="app-code" key="dropdown-sync-component"></div> 
# [/Component]

<div component="app-code" key="dropdown-sync-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-sync"></div>

## Cascading Dropdown with Async Source Binding

<div component="app-tabs" key="async"></div>

[!TabGroup]
# [Model](#tab\asyncmodel)
<div component="app-code" key="dropdown-async-model"></div>
# [/Model]

# [Component](#tab\asynccomponent)
<div component="app-code" key="dropdown-async-component"></div> 
# [/Component]

<div component="app-code" key="dropdown-async-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-async"></div>

# Dropdown Based upon custom key and value names
The name of value and key can be changed as per your requirement and they need to be passed in the response from the server as `textPropName` and `valuePropName` respectively.

<div component="app-code" key="dropdown-value-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dropdown-value-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-value"></div>


# Select multiple options in Dropdown

If you want to select multiple options in dropdown, then you can set `multiselect: true` in the response from the server.

<div component="app-code" key="dropdown-multiselect-component"></div> 
Next, we need to write html code.
<div component="app-code" key="dropdown-multiselect-html"></div> 
<div component="app-example-runner" ref-component="app-dropdown-multiselect"></div>
***