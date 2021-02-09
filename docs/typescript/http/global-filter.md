---
title: Global Filter
author: rxcontributortwo
category: http
type: simple
linktitle: filters
---
Filters in rxweb http allows to run a specific code at specific stages in the request processing whenever any request is made. Here we will understand two stages at when we can excecute filters at global as well as component level. OnRequest and OnResponse filters allows you to perform some action during the request execution and on response during the server interaction life cycle.

![OnRequest and OnResponse](assets/rxwebcore/Images/onrequest.png)

# Global Filters
# Scenario
As we are using token based authentication in the application, we need to add the authentication token along with the request identity key in the authorization header when we make a request to the server         

# OnRequest
In this OnRequest method adds authorization header to the request, this header will be passed from the auth token which is stored in the local storage   
To Authorize the requests the context will be in need to add authorization headers before every request is made to the server    

<div component="app-code" key="app-auth-filter"></div>

# OnResponse             
The OnResponse method will be called once the response is fetched from the server, In this OnResponse method it stores the session data is stored in the local storage. This method will be further used to check whether to logOut whenever the session timeOut Takes place

<div component="app-code" key="app-response-filter"></div>

Add this Auth filter into the root app component to use it globally into the model parameter 

<div component="app-code" key="app-filters-model"></div>

Below is the working example 
<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/angular-nkmcqc-frtjha?file=src%2Fapp%2Fbrowser-storage.ts">Stackblitz</a>
</div>






