---
title: Connection Resilency
author: rxcontributorone
category: working-with-data-model
subcategory: advance
type:simple
linktitle:connectionresilency
---

ConnectionResilency refers to retrying the database commands whenever connection failures occurs. It is beneficial when more network connections are involved. For example LoadBalancer. It retries to execute the failing commands such as save changes and BeginTransaction which are failed whenever connection is lost. It ensapsulates the logic required to detect failures.

`ConnectionResiliency` needs to be configured in the appsettings.json file 

````js
  "ConnectionResiliency": {
      "MaxRetryCount": 2,
      "MaxRetryDelay": 20
    }
````    

It is implemented by using `AddConnectionResiliency` method which is used in the `BaseBoundedContext` along with the configuration which is mentioned as above. The method uses `EnableRetryOnFailure` method of Microsoft.EntityFrameworkCore.SqlServer which enables to connect database server after failures with the help of the configuration set in `ConnectionResiliency`.  


# See Also