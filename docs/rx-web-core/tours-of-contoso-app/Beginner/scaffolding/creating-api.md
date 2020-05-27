---
title: Creating Api
author: rxcontributorone
category: rxwebcore
subcategory : tours-of-contoso-app
type: simple
linktitle: creating-api
---
# Creating Api
Web Api are responsible for handling the Http request that are made in attempt to create, read, update, delete or search data from the database. There are many types of Api which are made depending upon the operation to be performed on the entity. 

<a role="button" target="_blank" href="https://github.com/rxweb/RxWebCore/tree/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.Api/Controllers/Api/MasterModule" class="git-link-button"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

You will learn:
<ul class="bullet-list">
  <li class="overview-nav-item">Creating Basic Controllers</li> 
</ul>

## Course Api

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


## Student Api
Let's create another controller for basic operations for the Student entity using the below command:

`````
rxwebcore --controller --basic --main Students --uow Master
`````

After the successful execution of the command it will generate a controller class named `StudentsController` in the MasterModule folder of the Api folder in the Controllers folder of the ContosoApplication.Api folder.

The StudentsController which is generated is as follows:

````js
    [ApiController]
    [Route("api/[controller]")]
	
	public class StudentsController : BaseController&ltStudent,vStudent,vStudentRecord&gt
    {
        public StudentsController(IMasterUow uow):base(uow) {}

    }
````    



This controllers manages the basic CRUD operations done on the course entity without involving any complexity into it. For more information about methods and accesing basic api, visit <a class="redirect-link" href="/rx-web-core/developing-the-api/basic-controller">Basic Api</a>