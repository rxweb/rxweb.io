---
title: Accessing Advance Data
author: rxcontributorone
category: learn
type: simple
linktitle: accessing-data-advance
---

# Accessing Advance Data
In the previous learn basic section we learnt about accessing the data based upon the user service, we need to add additional CORS configuration for the application, In this case we will use the @xhrFilter for sending the additional configuration to the user.

In the above scenario there is a user form in which the request id sent using the Userservice based upon which the CORS in the header based upon the request is to be sent. 
This will be managed by creating a filter class into the application and using it into the decorator of the filter and using it to add additional headers into the custom filter class above the service.

<div component="app-code" key="accessing-advance-data-complete-service"></div>

This service will be used after injecting it into the component class of the user component after the component is created.

<div component="app-code" key="accessing-advance-data-complete-component"></div>
