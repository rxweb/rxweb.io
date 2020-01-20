---
title: Basic Save
author: rxcontributorone
category: working-with-data-model
subcategory: data-operations 
type:simple
linktitle:basic-save
---

# Basic Save

Used during post request for creating new object/objects of entity.

# Adding Single Object
`RegisterNewAsync` is used for adding entity. Here is an example of adding a single object of candidate using this method, It will change state of the object and after `commit` method is executed it will add the object to database. 

````js
    public async Task Add(Candidate candidate)
    {
      await Uow.RegisterNewAsync(candidate);
      await Uow.CommitAsync();      
    }
````

# Adding Multiple Objectss
Adding Multiple Objects using `RegisterNewAsync`

````js
   public async Task AddAsyncList([FromBody]IList<Candidate> candidates)
    {
        await Uow.RegisterNewAsync(candidates);
        await Uow.CommitAsync();
    }
````

