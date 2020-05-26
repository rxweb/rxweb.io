---
title: Basic Controller
author: rxcontributortwo
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:basic-controller
---
# Basic Controller

When you want basic data operations without any complexity and need to modify any of the custom business logic, basic controller is made. It includes methods which are used for simple CRUD operations.

The controller will be inherited from the class `BaseController` in which  `Model`, `View` and `RecordView` related to that entity are passed as a parameter. The controller will have a predefined route which include the controller name. For example: `[Route("api/Candidates")]`

The Candidate entity requires the basic data operations(Based upon the ResourceContext and ResourceUow created) to be done without addition of any custom business logic to be added. So we will generate a basic controller for the Candidate Entity of the ResourceModule.

> Name of that basic controller must have a suffix "Controller". For example: `CandidatesController`.

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/HumanResourceApplication/HumanResourceApplication.Api/Controllers/Api/CandidateModule/CandidatesController.cs"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

## Generate a Basic Controller

To Create a basic controller, open the `Package Manager Console` and run the following command:

> rxwebcore --controller --basic --main &ltController_Name&gt --uow &ltModule_Name&gt

Let's consider a scenario where you want a `CandidatesController` in the `CandidateModule`, you have to write:

> rxwebcore --controller --basic --main Candidates --uow Candidate

In the above command, `basic` is the type of controller, `Candidates` is the name of the controller and `Candidate` is the name of the module. This command will create a separate folder named as "ResourceModule" and add a basic controller named as "CandidatesController" under the Api section of the project. 

## Methods

`BaseController` contain various methods used for Data interaction such as Get, Put, Post, Patch and Delete which will use the methods of Uow to interact with data. These methods are always public methods of the Controller as the controller class methods must be publically accessible to the specific action of the of the Controller. 

There are mainly 6 methods used for the Basic Controller which needs to be there in the BaseController which are as follows: 

<table class="table table-bordered">
<tr><th>Method</th><th>Return Type</th><th>Request Params</th><th>Request Body</th><th>Response</th></tr>
<tr><td>Get</td><td>IActionResult</td><td> - </td><td> - </td><td>complete list of that entity</td></tr>
<tr><td>GetById</td><td>IActionResult</td><td>Id of that entity which you want to get</td><td> - </td><td>Single entity based on the id</td></tr>
<tr><td>Post</td><td>IActionResult</td><td> - </td><td>New Entity object which you want to add</td><td>Ok()</td></tr>
<tr><td>Put</td><td>IActionResult</td><td>Id of that entity which you want to update</td><td>Complete entity object with the specific change which you want to update</td><td>NoContent()</td></tr>
<tr><td>Patch</td><td>IActionResult</td><td>Id of that entity which you want to update</td><td>entity object only with the specific change which you want to update in the form of `JsonPatchDocument`</td><td>NoContent()</td></tr>
<tr><td>Delete</td><td>IActionResult</td><td>Id of that entity which you want to delete</td><td> - </td><td>NoContent()</td></tr>
</table>

## Complete Example of Basic Controller 

Here is an example of a basic controller.

````js

    [ApiController]
    [Route("api/[controller]")]
	public class CandidatesController : BaseController&ltCandidate,vCandidate,vCandidateRecord&gt
    {
        public CandidatesController(ICandidateUow uow):base(uow) {}
    }

````

## Acessing The Api

For accessing the created Api, you must pass the JWT token which is generated when the authentication controller is called. For more information about creation of JWt web token Please refer <a class="redirect-link" href="/rx-web-core/step-by-step-guide/run-the-project">Login Api</a>.  




