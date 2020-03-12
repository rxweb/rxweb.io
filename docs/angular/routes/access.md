---
title: access
author: rxcontributortwo
category: router
type: simple
linktitle: access
---

# anonymous

Authenticated APIs need an authentication token for accessing the api in the web application but some API need an authentication by pass. For example : Login.
For such Api we need `@anonymous` decorator in the component  

<div component="app-code" key="access-anonymous-model"></div> 

The second step is to pass the `@anonymous` decorator into the component as below 

<div component="app-code" key="access-anonymous-component"></div> 

# access

While performing role based authorization, It becomes important to maintain it on the client side as well. `@access` is used for managing the access based upon the role which is used for adjudging the role access based upon the application module and action.

<table class="table table-bordered table-striped">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>accessLevel</td><td>Access level based upon the module</td></tr>
<tr><td>action</td><td>name of the action(HTTP Verb)</td></tr>
</table>

<div component="app-code" key="access-complete-model"></div> 

The second step is to pass the `@access` decorator into the component as below 

<div component="app-code" key="access-complete-component"></div> 