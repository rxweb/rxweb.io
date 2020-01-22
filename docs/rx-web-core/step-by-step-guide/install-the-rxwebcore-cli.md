---
title: Install The RxWebCore CLI
author: rxcontributorone
category: step-by-step-guide
type:simple
linktitle: install-the-rxwebcore-cli
---

# Why RxWebCore CLI ?
Effective software development in an era of increasing number of web frameworks may bring up a challenge of how to get started and what parameters to be kept in mind. There comes many aspect to be taken care of such as following best design practices, high end security, robust validation, high level auditing, culture specific management, maintaining performance, reducing redundant code etc...

Here is an end to end solution of creating an enterprise application which provides a solution to fulfil the software requirements based upon respective domain using clean architecture practices. The CLI provides lots of  features like scaffolfing necessary things like creating different types of controllers, generating bounded context, setup the unit of work layer, creating domain class layer, creating enums according to the database values, generating models etc. 

I believe this is interesting :), Let's understand the prerequisites for the rxwebcore cli.

# Installation
Let's install the <a class="redirect-link" target="_blank" href="https://www.nuget.org/packages/RxWebCore/">rxwebcore</a> global tool using dotnet cli. For more information about the global dotnet tools visit <a target="_blank" class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools">.Net core global tools overview</a>.

`````
dotnet tool install --global RxWebCore
`````

![Rxwebcore CLI](Images/rxwebtool-install.PNG)
<p class="image-description">RxwebCore Install.</p> 

## Next Step
Explore the Next Documentation on Project Creation.
