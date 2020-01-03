---
title: Step By Step Design
author: rxcontributorone
category: dynamic-forms
type:simple
linktitle: stepbystep
---

# Install Package
First you need to install `@rxweb/reactive-form-validators` as the dynamic form package dependent on this package.
> npm install @rxweb/reactive-form-validators

Now, You have to install `@rxweb/reactive-dynamic-forms` for building the dynamic forms.
> npm install @rxweb/reactive-dynamic-forms

# Register the Module
We have to register `ReactiveFormsModule` from `@angular/forms` package and then `RxReactiveFormsModule` as well as `RxReactiveDynamicFormsModule`  from the mentioned packages as below.

<div component="app-code" key="step-by-step-module-component"></div> 

# Design the Json
The second step is to define the json data which comes from the server. The Json data is stored in the form of `serverData`.
Just a quick start here we create textbox by mentioning `type` and `name`.

<div component="app-code" key="step-by-step-serverData-component"></div>

# Create the Form
To Bind the formControl to the user interface, you have to define in the `uiBindings`.

> Note : If you want to change the order of the formControls in the user Interface. You must do it in `uiBindings`

<div component="app-code" key="step-by-step-ui-component"></div>

The Next Step is to create a form using `formGroup` method of `RxDynamicFormBuilder`. In that you pass the serverData and dynamicFormConfiguration as below.

<div component="app-code" key="step-by-step-form-component"></div>

# Html Implementation
The Fourth and last step is to pass the html tag in the template using `rxweb-dynamic-form` and pass the dynamicFormBuildConfig as `rxDynamicForm` in the form tag

You must specify `viewMode` which can be basic, horizontal and advance, based on the bootstrap layout you want.

<div component="app-code" key="step-by-step-form-html"></div>

# Working Example
<div component="app-example-runner" ref-component="app-dynamic-complete"></div>

***

