---
title: Session Storage
author: rxcontributortwo
category: storage
type: simple
linktitle: sessionstorage
---

# Session Storage

`session` property allows you to access the `Storage` object for the `BrowserStorage` base which maintains the data stored for the duration of a single page session. If multiple windows or tabs visit the same site, they will have two different Session Storage instances even if the browser is same.

> Session storage is maintained only per session. Once the user’s browser is closed, that session would be lost and the persisted data will be deleted from the browser.

# Accessing the session storage

Session storage is available in the `session` property of  the browserStorage object which extends the `ClientDataStorage` of  `@rxweb\storage`. You just need to inject `BrowserStorage`  in your component. 

# Example

Consider a scenario where you want to display the user's name on the UI, you just have to inject the BrowserStorage object in constructor of the component and use it like 

> this.browserStorage.session.get('username');

Here is a sample component code mentioned.

```
@Component({
    selector: 'app-user-add',
    template: "<span>Hello {{user}}</span>"
})
export class UserAddComponent implements OnInit {

  user: string = "";
  constructor(private browserStorage: BrowserStorage) { }

  ngOnInit() {
    this.user = this.browserStorage.session.get('username');
  }
}
```
