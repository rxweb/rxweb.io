---
title: propArray
description: PropArray is used to define an array of the instances of a class.
author: rxcontributortwo 
category: decorators
type: decorators
linktitle: propArray
---

<div class="title-bar"><p>propArray is used to define an array of the instances of a class.</p></div>

# When to use
Suppose you want to create a User form, which contains fields like CourseName in `User` class,
which is an array of the instances of a class `Course` and you want to add the `@required` validation, then you can use @propArray() for this.

Let's see how @propArray() decorator fulfil the need.

# Basic PropArray Decorator
First, we need to create a Course class and create a property of `courseName` in it of the type string. Create a User class and create a property of `courses` in it of the type `Array<Course>` using the @propArray() decorator with it.

<div component="app-code" key="propArray-add-model"></div> 
</data-scope>

Through Angular FormBuilder service we create FormGroup in the component.

<div component="app-code" key="propArray-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="propArray-add-html"></div> 
<div component="app-example-runner" ref-component="app-propArray-add"></div>

# PropArray based on Entity Instance 
If you want the entity of the propArray entity conditionally.

If the contactType property value equals to address then the Address model properties should be included in the nested formgroup of contact or the property value contains telephone then the Telephone model properties should be included in the nested formgroup. 

<div component="app-code" key="propArray-entity-model"></div> 
<div component="app-code" key="propArray-entity-component"></div> 
Next, we need to write html code.
<div component="app-code" key="propArray-entity-html"></div> 
<div component="app-example-runner" ref-component="app-propArray-entity"></div>

# Binding Name of server side property on propArray
If the client property name and server property name is different. Then to bind the server property name of propArray to client side.

<div component="app-example-runner" ref-component="app-propArray-server" title="Binding server side name with propArray" key="server"></div>

# PropArray based on allowMaxIndex
It is used when you want to validate number of index added in proprArray. You need to specify it in `allowMaxIndex` property.

<div component="app-example-runner" ref-component="app-propArray-maxindex" title="PropArray based on allowMaxIndex" key="maxindex"></div>

# Create BlankFormArray 
It is used to create a formArray with initialization. You need to specify `createBlank` value as true.

<div component="app-example-runner" ref-component="app-propArray-createblank" title="PropArray with createBlank" key="createblank"></div>