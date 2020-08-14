---
title: Quick Start
author: rxcontributorone
category: step-by-step-guide
subcategory : quick-start
type:simple
linktitle: quick-start
---

# Quick Start 
This section will guide you through everything you need to know from project setup to build the project. Before you begin you have to check in your machine the necessary applications are installed, if not installed then installed the same. 

Have a look below listed Applications:
<ul class="bullet-list-ordered">
  <li><a class="redirect-link" target="_blank" href="https://visualstudio.microsoft.com/downloads/">Visual Studio 2019 above 16.3.4</a></li> 
  <li><a class="redirect-link" target="_blank" href="https://dotnet.microsoft.com/download/dotnet-core/3.1/">.Net Core SDK 3.1</a></li>
</ul>

You will learn :

<ul class="bullet-list">
  <li class="overview-nav-item">Project Template Installation & Project Creation</li> 
  <li class="overview-nav-item">Rxwebcore cli installation and Database Setup</li>
  <li class="overview-nav-item">Examine the Project Structure and Database Tables</li>
  <li class="overview-nav-item">Run The Project</li>
</ul>

## Step 1 : Project Template Installation & Project Creation</h3>
Before creating a project you have to install the project template. There are two ways to install the template, you can opt as per your comfort.
 
<div component="app-quick-start" key="quick-start"></div> 

## Step 2 : RxWebCore CLI Installation and Database Setup

The CLI provides lots of features through scaffolding like generating different types of controllers, bounded context, setup the unit of work layer, domain class layer, enums according to the database values, generating models, initial database table setup which is optional etc.
I believe this is interesting :).

<video   controls>
<source src="assets/images/rxwebcore-cli-installation.mp4" type="video/mp4">
</video>
 
## Step 3 : Examine the Project Structure and Database Tables
 
### Examine the Project Structure

As RxWeb follows the practices of `Clean Architecture`, Based upon this the project structure is divided into several layers of Models, Domain services,Bounded context, Application core and API which adds the practices of seperation of concerns for simplification and maintanable code. 
The project solution contains six projects. They are : 
![Project Dependency](Images/dependency-chart1.png)

### Created Projects
<table class="table table-bordered table-striped">
<tr><th>Project</th><th>Description</th></tr>
<tr><td>Models</td><td>The primary purpose of this project is to define POCO models,Enums,Interfaces which can be used application wide or you can define the extended models.</td></tr>
<tr><td>BoundedContext</td><td>This project contains DbContexts which are made based upon the defined modules which can work independently based upon its concept.</td></tr> 
<tr><td>UnitOfWork</td><td>This project contains `Uow` class for its respective BoundedContext to follow repository pattern which provides methods through which the data can be manipulated.</td></tr>
<tr><td>Infrastructure</td><td>This project covers necessary implemetations used for performing centralized operations like determining user access and access permission, email and sms provider, authorize token etc</td></tr>
<tr><td>Domain</td><td>Domain project contains Domain services which are made whenever `high complexity` APIs are made. You can define domain class in which can add your custom business logic.</td></tr>
<tr><td>Api</td><td>The Api project is the .Net core based web application which is the start of the project. It contains application settings, Controllers, necessery injected services like security, performance etc. The Api controllers are made in this project.</td></tr>
</table>

## Database Tables
### 1) Main Database

The main database contains all the default tables which are necessary for fulfuling the basic functionalties like authorization and authentication, application objects, localization and globalization etc.. 
![Database Diagram](Images/database-diagram.png)

### Global Configurations(Timezone and Locale)
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

### Multilingual Management
For an application to efficiently work in different regions, it is necessary to maintain its timezones and locales used. A multilingual application includes returning server validation messages,change the whole UI text based upon the selected language. For more information, Please refer <a class="redirect-link">localization-and-globalization</a>
<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>LanguageContentKeys</td><td>Stores language content key based upon which the multilingual data is entered. e.g:exceptionMessage.</td></tr>
<tr><td>LanguageContents</td><td>Stores language contents of different languages which are required in your application based upon the key globally in the application.</td></tr> 
<tr><td>ComponentLanguageContents</td><td>If the multilingual data is component specific, It is stored in component language contents.</td></tr>
</table>

### Access Management
Information of JWT web token, users and its roles for performing authorization and authentication. Whenever a new request is made at the time of login the jwt web token is stored and authorization will require information which will be retrieved from the database.
<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>Users</td><td>Stores information about users of the application.</td></tr>
<tr><td>Roles</td><td>Stores different roles used in the application.</td></tr> 
<tr><td>RolePermissions</td><td>Stores access and rights based upon the role to the application modules.</td></tr>
<tr><td>UserRoles</td><td>Stores users and their respective roles.</td></tr>
</table>

### 2) Log Database
The Log database is used for auditing and logging necessary information such as request logs, data entity auditing and exception logs etc..
![Database log](Images/database-log.png)

### Exception and Request Logs
<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>Exception Logs</td><td>Stores all types of exceptions that occur in the application.</td></tr>
<tr><td>Request Traces</td><td>Stores information about all the requests made to the APIs.</td></tr> 
</table>

### Data Entity Auditing
<table class="table table-bordered table-striped">
<tr><th>Table Name</th><th>Description</th></tr>
<tr><td>Audit Requests</td><td>Stores information about the requests based upon which the entity is modified.</td></tr>
<tr><td>Audit Records</td><td>Stores necessary information about the operation perfomed on the entity such as eventype and tablename on which the data entity value is modified.</td></tr> 
<tr><td>Audit RecordDetails</td><td>Stores information about the modified entity like old cloumn name, new column name.</td></tr> 
</table>

## Step 4 : Run The Project
### Test The Authentication Api : 
After the project solution is successfully generated as per the mentioned project structure. After the project is successfully build, let's access the authentication api.
The first step is to hit the authentication api get method, it should be authorized through inserting the value in the authorize button and then after the post method is called. After the new token is generated it is authorized using the authorize button. 
> This is done to prevent brute force attacks.
<video  controls>
<source src="assets/images/build-project.mp4" type="video/mp4">
</video>
