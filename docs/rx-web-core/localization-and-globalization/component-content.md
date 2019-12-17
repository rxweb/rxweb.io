---
title: Component Contents
author: rxcontributorone
category: rxwebcore
subcategory: localization-and-globalization
type:simple
linktitle:componentcontents
--- 

On the user interface, when multiple components are involved, each of them requires component specific multilingual data based upon which text of placeholder, label etc are displayed. Considering a scenario where the Country entity has three components : List, Add and Edit and they required different component contents. Here is an example of how CountryAdd component data will be formed.

# LanguageContentKeys Table

<table class="table table-bordered">
<tr><th>LanguageContentKeyId</th><th>KeyName</th><th>IsComponent</th></tr>
<tr><td>1</td><td>CountryAddComponent</td><td>1</td></tr>
</table>

# LangaugeContents Table 

<table class="table table-bordered">
<tr><th>LanguageContentId</th><th>LanguageContentKeyId</th><th>ContentType</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>t</td><td>Allows Registration</td><td>Permet l'enregistrement</td></tr>
</table>

> Here contentType will denote the type of the content, here `t` means text. For placeholder and label(p and l) respectively

# ComponentLanguageContents

<table class="table table-bordered">
<tr><th>ComponentLanguageContentId</th><th>ComponentKeyId</th><th>LanguageContentId</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>1</td><td>Allows Registration</td><td>Permet l'enregistrement</td></tr>
</table>

The second step is to run the command : 

````js
rxwebcore --localization --main 
````

This will create `.json` file with en and fr json in wwwroot folder of the languagecontents.

**AddCountryComponent-en.json** 

````js
{"AddCountryComponent_t":"Allows Registration"}
````

**AddCountryComponent-fr.json** 

````js
{"AddCountryComponent_t":"Permet l'enregistrement"}
````

> The users language will be stored in the Users table as a LanguageCode