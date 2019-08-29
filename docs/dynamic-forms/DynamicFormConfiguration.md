---
title: DynamicFormConfiguration
description: DynamicFormConfiguration  
author: rxcontributorone
category: dynamic-forms
type: simple
linktitle: DynamicFormConfiguration
---

<div class="title-bar"><p>It is used for passing the additional configuration while building the dynamic form.</p></div>

# controlsConfig

The objects that are available in the server JSON data and those are transformed in the `FormControlConfig` object. Those objects are mapped with the controlsConfig object in terms of key and value pair.

## FormControlConfig

The FormControlConfig is a plain model which transformed your JSON object into the FormControlConfig object.

# Example

<div component="app-example-runner" ref-component="app-DynamicFormBuilderConfiguration-controlConfig" title="controlsConfig" key="controlConfig"></div>

# additionalConfig

additionalConfig is used to add HTML elements such as heading, paragraph and buttons using JSON, you need to pass it in `DynamicFormConfiguration`. 

## Example

<div component="app-example-runner" ref-component="app-DynamicFormBuilderConfiguration-additionalConfig" title="additionalConfig" key="additionalConfig"></div>

<div component="app-tabs" key="additionalConfig"></div>



