---
title: Configuration Options
author: rxcontributorone
category: rxwebcore
subcategory: fundamentals
type:simple
linktitle:configuration-options
--- 

# Configuration Options
This is used to establish the app configuration which is set in the configuration providers of the application in the file of `appsettings.json`. 
You can get the configuration which you want to set globally in the application in the configuration file using the `GetSection` under the `Microsoft.Extensions.Configuration`. 

Here are the default Configurations which are established during project creation :

They are configured using the `IServiceCollection` instance which retrieves the service information using the `Configure` method. For more information about this interface visit <a class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection?view=dotnet-plat-ext-3.1">IServiceCollection Interface</a>

````js
    public static class ConfigurationOptions
    {
        public static void AddConfigurationOptions(this IServiceCollection serviceCollection, IConfiguration configuration) {
            serviceCollection.Configure&ltDatabaseConfig&gt(configuration.GetSection("Database"));
			serviceCollection.Configure&ltSecurityConfig&gt(configuration.GetSection("Security"));
        }
    }
````

This file named `ConfigurationOptions.cs` can be found under bootstrap folder of Api folder.

In our project, the configuration are set `appsettings.json` file in key and value pair while are resolved into this file.
The default configurations present into this file are as follows:

<b>Database</b>
 <ol class="bullet-list-ordered">
  <li>ConnectionString</li> 
  <li>MultiTenant</li>
  <li>CommandTimeout</li>
  <li>ConnectionResilency</li>
</ol>  

<b>Security</b>
 <ol class="bullet-list-ordered">
  <li>AllowedHosts</li> 
  <li>AllowedIps</li>
</ol>  