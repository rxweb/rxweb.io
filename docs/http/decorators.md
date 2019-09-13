---
title: Decorators
author: rxcontributortwo
category: http
type: simple
linktitle: decorators
---

<div class="title-bar"><p>While using Http methods, there are some scenarios when you have to set the config like to append any api path after the main path or if you want to set hostKey, you can set it through decorators.</p></div>

# http

If you want to set the hostKey and path for your server side api, you can do it with the help of `@http` decorator of `RxHttp`.

<div component="app-code" key="app-decorators-http"></div>

# xhrFilter

If you want to set config object including any arguments or model to pass while making XHR calls (i.e. using XMLHttpRequest), you can do it with the help of `@xhrFilter` decorator of `RxHttp`.

<div component="app-code" key="app-decorators-xhrFilter"></div>

# inMemory

<div component="app-code" key="app-decorators-inMemory"></div>