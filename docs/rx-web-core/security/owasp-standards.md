---
title: OWASP Top Standards
author: rxcontributorone
category: security 
type:simple
linktitle:owaspstandards
---

Security measures right from the initial stage of developement are much necessary in web development for maintaining a level of confidentiality and preventing the resources and corporate data from attacks like XSS(Cross-site scripting) and SQl injection, providing better access control using authentication and authorization in the application for identifying the user and give access accordingly.

rxwebcore follows top OWASP security standards. <a class="redirect-link" href="https://cheatsheetseries.owasp.org/cheatsheets/DotNet_Security_Cheat_Sheet.html">OWASP</a>(Open Web Application Security Project) is an organization with focuses on software security.

According to it, there are application security verification standards which provide a basis of testing web application technical security controls and also provides list of requirements for secure development. Some of them are listed below:

# Open Redirect Attacks
Preventing open redirect attacks leads to prevention from redirection to a external/malicious URL whenever the application redirects the user based upon the contents of the url. It is done by allowing only those redirections which are done locally within the application and they must be applied to a known querystring or url only. 

# Cross Site Scripting Attack
Preventing this leads to preventing the application from client side scripts which can steal cookies and session tokens, change the contents of the web etc.. It is done by various steps which include

1. HTML encoding using razor
2. Javascript encoding using razor
3. Accessing encoders in the code
4. Encoding URL Parameters
5. Validation as an XSS prevention technique

# Enable Cross-Origin Requests   
This principle works on not allowing to access the web APIs from any origin. It prevents the malicious site from reading confidential data from another site. The allowed hosts are to be configured in the `appsettings.json`

````js
 "AllowedHosts": [ "http://localhost:4200" ]
````

# Injection:
1) SQL Injection:
It is done by using parameterized query while using Entity framework where a direct sql query must be used. 

2) OS Injection: 
Operation system injection is prevented using `System.Diagnostics.Process` to start process and using whitelist validation.

# Broken Authentication:
It is prevented by using secure password hashes having salt key and setting cookie policy.

# Sensitive Data Exposure
It prefers using store hash to store password, allow SSL and ensure http headers doesn't disclose any information.

# Broken access control
1) Weak account management
Ensure that cookies are sent via HTTPs, reduce session timeOut, protect logIn, Registration methods from bruteforce attack and use reCaptcha.

2) Missing function level access control
Implementing Authorization using access in controllers for implementation of role based authorization.

# Security Misconfiguration
1) Debug and Stack trace
Http redirection, debug and trace are off in production.

# Using components with known vulnerablities
Keeping the .NET framwork updated with latest patches, NuGet updates




