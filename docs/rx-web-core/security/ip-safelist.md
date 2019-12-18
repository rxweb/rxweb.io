---
title: IpSafelist 
author: rxcontributorone
category: security 
type:simple
linktitle:ipsafelist
---

IpSafelist means to create a list of trusted Ip addresses. It is used for validating access to limited and trusted IPs.
To have to configure allowed Ips in "AllowedIps" key of `appsettings.json` 

# Configuration

````js
    "AllowedIps": [
    ]
  
````  

In `security.cs` file of the Bootstrap folder of the Api project, The SetIpSafeList method is called which is used to validate the list of IpAddressed which are set in the AllowedIps. 

# See Also

  