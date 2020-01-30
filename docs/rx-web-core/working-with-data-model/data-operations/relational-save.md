---
title: Relational Save
author: rxcontributorone
category: working-with-data-model
subcategory: data-operations 
type:simple
linktitle:relational-save
---

# Saving Related Entities
Saving relational entities refers to saving data in the master table along with saving the entity into the respective child table. The database operations are done with the help of Uow methods, but when complex data operations are involved it is managed using `DbContextManager`. It seperates the query execution of stored procedure and the begin transaction, commit process.

It provides methods which are used to begin transaction, rollback transaction, commit transaction and executing sql query. It works on the principle of CQRS(command query responsibility segregation) which works on the basis of CommandQuerySeperation which states that Queries are used to retrieve a result set and command are used to change the state of the object but does not return anything.
It includes these steps while performing complex data operations.

## Begin Transaction
It is used to begin a transaction before executing the operations in the stored procedure.

## Commit
It is used to commit changes in the database after execution of the operation when the entity state is modified based upon entity framework core methods and stored procedure both.

## RollbackTransaction
It is used to rollback the transaction before commiting the changes to the database.

## SqlQueryAsync
It is used for executing  sql queries to fetch a result from stored procedure.

## Scenario
Let's consider a scenario where you want to save candidate's  availability in which you have two tables Candidates and CandidateAvailabilities
Insertion of Candidate can be maintained by `RegisterNewAsync` method of Uow but CandidateAvailabilities can be inserted with the help of stored procedure because the data to be inserted in the candidateAvailailities require more data to be inserted. For E.g per day 96 slots of candidates are inserted. 

Candidate Table:

<table class="table table-bordered">
<tr><th>CandidateId</th><th>FirstName</th><th>EmailId</th><th>Designation</th><th>Experience</th></tr>
<tr><td>1</td><td>John</td><td>johnd@gmail.com</td><td>Software Engineering</td><td>2</td></tr>
<tr><td>2</td><td>Bharat</td><td>bharatp@gmail.com</td><td>Software Engineering</td><td>2</td></tr>
</table>

CandidateAvailabilities Table:

<table class="table table-bordered">
<tr><th>CandidateAvailabilityId</th><th>AvailableDate</th><th>FromTime</th><th>ToTime</th><th>CandidateId</th></tr>
<tr><td>1</td><td>2019-05-01 00:00:00.000</td><td>10:15:00</td><td>10:30:00</td><td>1</td></tr>
<tr><td>1</td><td>2019-04-01 00:00:00.000</td><td>10:30:00</td><td>10:40:00</td><td>2</td></tr>
</table>

## Step 1 : 
Add the Candidate's details using `RegisterNewAsync` method of Uow. Perform `CommitAsync` on it.

````js
CandidateUow.RegisterNewAsync(candidate);
CandidateUow.CommitAsync();
````

## Step 2 :
Begin Transaction using `BeginTransaction` method of DbContextManger.

````js
DbContextManager.BeginTransaction();
````

## Step 3: 
Insert Candidate's Availabilites using `SqlQueryAsync` by passing necessary parameters.

````js
var result = await DbContextManager.SqlQueryAsync<StoreProcResult>("EXEC [dbo].spInsertcandidateAvailabilities @AvailableDate,  @FromTime, @ToTime, @CandidateId", spParameters);
````

## Step 4:
Executing try and catch to commit or rollback transaction.

````js
try
{
    DbContextManager.Commit();
}
catch(Exception e)
{
    DbContextManager.RollbackTransaction();
}

````
