---
title: Decorators
author: rxcontributortwo
category: http
type: simple
linktitle: decorators
---


# http

There are some basic steps for using http decorator of `RxHttp` which are as follows:

Step 1: Extend your model class to `RxHttp` .

<div component="app-code" key="decorators-http-step1"></div>

Step 2: Set `@http` decorator on the same model class by passing hostKey and path of your api.

<div component="app-code" key="decorators-http-step2"></div>

# xhrFilter

If you want to set config object including any arguments or model to pass while making XHR calls (i.e. using XMLHttpRequest), you can do it with the help of `@xhrFilter` decorator of `RxHttp`.

<div component="app-code" key="app-decorators-logging"></div>

# inMemory

If you want to perform http methods like get, post etc on the data through your client side application instead of server side application, then you can use `@inMemory` decorator of `RxHttp`.

<div component="app-code" key="app-decorators-base"></div>


<!-- ## Get data from the server

If you want to get existing data from the server, you can access `get()` method of `RxHttp` directly and subscribe the response which you got from the server and use it in the way you want.

<div component="app-code" key="decorators-http-get"></div>

## Post new data to the server

If you want to post a new data to the server, you can use `post()` method of `RxHttp` directly and pass the new data as a json object in the body of the `post()` method.

<div component="app-code" key="decorators-http-post"></div>

## Update existing data to the server

If you want to update an existing data to the server, you can use `put()` method of `RxHttp` and pass the updated data as a complete json object in the body of the `put()` method.

<div component="app-code" key="decorators-http-put"></div>

## Patch an existing data to the server

If you want to update an existing data to the server but you do not want to pass complete json object of that model, you can use `patch()` method of `RxHttp` and pass only the updated data as a json object in the body of the `patch()` method.

<div component="app-code" key="decorators-http-patch"></div>

## Delete an existing data from the server

If you want to delete an existing data to the server , you can use `delete()` method of `RxHttp` and pass only the id for that data or the json object in the body of the `delete()` method.

<div component="app-code" key="decorators-http-delete"></div>

## Complete Example

<div component="app-example-runner" ref-component="app-decorators-http" title="http" key="http"></div> -->


