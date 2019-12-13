---
title: ExceptionHandlingAndLogging
author: rxcontributorone
category: security 
type:simple
linktitle:exceptionhandlingandlogging
---

Exception handling and logging keeps a trace of all the exceptions that occur whenever any request is made to the APIs. `IExceptionHandlerFeature` of Microsoft.AspNetCore.Diagnostics gives information about the error occured and the path. The error object of the same contains information of message, source, stacktrace and targetsite which provides the necessary information to detect the cause of the exception. Further the `LogAsync` method of `RxWeb.Core.Logging` will log the exception details in the database based upon the exception and the context.

```js
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
```