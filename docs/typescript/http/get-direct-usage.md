---
title: get
author: rxcontributorone
category: http
type: tabs
linktitle: get
---
# Rxhttp Methods:
For interacting with the backend using the HTTP services, RxHttp provides methods to perform read, write, update and delete operations with necessary options to be passed to the server. The `HttpRequestConfig` allows to configure the params, queryparams, hostUri while making request to the server. 

# Examples
Lets consider a sceranio where there is an entity Product where we want to perform various operations of fetching data, inserting the data and updating the data. We will perform these operations using `RxHttp` methods by creating a service class and injecting it in the product component. 

## Advantages
<ul class="bullet-list">
  <li class="overview-nav-item">No need to specify Url in each method of the service class</li> 
  <li class="overview-nav-item">Simplified and clean code</li>
  <li class="overview-nav-item">Direct access to the method without adding extra method for the methods having less complexity</li>
</ul>

Lets begin by creating a service class and performing get, post and put operations one after the other.

## Get 
The products list will be fetched directly by accessing the get method of RxHttp without any need of creating of custom method in the service as the get use case of the product entity does not require much complex business logic.

<div component="app-code" key="app-complete-model"></div>
<div component="app-code" key="app-complete-function"></div>

## Post
For adding the product we will create a custom function in the product service class in which the fields CreatedBy and CreatedOn and that will be used in the product component.

<div component="app-code" key="app-getById-model"></div>
<div component="app-code" key="app-getById-function"></div>

## Put
Lets proceed by adding the update product operation which will be performed by using the custom method in the service class which sets the property `markAsActive` 
property which is an input parameter.

<div component="app-code" key="app-getByQueryParams-model"></div>
<div component="app-code" key="app-getByQueryParams-function"></div>


<div component="app-example-runner" ref-component="app-get-complete" title="Products"></div>

