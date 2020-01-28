---
title: Creating Api
author: rxcontributorone
category: beginner
type: simple
linktitle: creating-api
---

## Course Api
Web Api are responsible for handling the Http request that are made in attempt to create, read, update, delete or search data from the database. There are many types of Api which are made depending upon the operation to be performed on the entity. 

<a role="button" target="_blank" href="https://github.com/rxweb/RxWebCore/tree/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.Api/Controllers/Api/MasterModule" style="
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

You will learn:
<ul class="bullet-list">
  <li class="overview-nav-item">Creating Basic Controllers</li> 
</ul>

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

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.Api/Controllers/Api/MasterModule/CoursesController.cs">View The Course Api</a></span>.
</li>
</ul>

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
	
	public class StudentsController : BaseController<Student,vStudent,vStudentRecord>
    {
        public StudentsController(IMasterUow uow):base(uow) {}

    }
````    

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.Api/Controllers/Api/MasterModule/StudentsController.cs">View The Course Api</a></span>.
</li>
</ul>

This controllers manages the basic CRUD operations done on the course entity without involving any complexity into it. For more information about methods and accesing basic api, visit <a class="redirect-link" href="/rx-web-core/developing-the-api/basic-controller">Basic Api</a>