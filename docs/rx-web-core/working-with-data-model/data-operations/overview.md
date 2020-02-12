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

## Example

**UserUow.cs**

````js
public class UserUow : BaseUow, IUserUow
{
    public UserUow(IUserContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
}

public interface IUserUow : ICoreUnitOfWork { }
````

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/HumanResourceApplication/HumanResourceApplication.UnitOfWork/Main/UserUow.cs"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>
