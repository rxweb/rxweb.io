---
title: Project Creation
author: rxcontributorone
category: step-by-step-guide
type:simple
linktitle: project-creation
---

# Project Creation
In this section we discuss about the creation of project through rxwebcore cli and understand the created project structure and database tables. 

Let's consider a case of `HumanResourceApplication`, this application we will extend in our other sub-modules like multitenancy, multilingual management, data-validation, data-sanitization and many more extensive features with the optimum code in there respective sections of <a class="redirect-link" href="/">EntityFrameworkCore,</a> <a class="redirect-link" href="/"> Security,</a> <a class="redirect-link" href="/">Performance,</a> <a class="redirect-link" href="/">Data validation,</a> <a class="redirect-link" href="/">Data Sanitization.</a> <a class="redirect-link" href="/">Web Api apps.</a>   

Lets understand the dotnet CLI command options for creating a project. 

`````js
dotnet new rxwebapi --name &ltProject_Name&gt
`````

The above stated command represents that you can create a new project by specifying the project name through the `--new` option, As discussed above Let's create a Human Resource Application project with the name `HumanResourceApplication`, Fire Below command in your command prompt under respective folder where you want to create this project:

`````js
dotnet new rxwebapi --name HumanResourceApplication
`````

<video width="1100" controls>
<source src="assets/rxwebcore/Images/create-project-hrms1.mp4" type="video/mp4">
</video>

# Database Setup

> There must be Database server having two blank databases. the Main database and Log database. The `Main` is used for the application specific data operations and `Log` database is used for Logging related information like Request Log, Exception Log and Entity Log. As the CLI will generate few necessary tables in both database which will be helpful for the project which we will discuss in the end of the section. before proceeding, In package manager console run this command:

`````
rxwebcore --init
`````

In the `appsettings.json` file set the main and log database connection string:
<b>Windows based authentication connection string :</b>
<p style="font-style:italic;">Example :  data source=PC0001\\MSSQL2016;initial catalog=HumanResourceApplicationDb;persist security info=True; MultipleActiveResultSets=True;App=EntityFramework"</p>

<b>SQL user based authentication connection string :</b>
<p style="font-style:italic;">Example : data source=PC0001\\MSSQL2016;initial catalog=HumanResourceApplicationDb;persist security info=True;User Id=sa;Password=Admin;MultipleActiveResultSets=True;App=EntityFramework"</p>

> One question may arise, <strong>Why I have to provide the both database connection string before creating a Project ?</strong>       
As the web server and database server is different and both are    powerful in the respective area, hence we don't want to mingle up two things under one hood like database migration activities through the web project.

After providing the connection strings, run the below command which will generate the necessary defaults in the database.

`````js
rxwebcore --database-setup
`````

<video width="1100" controls>
<source src="assets/rxwebcore/Images/database-setup.mp4" type="video/mp4">
</video>

# Examine the Project Structure

As RxWeb follows the practices of `Clean Architecture`, Based upon this the project structure is divided into several layers of Models, Domain services,Bounded context, Application core and API which adds the practices of seperation of concerns for simplification and maintanable code. 

The project solution contains six projects. They are : 

![Project Dependency](Images/dependency-chart1.png)
<p class="image-description">Dependency Chart Of The Project.</p> 

## Created Projects

<table class="table table-bordered table-striped">
<tr><th>Project</th><th>Description</th></tr>
<tr><td>Models</td><td>The primary purpose of this project is to define POCO models,Enums,Interfaces which can be used application wide or you can define the extended models.</td></tr>
<tr><td>BoundedContext</td><td>This project contains DbContexts which are made based upon the defined modules which can work independently based upon its concept.</td></tr> 
<tr><td>UnitOfWork</td><td>This project contains `Uow` class for its respective BoundedContext to follow repository pattern which provides methods through which the data can be manipulated.</td></tr>
<tr><td>Infrastructure</td><td>This project covers necessary implemetations used for performing centralized operations like determining user access and access permission, email and sms provider, authorize token etc</td></tr>
<tr><td>Domain</td><td>Domain project contains Domain services which are made whenever `high complexity` APIs are made. You can define domain class in which can add your custom business logic.</td></tr>
<tr><td>Api</td><td>The Api project is the .Net core based web application which is the start of the project. It contains application settings, Controllers, necessery injected services like security, performance etc. The Api controllers are made in this project.</td></tr>
</table>

