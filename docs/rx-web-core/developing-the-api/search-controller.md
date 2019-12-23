---
title: SearchController
author: rxcontributorone
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:searchcontroller
---

Displaying list of the data tuples in the user interface requires a `search` operation when there is large number of records retrieved.
This involves faster search result fetching from the server which is a part of defining the application efficiency, This can be achieved by making a search controller, prior to it there must be a stored procedure which returns `json` and passes to the client side without involving of the web server.

The controller will have a predefined route which include the controller name. For example: `[Route("api/UsersSearchController")]` 

> Name of that basic controller must have a suffix "Controller". For example: `UsersSearchController`.

# Generate a Search Controller

To create a search controller, open the `Package Manager Console` and run the following command.

> rxwebcore --controller --search --main &ltController_Name&gt --uow &ltModule_Name&gt --spname &ltName_of_stored_procedure&gt

Lets consider a scenario where you want to create a `UsersSearchController` in the `OrdersModule`, you have to write:

> rxwebcore --controller --search --main UsersSearch --uow User --spname", "spSearchUsers"

`UsersSearch` is the controller name and `User` is the module name. It will create a controller `UsersSearchController` in search folder of api in the project

# Methods

<table class="table table-bordered">
<tr><th>Method</th><th>Return Type</th><th>Request Params</th><th>Request Body</th><th>Response</th></tr>
<tr><td>Post</td><td>IActionResult</td><td> - </td><td>searchParams</td><td>search result</td></tr>
</table>

# Example
In this example  `MainSqlDbContext` is the context of `UsersModule` which contains the `spSearchUsers`
which is executing while fetching the search result which are retrieved by passing searchParams as dictionary object in the post method.

````js
    [ApiController]
	[Route("api/[controller]")]
    public class UsersSearchController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public UsersSearchController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new object[2];
            spParameters[0] = new SqlParameter() { ParameterName = "Query", Value = searchParams["query"] };
            spParameters[1] = new SqlParameter() { ParameterName = "UserId", Value = UserClaim.UserId };
            var result = await DbContextManager.SqlQueryAsync<StoreProcResult>("EXEC [dbo].spSearchUsers @Query, @UserId", spParameters);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
````   

# See Also
Security