---
title: Creating Models
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:createmodels
---

# Creating Models

## Definition
This command will generate POCO model classes having database objects as properties. In this command --models denote generation of models, <b>--&ltConnectionStringName&gt</b> is the name of the connection which is configured in `appsettings.json` as mentioned below. 

`````
"Database": {
      "ConnectionString": {
      "Main": Your main Db connection string,
      "Log": Your log Db connection string,
    },
}
`````

## Usage 

`````
 rxwebcore --models --&ltConnectionString_Name&gt
`````

## Parameters

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>--models</td><td>creates POCO models</td></tr>
<tr><td>--&ltConnectionString_Name&gt</td><td>Name of the connection string mentioned in the appsettings.json</td></tr>
</table>

## Example

`````
rxwebcore --models --main
`````