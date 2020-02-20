---
title: Creating Contexts
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:creatingcontexts
---

# Create Context

## Definition
This command generates a bounded context where --context denotes making of a context, --main is the key of the connectionstring which is configured in the `appsetting.json` in connectionstring of the database configuration and mention the Context name based upon the module.

## Usage 

`````
 rxwebcore --context --main &ltContext_Name&gt
`````

## Parameters

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>--context</td><td>creates a new context</td></tr>
<tr><td>--main</td><td>name of the connection</td></tr>
<tr><td>&ltContext_Name&gt</td><td>Name of the context</td></tr>
</table>

## Options
<table class="table table-bordered table-striped">
<tr><th>Option</th><th>Description</th></tr>
<tr><td>--add-models</td><td>Adding Models into database</td></tr>
</table>

### Option Usage
`````
rxwebcore --context --main Master --add-models Users
`````

## Example

`````
 rxwebcore --context --main Master
`````