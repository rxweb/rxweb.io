---
title: Methods
author: rxcontributorone
category: storage
type: simple
linktitle: methods
---

`@rxweb/storage` contains various methods for working with data in the browser.  They are get, save, remove and clear.

# save(keyName, value)

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
