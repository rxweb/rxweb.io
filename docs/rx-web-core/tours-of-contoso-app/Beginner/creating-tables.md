---
title: Creating Tables
author: rxcontributortwo
category: rxwebcore
subcategory : tours-of-contoso-app
type: simple
linktitle: overview
---

# Creating Tables
Tables are one of the most-used database objects where collection of related data is held in a table format within a SQL server database and designing a proper table is essential for any application (which is `Contoso University` in our case), as the appropriate table structure plays a vital role. 

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/SQL%20Scripts/main.sql#L1678-L1700" class="git-link-button"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

You will learn :

<ul class="bullet-list">
  <li class="overview-nav-item">Standard Naming Conventions</li> 
  <li class="overview-nav-item">Creating Database</li>
  <li class="overview-nav-item">Examine the Project Structure and Database Tables</li>
  <li class="overview-nav-item">Run The Project</li>
</ul>


![Student And Course](Images/student-course.PNG)


## Standard Naming Convention
Designing database tables by adopting a proper naming convention can easily help you and others to identify the purpose and usage of every table. A well-defined table name defines all the information about itsself, like type of object, work of object, what does it contain etc.

<ul class="bullet-list">
  <li>Table name should be in plural form as every table entity contain multiples records. For example: Students, Courses</li> 
  <li>Each table and column name should be in pascal case. PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized. For example: StudentCourses</li>
  <li>Each table must contain a single-column primary key, which should be an auto-increment column. It should be prefixed with the singular form of the table name. For example: StudentId, CourseId.</li>
</ul>

## Creating Database
Before creating tables and views, we need to create the database (if its not created). Here i am creating a database named as HumanResourceDb & HumanResourceLogDb. The HumanResourceLogDb will be used for logging purpose, we will not create any table in this, But will create Courses and Students table in the HumanResourceDb.

## Creating Course and Student Table

As previously mentioned, we are creating a `Contoso University application`, `Courses` and `Students` table are a major part of this application. `CREATE TABLE` keyword is used for creating a new table. The name of the table should be unique based on the data you are planning to store on a table.


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
   CourseId int FOREIGN KEY REFERENCES Courses(CourseId) 
);
````  