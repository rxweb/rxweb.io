---
title: Generating Data Models
author: rxcontributorone
category: working-with-data-model  
type:simple
linktitle:datamodels
---
# Generating Data Models

`POCO` means `Plain Old CLR Object`. POCO Entity is a class that doesn't depend on any framework-specific base class. These models act as a data carriers and has validation and any other business logic you want to implement. 

> POCO model must be publically accessible.

Database entities which can be generated as POCO models are:

<ul>
    <li>Tables</li>
    <li>Views</li>
</ul>

 you can create POCO models for all the required tables and views. For creating their POCO models in the application, open the `Package Manager Console` and run the following command:

````js
rxwebcore --models --main
````

In the above command, --models denotes model generation and --main is the database connection name configured in the `appsettings.json`.
This will generate POCO models for all the tables and views in the `DbEntities` folder inside the `Models` section of the project.

## Example

Here is an example of the generated model:

````
[Table("Clients",Schema="dbo")]
public partial class Client
{
    #region ClientId Annotations

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [System.ComponentModel.DataAnnotations.Key]
    #endregion ClientId Annotations

    public int ClientId { get; set; }

    #region ClientName Annotations

    [MaxLength(10)]
    #endregion ClientName Annotations

    public string ClientName { get; set; }

    #region Candidates Annotations

    [InverseProperty("Client")]
    #endregion Candidates Annotations

    public virtual ICollection<Candidate> Candidates { get; set; }


    public Client()
    {
        Candidates = new HashSet<Candidate>();
    }
}
````



