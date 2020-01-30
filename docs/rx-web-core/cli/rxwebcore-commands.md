---
title: rxweb core commands
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:rxwebcorecommands
---

# rxwebcore command line interface(CLI) commands:
rxwebcore commands are used for several operation in a .NET Core such as creating project, scaffolding unit of work, contexts, APIs and adding models.

## Installation :
To use rxwebcore commands using package manager console, you must install `rxwebcore` globally using this command:

`````
 dotnet install tool -g rxwebcore
`````

## Commands : 

### Project Creation
To create a new project using rxwebcore CLI. Run this command 

`````
 dotnet new rxwebapi --name &ltProject_Name&gt
`````

For more information on creating a project. Please refer <a class="redirect-link" href="/rx-web-core/step-by-step-guide/overview">Project Creation</a>

### Generating Models
This command will generate POCO model classes having database objects as properties. In this command --models denote generation of models, <b>--&ltConnectionStringName&gt</b> is the name of the connection which is configured in `appsettings.json` as mentioned below. 

`````
"Database": {
      "ConnectionString": {
      "Main": Your main Db connection string,
	   "Log": Your log Db connection string,
    },
}
`````

`````
 rxwebcore --models --&ltConnectionString_Name&gt
`````

### Generating Context
This command generates a bounded context where --context denotes making of a context, --main is the key of the connectionstring which is configured in the `appsetting.json` in connectionstring of the database configuration and mention the Context name based upon the module.

`````
 rxwebcore --context --main &ltContext_Name&gt
`````

`````
Eg : rxwebcore --context --main Client
`````

### Adding Single Model In Context

This command adds a single DbSet of the model name which is specified as model name(Including tables and views)  which is same as the name of Table.

`````
rxwebcore --context --main &ltContext_Name&gt --add-models &ltModel_Name&gt 
`````

`````
Eg : rxwebcore --context --main Client  --add-models Candidates
`````

### Adding Multiple Tables In Context

This command adds a Multiple DbSets of the model name which is specified as model name which is same as the name of Table.

`````
&gt rxwebcore --context --main &ltContext_Name&gt --add-models &ltModel_Name1&gt, &ltModel_Name2&gt
`````

`````
Eg : rxwebcore --context --main Client --add-models Candidates, Clients, Employees
`````

### Generating Controllers
These are the types of controller which are generated based upon the entity type and the operations to be performed.

### Basic Controller
This command creates a basic controller which is used while performing simple data CRUD operations

`````
&gt rxwebcore --controller --basic --main &ltController_Name&gt --uow &ltModule_Name&gt 
`````

`````
Eg : rxwebcore --controller --basic --main Candidates --uow Master
````` 

### Domain Controller
This command creates a domain controller which is used while performing complex data operations which requires some business logic 

`````js
&gt rxwebcore --controller --domain --main &ltController_Name&gt --uow &ltModule_Name&gt
`````

`````js
Eg : rxwebcore --controller --domain --main UserRoles --uow Master 
`````

### Lookup Controller
This command creates a controller for binding data in dropdown 

`````js
&gt rxwebcore --controller --lookup --main &ltController_Name&gt --uow &ltModule_Name&gt
`````

`````js
Eg : rxwebcore --controller --lookup --main MasterLookUps --uow MasterLookUp 
`````

### Add lookups in lookup controller 
Adding lookups in the controller:

`````js
&gt rxwebcore --controller --lookup --main &ltCountry_Name&gt --uow &ltModule_Name&gt --add-lookups &ltLookup&gt
`````

As per this controller : 

`````js
&gt rxwebcore --controller --lookup --main CountryLookups --uow CountryLookup --add-lookups vCountryLookups
`````

### Child Controller

1) Basic Controller :
This command creates a basic child controller 

`````js
&gt rxwebcore --controller --basic --main &ltController_Name&gt --uow &ltModule_Name&gt --parent Users
`````

`````js
Eg : rxwebcore --controller --basic --main UserRoles --uow Master --parent Users
`````

2) Domain Controller :
This command creates a domain child controller 

`````js
&gt rxwebcore --controller --domain --main &ltController_Name&gt --uow &ltModule_Name&gt --parent Users
`````

`````js
Eg : rxwebcore --controller --domain --main UserRoles --uow Master --parent Users
`````

### Search Controller 
This command creates a search controller with the following stored procedure. 

`````js
&gt rxwebcore --controller --search --main &ltController_Name&gt --spname &ltName_of_storedprocedure&gt
`````

`````js
Eg : rxwebcore --controller --search --main Persons --spname spPersons
`````

### Add authorization to controller
This will add `[access]` annotation above the controller with the rights in respect to the application module. For more information about &lta class="redirect-link" href="\AspNetCore\security\authorization.html"&gtAuthorization&lt/a&gt

`````js
&gt rxwebcore --controller --&ltController_Type&gt --main &ltController_Name&gt --uow &ltModule_Name&gt --access &ltApplicationModuleId&gt
`````

`````js
Eg :  rxwebcore --controller --basic --main Candidates --uow Master --access 1
`````

### Adding localization
This will add json files of the data of languages that are there in the database tables. For more information refer &lta class="redirect-link" href="/localization-and-globalization/global-content.html"&gtGlobalization and Localization&lt/a&gt

`````js
&gt rxwebcore --localization --main 
`````

### Devops

`````js
&gt rxwebcore --dev-ops
`````

Information coming soon