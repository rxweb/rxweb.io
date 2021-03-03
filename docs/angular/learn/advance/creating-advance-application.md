---
title: creating application
author: rxcontributorone
category: learn
type: simple
linktitle: creating-advance-application
---
In this documentation section we will learn to create an enterprise angular application using `RxWeb` along with an easy solution to build application which include complex scenarios having more number of context(units) with large entities. In which it also needs to be having a larger scope worldwide and needs to be accessed into mutiple languages

This guide will include a tutorial to create and develop an enterprise application which can manage complex application building in an efficient way with a flexibility to manage the application in a better way with clean code.

By the end of the tutorial we will learn:

<ul class="bullet-list">
  <li class="overview-nav-item">Large Angular components with a cleaner approach</li> 
  <li class="overview-nav-item">Managing complex services better</li>
  <li class="overview-nav-item">Reactive forms with advance scenarios of nested FormGroup and FormArray</li>
</ul>

# Setup

1) To examine and run the project from github, follow these steps to run the project in the development environment:

> git clone <url>

2) Install the packages at the path where the project is cloned using npm install command:

> npm install

3) Run the project 

> ng serve 

# Creating Large Components
The HrManagementSystem application contains complex data and form scenarios based upon which we are going to create the components using the below command:

> ng generate component &ltComponent_Name&gt

List of Components created :

<ul class="bullet-list">
  <li>Login Component</li> 
  <li>User Component</li>
</ul>

# Creating Service

Creating an injetable service class with a complex business logic to manipulate the data, This class will further make the use of <a class="redirect-link" href="/rxweb-http/http/get-direct-usage">RxHttp</a> methods to interact with data  

> ng generate service User 