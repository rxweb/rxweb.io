---
title: Dependency Injection
author: rxcontributorone
category: rxwebcore
subcategory: fundamentals
type:simple
linktitle:dependency-injection
--- 

# Dependency Injection
Dependency Injection is resolved when any object of a service is gained with the help of a constructor of the class where the gained service is assigned to a field which is created into the class and then after used into the class whenever the service is required.

To achieve this principle the registration of this services during the start is done using the below two options:

The services that are registered into the `ConfigureServices` method of the startup.cs class contains two services used into the dependency injection.

<ul class="bullet-list">
  <li>SingletonService : `services.AddSingletonService();`</li> 
  <li>ScopedService : `services.AddScopedService();`</li>
</ul>

## SingletonServices
Using `AddSingleton` method creates a same instance of the services for all the requests, this instance is created when it is called for the first time and is used for lifetime. In our application it is mainly used for getting tenant database information and for retrieval of access permission of the user. It is added using an instance of  `IServiceCollection` instance which we have discussed in the previous section.

````js
public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection) {
            serviceCollection.AddSingleton(typeof(TenantDbConnectionInfo));
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
        }
    }
````    

This class is created in the file named `Singleton.cs` which is present in the bootstrap folder of the api folder. In the above code TenantDbConnectionInfo and UserAccessConfigInfo are classes which are used to retrieve information about their respective work area whenever the user logs in.

## ScopedServices
using `AddScoped` method creates a service instance based upon the client request. This instance is till the next request is made or in other words an instance is created for every individual client request. In our project, it is used for registering the ContextService(for bounded context and Uow) and DomainService(for domain classes)  whenever a new boundedContext is created, They are registered into this class 

> The ContextService and DomainService  which are added in Singleton class are automatically added into it whenever bounded context is created using CLI command.

````js
  public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<ILocalizationInfo, LocalizationInfo>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
			serviceCollection.AddScoped<IAuditLog, AuditLog>();
			serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();

            #region ContextService

                        serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
            #endregion ContextService



            #region DomainService
            
            #endregion DomainService
        }
    }

````

The above class is created in the file named `Scoped.cs` in the bootstrap folder of the Api project. 