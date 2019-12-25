---
title: httpClientConfig
author: rxcontributorone
category: http
type: simple
linktitle: httpClientConfig
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>httpClientConfig is the global configuration for the RxHttp requests. It is used to configure the hostUri and other details throughout the application for interaction of all the requests.</p></div>


# httpClientConfig
 It is used to configure Client configuration properties throughout the application through which the interaction of request is done. 
                                                       
 Through `HttpClientConfig` you can configure
 hostURIs for setting the server side uri
                                                           
 In `hostUri` you need to configure
 (1) `name` of the server
 (2) setting `default` endpoint true if the name is not mentioned                                  
 (3) `uri` of the server 

 apply `filters` for onRequest and
                   onResponse
 (1) `onRequest` filter is used to perform some specific action before the request is sent to the server.
 (2) `onResponse` filter is used to perform some specific action after the response is fetch from the server.
 
 perform errorHandling while sending request to server through `onError`
                                                        

<div component="app-code" key="app-httpClientConfig-complete"></div>
