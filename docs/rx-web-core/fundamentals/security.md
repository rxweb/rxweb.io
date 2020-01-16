---
title: Security
author: rxcontributorone
category: rxwebcore
subcategory: fundamentals
type:simple
linktitle:security
--- 

# Security
This service includes major security aspects which are to be taken care while the start of the application like authorizing the token, validating access to limited IPs, adding security headers, allowed specific origins and handling exceptions and many more. The detailed description of them are described below..

## Allow Specific Origin

This principle works on not allowing to access the web APIs from any origin. It prevents the malicious site from reading confidential data from another site. The allowed hosts are to be configured in the `appsettings.json`, You can add the allowed ports and origins in this configuration.

````js
 "AllowedHosts": [ "http://localhost:4200" ]
````

## Ip Safelist

IpSafelist means to create a list of trusted Ip addresses. It is used for validating access to limited and trusted IPs.
You have to configure allowed Ips in "AllowedIps" key of `appsettings.json` 

# Configuration

````js
    "AllowedIps": [
    ]
  
````  

In `security.cs` file of the Bootstrap folder of the Api project, The SetIpSafeList method is called which is used to validate the list of IpAddressed which are set in the AllowedIps. 

# Handling Exception

Handling exception helps you to keep trace of all the errors and exceptions while any exception occurs through the error object. you can set any instance of the exception handler feature and exception.

````js
    private static void HandleException(this IApplicationBuilder applicationBuilder)
        {
            applicationBuilder.UseExceptionHandler(errorApp =>
            {
                errorApp.Run(async context =>
                {
                    var errorFeature = context.Features.Get<IExceptionHandlerFeature>();
                    var exception = errorFeature.Error;
					var traceId = await exception.LogAsync(context);
                    context.Response.ContentType = "application/json;";
                    await context.Response.WriteAsync("Error Has Occured.");
                });
            });
        }
````

# Security Headers
It sets the security headers to each context which are response headers which include xss-protection, cross domain policies, security policy etc.  

````js
 private static void SetSecurityHeaders(this IApplicationBuilder applicationBuilder)
        {
            applicationBuilder.Use((context, next) =>
            {
                context.Response.Headers["X-XSS-Protection"] = "1; mode=block";
                context.Response.Headers["X-Frame-Options"] = "DENY";
                context.Response.Headers["X-Content-Type-Options"] = "NOSNIFF";
                context.Response.Headers["Strict-Transport-Security"] = "max-age=31536000";
                context.Response.Headers["X-Permitted-Cross-Domain-Policies"] = "master-only";
                context.Response.Headers["Content-Security-Policy"] = "default-src 'none'; style-src 'self'; img-src 'self'; font-src 'self'; script-src 'self'";
                return next();
            });
        }

````