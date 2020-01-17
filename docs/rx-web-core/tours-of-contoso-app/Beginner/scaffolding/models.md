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

**vCourseLookups View** 

````js
CREATE VIEW [dbo].[vCourseLookups]
AS
SELECT    CourseId, CourseName
FROM      Courses
GO
````

**Generated vCourseLookups Model**

````js
[Table("vCourseLookups",Schema="dbo")]
    public partial class vCourseLookup
    {
		#region CourseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CourseId Annotations

        public int CourseId { get; set; }


        public string CourseName { get; set; }

        public vCourseLookup()
        {
        }
	}
````    

## Students

**Students Table**

````js
CREATE TABLE dbo.Students  
(  
    StudentId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
    StudentName [varchar](50) NOT NULL,
    RollNumber int NOT NULL,
    Age int NOT NULL,
    Gender [varchar](10) NOT NULL,
    EmailId [varchar](30) NOT NULL,
    CourseId int FOREIGN KEY REFERENCES Courses(CourseId)
); 
````

**Generated Student Model**

````js
[Table("Students",Schema="dbo")]
    public partial class Student
    {
		#region StudentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion StudentId Annotations

        public int StudentId { get; set; }

		#region StudentName Annotations

        [Required]
        [MaxLength(50)]
		#endregion StudentName Annotations

        public string StudentName { get; set; }

		#region RollNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion RollNumber Annotations

        public int RollNumber { get; set; }

		#region Age Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Age Annotations

        public int Age { get; set; }

		#region Gender Annotations

        [Required]
        [MaxLength(10)]
		#endregion Gender Annotations

        public string Gender { get; set; }

		#region EmailId Annotations

        [Required]
        [MaxLength(30)]
		#endregion EmailId Annotations

        public string EmailId { get; set; }

		#region CourseId Annotations

        [RelationshipTableAttribue("Courses","dbo","","CourseId")]
		#endregion CourseId Annotations

        public Nullable<int> CourseId { get; set; }

		#region Course Annotations

        [ForeignKey(nameof(CourseId))]
        [InverseProperty(nameof(ContosoApplication.Models.Main.Course.Students))]
		#endregion Course Annotations

        public virtual Course Course { get; set; }


        public Student()
        {
        }
    }    
````

**vStudents View**

````js
CREATE VIEW [dbo].[vStudents]
AS
SELECT    Students.RollNumber, Students.StudentName, Students.EmailId, Courses.CourseName
FROM      Students, Courses
WHERE     Students.CourseId = Courses.CourseId
go
````

**Generated vStudents Model**

````js
   [Table("vStudents",Schema="dbo")]
    public partial class vStudent
    {
		#region RollNumber Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RollNumber Annotations

        public int RollNumber { get; set; }


        public string StudentName { get; set; }


        public string EmailId { get; set; }


        public string CourseName { get; set; }


        public vStudent()
        {
        }
	}
````

**vStudentRecords View**

````js
CREATE VIEW [dbo].[vStudentRecords]
AS
SELECT    Students.StudentName, Students.RollNumber, Students.Age, Students.Gender, Students.EmailId, Courses.CourseName
FROM      Students, Courses
WHERE     Students.CourseId = Courses.CourseId
GO
````

**Generated vStudentRecords Model**

````js
   [Table("vStudentRecords",Schema="dbo")]
    public partial class vStudentRecord
    {

        public string StudentName { get; set; }

		#region RollNumber Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RollNumber Annotations

        public int RollNumber { get; set; }


        public int Age { get; set; }


        public string Gender { get; set; }


        public string EmailId { get; set; }


        public string CourseName { get; set; }


        public vStudentRecord()
        {
        }
	}
````