---
title: Delete
author: rxcontributorone
category: working-with-data-model
subcategory: data-operations
type:simple
linktitle:delete 
---

Used for delete operation to be done on entity.

# Example

```js
    public async Task DeleteAsync(int id)
    {
      var candidate = Uow.Repository<Candidate>().FindByKey(id);
      await Uow.RegisterDeletedAsync(candidate);
      await Uow.CommitAsync();
    }
```    