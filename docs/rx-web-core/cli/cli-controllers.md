---
title: Creating Controllers
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:creatingcontrollers
---

# Creating Controllers

## Definition
Creates controllers used for accessing various types of API. There are the types of controller which are generated based upon the entity type and the operations to be performed.

## Usage 

`````
 rxwebcore --controller --&ltController_Type&gt --&ltConnection_Name&gt &ltController_Name&gt --uow &ltModule_Name&gt 
`````

## Parameters

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>--Controller</td><td>Creating New Controller</td></tr>
<tr><td>--Controller_Type</td><td>Specify the type of the controller</td></tr>
<tr><td>Controller_Name</td><td>Name of the controller</td></tr>
<tr><td>uow</td><td>Name of the uow</td></tr>
<tr><td>Module_Name</td><td>Name of the Module</td></tr>
</table>

## Examples

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