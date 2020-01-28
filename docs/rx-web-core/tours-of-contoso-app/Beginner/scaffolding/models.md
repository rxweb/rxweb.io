---
title: Models
author: rxcontributorone
category: beginner
type: simple
linktitle: models
---

# Models
For performing various data operations on the entities, we need to access the fields of the tables as properties of a model class. This can be achieved by generating/scaffolding the POCO model classes. 

<a role="button" target="_blank" href="https://github.com/rxweb/RxWebCore/tree/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.Models/DbEntities/Main" style="
    background: #f5f6f7;
    color: #4e5665 !important;
    font-size: 12px;
    padding: 5px 10px;
    border-color: rgba(0,0,0,.14);
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    padding: 8px 15px;
    text-align: center;
    transition: all 100ms ease-out;
    display: inline-block;
    text-decoration: none;
    white-space: nowrap;
    margin-bottom: 30px;
    margin-top: 10px;
"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

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
Difference between database schema and database models.

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

    public virtual ICollection&ltStudent&gt Students { get; set; }


    public Course()
    {
		Students = new HashSet&ltStudent&gt();
    }
}
````

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.Models/DbEntities/Main/Course.cs">View The Course Model</a></span>.
</li>
</ul>

