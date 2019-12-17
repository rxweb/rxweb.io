---
title: Step By Step Guide
author: rxcontributortwo
category: step-by-step-guide
type:simple
linktitle:projectcreation
---

# Prerequisites

The prerequisites which are required before creating new project using `rxwebcore` are listed below:

<ul>
    <li>Visual Studio 2019 with minimum v16.3.4</li>
    <li>.Net Core 3.0 or later SDK</li>
</ul>

# Install rxwebcore tool
The first step towards creating an application is to install the <a class="redirect-link" href="https://www.nuget.org/packages/RxWebCore/">`rxwebcore`</a> tool globally using below command in command prompt.

````js
 dotnet tool install --global rxwebcore
````

This will install `rxwebcore` tool globally which will be used for cli commands. 

# Project Creation
`rxwebcore` creates a project solution using cli command and also provides command for scaffolding things.

Let's consider a scenario where you want to create a `HumanResourceApplication` using the below CLI command. 

> Before firing the below command there must be Database server having two blank databases. the `Main` database and `Log` database. The `Main` is used for your application specific data operations and `Log` database is used for Logging related information like `Request Log` , `Exception Log` and `Entity Log`. You don't have to create the logging tables the `rxwebcore` cli will create the respective tables based upon the provided `Log` database connection string. Some of the tables will be created in `Main` database as well through `rxwebcore`. How many tables will be created and use of those tables we will discuss on `Database Information` page.

````js
rxwebcore --add-project &lt Project_Name &gt
````

Let's create a Human Resource Application project with the name `HumanResourceApplication`, Fire Below command in your command prompt under respective folder where you want to create this project:

````js
rxwebcore --add-project HumanResourceApplication
````

By running this command. It will ask few things :

1. Would you like to create a angular project for your UI development : you can choose `Y` or `N`.
2. Enter your main database connection string : Database connection string of `Main` database.
3. Enter your log database connection string : Database connection string of `Log` database.

Based upon the Point 2 and 3, The question may arise, <b>Why I have to provide the both database connection string before creating a Project ?</b>
> The reason for providing the connection string while creating a project because `Web` and `Database` is the separated part of the one robust application. We consider this separation while creating a project Because there are fair chances their database is defined before creating a project. In that case the `rxwebcore` cli will create the necessary tables which will be helpful for the application.

This will create a project of name `HumanResourceApplication` with the following folder structure:

<ul>
    <li>Api
        <ul>
            <li>HumanResourceApplication.<b>Api</b></li>
        </ul>
    </li>
    <li>Core
        <ul>
            <li>HumanResourceApplication.<b>Infrastructure</b></li>
        </ul>
    </li>
    <li>Domain
        <ul>
            <li>HumanResourceApplication.<b>BoundedContext</b></li>
            <li>HumanResourceApplication.<b>Domain</b></li>
            <li>HumanResourceApplication.<b>UnitOfWork</b></li>
        </ul>
    </li>
    <li>Models
        <ul>
            <li>HumanResourceApplication.<b>Models</b></li>
        </ul>
    </li>
</ul>

