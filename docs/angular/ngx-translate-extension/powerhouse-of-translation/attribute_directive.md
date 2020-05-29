---
title: Translation: Attribute Directive
author: ajayojha
category: powerhouse-of-translation
type:tabs
linktitle: Attribute Directive
---

# Attribute Directive
Bind the multilingual text using ```translate``` directive.
```json
{
  "firstName":"Enter Your First Name",
  "notification":"Hey {{greet}}!",
  "note":"This package is translation.",
}
```
```html
<label translate="firstName"></label>
```
Use ```translateParams``` attribute for custom parameter interpolation.
```
<label translate="notification" [translateParams]="{greet:'Good Morning'}"></label>
```
Bind translation with specific language.
```
<label translate="note" translateLang="fr"></label>
```
Bind translation with specific translation name.
```
<label translate="dashboardHeading" translationName="dashboard"></label>
```
