---
title: Creating Tables
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Tables

Tables are one of the most-used database objects where collection of related data is held in a table format within a SQL server database and designing a proper table is essential for any application (which is `Contoso University` in our case). To ensure that correct data is stored in the database, being the building blocks of database designing, appropriate table structure plays a vital role.

# Standard Naming Convention

Designing database tables by adopting a proper naming convention can easily help you and others to identify the purpose and usage of every table. A well-defined table name defines all the information about itsself, like type of object, work of object, what does it contain etc.

<ul>
  <li>Table name should be in `plural form` as every table entity contain multiples records. For example: Students, Courses</li>
  <li>Each table and column name should be in `pascal case`. PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized. For example: StudentCourses</li>
  <li>Each table must contain a `single-column primary key`, which should be an auto-increment column. It should be prefixed with the singular form of the table name. For example: StudentId, CourseId.</li>
</ul>

# Creating Database

Before starting anything, you need to create the database (if its not created). Here i am creating a database named as `RxwebCoreDemoProjectDb`.

# Creating tables

As previously mentioned, we are creating a `Contoso University application`, `Courses` and `Students` table are a major part of this application. `CREATE TABLE` keyword is used at the beginning of the statement which shows that you are interested in designing a new table. The name of the table should be unique based on the data you are planning to store on a table.

## Some Additional Resources

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;">Download The Main Database Script <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/SQL%20Scripts/main.sql">Download the script</a></span>.
</li>
<li>
<span style="text-decoration:underline;">Download The Log Database Script <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/SQL%20Scripts/log.sql">Download the script</a></span>.
</li>
</ul>

## Courses Table  

Let us create a Courses table in the above created database which contains only 2 columns like CourseId(int) and CourseName(varchar). Here CourseId is defined as primary key with auto increment of 1.

```
CREATE TABLE dbo.Courses
(  
    CourseId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CourseName [varchar](50) NOT NULL
);
```

Here is a sample "Courses" table:

<table class="table table-bordered">
<tr><th>CourseId</th><th>CourseName</th></tr>
<tr><td>1</td><td>Machine Learning</td></tr>
<tr><td>2</td><td>Software Engineering</td></tr>
<tr><td>3</td><td>MBBS</td></tr>
<tr><td>4</td><td>CA</td></tr>
<tr><td>5</td><td>MBA</td></tr>
</table>

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/SQL%20Scripts/main.sql#L1678-L1687">View The Course Table Script</a></span>.
</li>
</ul>

## Students Table

Let us create a basic Students table contains fields like StudentId, StudentName, Age, Gender, EmailId and CourseId with proper data types and size. Here `StudentId` is set as primary key with auto increment of 1 and `CourseId` is referenced as a foreign key for the `Courses` table which is defined above.

```
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
```

Here is a sample "Students" table:

<table class="table table-bordered">
<tr><th>StudentId</th><th>StudentName</th><th>RollNumber</th><th>Age</th><th>Gender</th><th>EmailId</th><th>CourseId</th></tr>
<tr><td>1</td><td>John Doe</td><td>1002</td><td>20</td><td>Male</td><td>john.doe@contoso.com</td><td>1</td></tr>
<tr><td>2</td><td>Alison Miller</td><td>1001</td><td>21</td><td>Male</td><td>alison.miller@contoso.com</td><td>5</td></tr>
<tr><td>3</td><td>Scarlett Joan</td><td>1003</td><td>19</td><td>Female</td><td>scarlett.joan@contoso.com</td><td>3</td></tr>
</table>

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/SQL%20Scripts/main.sql#L1687-L1699">View The Student Table Script</a></span>.
</li>
</ul>