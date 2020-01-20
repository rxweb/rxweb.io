---
title: Data Auditing
author: rxcontributorone
category: working-with-data-model
subcategory: advance
type:simple
linktitle:data-auditing
---
# Data Auditing

While working with large number of data and accessing multiple entities in the database, it becomes important to keep a log of all the activities that are done on the data entities. To record the log of the entities. The log database of the application. i.e `HumanResourceApplicationLogDb` It has table including AuditRequests, AuditRecords and AuditRecordDetails which takes of logging activities. The detailed information about them is described in the <a class="redirect-link" href="/step-by-step-guide/project-creation#logdatabase">Log database information</a> 

To start data auditing on a particular entity, we just to add [RecordLog] on the model class.

````js
[Table("Candidate",Schema="dbo")]
[RecordLog]
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
````