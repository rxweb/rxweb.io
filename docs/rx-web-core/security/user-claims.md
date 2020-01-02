---
title: UserClaims
author: rxcontributorone
category: security
type:simple
linktitle:userclaims
---
# User Claims

Claims are known as key components used while implementing web based authentication. Claim represents user's piece of identity information, User delivers claim to application for examination. It is subjected by an issuer. In our case, the issuer is the application. It can also be a service, a role provider, an identity provider. An isuuer delivers claims by issuing security token.  

# Jwt token generation
The Jwt web token is generated with the help of the claims which are issued. It is generated using the WriteToken method of `IJwtTokenProvider` of RxWeb.Core.Security namespace. Based upon the claims passed the web token will be generated and based upon them the Web API will be accessed.

## Claim Types   
`System.Security.Claims` provides a wide range of claims that return claim of a specific type. For detailed information about the UserClaims Please visit <a class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/api/system.identitymodel.claims.claimtypes?view=netframework-4.8">ClaimTypes</a>. Some of them are listed below:

### Name Identifier
It is used to set claim which retrives the name of the entity based upon the required URL. 

````js
    new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString())
````

### Locality
It is used to set claim which retrives the locale in which the entity resides based upon the required URL. 

````js
   new Claim(ClaimTypes.Locality,user.LanguageCode)
````

## CustomClaimTypes
Custom claim types are used for claims based upon custom attributes such as Timezone and tenantId. These are defined as Constants in the Const folder of Models Project.

### TimeZone
It is used to set claim based upon the timezone which is configured in the database with respect to the user.

````js
	new Claim(CustomClaimTypes.TimeZone,user.ApplicationTimeZoneName)
````

### TenantId
It is used to get claims based upon the tenantId which is configured in the appsettings. You need to pass the value of the tenantId which is used as the tenantColumn name. For example, if the tenantCloumn is clientId and it should be configured as 1. You need to pass the claim as 

````js
  new Claim(CustomClaimTypes.TenantId,(1).ToString()) 
````

# Getting the value of claim
The value of the UserClaim is retrived using the `GetClaimValue` method of RxWeb.Core.Security 

## Email
It is used to get the claimValue of email attribute

````js
  GetClaimValue(ClaimTypes.Email)
````

## Anonymous
It is used to check whether Anonymous claimType is set true or false

````js
  GetClaimValue(ClaimTypes.Anonymous)
````

## Locale
It is used to get the claimed Locale value

````js
  GetClaimValue(ClaimTypes.Locality)
````

## CountryId
It is used to get the valuue of claimed Country of the user

````js
  GetClaimValue(ClaimTypes.Country);  
````

## Uri
It is used to get the claimed Uri value

````js
  GetClaimValue(ClaimTypes.Uri)
````

## UserId
It is used to get the claimed UserId value

````js
  GetClaimValue(ClaimTypes.NameIdentifier)
````

## UserName
It is used to get the claimed name of the user 

````js
 return GetClaimValue(name);
````
