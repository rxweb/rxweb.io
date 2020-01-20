---
title: Bulk Save
author: rxcontributorone
category: working-with-data-model
subcategory: data-operations 
type:simple
linktitle:bulk-save
---

# Bulk Save
Whenever we want to insert multiple entries in a single execution. For example here we take an example of inserting an array of CandidateAvailabilities having large number of data. When there are scenarios where the operation to be performed using more than one entity and it is not been covered using the UnitOfWork method. A stored procedure is executed using `DbContextManager` the transaction is being opened and the changes are commited. For more information about it refer `DbContextManager`.

Example :

````js
CREATE TYPE dbo.CandidateAvailabilitiesArray 
AS TABLE
(
  AvailableDate datetimeoffset(7),
  FromTime time(7),
  ToTime time(7),
  CandidateId int
);

CREATE PROC spInsertcandidateAvailabilities
@CandidateAvailabilityArray AS dbo.CandidateAvailabilitiesArray READONLY
AS
BEGIN
    INSERT INTO CandidateAvailabilities SELECT * FROM @CandidateAvailabilityArray 
END
````