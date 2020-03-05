---
title: anonymous
author: rxcontributortwo
category: router
type: simple
linktitle: anonymous
---

# anonymous

Authenticated APIs need an authentication token for accessing the api in the web application but some API need an authentication by pass. For example : Login.
For such Api we need `@anonymous` decorator in the component  

<div component="app-code" key="anonymous-complete-model"></div> 

The second step is to pass the `@anonymous` decorator into the component as below 

<div component="app-code" key="anonymous-complete-component"></div> 