# Database Tables

## Main Database

The main database contains all the default tables which are necessary for fulfuling the basic functionalties like authorization and authentication, application objects, localization and globalization etc.. 

![Database Diagram](Images/database-diagram.png)
<p class="image-description">Main Database Tables.</p> 

**Global Configurations(Timezone and Locale)**
The information which is globally used in several components or units of such as modules of the application modules, application locales, application timezones, Object types and objects. 

<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>ApplicationObjectTypes</td><td>This table is used to store the key of the application object which is used in the application to store values of entities having less number of reccords,This is beneficial as you dont need to create a seperate table for them and complexity of the database also decreases, For example: gender, status.</td></tr>
<tr><td>ApplicationObjects</td><td>Contains application objects based upon its type mentioned in the above table.</td></tr> 
<tr><td>ModuleMasters</td><td>As every application have several units or modules based upon the service, They are defined in this table.</td></tr>
<tr><td>ApplicationModules</td><td>The modules having sub-modules/child modules are mapped into this table which are further used in accessing permission .</td></tr>
<tr><td>ApplicationTimeZones</td><td>It has inserted values of different timezones of the world from the IANA Database. Please refer <a class="redirect-link" href="https://www.iana.org/time-zones">IANA</a>.</td></tr>
<tr><td>ApplicationLocales</td><td>It has details of standard locales used in the world.</a>.</td></tr>
</table>


**Multilingual Management**

For an application to efficiently work in different regions, it is necessary to maintain its timezones and locales used. A multilingual application includes returning server validation messages,change the whole UI text based upon the selected language. For more information, Please refer <a class="redirect-link">localization-and-globalization</a>

<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>LanguageContentKeys</td><td>Stores language content key based upon which the multilingual data is entered. e.g:exceptionMessage.</td></tr>
<tr><td>LanguageContents</td><td>Stores language contents of different languages which are required in your application based upon the key globally in the application.</td></tr> 
<tr><td>ComponentLanguageContents</td><td>If the multilingual data is component specific, It is stored in component language contents.</td></tr>
</table>

**Access Management**

Information of JWT web token, users and its roles for performing authorization and authentication. Whenever a new request is made at the time of login the jwt web token is stored and authorization will require information which will be retrieved from the database.

<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>Users</td><td>Stores information about users of the application.</td></tr>
<tr><td>Roles</td><td>Stores different roles used in the application.</td></tr> 
<tr><td>RolePermissions</td><td>Stores access and rights based upon the role to the application modules.</td></tr>
<tr><td>UserRoles</td><td>Stores users and their respective roles.</td></tr>
</table>

## Log Database

The Log database is used for auditing and logging necessary information such as request logs, data entity auditing and exception logs etc..

![Database log](Images/database-log.png)

<p class="image-description">Log Database Tables.</p> 

**Exception and Request Logs**

<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>Exception Logs</td><td>Stores all types of exceptions that occur in the application.</td></tr>
<tr><td>Request Traces</td><td>Stores information about all the requests made to the APIs.</td></tr> 
</table>

**Data Entity Auditing**

<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>Audit Requests</td><td>Stores information about the requests based upon which the entity is modified.</td></tr>
<tr><td>Audit Records</td><td>Stores necessary information about the operation perfomed on the entity such as eventype and tablename on which the data entity value is modified.</td></tr> 
<tr><td>Audit RecordDetails</td><td>Stores information about the modified entity like old cloumn name, new column name.</td></tr> 
</table>



