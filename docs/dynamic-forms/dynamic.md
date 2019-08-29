---
title: Power of Dynamic Forms
description: rxweb dynamic forms is giving wide variety of features wich include horizontal forms, inline form, customized sizing for formControls, customized controls like plaintext mode for checkbox, radio and other formcontrols.
author: rxcontributortwo
category: dynamic-forms
type: simple
linktitle: dynamic
---

<div class="title-bar"><p>rxweb dynamic forms is giving wide variety of features including horizontal and inline form, customized sizing for formControls, customized controls like plaintext mode for checkbox, radio and other formcontrols.</p></div>

# Basic View

<div component="app-example-runner" ref-component="app-dynamic-basic" title="Basic View" key="basic"></div>

# Custom Class For Sizing

To apply customized sizing on formcontrols, you can use `class` property to apply `.form-control-lg` and `.form-control-sm` bootstrap class.

<div component="app-example-runner" ref-component="app-dynamic-customSizing" title="Custom Class For Sizing" key="customSizing"></div>

# Readonly Plain Text

To apply plaintext mode on any specific formControl, you can use `isPlainTextMode` property of `additionalconfig`.

<div component="app-example-runner" ref-component="app-dynamic-plainText" title="Readonly Plain Text" key="plainText"></div>

# Disabled Specific Checkbox

To disable a specific checkbox in your dynamic form, you can pass `disabled: true` to that checkbox in the server response.

<div component="app-example-runner" ref-component="app-dynamic-disabledCheckbox" title="Disabled Specific Checkbox" key="disabledCheckbox"></div>

# Disabled Specific Radio

To disable a specific radio in your dynamic form, you can pass `disabled: true` to that radio in server response.

<div component="app-example-runner" ref-component="app-dynamic-disabledRadio" title="Disabled Specific Radio Button" key="disabledRadio"></div>

# Advance Layout

You can make your dynamically generated form in any of the customized or advance layout by using class and viewMode property .

<div component="app-example-runner" ref-component="app-dynamic-advanceLayout" title="Advance Layout" key="advanceLayout"></div>

# Horizontal Form

To make a dynamic form  with horizontal layout, you need to pass `viewMode="horizontal"` and you can customize the horizontal form design by passing class name in viewMode property in server response.

<div component="app-example-runner" ref-component="app-dynamic-horizontalLayout" title="Horizontal Layout Form" key="horizontalLayout"></div>

# Horizontal Form Label Sizing

You can also customize the label size of the horizontal dynamic form, by using `viewMode` property in server response.

<div component="app-example-runner" ref-component="app-dynamic-labelSizing" title="Horizontal Form Label Sizing" key="labelSizing"></div>

# Inline Form

You can also create inline forms through reactive-dynamic-forms and customize it through viewMode and class property.

<div component="app-example-runner" ref-component="app-dynamic-inlineForm" title="Inline Form" key="inlineForm"></div>

# Prepend Textbox

You can also prepend textboxes with input group addons by passing `prependText` property in server response. You can prepend textbox in left, right as well as both sides of the textbox.

<div component="app-example-runner" ref-component="app-dynamic-prependTextbox" title="Prepend Textbox" key="prependTextbox"></div>