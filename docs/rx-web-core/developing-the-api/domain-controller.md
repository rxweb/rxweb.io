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

# Generate a Domain Controller

To create a domain controller, open the `Package Manager Console` and run the following command.

> rxwebcore --controller --domain --main &ltController_Name&gt --uow &ltModule_Name&gt

Lets consider a scenario where you want to create a `UsersController` with high complexity true in the `UsersModule`, you have to write:

> rxwebcore --controller --domain --main Users --uow User

In the above command by writing --domain indicates its complexity high, Users is the controller name and User is the Module name. It will create a controller `UsersController` in `UsersModule` in Api folder of the project and `UsersDomain.cs` in the Domain folder of the project.

# Methods   

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

# Example
````js
    [ApiController]
    [Route("api/[controller]")]
	public class UsersController : BaseDomainController&ltUser&gt
    {
        public UsersController(IUserDomain domain):base(domain) {}
    }
````

The refered `IUserDomain` interface will be created  in  `UsersDomain.cs` in the Domain folder of the project where the business logic code will use methods of `Uow`.

````js
    public class UsersDomain : IUsersDomain
    {
        public UsersDomain(IUserUow uow) {
            this.Uow = uow;
        }

        public Task&ltobject&gt GetAsync(Dictionary&ltstring, object&gt parameters)
        {
            throw new NotImplementedException();
        }

        public Task&ltUser&gt GetBy(Dictionary&ltstring, object&gt parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet&ltstring&gt AddValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(User entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet&ltstring&gt UpdateValidation(User entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(User entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet&ltstring&gt DeleteValidation(Dictionary&ltstring, object&gt parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Dictionary&ltstring, object&gt parameters)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet&ltstring&gt ValidationMessages { get; set; } = new HashSet&ltstring&gt();
    }    
````


