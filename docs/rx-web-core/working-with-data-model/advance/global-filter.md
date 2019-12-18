---
title: Global Filter
author: rxcontributorone
category: working-with-data-model
subcategory: advance
type:simple
linktitle:globalfilter
---

While working with entities which needs a filter to be applied globally for example Country needs to filtered where Status is active and this should be applied throughout the application. For this GlobalQueryFilter expression is used based upon which the global filter will be applied using extended model

**Step 1:**
Create a extended model in main folder of Models project named `ActiveFilter.cs` and create a function `IsActive` into it. 

````js
        public Expression<Func<vUser, bool>> IsActive()
        {
            return x => x.StatusId == 1;
        }

````

Status is defined in ApplicationObjects. for more information please refer <a class="redirect-link" href="/AspNetCore/step-by-step-guide/database-information.html#applicationobjects">ApplicationObjects</a>

**Step 2:**
Add `GlobalQueryFilter` annotation above the model class`Country.cs`

````js
    [Table("Clients",Schema="dbo")]
    [GlobalQueryFilter(nameof(Country.IsActive))]
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

        public string ClientName { get; set; }

	    #region ApplicationObject Annotations

        [ForeignKey(nameof(StatusId))]
        [InverseProperty(nameof(HumanResourceApplication.Models.Main.ApplicationObject))]
		#endregion ApplicationObject Annotations

        public virtual ApplicationObject Client { get; set; }
	}
````


# See Also