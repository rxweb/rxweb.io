---
title: Models
author: rxcontributorone
category: beginner
type: simple
linktitle: models
---

# Models
For performing various data operations on the entities, we need to access the fields of the tables as properties of a model class. This can be achieved by generating/scaffolding the POCO model classes. 

Let's quickly move further towards creating model classes of the tables and views that we have created in the database by running the below command. 

`````js
rxwebcore --models --main
`````
The above command will create model classes of created Courses and Students tables, vCourseLookups, vStudents and vStudentRecords views from the main connection string that is configured in the `appsettings.json`. 

After the below command is excecuted successfully, it will generate model classes of the created tables in the main folder of DbEntities folder of the ContosoApplication.Models project. The generated models are as below 

![Contoso Model Classes](Images/contoso-models.PNG)

<p class="image-description">Generated Model Classes.</p>

Here are the database schema and their respective generated model classes.

## Course

**Courses Table**

````js
CREATE TABLE dbo.Courses  
(  
    CourseId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CourseName [varchar](50) NOT NULL
);
````

**Generated Course Model**

````js
    [Table("Courses",Schema="dbo")]
    public partial class Course
    {
		#region CourseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CourseId Annotations

        public int CourseId { get; set; }

		#region CourseName Annotations

        [Required]
        [MaxLength(50)]
		#endregion CourseName Annotations

        public string CourseName { get; set; }

		#region Students Annotations

        [InverseProperty("Course")]
		#endregion Students Annotations

        public virtual ICollection<Student> Students { get; set; }


        public Course()
        {
			Students = new HashSet<Student>();
        }
	}
````

