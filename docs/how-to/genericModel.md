---
title: Generic Property on nested level
author: rxcontributorone
category: how-to
type:tabs
linktitle: genericModel
---

We are creating a FormGroup through our class object.
Here we discuss about very common scenario in the class object properties. Like say for example we have student model and we would like to store the information of Subjects and Courses in which Subjects is propArray which contains generic property subjectDetails in this we need to pass parameter `T` and it should work based on the instance of the created object.

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="generic-complete-model"></div> 
</data-scope>
<div component="app-code" key="generic-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="generic-complete-html"></div> 
<div component="app-example-runner" ref-component="app-generic-complete"></div>