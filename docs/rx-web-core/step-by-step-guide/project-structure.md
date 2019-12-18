---
title: Project Structure
author: rxcontributorone
category: step-by-step-guide 
type:simple
linktitle:projectstructure 
---

As RxWeb follows the practices of `Clean Architecture`, Based upon this the project structure is divided into several layers of Models, domain services, Application core and API which adds the practices of seperation of concerns for simplification and maintanable code. 

The project solution contains six projects. They are : 

1. Models
2. BoundedContext 
3. UnitOfWork
4. Infrastructure
5. Domain
6. Api

# Models
The primary purpose of this project is to define POCO models/Enums/Interfaces which can be used in application wide. Some of the files/folders are already defined. Some of these folders and files are defined when you create the project. Let's see how many folders/files are available initially.

<table class="table table-bordered">
  <tr>
    <th>
      Folder Name
    </th>
    <th>
      Description
    </th>
  </tr>
  <tbody>
    <tr>
      <td>
        DbEntities
      </td>
      <td>
        All Database tables are transformed into the POCO models.
      </td>
    </tr>
    <tr>
      <td>
        ExtendedModels
      </td>
      <td>
        You can extend your POCO models, for example : `User` model contains the property of `Password`, but you want compare password property as well. The `ComparePassword` property you can define in the extended model of `User' with the `[NotMapped]` annotation otherwise entity framework core throws an error as the `ComparePassword` property is not in the table of `User`. 
      </td>
    </tr>
    <tr>
      <td>
        ViewModels
      </td>
      <td>
        In this folder you can define your custom model, which you want to use that model application wide.
      </td>
    </tr>
    <tr>
      <td>
        Enums
      </td>
      <td>
        You can define enums based upon your need and some of the enums are automatically generated which are defined in the table of `ApplicationObjectTypes` and the respective respective reference values are stored in the `ApplicationObjects`. for more information about these table you can refer the 'Database Information' page.
      </td>
    </tr>
</table>

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

# See Also