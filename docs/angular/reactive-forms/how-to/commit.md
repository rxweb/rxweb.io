---
title: commit
author: rxcontributorone
category: how-to
type:tabs
linktitle: commit
---

If you are using dirty check feature in your form and you want to maintain the dirty state `false` once the value has been updated into the database. For that you have to use the `commit` method of your respective formGroup.

Let's see how it works.

Here we are creating a three formcontrols which are Id, Name and Designation. Once it shows that  data is updated the dirty state should become false.

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="commit-dynamic-model"></div> 
</data-scope>
<div component="app-code" key="commit-dynamic-component"></div> 
Next, we need to write html code.
<div component="app-code" key="commit-dynamic-html"></div> 
<div component="app-example-runner" ref-component="app-commit-dynamic"></div>
