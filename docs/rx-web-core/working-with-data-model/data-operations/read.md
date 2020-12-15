---
title: Read
author: rxcontributorone
category: working-with-data-model
subcategory: data-operations 
type:simple
linktitle:read
---
# Read

The repository methods works on single responsibilty principle that states that objects should have only one responsibilty. In our case the Repository methods are mainly used for performing read operations which allows us to seperate the load of read and write operations which results into high speed and performance.

It contains methods which are used to fetch the records depending upon many scenarios such as All,Include, FindByInclude, FindByKey, Single,SingleOrDefault etc which are much similar to LINQ methods of c##.

Here are the examples of repository methods which `rxwebcore` using UserModule where we want to see the possible ways of performing read operations on `User`'s DbSet.

## All
It is used when you want to retreive all the records of the entity.

````js
public IEnumerable&ltUser&gt Get() 
{
  return UserUow.Repository&ltUser&gt().All();
}
````

## AllAsync
It is used when you want to retreive all the records of the entity asynchronously.

````js
    public async Task&ltIEnumerable&ltUser&gt&gt AllAsync()
    {
        return await UserUow.Repository&ltUser&gt().AllAsync();
    }
````

## AllInclude
It is used when you want include data of the reference entity in the result set. 

````js
    public IEnumerable&ltUser&gt AllInclude()
    {
        return UserUow.Repository&ltUser&gt().AllInclude(t =&gt t.CompanyMaster);
    }
````

## AllIncludeAsync
It is used when you want include data of the reference entity in the result set asynchronously. 

````js
    public async Task&ltIEnumerable&ltUser&gt&gt AllIncludeAsync()
    {
        return await UserUow.Repository&ltUser&gt().AllInclude(t =&gt t.CompanyMaster);
    }
````

## Count
It is used to get count of data in the list of entity based upon condition.

````js
    public int Count()
    {
        var count = UserUow.Repository&ltUser&gt().Count(a =&gt a.LastName == "Christian");
        return count;
    }
````

## FindBy
It is used to find the element based upon condition.

````js
    public IEnumerable&ltUser&gt FindBy()
    {
        return UserUow.Repository&ltUser&gt().FindBy(t =&gt t.LastName == "Christian"); ;
    }
````    
## FindByAsync
It is used to find the element based upon condition asynchronously.

````js
    public async Task&ltIEnumerable&ltUser&gt&gt FindByAsync()
    {
        return await UserUow.Repository&ltUser&gt().FindByAsync(t =&gt t.LastName == "Doe");
    }
````

## FindByInclude
It is used to find the element based upon condition and include data of reference entity into the resultset.

````js
    public IEnumerable&ltUser&gt FindByInclude()
    {
        return UserUow.Repository&ltUser&gt().FindByInclude(t =&gt t.LastName == "Doe", t =&gt t.CompanyMaster);
    }
````

## FindByIncludeAsync
It is used to find the element based upon condition and include data of reference entity into the resultset asynchronously.

````js
    public async Task&ltIEnumerable&ltUser&gt&gt FindByIncludeAsync()
    {
        return await UserUow.Repository&ltUser&gt().FindByIncludeAsync(t =&gt t.LastName == "Doe", t =&gt t.CompanyMaster);
    }
````

## FindByKey
It is used to find element based upon the key.

````js
    public User FindByKey()
    {
        return UserUow.Repository&ltUser&gt().FindByKey(2);
    }
````

## FindByKeyAsync
It is used to find element based upon the key asynchronously.

````js
    public async Task&ltUser&gt FindByKeyAsync()
    {
        return await UserUow.Repository&ltUser&gt().FindByKeyAsync(2);
    }
````

## First
It retrieves the first element in the list based on the given condition.

````js
    public User First()
    {
        return UserUow.Repository&ltUser&gt().First(a =&gt a.LastName == "Doe");
    }
````

## FirstAsync
It retrieves the first element in the list which fulfiles the given condition asynchronously.

````js
    public async Task&ltUser&gt FirstAsync()
    {
        return await UserUow.Repository&ltUser&gt().FirstAsync(a =&gt a.LastName == "Doe");
    }
````

## FirstOrDefault
It retrieves the first element in the list which fulfiles the given condition if not then returns the default value as resultset .

````js
    public User FirstOrDefault()
    {
        return UserUow.Repository&ltUser&gt().FirstOrDefault(a =&gt a.LastName == "Doe");
    }
````
## FirstOrDefaultAsync
It retrieves the first element in the list which fulfiles the given condition if not then returns the default value as resultset asynchronously.

````js
    public async Task&ltUser&gt FirstOrDefaultAsync()
    {
        return await UserUow.Repository&ltUser&gt().FirstOrDefaultAsync(a =&gt a.LastName == "Doe");
    }
````

## Last
It retrieves the last element in the list which fulfiles the given condition.

````js
    public User Last()
    {
        return UserUow.Repository&ltUser&gt().Last(a =&gt a.LastName == "Christian");
    }
```

## LastAsync
It retrieves the last element in the list which fulfiles the given condition asynchronously.

````js
    public async Task&ltUser&gt LastAsync()
    {
        return await UserUow.Repository&ltUser&gt().LastAsync(a =&gt a.LastName == "Christian");
    }
````

## LastOrDefault
It retrieves the last element in the list which fulfiles the given condition if not then returns the default value as resultset.

````js
    public User LastOrDefault()
    {
        return UserUow.Repository&ltUser&gt().LastOrDefault(a =&gt a.LastName == "Doe");
    }
````

## LastOrDefaultAsync
It retrieves the last element in the list which fulfiles the given condition if not then returns the default value as resultset asynchronously.

````js
    public async Task&ltUser&gt LastOrDefaultAsync()
    {
        return await UserUow.Repository&ltUser&gt().LastOrDefaultAsync(a =&gt a.LastName == "Doe");
    }
````

## Queryable
It is used to design a raw query to retrieve the required resultset.

````js
    public IQueryable&ltUser&gt Queryable()
    {
        return UserUow.Repository&ltUser&gt().Queryable().Where(a =&gt a.LastName == "Doe");
    }
````

## Single
It retrieves the single element in the list which fulfiles the given condition.

````js
    public User Single()
    {
        return UserUow.Repository&ltUser&gt().Single(a =&gt a.FirstName == "John");
    }
````

## SingleAsync
It retrieves the single element in the list which fulfiles the given condition asynchronously.

````js
    public async Task&ltUser&gt SingleAsync()
    {
        return await UserUow.Repository&ltUser&gt().SingleAsync(a =&gt a.FirstName == "John");
    }
````

## SingleOrDefault
It retrieves the single element in the list which fulfiles the given condition if not then returns the default value as resultset.

````js
    public User SingleOrDefault()
    {
        return UserUow.Repository&ltUser&gt().SingleOrDefault(a =&gt a.FirstName == "terrance");
    }
````

## SingleOrDefaultAsync
It retrieves the single element in the list which fulfiles the given condition if not then returns the default value as resultset asynchronously.

````js
    public async Task&ltUser&gt SingleOrDefaultAsync()
    {
        return await UserUow.Repository&ltUser&gt().SingleOrDefaultAsync(a =&gt a.FirstName == "terrance");
    }
````

