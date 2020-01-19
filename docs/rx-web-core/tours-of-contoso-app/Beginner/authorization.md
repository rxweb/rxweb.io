---
title: Authorization
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Authorization

Authorization refers to determination of access rights of a particular user. In our application we will implement authorization using Role Based Authorization mechanism.
Once the user gets logged in to the Contoso Application, based upon the user information the access of the application modules are known through the role of the user. For example : If admin user has logged in, it will have read and write permissions to the departments module and if the student user has logged in, it will have only read access to the department module.  

Lets see how this is maintained in the application. 

In our `ContosoApplicationDb` database after the cli command for database setup is executed, The tables which are generated will include tables of Roles, RolePermissions, ApplicationModules, ModuleMasters, User and UserRoles. We will specify the application modules of the users and their roles into their respective tables. Let's understand how the flow is carried on.

## Step 1
Insterting values into the database for user role permissions.

**ModuleMasters Table:** 
This table contains application modules which are defined during the start of the project.

<table class="table table-bordered">
<tr><th>ModuleMasterId</th><th>ModuleMasterName</th><th>StatusId</th></tr>
<tr><td>1</td><td>Student</td><td>1</td></tr>
</table>

**ApplicationModules Table:**
A master module may have different modules which can be considered as child modules or sub-modules which are mapped into this table. Here the `ParentApplicationModuleId` refers as a reference of the ModuleMasters table.

<table class="table table-bordered">
<tr><th>ApplicationModuleId</th><th>ModuleMasterId</th><th>ParentApplicationModuleId</th></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>

**Roles Table:**
It contains various roles of the application which will be assigned to every user accessing the application.

<table class="table table-bordered">
<tr><th>RoleId</th><th>RoleName</th></tr>
<tr><td>1</td><td>Admin</td></tr>
<tr><td>2</td><td>Student</td></tr>
</table>

**RolePermissions Table:**
The roles and their respective permissions are stored in this table with its respective permissions of the read and write actions. If the user has one or more roles defined in the application, the permission priority is set accordingly for adjuding access rights.

<table class="table table-bordered">
<tr><th>RolePermissionId</th><th>RoleId</th><th>CanView</th><th>CanAdd</th><th>CanEdit</th><th>CanDelete</th><th>PermissionPriority</th></tr>
<tr><td>1</td><td>1</td><td>True</td><td>True</td><td>True</td><td>True</td><td>NULL</td></tr>
<tr><td>2</td><td>2</td><td>True</td><td>False</td><td>False</td><td>False</td><td>NULLs</td></tr>
</table>

**UserRoles Table :** 
This table contains mapping of users and their respective roles.

<table class="table table-bordered">
<tr><th>UserRoleId</th><th>UserId</th><th>RoleId</th></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>

## Step 2
Authorizing The Controller

**access** 

To authorize the controller, `[access]` is used above the controller class along with its application module id.

To add authorization in the controller using access, the following command is used:

> -- rxwebcore --controller --basic --main Students --uow --Student --access 1

In this command `Students` is the controller name, `Student` is the module and 1 is the application module Id retrieved from the database. 

````js
    [ApiController]
    [Route("api/[controller]")]
	[Access(1)]
	public class StudentsController : BaseController<Student,vStudent,vStudentRecord>

    {
        public StudentsController(IMasterUow uow):base(uow) {}

    }
````    

**AllowAnonymous**

When you want to by-pass the controller without any authorization when you want any user to access the specific action. For example: If you have a scenario where you want to by-pass the post action of registeration.

As per the below scenario it will allow any user to access this `Post` method and allow new user to register.  

````js
   [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class StudentsController : BaseController<Student,vStudent,vStudentRecord>
    {
        public StudentsController(IMasterUow uow):base(uow) {}
    }
````