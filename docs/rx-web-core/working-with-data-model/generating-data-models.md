---
title: Generating Data Models
author: rxcontributorone
category: working-with-data-model  
type:simple
linktitle:datamodels
---
# Generating Data Models
Data models are POCO models which have database entity objects as properties which are further used while working with data. As in the earlier section we have discussed about the database provider and how the database objects are created, In this section we will generated models class of the tables and views which are present in the database.    

# Generate POCO Model

`POCO` means `Plain Old CLR Object`. POCO Entity is a class that doesn't depend on any framework-specific base class. These models act as a data carriers and has validation and any other business logic you want to implement. 

> POCO model must be publically accessible.

Database entities which can be generated as POCO models are:

<ul class="bullet-list">
    <li>Tables</li>
    <li>Views</li>
</ul>

 you can create POCO models for all the required tables and views. For creating their POCO models in the application, open the `Package Manager Console` and run the following command:

`````
rxwebcore --models --main
`````

In the above command, --models denotes model generation and --main is the database connection name configured in the `appsettings.json`.
This will generate POCO models for all the tables and views in the `DbEntities` folder inside the `Models` section of the project.

The below model classes are data model classes of the tables that we have generated in the <a class="redirect-link"  href="/rx-web-core/working-with-data-model/database-approach/creating-tables">Tables</a> sections.

## Country.cs
```js
[Table("Countries",Schema="dbo")]
public partial class Country
{
    #region CountryId Annotations

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [System.ComponentModel.DataAnnotations.Key]
    #endregion CountryId Annotations

    public int CountryId { get; set; }

    #region CountryName Annotations

    [MaxLength(10)]
    #endregion CountryName Annotations

    public string CountryName { get; set; }

    #endregion StatusId Annotations

    public int CountryId { get; set; }
  
    #endregion StatusId Annotations

    public int StatusId { get; set; }

    #endregion LanguageId Annotations

    public int LanguageId { get; set; }

    #region Countries Annotations

    [InverseProperty("Client")]
    #endregion Countries Annotations

    public virtual ICollection<Candidate> Countries { get; set; }

    public Client()
    {
        Candidates = new HashSet<Candidate>();
    }
}
```

## State.cs

```js
[Table("States",Schema="dbo")]
public partial class State
{
    #region StateId Annotations

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [System.ComponentModel.DataAnnotations.Key]
    #endregion StateId Annotations

    public int StateId { get; set; }

    #region StateName Annotations

    [MaxLength(10)]
    #endregion StateName Annotations

    public string StateName { get; set; }

    #endregion StatusId Annotations

    public int StatusId { get; set; }

    #endregion StatusId Annotations

    #region States Annotations

    [InverseProperty("Country")]
    #endregion Countries Annotations

    public virtual ICollection<Country> Countries { get; set; }


    public Country()
    {
        States = new HashSet<State>();
    }
}
```

## Candidate.cs 

```js
[Table("Candidate",Schema="dbo")]
public partial class Candidate
{
    #region CandidateId Annotations

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [System.ComponentModel.DataAnnotations.Key]
    #endregion CandidateId Annotations

    public int CandidateId { get; set; }

    #region FirstName Annotations

    [MaxLength(10)]
    #endregion FirstName Annotations

    public string FirstName { get; set; }

    #region FirstName Annotations

    [MaxLength(10)]
    #endregion FirstName Annotations

    public string FirstName { get; set; }

    #endregion EmailId Annotations 

    [MaxLength(50)]
    public string EmailId { get; set; }

    #endregion EmailId Annotations

    #endregion CountryId Annotations 

    public int CountryId { get; set; }

    #endregion CountryId Annotations

    #endregion Designation Annotations 

    [MaxLength(10)]
    public string Designation { get; set; }

    #endregion Designation Annotations

    #endregion Experience Annotations 

    public int Experience { get; set; }

    #endregion Experience Annotations

    #region States Annotations
}
```

## CandidateAvailability.cs


```js
[Table("CandidateAvailabilities",Schema="dbo")]
public partial class CandidateAvailabilty
{
    #region CandidateAvailabilityId Annotations

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [System.ComponentModel.DataAnnotations.Key]
    #endregion CandidateAvailabilityId Annotations

    public int CandidateAvailabilityId { get; set; }

    #region AvailableDate Annotations

    #endregion AvailableDate Annotations

    public DateTimOffset AvailableDate { get; set; }

    #region AvailableDate Annotations

    #endregion FromTime Annotations

    public TimeSpan FromTime { get; set; }

    #endregion FromTime Annotations 

    public TimeSpan ToTime { get; set; }

    #endregion ToTime Annotations

    [InverseProperty("Candidates")]
    #endregion Candidates Annotations

    public virtual ICollection<Candidate> Candidates { get; set; }


    public Candidate()
    {
        CandidateAvailabilities = new HashSet<CandidateAvailabilty>();
    }
}
```