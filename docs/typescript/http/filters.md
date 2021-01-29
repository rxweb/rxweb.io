---
title: Filters
author: rxcontributortwo
category: http
type: simple
linktitle: filters
---
OnRequest and OnResponse filters allows you to perform some action during the request execution and on response during the server interaction life cycle. If you want to set config object including any arguments or model to pass while making XHR calls (i.e. using XMLHttpRequest), you can do it with the help of `@xhrFilter` decorator of `RxHttp`.   

# Scenario
As we are using token based authentication in the application, we need to add the authentication token along with the request identity key in the authorization header when we make a request to the server         

![OnRequest and OnResponse](assets/rxwebcore/Images/onrequest.png)

# OnRequest
In this OnRequest method adds authorization header to the request. this header will be passed from the auth token which is stored in the local storage   

<div component="app-code" key="app-filters-auth"></div>

# OnResponse
In this OnResponse method it stores the session data is stored in the local storage

<div component="app-code" key="app-filters-response"></div>

