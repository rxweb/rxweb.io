---
title: Service Entity Filter
author: rxcontributortwo
category: http
type: simple
linktitle: filters
---
Filters in rxweb http allows to run a specific code at specific stages in the request processing whenever any request is made. Here we will understand two stages at when we can excecute filters at global as well as component level. OnRequest and OnResponse filters allows you to perform some action during the request execution and on response during the server interaction life cycle.

![OnRequest and OnResponse](assets/rxwebcore/Images/onrequest.png)

# Service Based
If you want to set config object including any arguments or model to pass while making XHR calls (i.e. using XMLHttpRequest), you can do it with the help of `@xhrFilter` decorator of `RxHttp`.   

# Scenario
In the product controller there is a need to add an additional header which specifies that the content type should be application json. This will be done using `@xhrFilter` decorator above the service class, the headers will be added in the onRequest method of the header filter class.

The header filter class is as below:

<div component="app-code" key="app-complete-component"></div>

This will be registered in the product service class of the entity where the additional header will be added and this method will be specified in the model parameter as below 

<div component="app-code" key="app-complete-model"></div>

The example is as below :

<div class="stackbltiz-link"> 
<a target="_blank" class="redirect-link" href="https://stackblitz.com/edit/angular-nkmcqc-frtjha?file=src/app/product.service.ts">Stackblitz</a>
</div>