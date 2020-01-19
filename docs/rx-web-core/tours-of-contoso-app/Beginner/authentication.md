---
title: Authentication
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Authentication

For accessing the Api in the application, the first security aspect to be fulfilled is authentication, It is done using JWT Token which is very faster and reliable way. 
The login api is created in the Authentication Controller while creation of the project. The token is fetched using the `Get` method which will be further passed as the authorization header in the `post` method and further its token will be passed to authorize and access the created api. This is done to prevent brute force attacks.
For more information about this information, refer the <a class="redirect-link" href="/rx-web-core/security/authentication">Authentication</a> section.

> The maximum request per Ip to request the get method of the token is 100.

![Login Api](Images/login-api.gif)
<p class="image-description">Accessing The Login Api.</p>