---
title: Generated Database Tables
author: rxcontributorone
category: step-by-step-guide
type:simple
linktitle:databaseinformation
---

# Database Tables

**Main Database**

The main database contains all the default tables which are necessary for fulfuling the basic functionalties like authorization and authentication, application objects, localization and globalization etc.. 

# Application Objects
Some objects need to be stored in the database which are often used in application and its value is limited upto some number based upon the entity their values will be stored in ApplicationObjects as below and making a seperate table for storing the values of countries is not preferable in this case.Example : Status

**1. ApplicationObjectTypes**

Contains type of Application Objects like status, gender etc.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ApplicationObjectTypeId</td><td>int</td><td>PK</td></tr>
<tr><td>ApplicationObjectTypeName</td><td>varchar(100)</td><td>Name of the application Object Type.</td></tr> 
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr>
</table>

Inserted data of ApplicationObjectTypes: 

<table class="table table-bordered">
<tr><th>ApplicationObjectTypeId</th><th>ApplicationObjectTypeName</th><th>StatusId</th></tr>
<tr><td>1</td><td>Status</td><td>1</td></tr>
</table>

**2. ApplicationObjects**

Contains application objects based upon its type.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ApplicationObjectId</td><td>int</td><td>PK</td></tr>
<tr><td>ApplicationObjectTypeId</td><td>int</td><td>FK(ApplicationObjectTypes)</td></tr>
<tr><td>ApplicationObjectName</td><td>varchar(100)</td><td>Name of the application object.</td></tr> 
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr>
</table>

Inserted data of ApplicationObjects: 

<table class="table table-bordered">
<tr><th>ApplicationObjectId</th><th>ApplicationObjectTypeId</th><th>ApplicationObjectName</th><th>StatusId</th></tr>
<tr><td>1</td><td>1</td><td>Active</td><td>1</td></tr>
<tr><td>2</td><td>1</td><td>InActive</td><td>1</td></tr>
<tr><td>3</td><td>1</td><td>Blocked</td><td>1</td></tr>
</table>


## Application Modules 
To effectively manage functionalities of a large enterprise application, we need to break it into seperate units/modules and assign a particular task to each of them. As we have made a human resource enterprise application we take into consideration, three main modules of the application which are Resource Management, Candidate Module and User Module.

**3. ModuleMasters**

Contains information about application's master modules.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ModuleMasterId</td><td>int</td><td>PK</td></tr>
<tr><td>ModuleMasterName</td><td>varchar(100)</td><td>Name of the application module master.</td></tr> 
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr>
</table>

Inserted data of ModuleMasters: 

<table class="table table-bordered">
<tr><th>ModuleMasterId</th><th>ModuleMasterName</th><th>StatusId</th></tr>
<tr><td>1</td><td>Management</td><td>1</td></tr>
</table>

**4. ApplicationModules**

Contains information about all the modules used in the application.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ApplicationModuleId</td><td>int</td><td>PK</td></tr>
<tr><td>ModuleMasterId</td><td>int</td><td>FK(ModuleMasters).</td></tr> 
<tr><td>ParentApplicationModuleId</td><td>int</td><td>Id of parent application module in case of entering a child module</td></tr>
</table>

Inserted data of ApplicationModules: 

<table class="table table-bordered">
<tr><th>ApplicationModuleId</th><th>ModuleMasterId</th><th>ParentApplicationModuleId</th></tr>
<tr><td>1</td><td>1</td><td>NULL</td></tr>
</table>

## Localization and Globalization
For an application to efficiently work in different regions, it is necessary to maintain its timezones and locales used. A multilingual application includes returning server validation messages, change the whole UI text based upon the selected language. For more information, Please refer [localization-and-globalization]

**5. ApplicationTimeZones**

It has inserted values of different timezones of the world from the IANA Database. Please refer 
<a class="redirect-link" href="https://www.iana.org/time-zones">IANA</a>.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ApplicationTimeZoneId</td><td>int</td><td>PK</td></tr>
<tr><td>ApplicationTimeZoneName</td><td>nvarchar(100)</td><td>Name of the Application TimeZone</td></tr>
<tr><td>Comment</td><td>nvarchar(200)</td><td>Information related to Timezone</td></tr> 
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr>
</table>

Inserted data of ApplicationTimeZones: 

