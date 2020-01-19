---
title: Creating Api
author: rxcontributorone
category: beginner
type: simple
linktitle: creating-api
---

# Course Api
Web Api are responsible for handling the Http request that are made in attempt to create, read, update, delete or search data from the database. There are many types of Api which are made depending upon the operation to be performed on the entity. 

As the course Api requires basic operations to be performed, we will create a basic course controller using the below command:

`````
rxwebcore --controller --basic --main Courses --uow Master
`````

After the successful execution of the command it will generate a controller class named `CoursesController` in the MasterModule folder of the Api folder in the Controllers folder of the ContosoApplication.Api folder.

The CoursesController which is generated is as follows:

````js
    [ApiController]
    [Route("api/[controller]")]
	
	public class CoursesController : BaseController<Course,Course,Course>
    {
        public CoursesController(IMasterUow uow):base(uow) {}
    }
````

# Student Api
Let's create another controller for basic operations for the Student entity using the below command:

`````
rxwebcore --controller --basic --main Students --uow Master
`````

After the successful execution of the command it will generate a controller class named `StudentsController` in the MasterModule folder of the Api folder in the Controllers folder of the ContosoApplication.Api folder.

The StudentsController which is generated is as follows:

````js
    [ApiController]
    [Route("api/[controller]")]
	
	public class StudentsController : BaseController<Student,vStudent,vStudentRecord>
    {
        public StudentsController(IMasterUow uow):base(uow) {}

    }
````    

This controllers manages the basic CRUD operations done on the course entity without involving any complexity into it. For more information about methods and accesing basic api, visit <a class="redirect-link" href="/rx-web-core/developing-the-api/basic-controller">Basic Api</a>