---
title: Timezone Conversion
author: rxcontributorone
category: working-with-data-model
subcategory: advance
type:simple
linktitle:timezoneconversion
---
# TimeZone Conversion

For applications working in different regions where people are accessing it from different locations in the world, it becomes necessary to manage timezones of every user. In this section, we will see how TimeZone coversion is done using rxwebcore but before that lets see the necessary steps done in the database for this.

**ApplicationLocales Table :**

<table class="table table-bordered">
<tr><th>ApplicationLocaleId</th><th>LocaleCode</th><th>LocaleName</th><th>StatusId</th></tr>
<tr><td>241</td><td>en-US</td><td>English(United States)</td><td>1</td></tr>
</table>

In user's table the `ApplicationLocaleId` is to be entered which the reference of ApplicationLocales table.

**Users Table :**

<table class="table table-bordered">
<tr><th>UserId</th><th>ApplicationLocaleId</th><th>ApplicationTimeZoneId</th><th>LanguageCode</th><th>UserName</th><th>Password</th><th>Salt</th><th>LoginBlocked</th><th>StatusId</th></tr>
<tr><td>**241**</td><td>1</td><td>en</td><td>admin</td><td>0x01A508148A63F34..</td><td>0x454353354200..</td><td>0</td><td>1</td></tr>
</table>

Add the annotation of `[TimeZoneValueConversion]`

Now, we generate a web json based upon the claim of user's timezone. The Token is generated from the `GetTokenAsync` method of `ApplicationTokenProvider.cs` in the Infrastructure project.

````js
new Claim(CustomClaimTypes.TimeZone,user.ApplicationTimeZoneName)
````

This will retrieve the time as per the user's configured timezone.

