---
title: Data Validation
author: rxcontributorone
category: rxwebcore
subcategory: data-validation
type:simple
linktitle:data-validation
---

# Data Validation
While working with data, it becomes very important to maintain data consistency which is achieved using data validation. The data validation is done using data annotation which are used above the property in the model class.

We will apply unique validation on the CourseName field where CourseName needs to be unique. 

Add unique validation annotation on the `CourseName` field 

````js
  [Unique(connection:typeof(IMainDatabaseFacade))]
  public string CourseName { get; set; }
````

