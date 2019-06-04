---
title: Step By Step Design
author: rxcontributorone
category: dynamic-forms
type:simple
linktitle: stepbystep
---

# Register The Module
First You need to import the `RxDynamicReactiveFormsModule` in the app module.

<div component="app-code" key="step-by-step-module-component"></div> 

# Design the Json
The second step is to define the json data which comes from the server. The Json data is stored in the form of `serverData`.

<div component="app-code" key="step-by-step-serverData-component"></div>

To Bind the formControl to the user interface, you have to define in the `uiBindings`.

> Note : If you want to change the order of the formControls in the user Interface. You must do it in `uiBindings`

<div component="app-code" key="step-by-step-ui-component"></div>

# Create the Form
The Third Step is to create a form using `dynamicForm` method of `RxFormBuilder`. In that you pass the serverData and dynamicFormConfiguration as below.

<div component="app-code" key="step-by-step-form-component"></div>

# Html Implementation
The Fourth and last step is to pass the html tag in the template using `rxweb-dynamic-form` and pass the dynamicFormBuildConfig as `rxDynamicForm` in the form tag

<div component="app-code" key="step-by-step-form-html"></div>

<div component="app-example-runner" ref-component="app-dynamic-complete"></div>

***

