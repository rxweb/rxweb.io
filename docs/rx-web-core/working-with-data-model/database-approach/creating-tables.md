---
title: Creating Tables
author: rxcontributorone
category: working-with-data-model
subcategory: database-approach
type:simple
linktitle:creatingtables
---

The core part of any software application is the `database designing`. It is a process of organizing data in a proper structural way. Before working on the business logic part in the application, we must decide what data is to be stored and which elements will be interrelated to each other. With all these information, you can start creating the database and its entities with respect to that application.

# Creating Tables
Tables have data of entities in database and as every entity have multiples records, the table name should be created with name in plural for eg: **[dbo].Departments** and their column should be in pascal case  
For example 

```
CREATE TABLE dbo.Departments  
(  
    DepartmentId int NOT NULL  
    DepartmentName [varchar](50) NOT NULL
);  
```