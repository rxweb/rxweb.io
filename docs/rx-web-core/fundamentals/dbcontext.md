---
title: DbContext
author: rxcontributorone
category: rxwebcore
subcategory: fundamentals
type:simple
linktitle:dbcontext
--- 

# DbContextServices
It is used to add DbContextServices for the database connections that are established in the application using the `IServiceCollection` instance.
This instance is used to add the database context of the sql context for each database connection

````js
 public static class AddDbContextExtension
    {
        public static void AddDbContextService(this IServiceCollection serviceCollection)
        {
		#region SqlDbContext
		serviceCollection.AddDbContext<MainSqlDbContext>();
        serviceCollection.AddScoped<IMainDatabaseFacade, MainSqlDbContext>();
        serviceCollection.AddDbContext<LogSqlDbContext>();
        serviceCollection.AddScoped<ILogDatabaseFacade, LogSqlDbContext>();
        #endregion SqlDbContext         
        }
    }
````

In our project main and log database connections are established and they are configured here. This file named `AddDbContext.cs` can be found under bootstrap folder of the api project.