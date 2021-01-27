---
title: post
author: rxcontributorone
category: http
type: simple
linktitle: post
---
For Writing, updating and deleting the data, The configuration is returned with the type `HttpRequestBodyConfig` which extends the properties of `HttpRequestConfig`
which includes body property to be passed which is to be inserted, updated or deleted.

We will cover all these operations one after the other

# Post
`post()` of `RxHttp` is used to send data to the server and get the response by setting the config in your component.

# Example

<div component="app-example-runner" ref-component="app-post-complete" title="Post" key="complete"></div>