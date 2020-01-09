---
title: Project Setup
author: rxcontributorone
category: step-by-step-guide  
type:simple
linktitle:overview
---

# Overview



## Scenario
Let's consider a scenario of making a human resource enterprise application which can be used by small/large organizations for performing day to day tasks or activities done by Human Resource Team such as Managing resource data, managing payroll, recruitment process, performance evaluation etc.. as well as useful for the employees of the organization to maintain their profile, apply leaves, view attendance and update their professional skills.

This required a lots of real world cases. The core requirement of the application framework should be flexible to adopt the change request easily with the minimal line of code. On the top level note Client wants some of the extensive features in the application, which are listed below:

**Security** :

It plays a very important and unavoidable role in any application as it may contain private and sensitive data of the association which needs to be prevented from attacks. There are various notes to be followed which are listed below : 

* The application should perform secure `Token Based Authentication`.
* `Authorization` should be effectively.
* `OWASP` security standards should be followed.
* Data should be validated for its consistency 

**Performance** :

For an application to respond fast and maintain perfomance is necessary while multiple users access it. 

* Make a call to database if the data has been changed in the respective table.
* All the static data should be cached.
* Performance management while manipulating large data. 

**Localization and Globalization** :

Organizations working in different countries/regions may have users who have different timezones, locale etc.

* TimeZone conversion.
* API should return validation messages based upon the user locale.
* Whole UI framework should work based upon the locale.
* Bind the data in the drop down based upon server locale. 

Later on if the application needs to be made serverless as well as following microservices, it can be done at any point of time without changing a lot of code or the project structure. 

Based upon the above described scenario and aspects, Let's start making a new project using `rxwebcore`

# Next Steps
The upcoming documentation provides you information related to :
* Prerequisites
* Installation
* Project Creation








