---
title: Shared Database
author: rxcontributorone
category: working-with-data-model
subcategory: multitenancy
type:simple
linktitle:shareddatabase
---

Multitenancy means multiple organization or client can use a single software. `Multi Tenant` application means a software application which serves multiple clients from the same server. Here `tenent` word represent the client. Tenant can be a single client or an organization. Each tenant’s data is isolated and is not accessible to each other. Multi-tenancy is used while developing software that runs for different organizations.

# Tenant Based
Another approach for multi-tenancy is `Shared Database` between all the tenants, that means we keep all the tenant's data in a single database. In that case operational cost reduces as it is in the same database and do not depend on the number of clients. Maintainability becomes quite easier as in this approach isolating data is the main case study we need to think about. 

In this situation, each tenant's data is in the same tables. To isolate tenant's data we can add a discriminator column (for example: you can take `ClientId`) to respective table.

Lets consider a scenario in which the existing application does not serve multiple clients and now application has to work for multiple manpower companies in which there is a candidate form which should be accessed by different organizations. Let's see how it will be implemented based upon the organization. In this case the CLI command will add `[TenantFilterQuery]` above the clientId and client wise data serving data will be handled by it. 

There are two tables in the database Client and Candidate. 

Here is the Clients table

<table class="table table-bordered">
<tr><th>ClientId</th><th>ClientName</th></tr>
<tr><td>1</td><td>IBM</td></tr>
<tr><td>2</td><td>Oracle</td></tr>
</table>

Here is the Candidates table.

<table class="table table-bordered">
<tr><th>CandidateId</th><th>ClientId</th><th>CandidateName</th></tr>
<tr><td>1</td><td>1</td><td>John</td></tr>
<tr><td>2</td><td>1</td><td>Maria</td></tr>
<tr><td>3</td><td>2</td><td>Tony</td></tr>
<tr><td>4</td><td>2</td><td>Steve</td></tr>
</table>

Coming to the project, the `ClientId` is to be configured in the `appsettings.json` where `TenantColumnName` is the key Name and `ClientId` is the value.

After that you need to run the CLI command to add models which will add the `[TenantFilterQuery]` annotation above the ClientId property. Further we need to generate a JWT web joken based upon the TenantId in the `GetTokenAsync` method of `ApplicationTokenProvider.cs` which is located in the security folder of `HumanResourceApplication.Infrastructure`.

```js
new Claim(CustomClaimTypes.TenantId,1.ToString())
```

Once the token is generated based upon the provided TenantId and the candidates operations will be done based upon the candidate.

# Schema Based


