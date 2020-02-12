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

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/HumanResourceApplication/Scripts/humanresource.sql#L75-L136"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

## Countries
This table contains information related to the countries which are used in the application.

````js
CREATE TABLE [dbo].[Countries](
	[CountryId] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [nvarchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
	[LanguageId] [int] NOT NULL
)
````

## States
This table contains information related to the states based upon the country which is passed as a FK reference.

````js
CREATE TABLE [dbo].[States](
	[StateId] [int] IDENTITY(1,1) NOT NULL,
	[StateName] [nvarchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
	[CountryId] [int] NOT NULL
)
````

## Candidates
This table stores information of the candidates which are registered in the application.

````js
CREATE TABLE [dbo].[Candidates](
	[CandidateId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[EmailId] [varchar](50) NOT NULL,
	[CountryId] [int] NOT NULL,
    [Designation] [varchar](50) NOT NULL,
    [Experience] [int] NOT NULL
)
````

## CandidateAvailabilities
This table stores information about availability of the registered candidates. 

````js
CREATE TABLE [dbo].[CandidateAvailabilities](
	[CandidateAvailabilityId] [int] IDENTITY(1,1) NOT NULL,
	[AvailableDate] [datetimeoffset](7) NOT NULL,
	[FromTime] [time](7) NOT NULL,
	[ToTime] [time](7) NOT NULL,
    [CandidateId] [int] NOT NULL
)
````