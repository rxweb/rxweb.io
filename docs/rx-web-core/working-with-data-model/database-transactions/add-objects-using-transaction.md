---
title: Add Objects Using Transaction
author: rxcontributorone
category: working-with-data-model
category: database-transactions
type:simple
linktitle:objectstransaction
---

Used for adding objects using BeginTransaction, Here the `DbContextManager` is resolved using Dependency injection in the controller.  

```js
    public CandidatesDomain(IResourceUow uow, IDbContextManager<ResourceContext> dbContextManager)
    {
      this.Uow = uow;
      DbContextManager = dbContextManager;
    }
```

The `BeginTransaction` method of DbContextManager will begin the transaction on the Uow that is resolved from the constructor(ResourceUow)
and using `RegisterNewAsync` method will change the state of the Object and the `CommitAsync` method will save the changes in the database.

# Example  
```js
    public async Task AddTransaction(Candidate candidate)
    {
      await DbContextManager.BeginTransactionAsync(this.Uow);
      await Uow.RegisterNewAsync(candidate);
      await DbContextManager.CommitAsync(this.Uow);
    }    
```