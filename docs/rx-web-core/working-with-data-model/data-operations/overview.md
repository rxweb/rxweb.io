---
title: Brief
author: rxcontributorone
category: working-with-data-model
subcategory: data-operations 
type:simple
linktitle:brief
---
# Breif

The UnitOfWork pattern is vast and we can use in multiple areas, To know more about the UnitOfWork pattern, Please refer the Martin Fowler Article, This is awesome.<a class="redirect-link" href="https://martinfowler.com/eaaCatalog/unitOfWork.html">Unit of work</a> 

In our case, This mainly focuses on handling the database operations on data objects. As you know the framework is using the ORM of EntityFramework Core, this also follows the same practice through the DbContext class. Internally we are using the same DbContext object to performing the database opertation To handle the database operations and on top of it this manages some additional things like Entity Audit Logging which keeps a trace of every change that has been made to the entity.

Uow handles the data objects by changing its state based upon the method performed and makes a call to the database when the `commit` method is called which results to faster execution.   

Here is an example of Uow class which is generated when you have created the BoundedContext of the respective module:

# Example

**UserUow.cs**

````js
public class UserUow : BaseUow, IUserUow
{
    public UserUow(IUserContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
}

public interface IUserUow : ICoreUnitOfWork { }
````


