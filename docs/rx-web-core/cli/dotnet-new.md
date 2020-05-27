---
title: Create New Project
author: rxcontributorone
category: rxwebcore 
subcategory: cli
type:simple
linktitle:dotnet-new
---

# Create New Project

## Definition
Creates a new project solution with necessary implementations using dotnet CLI.

## Usage 

`````
 dotnet new rxwebapi --name &ltProject_ Name&gt
`````

## Parameters

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>new</td><td>creates a new project</td></tr>
<tr><td>rxwebapi</td><td>creates necessary folders and projects according to RxWeb Clean Architecture</td></tr>
<tr><td>--name</td><td>Name of the project</td></tr>
</table>

## Example

`````
 dotnet new rxwebapi --name ContosoApplication
`````




