---
title: Creating Views
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Views

`Materialized view` is a database object (kind of virtual table) based on the result-set of any SQL query. `Views` are needed when we want to recieve our desired resultset in other form. For example: In the previous section, i had created a table named `Students` and in that table there was a column named `CourseId` which stores the integer value. While displaying in the UI, i want to represnt in the `CourseName` form. If i write this in query form by adding WHERE and JOIN, then it would be a little-bit complex query. In such cases, we can make views to make it more simpler.

> When you have limited number of records (0 - 1K), then view is a better option.

# Pros while using views

<ul>
  <li><strong>Security</strong> - Each user can be given permission to access the database only through a small set of views that contain the specific data the user is authorized to see, thus restricting the user's access to stored data.</li>
  <li><strong>Query Simplicity</strong> - Views help simplify complex queries. If you have any frequently used complex query, you can create a view based on it so that you can reference to the view by using a simple SELECT statement instead of typing the query all over again.</li>
  <li><strong>Data Integrity</strong> - If data is accessed and entered through a view, the DBMS can automatically check the data to ensure that it meets the specified integrity constraints.</li>
</ul>

# Real time scenario

If we consider our `Contoso Application`, displaying students and course records is very frequent in the application. In the <a class="redirect" href="">previous step</a>, we have created the Students and Course table and now we want to retrieve those records. For that, we will create the views.

Generally we deal with these below mentioned real-time scenarios in case of retrieving the stored information where making materialized view can be helpful.

**Displaying list of records**

There are cases when we want to display a list of students and their enrolled course name on the UI. For retriving that information we can use a materialized view. In such cases, view should be named as `vCourses` or `vStudents`.

> Just for the sake for our understanding, we use the abbreviation <strong>`v`</strong> that stand for the word view. This maintain a consistency in the naming convention all over the application and to properly differenciate between a table and a view.

````
CREATE VIEW [dbo].[vStudents]
AS
SELECT    Students.StudentId, Students.RollNumber, Students.StudentName, Students.EmailId, Courses.CourseName
FROM      Students, Courses
WHERE     Students.CourseId = Courses.CourseId
GO
````

Based on the above created view, below result set will be fetched.

<table class="table table-bordered">
<tr><th>RollNumber</th><th>StudentName</th><th>EmailId</th><th>CourseName</th></tr>
<tr><td>1002</td><td>John Doe</td><td>john.doe@contoso.com</td><td>B. Tech.</td></tr>
<tr><td>1001</td><td>Alison Miller</td><td>alison.miller@contoso.com</td><td>MBA</td></tr>
<tr><td>1003</td><td>Scarlett Joan</td><td>scarlett.joan@contoso.com</td><td>MBBS</td></tr>
</table>

**Displaying any specific record while editing**

While editting a record, we may need to display complete or some of the information for a specific record only. Here separate views are made for displaying list and editing a particular record because their might be a situation where there is a difference in displaying those columns. 

Let us consider a situation, i have to edit a student's details. In such cases, view should be named as `vStudentRecords` (i.e. prefixing it with abbreviation `v` and suffixing it with the word `Records`).

````
CREATE VIEW [dbo].[vStudentRecords]
AS
SELECT    Students.StudentId, Students.StudentName, Students.RollNumber, Students.Age, Students.Gender, Students.EmailId, Courses.CourseName
FROM      Students, Courses
WHERE     Students.CourseId = Courses.CourseId
GO
````

Based on the above created view, below result set will be fetched.

<table class="table table-bordered">
<tr><th>StudentName</th><th>RollNumber</th><th>Age</th><th>Gender</th><th>EmailId</th><th>CourseId</th></tr>
<tr><td>John Doe</td><td>1002</td><td>20</td><td>Male</td><td>john.doe@contoso.com</td><td>B. Tech.</td></tr>
<tr><td>Alison Miller</td><td>1001</td><td>21</td><td>Male</td><td>alison.miller@contoso.com</td><td>MBA</td></tr>
<tr><td>Scarlett Joan</td><td>1003</td><td>19</td><td>Female</td><td>scarlett.joan@contoso.com</td><td>MBBS</td></tr>
</table>

**Binding data in a dropdown**

There are some columns which needs to be displayed in a dropdown while adding a new record or editing an existing record through UI. For that also we can use views to display any column records based on any condition.

Let us consider a situation, i have to display all the names of courses in a dropdown while adding a new student, so that student can select the course in which he want to entroll. In these cases, view should be named as `vCourseLookups` (i.e. prefixing it with abbreviation `v` and suffixing it with the word `Lookups`).

````
CREATE VIEW [dbo].[vCourseLookups]
AS
SELECT    CourseId, CourseName
FROM      Courses
GO
````

Based on the above created view, below result set will be fetched.

<table class="table table-bordered">
<tr><th>CourseId</th><th>CourseName</th></tr>
<tr><td>1</td><td>B. Tech.</td></tr>
<tr><td>2</td><td>M. Tech.</td></tr>
<tr><td>3</td><td>MBBS</td></tr>
<tr><td>4</td><td>CA</td></tr>
<tr><td>5</td><td>MBA</td></tr>
</table>

For all the above views, you can download the script file from <a class="redirect-link" href="#">here</a>.