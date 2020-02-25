---
title: Local Storage
author: rxcontributorone
category: storage
type: simple
linktitle: localstorage
---

# Local Storage
 
Local storage gives you accessibility to use `ClientDataStorage` where data can be stored accross browser sessions. This data has no expiry time.  It is stored in a key and value pair. The major difference between session storage and local storage is that data stored in sessionStorage gets cleared when the page closes(when the session ends).

## Storage
The `browserStorage` object used after resolving `ClientDataStorage` dependency contains local through which the storage data can be stored in the variable in typescript.

`````js
  var localStorageData = this.browserStorage.local;
`````

## Examples
Using local storage you can clear, get, remove, save etc 

### Get local storage data 
`get()` method is used to retrieve any information from the storage. 

`````js
this.browserStorage.local.get('language_code');
`````

### Remove data 
`remove()` method is used to removes the specific information identified by key from the storage.

`````js
this.browserStorage.local.remove('username');
`````

### Clear All Data
There are some scenarios where you want to intentionally clear all the browser storage. In such cases, `clearAll()` method can help you in removing everything from the storage object.

`````js
this.browserStorage.local.clearAll();
`````

### Save Data
`save()` method is used to store data in any of that browser storage i.e. local or session.

`````js
this.browserStorage.local.save('username', 'John');
`````

