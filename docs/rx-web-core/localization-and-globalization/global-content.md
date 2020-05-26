---
title: Global Content 
author: rxcontributorone
category: rxwebcore
subcategory: localization-and-globalization
type:simple
linktitle:global-content
--- 
# Global Content

For applications having big range of audiences, there is a possibility of having users acessing it from different regions. In such cases it is important that your application renders the whole Ui in the user specific language, other than this the validation messages should also be shown in the user sepcific language and dropdown should also bind respectively.

For showing validation messages in different languages, the first step is to add the validation messages in different languages. 
The columns of the languages can be added as per the requirement.

## LanguageContentKeys Table

<table class="table table-bordered">
<tr><th>LanguageContentKeyId</th><th>KeyName</th><th>IsComponent</th></tr>
<tr><td>1</td><td>RequiredMessage</td><td>0</td></tr>
</table>

## LangaugeContents Table 

<table class="table table-bordered">
<tr><th>LanguageContentId</th><th>LanguageContentKeyId</th><th>ContentType</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>g</td><td>This field is required</td><td>Ce champ est requis</td></tr>
</table>

The second step is to run the command : 

````js
rxwebcore --localization --main 
````

This will create `.json` file with en and fr json in localization folder of wwwroot folder of the languagecontents.

**global-en.json**

````js
{
  "maxLength": "The allowed max length is {0}",
  "range": "You can enter {0} to {1} length",
  "required": "This field is required",
  "unique": "The {0} Field Should be unique"
}
````

**global-fr.json**

````js
{
  "maxLength": "La longueur maximale autorisée est {0}",
  "range": "Vous pouvez saisir une longueur de {0} à {1}",
  "required": "Ce champ est requis",
  "unique": "Le champ {0} doit être unique"
}
````

> The users language will be stored in the Users table as a LanguageCode

