---
title: HttpRequestConfig
author: rxcontributorone
category: http
type: simple
linktitle: HttpRequestConfig
---

# HttpRequestConfig
HttpRequestConfig is used for get method in which the data is to be retrieved based upon the parameters which you can pass along with the options available with this config.   

The return type varies based upon the selected `responseType` which is configured from the HttpRequestConfig

The `HttpRequestConfig` allows to configure the params, queryparams, hostUri while making request to the server.

<div component="app-code" key="app-complete-complete"></div>

Used for :
<ul class="bullet-list">
  <li class="overview-nav-item">Get</li> 
</ul>

# HttpRequestBodyConfig  
For Writing, updating and deleting the data, The configuration is returned with the type `HttpRequestBodyConfig` which extends the properties of `HttpRequestConfig`
which includes body property to be passed which is to be inserted, updated or deleted. 

<div component="app-code" key="app-complete-HttpRequestBodyConfig"></div>

Used for :
<ul class="bullet-list">
  <li class="overview-nav-item">Post</li>
  <li class="overview-nav-item">Put</li>
  <li class="overview-nav-item">Patch</li>
  <li class="overview-nav-item">Delete</li> 
</ul>
