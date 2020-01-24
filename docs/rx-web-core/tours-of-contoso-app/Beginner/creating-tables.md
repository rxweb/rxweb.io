---
title: Creating Tables
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Creating Table and Views
Tables are one of the most-used database objects where collection of related data is held in a table format within a SQL server database and designing a proper table is essential for any application (which is `Contoso University` in our case), as the appropriate table structure plays a vital role. For read operations we use view,  this act as an intermediate between real tables schema & programmability.

<a class="redirect-link">If you don't want to see the Table and View creation steps and would like to see the final SQL script. Not a problem! , you can fork it on Github</a>

![Student And Course](Images/student-course.PNG)

<ul class="bullet-list">
  <li>Standard Naming Conventions</li> 
  <li>Creating Database</li>
  <li>Creating Course and Student Table</li>
  <li>Create necessary views</li>
</ul>

<p class="step-title mt-5">Standard Naming Convention</p>
Designing database tables by adopting a proper naming convention can easily help you and others to identify the purpose and usage of every table. A well-defined table name defines all the information about itsself, like type of object, work of object, what does it contain etc.

<ul class="bullet-list">
  <li>Table name should be in plural form as every table entity contain multiples records. For example: Students, Courses</li> 
  <li>Each table and column name should be in pascal case. PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized. For example: StudentCourses</li>
  <li>Each table must contain a single-column primary key, which should be an auto-increment column. It should be prefixed with the singular form of the table name. For example: StudentId, CourseId.</li>
</ul>

<p class="step-title mt-5">Creating Database</p>
Before creating tables and views, we need to create the database (if its not created). Here i am creating a database named as HumanResourceDb & HumanResourceLogDb. The HumanResourceLogDb will be used for logging purpose, we will not create any table in this, But will create Courses and Students table in the HumanResourceDb.

<p class="step-title mt-5">Creating Course and Student Table</p>

As previously mentioned, we are creating a `Contoso University application`, `Courses` and `Students` table are a major part of this application. `CREATE TABLE` keyword is used for creating a new table. The name of the table should be unique based on the data you are planning to store on a table.

<a class="redirect-link">View Courses Table SQL Script</a>
<br/>
<button class="btn btn-default">Download The Code</button>

````js
CREATE TABLE dbo.Courses
( 
  CourseId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
  CourseName [varchar](50) NOT NULL 
);
````  

````js
CREATE TABLE dbo.Students
(
   StudentId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
   StudentName [varchar](50) NOT NULL,
   RollNumber int NOT NULL,
   Age int NOT NULL,
   Gender [varchar](10) NOT NULL,
   EmailId [varchar](30) NOT NULL,
   CourseId int FOREIGN KEY REFERENCES Courses(CourseId) );  
);
````  