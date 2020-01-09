---
title: Project Creation
author: rxcontributorone
category: step-by-step-guide
type:simple
linktitle: project-creation
---

# Project Creation
In this section we discuss about the creation of project through rxwebcore cli and understand the created project structure and database tables. 

Let's consider a case of `HumanResourceApplication`, this application we will extend in our other sub-modules like multitenancy, multilingual management, data-validation, data-sanitization and many more extensive features with the optimum code in there respective sections of <a>EntityFrameworkCore</a>, Security, Performance, Data validation, Data Sanitization.   

> Before firing the below command there must be Database server having two blank databases. the Main database and Log database. The `Main` is used for your application specific data operations and `Log` database is used for Logging related information like Request Log, Exception Log and Entity Log. As the CLI will generate few necessary tables in both database which will be helpful for the project.

Lets understand the rxwebcore CLI command options for creating a project. 

`````js
rxwebcore --new &ltProject_Name&gt
`````
The above stated command represents that you can create a new project by specifying the project name through the `--new` option, As discussed above Let's create a Human Resource Application project with the name `HumanResourceApplication`, Fire Below command in your command prompt under respective folder where you want to create this project:

`````js
rxwebcore --new HumanResourceApplication
`````

By running this command. It will ask connection string of main and log database. The connection string should be in the format of :
Windows based authentication connection string :
Example :

SQL user based authentication connection string :
Example : 

>One question may arise, <b>Why I have to provide the both database connection string before creating a Project ?</b>
As the web server and database server is different and both are powerful in the respective area, hence we don't want to mingle up two things under one hood like database migration activities through the web project.

# Examine the Project Structure

As RxWeb follows the practices of `Clean Architecture`, Based upon this the project structure is divided into several layers of Models, domain services, Application core and API which adds the practices of seperation of concerns for simplification and maintanable code. 

The project solution contains six projects. They are : 

1. Models
2. BoundedContext 
3. UnitOfWork
4. Infrastructure
5. Domain
6. Api

# Models
The primary purpose of this project is to define POCO models/Enums/Interfaces which can be used in application wide. Some of the files/folders are already defined. Some of these folders and files are defined when you create the project.

# BoundedContext
This project contains BoundedContexts which are made based upon the defined modules. Each context can work independently based upon its 
concept. It has `MainSqlDbContext` which is used to resolve the database connection based upon the configuration of the app setting through the  GetConnection method of `BaseDbContext`. For performing multitenancy and connection resilency `BaseBoundedDbContext` is used. The Bounded context will inherit from `BaseBoundedDbContext` for resolving database configurations.

# Unit Of Work
This project contains `Uow` class for its respective BoundedContext to follow repository pattern which provides methods through which the data can be manipulated. It has `BaseUow` which uses the `IRepositoryProvider` and the `IDbContext` to provide the `CoreUnitOfWork` methods to the particular domain. Each domain contains a folder having Uow classes which are used in the controllers.   

# Infrastructure
This project covers methods of necessary actions and implementation which are used application wide like determining user access and access permission, email and sms provider, authorize token etc  

It contains default generated files which include:

* Proving application token using `ApplicationTokenProvider`.
* Get UserClaim of logged user with `AccessPermissionHandler`.
* Authorizing token using `TokenAuthorizer`.
* Module wise access of a user using `UserAccessConfigInfo`.

# Domain
Domain project contains Domain services which are made whenever `high complexity` APIs are made. This means that whenever a domain controller is made, it will make a domain class  for adding custom `business logic` of the domain which will be generated in the Domain project under its module's folder and its reference will be given in the controller.

# Api
The Api project is the .Net core based web application which is the start of the project. It contains application settings, Controllers, necessery injected services like security, performance etc.

* `app.settings.json` is the json configuration of the application in which database `connection string`, connection resilency configuration, MultiTenant details, security and other details are stored.
* `Controllers` folder contains rest APIs.
  It has `Core` folder having 
  1) `Authentication` Controller : Used for login(Verifying user), token generation.
  2) `Authorize` Controller : Used for get access modules(acess permissions, logout and refresh token)  

* Bootstrap contains implementations of `ConfigurationOptions`, `Performance`, `Security`, `Validations` etc 

# Database Tables

**Main Database**

The main database contains all the default tables which are necessary for fulfuling the basic functionalties like authorization and authentication, application objects, localization and globalization etc.. 

# Application Objects