---
title: DomainController
author: rxcontributorone
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:domaincontroller
---
# Domain Controller

Some entities may involve complex logic while implementation of the methods in the API, When there is a lot of custom business logic required while executing the data objects a `DomainController` is made. When a domain controller is made it indicates that the complexity of the controller is high and it generates a seperate domain class where the logic is written and  it is refered in the controller class.

The controller must be inherited from the class `BaseDomainController` in which the entity name is passed as a parameter. The controller will have a predefined route which include the controller name. For example: `[Route("api/Users")]` 

Users Entity requires a custom logic to be added into it. For example it is having complex data entity implementation   

> Name of that basic controller must have a suffix "Controller". For example: `UsersController`.

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/HumanResourceApplication/HumanResourceApplication.Api/Controllers/Api/UserModule/UsersController.cs"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

## Generate a Domain Controller

To create a domain controller, open the `Package Manager Console` and run the following command.

> rxwebcore --controller --domain --main &ltController_Name&gt --uow &ltModule_Name&gt

Lets consider a scenario where you want to create a `UsersController` with high complexity true in the `UsersModule`, you have to write:

> rxwebcore --controller --domain --main Users --uow User

In the above command by writing --domain indicates its complexity high, Users is the controller name and User is the Module name. It will create a controller `UsersController` in `UsersModule` in Api folder of the project and `UsersDomain.cs` in the Domain folder of the project.

In this controller, the password and salt fields value are inserted using the `Encrypt` method of `IPasswordHash`. The below domain file contains the business logic of inserting and updating a user having password and salt in encrypted form in the database. 

## Methods   

<table class="table table-bordered">
<tr><th>Method</th><th>Description</th><th>Return Type</th><th>Request Params</th><th>Request Body</th><th>Response</th></tr>
<tr><td>GetAsync</td><td>Get all the objects of the entity</td><td>object</td><td> - </td><td> - </td><td>complete list of that entity</td></tr>
<tr><td>GetById</td><td>Get Object By Id</td><td>Entity_Name</td><td>Id of that entity which you want to get</td><td> - </td><td>Single entity based on the id</td></tr>
<tr><td>AddValidation</td><td>Adds validation for the particular entity</td><td>string</td><td>entity object</td><td> - </td><td>Added Validation</td></tr>
<tr><td>UpdateValidation</td><td>Updates validation for the particular entity</td><td>string</td><td>entity object</td><td> - </td><td>NoContent()</td></tr>
<tr><td>AddAsync</td><td>Adding objects of the particular entity</td><td>void</td><td>entity object</td><td> - </td><td>NoContent()</td></tr>
<tr><td>UpdateAsync</td><td>Updating objects of the particular entity</td><td>void</td><td>entity object</td><td> - </td><td>NoContent()</td></tr>
<tr><td>DeleteValidation</td><td>Deletes validations for the particular entity</td><td>void</td><td>entity object</td><td> - </td><td>NoContent()</td></tr>
<tr><td>DeleteAsync</td><td>deletes a particular entity</td><td>void</td><td>entity object</td><td> - </td><td>NoContent()</td></tr>
</table>

## Example
````js
    [ApiController]
    [Route("api/[controller]")]
	public class UsersController : BaseDomainController&ltUser&gt
    {
        public UsersController(IUserDomain domain):base(domain) {}
    }
````

The refered `IUserDomain` interface will be created  in  `UsersDomain.cs` in the Domain folder of the project where the business logic code will use methods of `Uow`.

> Type conversion of the password field will be managed by created a partial class of the user having a userPassword field of string data type having `[NotMapped]` annotation as below

````js
 public partial class User
    {        
        [NotMapped]
        public string UserPassword { get; set; }
    }
````

````js
    public class UserDomain : IUserDomain
    {
        private IPasswordHash PasswordHash { get; set; }
        public UserDomain(ILoginUow uow,IPasswordHash passwordHash) {
            this.Uow = uow;
            this.passwordHash = passwordHash;
        }

        public Task<object> GetAsync(User user)
        {
           var userList=(object) Uow.Repository<User>().AllInclude(p => p.UserRoles);
            return Task.FromResult(userList);
        }

        public Task<object> GetBy(User parameters)
        {
            var userList = (object)this.Uow.Repository<User>().SingleOrDefault(m => m.UserId == parameters.UserId);
            return Task.FromResult(userList);
        }
        

        public HashSet<string> AddValidation(User entity)
        {
            
            return ValidationMessages;
        }

        public async Task AddAsync(User entity)
        {
                       
            PasswordResult result = passwordHash.Encrypt(entity.UserPassword);
            entity.Password = result.Signature;
            entity.Salt = result.Salt;
            
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(User entity)
        {


            PasswordResult result = passwordHash.Encrypt(entity.UserPassword);
            entity.Password = result.Signature;
            entity.Salt = result.Salt;
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation( User parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(User parameters)
        {
           User user= Uow.Repository<User>().FirstOrDefault(p => p.UserId == parameters.UserId);
             Uow.RegisterDeletedAsync(user);
          return  Uow.CommitAsync();

        }

        public ILoginUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IUserDomain : ICoreDomain<User,User> { }   
````


