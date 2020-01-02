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

It contains methods which are used to fetch the records depending upon many scenarios such as All,Include, FindByInclude, FindByKey, Single,SingleOrDefault etc which are much similar to LINQ methods of c#.

Here are the examples of repository methods which `rxwebcore` using UserModule where we want to see the possible ways of performing read operations on `User`'s DbSet.

# All
It is used when you want to retreive all the records of the entity.

````js
	public IEnumerable<User> Get() 
	{
		return UserUow.Repository<User>().All();
    }
````


# AllAsync
It is used when you want to retreive all the records of the entity asynchronously.

````js
    public async Task<IEnumerable<User>> AllAsync()
    {
        return await UserUow.Repository<User>().AllAsync();
    }
````

# AllInclude
It is used when you want include data of the reference entity in the result set. 

````js
    public IEnumerable<User> AllInclude()
    {
        return UserUow.Repository<User>().AllInclude(t => t.CompanyMaster);
    }
````

# AllIncludeAsync
It is used when you want include data of the reference entity in the result set asynchronously. 

````js
    public async Task<IEnumerable<User>> AllIncludeAsync()
    {
        return await UserUow.Repository<User>().AllInclude(t => t.CompanyMaster);
    }
````

# Count
It is used to get count of data in the list of entity based upon condition.

````js
    public int Count()
    {
        var count = UserUow.Repository<User>().Count(a => a.LastName == "Christian");
        return count;
    }
````

# FindBy
It is used to find the element based upon condition.

````js
    public IEnumerable<User> FindBy()
    {
        return UserUow.Repository<User>().FindBy(t => t.LastName == "Christian"); ;
    }
````    
# FindByAsync
It is used to find the element based upon condition asynchronously.

````js
    public async Task<IEnumerable<User>> FindByAsync()
    {
        return await UserUow.Repository<User>().FindByAsync(t => t.LastName == "Doe");
    }
````

# FindByInclude
It is used to find the element based upon condition and include data of reference entity into the resultset.

````js
    public IEnumerable<User> FindByInclude()
    {
        return UserUow.Repository<User>().FindByInclude(t => t.LastName == "Doe", t => t.CompanyMaster);
    }
````

# FindByIncludeAsync
It is used to find the element based upon condition and include data of reference entity into the resultset asynchronously.

````js
    public async Task<IEnumerable<User>> FindByIncludeAsync()
    {
        return await UserUow.Repository<User>().FindByIncludeAsync(t => t.LastName == "Doe", t => t.CompanyMaster);
    }
````

# FindByKey
It is used to find element based upon the key.

````js
    public User FindByKey()
    {
        return UserUow.Repository<User>().FindByKey(2);
    }
````

# FindByKeyAsync
It is used to find element based upon the key asynchronously.

````js
    public async Task<User> FindByKeyAsync()
    {
        return await UserUow.Repository<User>().FindByKeyAsync(2);
    }
````

# First
It retrieves the first element in the list based on the given condition.

````js
    public User First()
    {
        return UserUow.Repository<User>().First(a => a.LastName == "Doe");
    }
````

# FirstAsync
It retrieves the first element in the list which fulfiles the given condition asynchronously.

````js
    public async Task<User> FirstAsync()
    {
        return await UserUow.Repository<User>().FirstAsync(a => a.LastName == "Doe");
    }
````

# FirstOrDefault
It retrieves the first element in the list which fulfiles the given condition if not then returns the default value as resultset .

````js
    public User FirstOrDefault()
    {
        return UserUow.Repository<User>().FirstOrDefault(a => a.LastName == "Doe");
    }
````
# FirstOrDefaultAsync
It retrieves the first element in the list which fulfiles the given condition if not then returns the default value as resultset asynchronously.

````js
    public async Task<User> FirstOrDefaultAsync()
    {
        return await UserUow.Repository<User>().FirstOrDefaultAsync(a => a.LastName == "Doe");
    }
````

# Last
It retrieves the last element in the list which fulfiles the given condition.

````js
    public User Last()
    {
        return UserUow.Repository<User>().Last(a => a.LastName == "Christian");
    }
````

# LastAsync
It retrieves the last element in the list which fulfiles the given condition asynchronously.

````js
    public async Task<User> LastAsync()
    {
        return await UserUow.Repository<User>().LastAsync(a => a.LastName == "Christian");
    }
````

# LastOrDefault
It retrieves the last element in the list which fulfiles the given condition if not then returns the default value as resultset.

````js
    public User LastOrDefault()
    {
        return UserUow.Repository<User>().LastOrDefault(a => a.LastName == "Doe");
    }
````

# LastOrDefaultAsync
It retrieves the last element in the list which fulfiles the given condition if not then returns the default value as resultset asynchronously.

````js
    public async Task<User> LastOrDefaultAsync()
    {
        return await UserUow.Repository<User>().LastOrDefaultAsync(a => a.LastName == "Doe");
    }
````

# Queryable
It is used to design a raw query to retrieve the required resultset.

````js
    public IQueryable<User> Queryable()
    {
        return UserUow.Repository<User>().Queryable().Where(a => a.LastName == "Doe");
    }
````

# Single
It retrieves the single element in the list which fulfiles the given condition.

````js
    public User Single()
    {
        return UserUow.Repository<User>().Single(a => a.FirstName == "John");
    }
````

# SingleAsync
It retrieves the single element in the list which fulfiles the given condition asynchronously.

````js
    public async Task<User> SingleAsync()
    {
        return await UserUow.Repository<User>().SingleAsync(a => a.FirstName == "John");
    }
````

# SingleOrDefault
It retrieves the single element in the list which fulfiles the given condition if not then returns the default value as resultset.

````js
    public User SingleOrDefault()
    {
        return UserUow.Repository<User>().SingleOrDefault(a => a.FirstName == "terrance");
    }
````

# SingleOrDefaultAsync
It retrieves the single element in the list which fulfiles the given condition if not then returns the default value as resultset asynchronously.

````js
    public async Task<User> SingleOrDefaultAsync()
    {
        return await UserUow.Repository<User>().SingleOrDefaultAsync(a => a.FirstName == "terrance");
    }
````

