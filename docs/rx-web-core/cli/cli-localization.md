---
title: Localization
author: rxcontributorone
category: rxwebcore 
subcategory: cli
type:simple
linktitle:cli-localization
---

# Adding Localization

## Definition
This will add json files of the data of languages that are there in the database tables. For more information refer <a class="redirect-link" href="/localization-and-globalization/global-content.html">Globalization and Localization</a>

## Usage 

`````
&gt rxwebcore --localization --&ltConnectionString_Name&gt
`````

## Parameters

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>--localization</td><td>Adding Localization</td></tr>
<tr><td>--&ltConnectionString_Name&gt</td><td>Name of the connection string mentioned in the appsettings.json</td></tr>
</table>

## Example

`````
rxwebcore --localization --main
`````