<table class="table table-bordered">
<tr><th>ApplicationTimeZoneId</th><th>ApplicationTimeZoneName</th><th>Comment</th><th>StatusId</th></tr>
<tr><td>1</td><td>America/Mexico_city</td><td>Central Time</td><td>1</td></tr>
</table>

**6. ApplicationLocales** 

It has details of standard locales used in the world.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ApplicationLocaleId</td><td>int</td><td>PK</td></tr>
<tr><td>LocaleCode</td><td>varchar(50)</td><td>Code of the locale</td></tr>
<tr><td>LocaleName</td><td>nvarchar(300)</td><td>Name of the locale</td></tr> 
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr>
</table>

Inserted data of ApplicationLocales: 

<table class="table table-bordered">
<tr><th>ApplicationLocaleId</th><th>LocaleCode</th><th>LocaleName</th><th>StatusId</th></tr>
<tr><td>241</td><td>en-US</td><td>English(United States)</td><td>1</td></tr>
</table>

**7. LanguageContentKeys**

Stores language content key based upon which the multilingual data is entered. e.g:exceptionMessage

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>LanguageContentKeyId</td><td>int</td><td>PK</td></tr>
<tr><td>KeyName</td><td>varchar(50)</td><td>Key/type of the language content</td></tr>
<tr><td>IsComponent</td><td>bit(300)</td><td>1 if the key is a component</td></tr> 
</table>

Inserted data of LanguageContentKeys: 

<table class="table table-bordered">
<tr><th>LanguageContentKeyId</th><th>KeyName</th><th>IsComponent</th></tr>
<tr><td>241</td><td>exceptionMessage</td><td>0</td></tr>
</table>

**8. LanguageContents**

Stores language contents of different languages which are required in your application based upon the key.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>LanguageContentId</td><td>int</td><td>PK</td></tr>
<tr><td>LanguageContentKeyId</td><td>int</td><td>FK(LanguageContentKeys)</td></tr>
<tr><td>ContentType</td><td>varchar(3)</td><td>Type of the content(global)</td></tr> 
<tr><td>En</td><td>varchar(max)</td><td>English value of the content</td></tr> 
<tr><td>Fr</td><td>varchar(max)</td><td>French value of the content</td></tr> 
</table>

Inserted data of LanguageContents: 

<table class="table table-bordered">
<tr><th>LanguageContentId</th><th>LanguageContentKeyId</th><th>ContentType</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>g</td><td>Invalid Credentails</td><td>NULL</td></tr>
</table>

**9. ComponentLanguageContents**

Stores multilingual language content component wise.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ComponentLanguageContentId</td><td>int</td><td>PK</td></tr>
<tr><td>ComponentKeyId</td><td>int</td><td>FK(LanguageContentKeys)</td></tr>
<tr><td>LanguageContentId</td><td>int</td><td>FK(LangaugeContents)</td></tr> 
<tr><td>En</td><td>varchar(max)</td><td>English value of the content</td></tr> 
<tr><td>Fr</td><td>varchar(max)</td><td>French value of the content</td></tr> 
</table>

Inserted data of ComponentLanguageContents: 

<table class="table table-bordered">
<tr><th>ComponentLanguageContentId</th><th>ComponentKeyId</th><th>LanguageContentId</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>1</td><td>Invalid Credentails</td><td>NULL</td></tr>
</table>

## Authentication and Authorization

Information of JWT web token, users and its roles for performing authorization and authentication. Whenever a new request is made at the time of login the jwt web token is stored and authorization will require information which will be retrieved from the database.

**10. ApplicationUsersToken** 

Stores information of web token which are generated when any request is made on login method.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>ApplicationUsersTokenId</td><td>int</td><td>PK</td></tr>
<tr><td>UserId</td><td>int</td><td>FK(Users)</td></tr>
<tr><td>SecurityKey</td><td>varchar(200)</td><td>Generated security key while the token is created</td></tr> 
<tr><td>JwtToken</td><td>varchar(max)</td><td>Generated Jwt web token</td></tr> 
<tr><td>AudienceType</td><td>varchar(50)</td><td>Type of the audience(web user or mobile user)</td></tr> 
<tr><td>CreatedDateTime</td><td>datetimeoffset(50)</td><td>created date and time of the web token</td></tr> 
</table>

