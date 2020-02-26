---
title: Database Setup
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:database-setup
---

# Database Setup 

## Definition
This will add default tables, views and stored procedures in the database. For understnding the basic tables structure. Visit the <a class="redirect-link" href="/rx-web-core/quick-start/quick-start">Quick Start</a> Section. 

> This command requires a prerequisite that you have configured the main and log database connection string into the database.  

## Usage 

`````
rxwebcore --database-setup
`````

## Parameters

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>--database-setup</td><td>To setup the database according to the database connection details provided in the appsettings.json</td></tr>
</table>