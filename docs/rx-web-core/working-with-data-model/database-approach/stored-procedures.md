---
title: Stored Procedures
author: rxcontributorone
category: working-with-data-model
subcategory: database-approach
type:simple
linktitle:storedprocedures
---

Stored procedures are prefered to used when large number of data is involved. It leads to high performance, reusability of code and easy maintanability. It takes input parameters for execution and based upon that it provides the output which should be as per the required resulset. It stores the programming statements for a specific task to be performed and needs to be compiled only once. 

# 1. Performing Search operation on entities having large number of records.
Suppose we have a list of employees which have records exceeds 1000 records and the user wants to search employees. A Stored procedure will be made named `spSearchEmployees` which will be used to fetch the record list to be shown on the user interface.  

Example :

````js

CREATE PROCEDURE [dbo].[spSearchEmployees]

	@Query VARCHAR(MAX)
AS
BEGIN
	
 select  CAST(RAND() * 1000 + 1 AS INT) as Id,
 (Select EmployeeId ,EmployeeName from Employees  where EmployeeName like @Query+'%' FOR JSON PATH) as Result

END
````

# 2. Creating search lookup for performing search in a dropdown
For performing search in the dropdown, we will make `spEmployeeLookups` which will search employee's information based upon the parameter passed. in this case `EmployeeName` is passed.   

Example :

````js

CREATE PROCEDURE [dbo].[spEmployeeLookups]

	@EmployeeName nVARCHAR(50)
AS
BEGIN
	
 (Select EmployeeId ,EmployeeName from Employees  where EmployeeName like @EmployeeName +'%') as Result

END

````

# 3. Managing complex operations
When there are scenarios where the operation to be performed using more than one entity and it is not been covered using the UnitOfWork method. A stored procedure is executed using `DbContextManager` the transaction is being opened and the changes are commited. For more information about it refer `DbContextManager`.

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

