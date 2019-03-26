---
title: RxFormBuilder 
author: rxcontributorone
category: api
type: simple
linktitle: RxFormBuilder
---
You can create a FormGroup through this service. This provides a group method and formGroup method. Both are used for creating a FormGroup. Both can be used in different cases.
Let's see in which cases we can use which method.

# group
This provides all feature of Angular FormBuilder `group` method as well as some other features which is important while creating complex forms, like if we want to create a FormGroup dynamically or we don't want pre-configure the validators. The validation rules are coming from the server and bind the validation rules runtime on the respective FormControl.

Here, we discuss three cases which can be achieved through `group` method

Before diving into the code, lets first understand the `group` method defination.

<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-group-component"></div> 
</data-scope>

The group method accepts the json object which will convert ino the `FormControl`, `FormGroup` or `FormArray` as per the specified value and the second parameter is used for dynamic validation which we discuss end of this documentation.
### Create the FormGroup
We discuss the simillar approach which we are doing through the Angular FormBuilder. But the only one difference is you don't need to create a nested FormGroup without calling the `group` method.
Here, we create a FormControl, nested FormGroup and nested FormArray inside the FormGroup. See the below code

<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-formgroup-component"></div> 
<div component="app-example-runner" ref-component="app-group-complete"></div>
</data-scope>

### Dynamically Create a FormGroup with Dynamic Validation Rules
Here we create a FormGroup dynamically and apply the validation rule of respective FormControl. For more understanding first we see the JSON data which comming from the server, For better understanding let's give a name of User object. This user object have some validation rules which is also coming from the server.

Let's see the user object as below:
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-userobject-component"></div> 
</data-scope>

See dynamic validation rules below:
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-dynamicvalidationrules-component"></div> 
</data-scope>

Now, For dynamic server validation rules we can make a call to server or put a JSON object of validation rules. 
Here we are putting static JSON object of validation rules, See the below code:
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-servervalidationrules-component"></div> 
</data-scope>   

# formGroup
If you are using decorator based validation approach then your FormGroup will be created through this method. This you many ways to create the FormGroup. We discuss one by one all approches.
The most important thing in decorator based validation is you have to define a model first afterthat you can create the FormGroup.
Let's create a User model:
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-validationapproach-component"></div> 
</data-scope>

### Create a FormGroup through Model without instance
This scenario can be used in add form.
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-addcomponent-component"></div> 
</data-scope>

### Create a FormGroup through Model instance
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-modelinstance-component"></div> 
</data-scope>

### Create a FormGroup with server data and server values should be mapped with model properties
This can be used in edit form where the values are coming from the server and we have to create the form as well as the validation rules can be applied based upon validation decorator configured on the property of the User Model.
<data-scope scope="['decorator']">
<div component="app-code" key="RxFormBuilder-serverdata-component"></div> 
</data-scope>
As per the above code, You have to pass the two parameter first parameter is User model and the second is the server json data. The server data JSON object properties should be the same as User model properties.
<div component="app-example-runner" ref-component="app-formgroup-add"></div>

