---
title: Localization
author: rxcontributorone
category: localization
type:simple
linktitle:localization-quick-start
---
In an enterprise application, working in many different regions require managing different locales and timezones. The data based upon the language code entered during the login of the application. Here is the step by step process to achieve the data based upon different languages.

# Package Installation
The first step is to install the localization package to use localization for targeting the worldwide audiencies. 

<div component="app-code" key="localization-installation-component"></div> 

# Adding Json file of global and component content
The multilingual data which is entered into the database creates a json file into the localization folder of assets folder. For example : If it is global data it will create `global-en.json` for english content and `&ltcomponent_name&gt-en.json` for component specific data.

## Adding Rxweb module 
Rxweb module has the necessary imports and declarations such as `@routerModule` for the necessary configurations related to authentication and authorization resolver etc.

<div component="app-code" key="localization-complete-component"></div>

## Adding base multilingual, global and component data
The BaseMultilingualContentResolver resolves the data of the global multilingual data and component multilingual data resolves component specific data. 

# BaseMultilingualContentResolver
<div component="app-code" key="localization-base-component"></div> 
 
## Configuring bootstrapRxWebFramework
bootstrapRxwebFramework is configured in the main.ts file of the application to explicitily call the baseMultilingual to resolve the global multilingual data. It is configured as below: 

<div component="app-code" key="localization-bootstrap-component"></div> 

# GlobalMultilingualContentResolver
Resolves global multilingual Data based upon the language code from the multilingual data from the json which is generated in the localization folder of the project based upon the multilingual data entered in the database.

<div component="app-code" key="localization-global-component"></div> 

# ComponentMultilingualContentResolver
Where there comes a scenario where you need to add component specific multilingual data for storing a value of placeholder, text or label. It is resolved using ComponentMultilingualContentResolver which is as below: 

<div component="app-code" key="localization-componentspecific-component"></div> 

## configurating it into @routerModule
As mentioned in the <a class="redirect-link" href="/rxweb-router/router/router-module">routerModule</a> the configuration is to be set in the routerModule as below

## adding @multilingual component name into component ts
The final step is to be mention the component name in `@multilingual` decorator to fetch the component specific multilingual data.

<div component="app-code" key="localization-multilingual-component"></div> 






