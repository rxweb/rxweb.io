---
title: Database Best Practices
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:database-best-practices
---
Designing a database requires a lot of important measures to be taken care of as it is the most important and core part of any application. As the data integrity and consistency lies into the database which plays an important role in maintaining quality of any application. Here are some important steps to be taken care of while designing a database.     

<ul class="bullet-list">
  <li>Each Table should have a primary key which can be used as a unique indentifier used to identify each record and also helps a lot for effective indexing</li>   
  <li>As normalization plays a vital role in eliminating redundant data, it is important to know the proper amount of normalization done in your database as less normalization can leed to redundant data and over normalization can lead to more number of relationships between tables, immoderate number of joins which can lead to end up making a complex database. </li>
  <li>The main three things to be kept in mind while designing a database are entities, attributes and tuples, Entities are tables, attributes are field columns and tuples are records. One more necessary thing to be kept in mind is to decide which views and stored procedures are to be made based upon the entities. </li>
  <li>A well documented database helps you to keep log of things, makes it simplified and maintainable. This involves adding comments into triggers, stored procedures Adding description for tables along with description of its critical column(column which stores some necessary information or requires complex validation). </li>
</ul>

As microsoft says "Within a database, there are one or many object ownership groups called schemas. Within each schema there are database objects such as tables, views, and stored procedures." And all these database objects involve some necessary aspects to be taken care of while their creation inrespect to create an effective and qualitative database. Lets understand them one by one...

# Tables
Tables stores information of your application as set of records. Creation of table looks quite simple but it also involves a lot of major steps to be taken care of. For more information about scripts and Naming conventions, Have a look at our doc on <a href="/rx-web-core/working-with-data-model/database-approach/creating-tables" class="redirect-link">Creating Tables</a> 

<ul class="bullet-list">
  <li>First best practice is to keep a proper consistency of `Name` of tables and their columns. The Name of the table should be in `plural` as it contains a set of records having multiple tuple of entity. The column name should be in Pascal Naming Convention. For example, a table needs to be made for storing student's records. The Table name should be `Students` having fields like StudentId(PK), StudentName, Email and more additional fields as per your requirement.   
   </li>   
   <li>Dont Use prefix or suffix like `tbl` also avoid characters like `_` </li>
   <li>Choose proper data types, keep passwords and other confidential fields encrypted.</li>
</ul>

# Views
For retrieving our desired result set based upon one or more than one tables, we make views for various operations like listing records, editing records and binding dropdown options. Lets understand best practices while creating view.

<ul class="bullet-list">
  <li>Name of the view should start with abbreviation `v`. For the seperation of purpose, it is preferred to name the view according to its purpose as mentioned in the next steps.</li>   
   <li>The view made for listing for example if the view is listing students should be `vStudents`</li>
   <li>For editing records of students, it should be `vStudentRecords`.</li>
   <li>In case of binding options in a dropdown for example if it is view binding options of a dropdown should be `vStudentLookups`. For more information about scripts and Naming conventions, Have a look at our doc on <a href="/rx-web-core/working-with-data-model/database-approach/materialized-view" class="redirect-link">Materialized Views</a> </li>
</ul>

# Stored Procedures
Stored procedures are made for various complex operations like searching records, bulk saving data, updating data etc.. It becomes very important to maintain proper consistency among them so as to maintain Understandability in case of large applications. For viewing example of stored procedures,
Have a look at our doc on <a href="/rx-web-core/working-with-data-model/database-approach/stored-procedures" class="redirect-link">Stored procedures</a>  

<ul class="bullet-list">
  <li>Name of stored procedure should start with abbreviation `sp`.</li>   
   <li>If the stored procedure is made for searching students, it should be `spSearchStudents`. In case of insertion it should be `spInsertStudents` and like wise.</li>
   <li>It is benefial to add necessary description while creating a stored procedure.</li>
   <li>Selecting best approach to perform your data operation based upon entity like use of CTE, Temporary tables</li>
</ul>