---
title: Custom Component
author: rxcontributorone
category: dynamic-forms
type: simple
linktitle: Custom Component
---

<div class="title-bar top_title"><p>Custom Component</p></div> <div class="title-bar"><p>rxweb Dynamic forms provides adding custom components to the templates which can be used when you want to customize the template as per the need and use it into the dynamic configuration.</p></div>

The custom component is bind using `@dynamicComponent` decorator on your custom component as mentioned in the below example :

# Custom Component

<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Model](#tab\completemodel)
<div component="app-code" key="customcomponent-complete-model"></div> 
# [/Model]

# [Component](#tab\completecomponent)
<div component="app-code" key="customcomponent-complete-component"></div> 
# [/Component]

# [Html](#tab\completehtml)
<div component="app-code" key="customcomponent-complete-html"></div> 
# [/Html]

<div component="app-example-runner" ref-component="app-customcomponent-complete"></div>