---
title: Authentication
author: rxcontributorone
category: security
type:simple
linktitle:authentication
---
Developing any enterprise application, authentication is the primary criteria, like we are developing RESTfull API which requires some sort of authentication mechanism. We will implement it using Token based authentication through JSON Web Token. For more information about JWT Token, Please refer this <a class="redirect-link" href="https://tools.ietf.org/html/rfc7519">docs</a>.
Now a days this is very popular and more reliable. 

Basically We need to create a token and pass it to the client. Further more whenever the user request to the server with the token at that time the server parse the token and get the identity information of claimed user.
So How this will work, here we discuss in detail:

First of all we have use the TokenProvider class which is the part of `Rxweb.Core.Security`. Basically this class provides a token as well as validating the token.
As we are working on .NET Core api we have to resolve the service in the constructor of the `AuthenticationController` as per the below code:

```js
        public class AuthenticationController : ControllerBase
        {
                private IJwtTokenProvider TokenProvider { get; set; }

                public AuthenticationController(IJwtTokenProvider tokenProvider)
                {
                TokenProvider = tokenProvider;        
                }
        }
```

Generally we are generating a token while loging the application, The same we are following here. The token is generated from the `GetTokenAsync` method of `ApplicationTokenProvider.cs` which is located in the security folder of `HumanResourceApplication.Infrastructure`.`

```js
       public async Task<KeyValuePair<string, string>> GetTokenAsync(vUser user)
        {
            var token = TokenProvider.WriteToken(new[]{
                new Claim(
                    ClaimTypes.NameIdentifier, user.UserId.ToString()),
					new Claim(ClaimTypes.Locality,user.LanguageCode),
					new Claim(CustomClaimTypes.TimeZone,user.ApplicationTimeZoneName)
                    }, "Web", "User", DateTime.Now.AddDays(2));
            await UserAccessConfig.SaveTokenAsync(user.UserId, "web", token, LoginUow);
            return token;
        }
```
As per the above code the `WriteToken` method will be used by resolving the service in the constructor, which will create a json web token having security key and jsonWebToken which will be used in authorization bearer while making HTTP requests. 

# Parameters
1)claims :

The token will be generated based upon the proived <a class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/api/system.security.claims.claimtypes?view=netframework-4.8">ClaimTypes</a>, As a standard practice we store user related information in the respective claim types

2)Issuer :

The domain through which the API is accessed or issued.  It is set to "Web" in the example

3)audience :

The `audience` is the type of the user through which the token is generated. It is set to "User" in the example

4)Expires :

Set the expiration time of the token. In the above example we have set for 2 days. 

