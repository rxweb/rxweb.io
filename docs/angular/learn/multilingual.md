---
title: multilingual
author: rxcontributorone
category: learn
type: simple
linktitle: multilingual
---

# Localizing The Data
This guide consists of integrating the internationalization in the application which gives the benefit to the user to access the application according to his locale. This will be achieved using @rxweb/translate decorator based approach to render the data according to the user's language.

1) Register the `RxTranslateModule` globally in the application root module

<div component="app-code" key="multilingual-add-model"></div>

2) Setting the translate decorator in the component
Passing the @translate decorator into the component along with the translation name to render the multilingual data
<div component="app-code" key="multilingual-add-component"></div>

3) Render the data based upon the json keys 
After forming the json rendering the data into the html based upon the translation object

<div component="app-code" key="multilingual-add-html"></div>

<div class="container">
![Creating Projects](assets/rxwebcore/Images/multilingual.gif)
</div>