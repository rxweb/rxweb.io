---
title: Storage
author: rxcontributortwo
category: storage
type: simple
linktitle: storage
---

# Storage

There arises a situation when the user is working on multiple browser tabs or windows. Data stored or updated in one browser window is carried over to other browser windows, as long as the other browser windows are on the same website. This can be a problem when both the windows have different important data, and due to any change in one window, the other window's data is discarded. 

`BrowserStorage` class of  `@rxweb\storage` framework provides a solution to this problem by storing user's activity or data on that particular user's computer in the `key/value pairs`. Web applications can locally store data within the browser on the client side only. Changes in one separate browser tab/windows will not be reflected in any other browser tab/window. This also offers other benefits for web applications like it can provide you the seamless experience despite any user's network connectivity issues and tracking any user's activity across your web application.

## Types Of Storage

`@rxweb\storage` offers two different storage mechanism to work with:

<li><strong>Session Storage</strong> - Session Storage maintains the data stored for the duration of the page session untill the browser is closed.</li>
<li><strong>Local Storage</strong> - Local Storage persists the data until it’s explicitly removed, either by the developer or by the user.</li>

> For both storage type, stored data will not be available for different browsers, and storage size may vary from browser to browser.

# InBuilt Methods

There are some in-built methods of `Storage` class of `@rxweb\storage`  which can help you in working with browser storage which are as follows: 

## save(keyName, value)

`save()` method is used to store data in any of that browser storage i.e. local or session.

<table class="table table-bordered">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>keyName</td><td>Name of key for the data you want to store</td></tr>
<tr><td>value</td><td>Value which you want to store in the browser storage</td></tr>
</table>

**Example**

Suppose, you want to store the username in local storage of browser, then you can use:

```
this.browserStorage.local.save('username', 'John');
```

## get(keyName)

`get()` method is used to retrieve any information from the storage 

<table class="table table-bordered">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>keyName</td><td>Name of the key which you want to get from the storage</td></tr>
</table>

**Example**

Suppose, you want to get the username from local storage of browser, then you can use:

```
this.browserStorage.local.get('username');
```

## clearAll()

There are some scenarios where you want to intentionally clear all the browser storage. In such cases, `clearAll()` method can help you in removing everything from the storage object.

**Example**

If, you want to clear the local storage, then you can do it by:

```
this.browserStorage.local.clearAll();
```

## remove(keyName)

`remove()` method is used to removes the specific information identified by key from the storage.

<table class="table table-bordered">
<tr><th>Parameter</th><th>Description</th></tr>
<tr><td>keyName</td><td>Name of  the key which you want to remove from the storage</td></tr>
</table>

**Example**

If, you want to clear the local storage, then you can do it by:

```
this.browserStorage.local.remove('username');
```
