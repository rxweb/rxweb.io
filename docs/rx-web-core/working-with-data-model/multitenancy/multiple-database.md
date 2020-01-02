---
title: Multiple Database
author: rxcontributorone
category: working-with-data-model
subcategory: multitenancy
type:simple
linktitle:multipledatabase
---
# Multiple Database

Multitenancy with multiple databases means keeping seperate database each tenant wise, A seperate database is made for each organization for storing its data. It is useful for organizations having large number of employees.   

# Step 1 : 
Create a database named `HumanResourceApplicationAdminDb` and create a table named `MultiTenants`

<table class="table table-bordered">
<tr><th>MultiTenantId</th><th>HostUri</th><th>ConnectionName</th><th>ConnectionString</th></tr>
<tr><td>1</td><td>localhost:44395</td><td>Main</td><td>Your connection string</td></tr>
</table>

# Step 2 : 
Run cli command   

````js
rxwebcore --add-feature --multi-tenant database
````

# Step 3 : 
Add the connectionString of admin in `appsettings.json` and remove main ConnectionString from it.

The data operations will be further done according to the connection established based upon the AdminDb configuration. 


