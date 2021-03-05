---
title: Adding Employee Department Details Generic
author: rxcontributorone
category: learn
type: simple
linktitle: adding-employee-department-details-generic
---

In our application we are having a department entity and an employee entity based upon which we want to store the resource details information such that the department and employee information will be stored in such a way that the resource details will be stored in this we need to pass the parameter `T` and it should work based upon the instance of the created object.

In the below form we will create a employee and department form in which the user can store department and its respective department into the resource details entity. In this case we will take the benefit of class abstraction and using generic nested level properties using RxWeb.

The model classes of Department, Employee and Resource are as below:

Department.cs :
<div component="app-code" key="nested-props-complete-departmentmodel"></div>

Employee.cs
<div component="app-code" key="nested-props-complete-employeemodel"></div>

Resource.cs : 
<div component="app-code" key="nested-props-complete-resourcemodel"></div>

# Managing Nested Level Properties
Constructing the form using the nested level properties using the formGroup method of the RxFormBuilder. for this we will create a formArray and use the properties of the Department class and add the resource details of the provided input.

<div component="app-code" key="nested-props-complete-component"></div>

In the Html we will bind the form for the inputs of the deparment and as we have applied class abstraction we will use the employee class object for this as well to take the advatange of accessing properties of the employee class as well 

<div component="app-code" key="nested-props-complete-html"></div>

# What we Built

<div class="container">
![Creating Projects](assets/rxwebcore/Images/nested-props.PNG)
</div>
