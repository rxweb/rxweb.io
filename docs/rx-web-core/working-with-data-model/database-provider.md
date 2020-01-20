---
title: Database Provider
author: rxcontributorone
category: database-provider  
type:simple
linktitle:database-provider
---

# Database Provider

## Setup the Database Server
When it comes to working with data, Microsoft entity framework core provides many options where there are many arising factors such as it's supporting library and supported database engine. In our project we will use Sql server database engine, You can <a class="redirect-link" href="https://www.microsoft.com/en-in/sql-server/sql-server-downloads">download</a> the latest SQL Server database engine from the link, further it will required supported library <a class="redirect-link" href="https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer">SqlServer</a> for accessing the data which is described in the further sections. The project comes with all the resolved dependencies and necessary database objects such as tables, views and stored procedures. 

## Connect to the Database Server
After installing the SQL Server database engine, connecting to the database engine requires some information to be mentioned which is listed below: 

<ul class="bullet-list">
<li>Server Type</li>
<li>Server Name</li>
<li>Authentication</li>
</ul>

**Server Type**

As we are going to create databases and its data objects, we need to connect to a database engine hence we will mention the Server name as `Database Engine`.

**Server Name**

The Database Server name includes the name of the database server you want to connect. If it involves a database server then mention its Server Name and if you want to connect through your local system then you can access it using the IP of your system or your system's username.

**Authentication**

Authentication involves two alternates
1) windows Authentication
2) SQl Server Authentication 

> SQL Server Authentication involves login and password of the created login. To know more about creating logins in SQL Server visit <a class="redirect-link" href="https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-login?view=sql-server-ver15">Creating Logins</a>

![Database Connect](Images/database-connect.PNG)

<p class="image-description">Connecting to database engine.</p> 

## Creating Databases 
As we are aware of the databases which we create in our project and the tables which are generated in the database. Lets see the created main and log databases with the connection established.

![Database Examples](Images/database-examples.PNG)

## Connection Strings
Setting the connection strings in the application configurations using the connection as it is mentioned in the project creation section. 

<b>Windows based authentication connection string :</b>
<p style="font-style:italic;">Example :  data source=PC0001\\MSSQL2016;initial catalog=HumanResourceApplicationDb;persist security info=True; MultipleActiveResultSets=True;App=EntityFramework"</p>

<b>SQL user based authentication connection string :</b>
<p style="font-style:italic;">Example : data source=PC0001\\MSSQL2016;initial catalog=HumanResourceApplicationDb;persist security info=True;User Id=sa;Password=Admin;MultipleActiveResultSets=True;App=EntityFramework"</p>

