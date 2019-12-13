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

> dotnet install tool -g rxwebcore

## Commands : 

### Project Creation
To create a new project using rxwebcore CLI. Run this command 

> rxwebcore --add-project <Project_Name>

For more information on creating a project. Please refer <a class="redirect-link" href="\AspNetCore\step-by-step-guide\project-creation.html">Project Creation</a>

### Generating Models
This command will generate POCO model classes having database objects as properties. In this command --models denote generation of models, --<ConnectionStringName> is the name of the connection which is configured in `appsettings.json` as mentioned below. 

```js
"Database": {
      "ConnectionString": {
      "Main": Your main Db connection string,
	   "Log": Your log Db connection string,
    },
}
```

> rxwebcore --models --<ConnectionString_Name> 

### Generating Context
This command generates a bounded context where --context denotes making of a context, --main is the key of the connectionstring which is configured in the `appsetting.json` in connectionstring of the database configuration and mention the Context name based upon the module.

> rxwebcore --context --main <Context_Name>

Eg : rxwebcore --context --main Client

### Adding Single Model In Context

This command adds a single DbSet of the model name which is specified as model name(Including tables and views)  which is same as the name of Table.

> rxwebcore --context --main <Context_Name> --add-models <Model_Name> 

Eg : rxwebcore --context --main Client  --add-models Candidates

### Adding Multiple Tables In Context

This command adds a Multiple DbSets of the model name which is specified as model name which is same as the name of Table.

> rxwebcore --context --main <Context_Name> --add-models <Model_Name1>, <Model_Name2>

Eg : rxwebcore --context --main Client --add-models Candidates, Clients, Employees

### Generating Controllers
These are the types of controller which are generated based upon the entity type and the operations to be performed.

### Basic Controller
This command creates a basic controller which is used while performing simple data CRUD operations

> rxwebcore --controller --basic --main <Controller_Name> --uow <Module_Name> 

Eg : rxwebcore --controller --basic --main Candidates --uow Master
 
### Domain Controller
This command creates a domain controller which is used while performing complex data operations which requires some business logic 

> rxwebcore --controller --domain --main <Controller_Name> --uow <Module_Name>

Eg : rxwebcore --controller --domain --main UserRoles --uow Master 

### Lookup Controller
This command creates a controller for binding data in dropdown 

> rxwebcore --controller --lookup --main <Controller_Name> --uow <Module_Name>
  
Eg : rxwebcore --controller --lookup --main MasterLookUps --uow MasterLookUp 

### Add lookups in lookup controller 
Adding lookups in the controller:

> rxwebcore --controller --lookup --main <Country_Name> --uow <Module_Name> --add-lookups <Lookup>

As per this controller : 

> rxwebcore --controller --lookup --main CountryLookups --uow CountryLookup --add-lookups vCountryLookups

### Child Controller

1) Basic Controller :
This command creates a basic child controller 

> rxwebcore --controller --basic --main <Controller_Name> --uow <Module_Name> --parent Users

Eg : rxwebcore --controller --basic --main UserRoles --uow Master --parent Users

2) Domain Controller :
This command creates a domain child controller 

> rxwebcore --controller --domain --main <Controller_Name> --uow <Module_Name> --parent Users

Eg : rxwebcore --controller --domain --main UserRoles --uow Master --parent Users

### Search Controller 
This command creates a search controller with the following stored procedure. 

> rxwebcore --controller --search --main <Controller_Name> --spname <Name_of_storedprocedure>

Eg : rxwebcore --controller --search --main Persons --spname spPersons

### Add authorization to controller
This will add `[access]` annotation above the controller with the rights in respect to the application module. For more information about <a class="redirect-link" href="\AspNetCore\security\authorization.html">Authorization</a>

> rxwebcore --controller --<Controller_Type> --main <Controller_Name> --uow <Module_Name> --access <ApplicationModuleId>

Eg :  rxwebcore --controller --basic --main Candidates --uow Master --access 1

### Adding localization
This will add json files of the data of languages that are there in the database tables. For more information refer <a class="redirect-link" href="/localization-and-globalization/global-content.html">Globalization and Localization</a>

> rxwebcore --localization --main 

### Devops

> rxwebcore --dev-ops

Information coming soon