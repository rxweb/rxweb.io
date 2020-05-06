---
title: greaterThanLessThanFormArray
author: rxcontributorone
category: how-to
type:tabs
linktitle: greaterThanLessThanFormArray
---

Just as arrays have a lot of validation use cases, Here is one more validation scenario covered by @rxweb reactive forms that is validation of greaterThan and lessThan into arrays. The usage scenario is such that In greaterThan validator, the previous index is greater than in next index and in lessthan validator, the previous index is less than in next index. Here are the described cases :

# GreaterThan validation in Arrays
GreaterThan validation will validate the index in such a way that the previous index must be greaterThan the next pushed index. Here is an example for valid case of GreaterThan validation in arrays. 

<table class="table table-bordered table-striped showHideElement">
<tr><th>Index Number</th><th>FormControlValue</th></tr>
<tr><th>0</th><th>11</th></tr>
<tr><th>1</th><th>9</th></tr>
<tr><th>2</th><th>7</th></tr>
<tr><th>3</th><th>5</th></tr>
<tr><th>4</th><th>3</th></tr>
</table>

# Example

<div component="app-example-runner" ref-component="app-greaterThanLessThanFormArray-complete" title="greaterThan validation {{validatorType}}" key="complete"></div>

# LessThan validation in Arrays
LessThan validation will validate the index in such a way that the previous index is lessThan that in the next loaded Index. Here is an example for a valid case of lessThan validation in arrays.

<table class="table table-bordered table-striped showHideElement">
<tr><th>Index Number</th><th>FormControlValue</th></tr>
<tr><th>0</th><th>3</th></tr>
<tr><th>1</th><th>5</th></tr>
<tr><th>2</th><th>7</th></tr>
<tr><th>3</th><th>9</th></tr>
<tr><th>4</th><th>11</th></tr>
</table>

# Example

<div component="app-example-runner" ref-component="app-greaterThanLessThanFormArray-add" title="lessThan validation {{validatorType}}" key="add"></div>
