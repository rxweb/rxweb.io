---
title: Global Setup
author: rxcontributorone
category: global-setup
type:simple
linktitle:global-setup
---

For resolving multilingual data based upon the user's navigation requires a global setup based upon which the multilingual data is resolved first and after the component is navigated. The component specific and global multilingual data are stored in the localization folder of assets folder. 

> The created file must be there in a naming convention having name of the component and the language code of the json file. For Example, if it is global it should be `global-en.json` and if it is component specific it should be `StudentAddComponent-en.json`

Let's understand the step by step flow for the global setup for resolving multilingual data before the page navigation using `CanActivate`.

# Installing the Package
To install the package, run the below command

<div component="app-code" key="global-setup-installation-component"></div> 

# Register the Module
Register the `RxLocalizationModule` in the app module 

<div component="app-code" key="global-setup-module-component"></div> 

# Create Service for resolving the Multilingual Data and register it globally
To resolve the multilingual data using CanActivate we need to create a BaseMultilingualResolver and declare it as provider into the app module. 

<div component="app-code" key="global-setup-baseActivate-component"></div>

In the above described code, the BaseMultilingualResolver makes a `http` call to the assets folder and resolve the multilingual data based upon the language that is stored in the browser storage whenever the user logs in. For that we need to pass the component name in the `@multilingual` decorator so that based upon the component name it will resolve the component specific data from that particular json. If the component name is not mentioned, it will resolve the data based upon the global json file based upon the language code.  
 
# Adding CanActivate on the routes of the application 

While configurating the routes of the applications, the `BaseMultilingualResolver` is passed in CanActivate, By doing this whenever the user will navigate to the path by initially resolving the component data.

<div component="app-code" key="global-setup-canActivate-component"></div>



