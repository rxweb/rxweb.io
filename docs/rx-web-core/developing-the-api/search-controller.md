---
title: SearchController
author: rxcontributorone
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:search-controller
---
# Search Controller

Displaying list of the data tuples in the user interface requires a `search` operation when there is large number of records retrieved.
This involves faster search result fetching from the server which is a part of defining the application efficiency, This can be achieved by making a search controller, prior to it there must be a stored procedure which returns `json` and passes to the client side without involving of the web server.

The controller will have a predefined route which include the controller name. For example: `[Route("api/UsersSearchController")]` 

> Name of that basic controller must have a suffix "Controller". For example: `UsersSearchController`.

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/HumanResourceApplication/HumanResourceApplication.Api/Controllers/Api/Search/Main/UsersSearchController.cs"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>

## Generate a Search Controller

To create a search controller, open the `Package Manager Console` and run the following command.

> rxwebcore --controller --search --main &ltController_Name&gt --uow &ltModule_Name&gt --spname &ltName_of_stored_procedure&gt

Lets consider a scenario where you want to create a `UsersSearchController` in the `OrdersModule`, you have to write:

> rxwebcore --controller --search --main Users --uow User --spname, "spSearchUsers"

`UsersSearch` is the controller name and `User` is the module name. It will create a controller `UsersSearchController` in search folder of api in the project

## Methods

<table class="table table-bordered">
<tr><th>Method</th><th>Return Type</th><th>Request Params</th><th>Request Body</th><th>Response</th></tr>
<tr><td>Post</td><td>IActionResult</td><td> - </td><td>searchParams</td><td>search result</td></tr>
</table>

## Example
In this example  `MainSqlDbContext` is the context of `UsersModule` which contains the `spSearchUsers`
which is executing while fetching the search result which are retrieved by passing searchParams as dictionary object in the post method.

````js
[ApiController]
[Route("api/[controller]")]
public class UsersSearchController : ControllerBase
    {
        private IDbContextManager&ltMainSqlDbContext&gt DbContextManager { get; set; }
        public UsersSearchController(IDbContextManager&ltMainSqlDbContext&gt dbContextManager) {
            DbContextManager = dbContextManager;
    }

    [HttpPost]
    public async Task&ltIActionResult&gt Post([FromBody]Dictionary&ltstring,string&gt searchParams)
    {
        var spParameters = new object[2];
        spParameters[0] = new SqlParameter() { ParameterName = "Query", Value = searchParams["query"] };
        spParameters[1] = new SqlParameter() { ParameterName = "UserId", Value = UserClaim.UserId };
        var result = await DbContextManager.StoreProc&ltStoreProcResult&gt("[dbo].spSearchUsers", spParameters);
        return Ok(result.SingleOrDefault()?.Result);
    }
}
````   

