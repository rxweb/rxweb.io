---
title: Page Level Rendering
author: rxcontributorone
category: page-level
type:simple
linktitle:page-level
---

After the global setup is completed and the multilingual data is resolved before navigating to the mentioned url. The User Interface is achieved with the help of the directives provided by `@rxweb/multilingual` package.

# Setting Multilingual component name
First we need to add the component name in `@multilingual` of the component file. 

For retrieving the component specific multilingual data, The component name is provided in the `@multilingual` decorator.

<div component="app-code" key="page-level-multilingual-component"></div>

# Multilingual Json Data
The second step is to add directives on the Html, Lets consider a scenario where you want to display multilingual data in the login component and the multilingual data for language code `EN` is resolved from the `loginComponent-en.json` from the global resolver as mentioned in the previous documentation. Likewise if your application supports french data and the user loggen in has language code `FR`, the multilingual data is resolved from `loginComponent-fr.json`.

To render the multilingual data on the user interface, the data stored in these files have key and value based upon the directive. For example if you want to render data into label and placeholder. The key of the multilingual data must be `password_p` and `password_t`. Here p stands for placeholder and t stands for text. The 
`loginComponent-en.json` file is as below: 

<div component="app-code" key="page-level-json-component"></div>

# Adding Directives
The third and final step is to add directives in the Html template of the component. `rxText` is used for rendering text data and `rxPlaceholder` is used for rendering data in the placeholder.

The Html template for the login component is as below :

<div component="app-code" key="page-level-template-component"></div>
