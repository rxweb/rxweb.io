---
title: Routes
author: rxcontributortwo
category: routes
type: simple
linktitle: routes
---

# Routing

Routing is a important feature for any frontend framework. Routing basically means navigating between pages where each page or component is mapped with different URL which you can access it either directly by entering URL in the address bar or by click any specific navigation link in the web application UI. 

Here comes the role of a frontend router. `@rxweb` provides you `@rxweb\angular-router` which can deal with various routes to perfom navigation to any url along with performing any action. It acts as a middleware while passing any optional params or query params with any particular route.

# How to use

You can extend you component through `CoreComponent` class of `@rxweb\angular-router` and customize your actions while performing routing from one component to other.

# Inbuilt Methods

CoreComponent class provides you some inbuilt methods which you can use in case 

## onParamsChanged()

```
@Component({
    templateUrl: "./user-edit.component.html"
})
export class UserEditComponent extends BaseUserComponent {
    
    constructor(private browserStorage: BrowserStorage, private activatedRoute: ActivatedRoute, router: Router) {
        super();
    }

    onParamsChanged = (): void => {
        console.log("params =>", this.params);
    }

}
```

## onQueryParamsChanged()

## navigate(commands, extras)

You can use `navigate()` method to traverse from one component to other accompanied by the params which you want to pass with the URL.

> params should be passed in `extras` parameter.

```
@Component({
    selector: 'app-user-add',
    template: "<button (click)="logOut()">Log Out</button>"
})
export class UserAddComponent extends CoreComponent {

  constructor() {}

  logOut() {
        this.navigate(['/login']);
    }

}
```