---
title: Authentication
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Authentication

After creating the Contoso University Application through rxwebcore and understanding the project structure in the earlier section, let's move forward, there comes a major aspect to be implemented named security... we will start with the first and very important standard during login any application i.e authentication.

Before we dive into how we have implemented authentication in our project, let's see what does authentication actually mean.

`Authentication` is basically determining who is attempting to log in to a secure domain. In simple words, proving the user who he claims to be. When you are developing any software application, effective user authentication is the key concern for any developer. Since we are focusing on the <a class="redirect-link" href="https://restfulapi.net/">RESTful API</a>, well thought out and powerful authentication strategy is required to be implemented.

# Authentication method used in Contoso App

As far as authentication method is concerned, token based authentication through JSON Web Token is more preferable when it comes to scalable identity. JWT based authentication is one of the modern and more secure way of authentication. 

