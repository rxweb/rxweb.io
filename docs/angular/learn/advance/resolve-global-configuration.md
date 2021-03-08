---
title: Resolve Global Configuration
author: rxcontributorone
category: learn
type: simple
linktitle: resolve-global-configuration
---

In the basic learn tutorial we learnt about the global authorization and authorization resolver, In this tutorial we will learn about resolving the global data using the global middleware through which the configuration settings will be resolved. 

In the global resolver file we have general application settings such as default language, change detection, default theme, cache keys etc which is resolved in a centralized manner using the global middleware.

Lets start by creating a global resolver class which extends the IMiddleware interface.

<div component="app-code" key="resolve-global-configuration-complete-model"></div>

Declaring the global resolver into the middleware parameter of the RxWebModule.

<div component="app-code" key="resolve-global-configuration-complete-module"></div>