Inserted data of ApplicationUsersToken: 

<table class="table table-bordered">
<tr><th>ApplicationUsersTokenId</th><th>UserId</th><th>SecurityKey</th><th>JwtToken</th><th>AudienceType</th><th>CreatedDateTime</th></tr>
<tr><td>1</td><td>1</td><td>0x2271A2EDF169C5B75291C06D9FC66A6....</td><td>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..</td><td>NULL</td><td>2019-06-28 06:13:52.327</td></tr>
</table>

**11. Users**

Stores information about users of the application.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>UserId</td><td>int</td><td>PK</td></tr>
<tr><td>ApplicationLocaleId</td><td>int</td><td>FK(ApplicationLocales)</td></tr>
<tr><td>ApplicationTimeZoneId</td><td>int</td><td>FK(ApplicationTimeZones)</td></tr> 
<tr><td>LanguageCode</td><td>varchar(3)</td><td>Code of the language based upon user's locale</td></tr> 
<tr><td>UserName</td><td>nvarchar(50)</td><td>Name of the user</td></tr> 
<tr><td>Password</td><td>binary(132)</td><td>Password of the user</td></tr> 
<tr><td>Salt</td><td>binary(140)</td><td>Salt key used to decrypt password</td></tr> 
<tr><td>LoginBlocked</td><td>bit</td><td>1 if the login is blocked</td></tr> 
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr> 
</table>

Inserted data of Users: 

<table class="table table-bordered">
<tr><th>UserId</th><th>ApplicationLocaleId</th><th>ApplicationTimeZoneId</th><th>LanguageCode</th><th>UserName</th><th>Password</th><th>Salt</th><th>LoginBlocked</th><th>StatusId</th></tr>
<tr><td>1</td><td>1</td><td>en</td><td>admin</td><td>0x01A508148A63F34..</td><td>0x454353354200...</td><td>0</td><td>1</td></tr>
</table>

**12. Roles**

Stores different roles used in the application

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>RoleId</td><td>int</td><td>PK</td></tr>
<tr><td>RoleName</td><td>varchar(50)</td><td>Name of the role</td></tr>
<tr><td>StatusId</td><td>int</td><td>FK(ApplicationObjects)</td></tr>
</table>

Inserted data of Roles: 

<table class="table table-bordered">
<tr><th>RoleId</th><th>RoleName</th></tr>
<tr><td>1</td><td>Admin</td></tr>
</table>

**13. RolePermissions**

Stores access and rights based upon the role to the application modules.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>RolePermissionId</td><td>int</td><td>PK</td></tr>
<tr><td>RoleId</td><td>int</td><td>FK(Roles)</td></tr>
<tr><td>ApplicationModuleId</td><td>int</td><td>FK(ApplicationModules)</td></tr>
<tr><td>CanView</td><td>bit</td><td>Rights to view</td></tr>
<tr><td>CanAdd</td><td>bit</td><td>Rights to add</td></tr>
<tr><td>CanEdit</td><td>bit</td><td>Rights to edit</td></tr>
<tr><td>CanDelete</td><td>bit</td><td>Rights to delete</td></tr>
</table>

Inserted data of RolePermissions: 

<table class="table table-bordered">
<tr><th>RolePermissionId</th><th>RoleId</th><th>ApplicationModuleId</th><th>CanView</th><th>CanAdd</th><th>CanEdit</th><th>CanDelete</th></tr>
<tr><td>1</td><td>1</td><td><td>1</td></td><td>True</td><td>True</td><td>True</td><td>True</td></tr>
<tr><td>2</td><td>2</td><td><td>1</td></td><td>True</td><td>False</td><td>False</td><td>False</td></tr>
</table>

**14. UserRoles**

Stores users and their respective roles.

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>DataType</th><th>Description</th></tr>
<tr><td>UserRoleId</td><td>int</td><td>PK</td></tr>
<tr><td>UserId</td><td>int</td><td>FK(Users)</td></tr>
<tr><td>RoleId</td><td>int</td><td>FK(Roles)</td></tr>
</table>

Inserted data of UserRoles: 

<table class="table table-bordered">
<tr><th>UserRoleId</th><th>UserId</th><th>RoleId</th></tr>
<tr><td>1</td><td>5</td><td>1</td></tr>
</table>