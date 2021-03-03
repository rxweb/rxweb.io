---
title: creating application
author: rxcontributorone
category: learn
type: simple
linktitle: creating-application
---

In this documentation section we will learn how to built an angular application with `RxWeb` Architecture from the start to deployment of the application along with learning the concepts, understanding of the core fundamentals and terminology with security implementations.

The architecture is the most important aspect of any application, Usually when the application scopes are larger there is a need to maintanability of the code, To resolve the business problems.

This guide will teach you to create and develop an application using angular cli and using the benefits of RxWeb packages which can increase the efficiency of the application by making it more modular, scalar, simpler, clean and scalable.

By the end of the tutorial we will learn:

<ul class="bullet-list">
  <li class="overview-nav-item">Building Cleaner Angular Component</li> 
  <li class="overview-nav-item">Accesing data from the server in a centralized way</li>
  <li class="overview-nav-item">Model based reactive forms with in-built validations</li>
  <li class="overview-nav-item">Multilingual Data access</li>
</ul>

After the final steps are implemented the app will look like <a class="redirect-link" href="https://stackblitz.com/edit/angular-ivy-zwmauq?file=src/app/app.component.ts" target="_blank" >Live Example</a> / <a class="redirect-link">Download</a>

# What you will build
Here is an overview of how the application will look after the end of this tutorial 

<div class="container">
![Creating Projects](assets/rxwebcore/Images/creating-project.gif)
</div>

# Setup 

1) To examine and run the project from github, follow these steps to run the project in the development environment:

> git clone 

2) Install the packages at the path where the project is cloned using npm install command:

> npm install

3) Run the project 

> ng serve 

# Creating Components

Using angular cli we will build components which include login component for authentication, using shared components for sidebar and topbar and for the registration of the user. The components will be generated using the below command 

> ng generate component &ltComponent_Name&gt

List of Components created :

<ul class="bullet-list">
  <li>Login Component</li> 
  <li>User Component</li>
</ul>

# Creating Service

Creating an injectable service for interacting with the server and passing the user object to the server. This class will further make the use of <a class="redirect-link" href="/rxweb-http/http/get-direct-usage">RxHttp</a> methods to interact with data  

> ng generate service User

# Next Steps
This documentation section included summarized detail of what we will build using RxWeb architecture. The next step includes adding routing along with authorization, authentication and middleware features 

<ul class="bullet-list">
  <li>Move to the next section of <a class="redirect-link" target="_blank" href="/learn/authentication-resolver">Navigating Routes</a></li> 
  <li>Reach to the implementation of final steps includind <a class="redirect-link" target="_blank" href="/learn/multilingual">localization</a></li>
</ul>
