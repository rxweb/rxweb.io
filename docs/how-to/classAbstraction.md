---
title: Class Abstraction
author: rxcontributorone
category: how-to
type:tabs
linktitle: classAbstraction
---

While using model based reactive forms, When you want to use the properties of base class into derived class and hide the complexity of implementation of inherited classes you have to use class abstraction.

Suppose you have a Order class which has properties like OrderId and OrderType and you want to inherit it from Product class which has productId and productName, You want to use properties of Orders into Products class.

# Example

<data-scope scope="['decorator']">
First we need to create a user class and define properties in the model.
<div component="app-code" key="class-complete-model"></div> 
</data-scope>
<div component="app-code" key="class-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="class-complete-html"></div> 
<div component="app-example-runner" ref-component="app-class-complete"></div>

***