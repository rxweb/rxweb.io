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

## Step 1
Let's start by making a unique validation function will be made in the main folder of the ExtendedModels folder of the models project. 

````js
    public partial class Course {

        public bool UniqueCourseName(object CourseName = null) {
            if(!Candidates.any(x=>x.CourseName == CourseName))
            return false
        }
    }
````

## Step 2
Add unique validation annotation on the `CourseName` field 

````js
  [Unique(connection:typeof(IMainDatabaseFacade),conditionalExpressionName: nameof(Course.UniqueCourseName))]
  public string CourseName { get; set; }
````

