---
title: Authentication
author: rxcontributortwo
category: rxwebcore
subcategory : tours-of-contoso-app
type: simple
linktitle: overview
---

# Authentication

For accessing the Api in the application, the first security aspect to be fulfilled is authentication, It is done using JWT Token which is most reliable way. 
The login api is created in the Authentication Controller while creation of the project. The token is fetched using the `Get` method which will be further passed as the authorization header in the `post` method.
For more information about this information, refer the <a class="redirect-link" href="/rx-web-core/security/authentication">Authentication</a> section.

## Why you have to call get and post request?
The get method allows any user to get a anonymous token and that token is used to call the post method used to access the api and act accordingly.  This is done to prevent brute force attacks.

![Login Api](Images/login-api.gif)
<p class="image-description">Accessing The Login Api.</p>