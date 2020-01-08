---
title: Storage
author: rxcontributortwo
category: storage
type: simple
linktitle: storage
---

# Storage

There arises a situation when the user is working on multiple browser tabs or windows. Data stored or updated in one browser window is carried over to other browser windows, as long as the other browser windows are on the same website. This can be a problem when both the windows have different important data, and due to any change in one window, the other window's data is discarded. 

`@rxweb` provides a solution to this problem by storing user's activity/data on that user's computer. Changes in one separate browser tab/windows will not be reflected in any other browser tab/window. This also offers other benefits for web applications like it can provide you the seamless experience despite any user's network connectivity issues and tracking any user's activity across your web application.

There are two ways through which you can store user's data: session storage and local storage. 

## Session Storage

Session Storage maintains the data stored for the duration of the page session. If multiple windows or tabs visit the same site, they will have two different Session Storage instances 

> Session storage is maintained as long as the browser is open, including page reloads and restores.

## Local Storage

Unlike session storage, local Storage persists the data until it’s explicitly removed, either by the developer or by the user. It’s never cleaned up automatically, and it’s shared in all the sessions that access the same site.

## Accessing the storage

Both Local and Session Storage are available on the `browserStorage` object which extends the `ClientDataStorage` of  `@rxweb\storage`. You just need to inject `BrowserStorage`  in your component. This BrowserStorage is created and managed completely on the client-side with calling any server side scripting. 

Suppose you are developing a multilingual web applicationand you want to get the language code of any user which is stored in local storage then you can access it through `local` property of `ClientDataStorage`. 

```
export class UserAddComponent implements OnInit {

    constructor(private browserStorage: BrowserStorage) { super(); }

    ngOnInit() {
        var language_code = this.browserStorage.local.get(language_code)
        console.log(language_code)
    }
}
```