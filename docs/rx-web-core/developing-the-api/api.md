---
title: Api
author: rxcontributorone
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:api
---
# Api


# Introduction

The role of a server api is to handle web requests which are attempted to interact with `Uow` methods for performing various data manipulation operations which allows the user to access the entity through which data is managed. It is used to handle server request used for various operations going on in the application such as authentication,insertion of data, searching data, updating data and deleting data.   

Creating controller class depends on many factors such as operation to be performed, role of the module, complexity type. 
Before discussing more on creation of controller class there arise many aspects through which the structure of Api is decided which will be featured below. Implementation of web API through rxwebcore includes execution with `RESTful` practices, provides efficiency to remove large number of redundant code, entity based APIs and improve performance.  
 
# Controller Types 

## Basic Controller:
Basic controller includes methods which are get, post, put, patch and delete. It is made when you want basic operation to be performed without additional complexity.

## Domain Controller:
When you have much of business logic to be written in your basic operations it indicates that the complexity of the controller is high i.e ,A Domain controller is made.

## Lookup Controller:
When you want the data of entity to be bind as a dropdown on the client side, A lookup controller is made. 

## Search Controller:
When you want to return a resultResult based upon your search stored procedure for a specific module, A search controller is made.

## Child Controller:
Whenever there is a parent controller involved in the data interaction of the required controller, It is made as a child controller.

# Best Practices
Rxwebcore follows REST practices while working with Web Api. Please refer <a class="redirect-link" href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design">Best Practices</a>


