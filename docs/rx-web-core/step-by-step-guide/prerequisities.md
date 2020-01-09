---
title: Step By Step Guide
author: rxcontributorone
category: step-by-step-guide
type:simple
linktitle: prerequisites
---
# Why RxWebCore CLI ?
Effective software development in an era of increasing number of web frameworks may bring up a challenge of how to get started and what parameters to be kept in mind. There comes many aspect to be taken care of such as following best design practices, high end security, robust validation, high level auditing, culture specific management, maintaining performance, reducing redundant code etc...

Here is an end to end solution of creating an enterprise application which provides a solution to fulfil the software requirements based upon respective domain using clean architecture practices. The CLI provides lots of  features like scaffolfing necessary things like creating different types of controllers, generating bounded context, setup the unit of work layer, creating domain class layer, creating enums according to the database values, generating models etc. 

I believe this is interesting :), Let's understand the prerequisites for the rxwebcore cli.

# Prerequisites

As the cli is build on .net core and this is helpful for .net core projects so before using the rxwebcore cli you have to fulfil the software requirements in your machine
1) Visual Studio 2019 with version 16.3.4 or above should be installed.

Download visual studio 2019 from <a class="redirect-link" href="https://visualstudio.microsoft.com/downloads/">Downloads</a>

2) .Net Core SDK
.Net core SDK includes components which are useful for building and running applications, Here are the versions which need to be installed 
* .Net core 2.2 <a class="redirect-link" href="https://dotnet.microsoft.com/download/dotnet-core/2.2">Download Link</a>,
* .Net core 3.1 <a class="redirect-link" href="https://dotnet.microsoft.com/download/dotnet-core/3.1">Download Link</a>.

Download the .Net Core SDK for creating apps from <a class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/core/install/sdk?pivots=os-windows">Install the .Net core SDK</a>

# Installation
Let's install the <a class="redirect-link" href="https://www.nuget.org/packages/RxWebCore/">rxwebcore</a> global tool using dotnet cli. For more information about the global dotnet tools visit <a class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools">.Net core global tools overview</a>.

`````
dotnet tool install --global rxwebcore
`````




