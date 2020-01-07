---
title: Creating Tables
author: rxcontributorone
category: working-with-data-model
subcategory: database-approach
type:simple
linktitle:creatingtables
---
# Creating Tables
Database tables have data of entities in the database which are having multiple records. It is very important to provide a proper name of the tables, Names of the columns  
and choose its data type. Lets see what are the principles and conventions which should be kept in mind while creating tables.

1) The table name should be in pascal case and defined in a plural manner because a tables contains multiple recordset, Hence it is collection of entity data. For eg : [dbo].Countries, [dbo].States, [dbo].Candidates, [dbo].CandidateAvailabilities etc.    

2) The column name should also be in pascal case, with its appropriate prefix and suffix. For eg : CountryId, CountryName etc.     

3) The data type must be selected as per the column value to be stored. For eg : CountryId int. 

Examples :

## [dbo].Countries

CREATE TABLE [dbo].[Countries](
	[CountryId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
	[LanguageId] [int] NOT NULL
)

## [dbo].States

CREATE TABLE [dbo].[States](
	[StateId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
	[CountryId] [int] NOT NULL
)

## [dbo].Candidates
