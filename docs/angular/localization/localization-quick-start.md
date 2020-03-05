---
title: Localization
author: rxcontributorone
category: localization
type:simple
linktitle:localization-quick-start
---

In an enterprise application, working in many different regions require managing different locales and timezones. The data based upon the language code entered during the login of the application. here is the step by step process to achieve the data based upon different languages.

# Adding Json file of global and component content
The multilingual data which is entered into the database creates a json file into the localization folder of assets folder. For example : If it is global data it will create `global-en.json` for english content and `&gt<component_name>&lt-en.json` for component specific data.

## Adding Rxweb module 
Rxweb module has the necessary imports and declarations such as `@routerModule` for the necessary configurations related to authentication and authorization resolver etc.

<div component="app-code" key="localization-complete-component"></div> 

## Adding basemultinguial, global and component data
The BaseMultilingualContentResolver resolves the data of the global multilingual data and component multilingual data resolves component specific data. 

# BaseMultilingualContentResolver
<div component="app-code" key="localization-base-component"></div> 

# GlobalMultilingualContentResolver
Resolves global multilingual Data

<div component="app-code" key="localization-global-component"></div> 

# ComponentMultilingualContentResolver
Resolves Component specific multilingual data

<div component="app-code" key="localization-componentspecific-component"></div> 

## configurating it into @routerModule
As mentioned in the <a class="redirect-link" href="/rxweb-router/router/router-module">routerModule</a> the configuration is to be set in the routerModule as below

## adding @multilingual component name into component ts
The final step is to be mention the componet name in `@multilingual` decorator to fetch the component specific multilingual data.

<div component="app-code" key="localization-multilingual-component"></div> 






