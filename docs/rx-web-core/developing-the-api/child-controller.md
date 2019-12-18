---
title: Child Controller
author: rxcontributortwo
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:childcontroller
---

While working with entities which are depending on a larger entity. It becomes important to manage the data using a shared key. It is managed using parent and child controller.

The data operations which are to be performed on CandidateAvailabilities entity(Based upon the ResourceContext and ResourceUow created) will be done based upon the record of a particular candidate which will be retrieved from its parent Candidate Controller. 

The controller must be inherited from the class `BaseChildController` in which  `Model`, `View` and `RecordView` related to that child entity are passed as a parameter. The controller will have a predefined route which include the parent controller name followed by id and child controller name. For example: `[Route("api/Candidate/{CandidateId}/CandidateAvailabilities")]`

> Name of that child controller must have a suffix "Controller". For example: `CandidateAvailabilitiesController`.

# Generate a Child Controller

To Create a child controller, open the `Package Manager Console` and run the following command:

> rxwebcore --controller --basic --main &ltChild_Controller_Name&gt --uow &ltModule_Name&gt --parent &ltParent_Controller_Name&gt

Let's consider a scenario where you want a `CandidateAvailabilitiesController` as a child controller and `CandidateController` as the parent Controller in the `ResourceModule`, you have to write:

> rxwebcore --controller --basic --main CandidateAvailabilities --uow Resource --parent Candidates

In the above command, `child` is the type of controller, `CandidateAvailabilities` is the name of the child controller, `Candidates` is the name of the parent controller and the last parameter `Resource` is the name of the module. This command will create a child controller named as "CandidateAvailabilitiesController" under the Api section of the project inside the same "Resource" module folder. 

> If you want to create a domain child controller, run the below command :  

> rxwebcore --controller --domain --main &ltChild_Controller_Name&gt --uow &ltModule_Name&gt --parent &ltParent_Controller_Name&gt

# Methods

`BaseChildController` is inherited by `ControllerBase` and contain various methods used for Data interaction such as Get, Put, Post, Patch and Delete. These methods are always public methods of the Controller as the child controller class methods must be publically accessible to the specific action of the of the Controller. 

There are mainly 6 methods used for the Child Controller which needs to be there in the BaseChildController which are as follows: 

<table class="table table-bordered">
<tr><th>Method</th><th>Return Type</th><th>Request Params</th><th>Request Body</th><th>Response</th></tr>
<tr><td>Get</td><td>IActionResult</td><td> - </td><td> - </td><td>complete list of that entity which binds the shared key of parent and child entity</td></tr>
<tr><td>GetById</td><td>IActionResult</td><td>Id of that entity which you want to get</td><td> - </td><td>Single entity based on the id</td></tr>
<tr><td>Post</td><td>IActionResult</td><td> - </td><td>New Entity object which you want to add</td><td>Ok()</td></tr>
<tr><td>Put</td><td>IActionResult</td><td>Id of that entity which you want to update</td><td>Complete entity object with the specific change which you want to update</td><td>NoContent()</td></tr>
<tr><td>Patch</td><td>IActionResult</td><td>Id of that entity which you want to update</td><td>entity object only with the specific change which you want to update in the form of `JsonPatchDocument`</td><td>NoContent()</td></tr>
<tr><td>Delete</td><td>IActionResult</td><td>Id of that entity which you want to delete</td><td> - </td><td>NoContent()</td></tr>
</table>

# Complete Example of Child Controller

Here is an example of child controller:

````js
    
    [ApiController]
    [Route("api/Customer/{CustomerId}/[controller]")]	
	public class CustomerContactController : BaseChildController<CustomerContact,vCustomerContact,vCustomerContactRecord>
    {
        public CustomerContactController(IMasterUow uow):base(uow) {}
    }

````

# Accessing the Child Controller API

![Child Controller](Images/child-controller.gif)

# See Also
Child Controller