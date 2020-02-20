---
title: Local Storage
author: rxcontributortwo
category: storage
type: simple
linktitle: localstorage
---

# Local Storage

`local` property allows you to access the `Storage` object for the `BrowserStorage` base which will depend upon the browser you are using. This data is stored within browser sessions. Different local storage instances will be created for different browsers for a specific web application.

> Local Storage persists the data until it’s explicitly removed, either by the developer or by the user (by clearing the browser cache). It’s never cleaned up automatically, and it’s shared in all the sessions that access the same site.

# Accessing the local storage

Local Storage is available in the `local` property of  the browserStorage object which extends the `ClientDataStorage` of  `@rxweb\storage`. You just need to inject `BrowserStorage`  in your component. This BrowserStorage is created and managed completely on the client-side with calling any server side scripting. 



# Example

Suppose you are developing a multilingual web application and you want to get the language code of any user which is stored in local storage then you can access it through `local` property of `ClientDataStorage`. 

Suppose you are developing a multilingual web application where you want to retrieve the user's language based on the language code of that country which is stored in local storage then you can access it through `local` property of `ClientDataStorage`.

> this.browserStorage.local.get('language_code');

Here is a sample component code mentioned.

```
@Component({
    selector: 'app-user-add',
    templateUrl: "./user-add.component.html"
})
export class UserAddComponent implements OnInit {

  languageCode: string = "";
  constructor(private browserStorage: BrowserStorage) { }

  ngOnInit() {
    this.languageCode = this.browserStorage.local.get('language_code');
    console.log(this.languageCode);
  }
}
```
