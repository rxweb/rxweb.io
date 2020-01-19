---
title: Authorization
author: rxcontributorone
category: security
type:simple
linktitle:authorization
---
# Authorization

`Authorization` is a method of adjudging which user is able to do what. It uses `authentication` for identifying the user, It is done using role based authorization mechanism through which the access modules of the user is determined based upon role where rules are maintained in the database.

# Role Based Authorization.
Role based authorization is a mechanism through which we determine that which user can have which acess for what module. For example, the admin user has the right to add elements, read elements, edit elements and delete elements and a non admin user has some specific rights based upon the user permissions which is managed in `RolePermissions` table where Role is defined from `Roles`.

Roles Table:
It contains various roles of the application which will be assigned to every user accessing the application.

<table class="table table-bordered">
<tr><th>RoleId</th><th>RoleName</th></tr>
<tr><td>1</td><td>Admin</td></tr>
<tr><td>2</td><td>HR</td></tr>
</table>

RolePermissions Table:
The roles and their respective permissions are stored in this table with its respective permissions of the read and write actions. If the user has one or more roles defined in the application, the permission priority is set accordingly for adjuding access rights.

<table class="table table-bordered">
<tr><th>RolePermissionId</th><th>RoleId</th><th>CanView</th><th>CanAdd</th><th>CanEdit</th><th>CanDelete</th><th>PermissionPriority</th></tr>
<tr><td>1</td><td>1</td><td>True</td><td>True</td><td>True</td><td>True</td><td>NULL</td></tr>
<tr><td>2</td><td>2</td><td>True</td><td>False</td><td>False</td><td>False</td><td>NULLs</td></tr>
</table>

Based upon the RoleId and ApplicationModuleId it will retrieve the information about which user has how much access of which module based upon the role defined in Roles Table. 
The application module in `RolePermissions` table is a FK reference from `ApplicationModules` table

ApplicationModules Table:
A master module may have different modules which can be considered as child modules or sub-modules which are mapped into this table. Here the `ParentApplicationModuleId` refers as a reference of the ModuleMasters table.

<table class="table table-bordered">
<tr><th>ApplicationModuleId</th><th>ModuleMasterId</th><th>ParentApplicationModuleId</th></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>

The Module is defined in `ModuleMasters` Table

ModuleMasters Table: 
This table contains application modules which are defined during the start of the project.

<table class="table table-bordered">
<tr><th>ModuleMasterId</th><th>ModuleMasterName</th><th>StatusId</th></tr>
<tr><td>1</td><td>Resource</td><td>1</td></tr>
</table>

UserRoles Table : 
This table contains mapping of users and their respective roles.

<table class="table table-bordered">
<tr><th>UserRoleId</th><th>UserId</th><th>RoleId</th></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>

## Access
It is done using `Access` in which id of the application module is passed. Through which it will execute authorization based upon which the user rights are determined.

````js
    [ApiController]
    [Route("api/[controller]")]
	[Access(1)]
	public class UsersController : BaseController<User,vUsers,vUserRecords>
    {
        public UsersController(IUserUow uow):base(uow) {}
    }
````        

To add authorization in the controller using access, the following command is used:

> -- rxwebcore --controller --basic --main Users --uow --User --access 1

In this command `Users` is the controller name, `User` is the module and 1 is the application module Id retrieved from the database. 

## AllowAnonymous

When you want to by-pass the controller without any authorization when you want any user to access the specific action. For example: If you have a scenario where you want to by-pass the post action of registeration.

As per the below scenario it will allow any user to access this `Post` method and allow new user to register.  

````js
   [HttpGet]
   [AllowAnonymous]
   public async Task&gtIActionResult&lt Get()
   {
        var token = await ApplicationTokenProvider.GetTokenAsync(new vUser { UserId = 0, ApplicationTimeZoneName = string.Empty, LanguageCode = string.Empty });
        return Ok(token);
    }
````

## AllowAnonymousUser

When you want to by-pass the api without knowing whether who the user but authorization token is required, In other words adding `AllowAnonymousUser` requires a authorization bearer before user logged in.

````js
        [HttpPost]
        [AllowAnonymousUser]
        public async Task&gtIActionResult&lt Post(AuthenticationModel authentication)
        {
            var user = await LoginUow.Repository&gtvUser&lt().SingleOrDefaultAsync(t => t.UserName == authentication.UserName && !t.LoginBlocked);
            if (user != null && PasswordHash.VerifySignature(authentication.Password, user.Password, user.Salt))
            {
                var token = await ApplicationTokenProvider.GetTokenAsync(user);
                return Ok(token);
            }
            else
                return BadRequest();
        }
````
    