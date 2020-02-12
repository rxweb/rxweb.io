---
title: LookupController
author: rxcontributorone
category: rxwebcore
subcategory: developing-the-api
type:simple
linktitle:lookupcontroller
---
# Lookup Controller

Large modules have entities which need to be bind as a dropdown, In such cases a lookup controller is made for the module which accesses Uow to manipulate data based upon the entity and display the data of module entities in a dropdown.  

The controller must be inherited from the class `BaseLookupController`. The controller will have a predefined route which include the controller name. For example: `[Route("api/CountryLookupsController")]` 

<a role="button" target="_blank" class="git-link-button" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/HumanResourceApplication/HumanResourceApplication.Api/Controllers/Api/Lookups/Main/CountryLookupsController.cs"><span style="vertical-align: middle">Download the Code</span><img class="_3-99 img" src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.2365-6/21630666_872184906282544_8997395837269049344_n.png?_nc_cat=106&amp;_nc_ohc=ixvAzbNREvgAX9AAb7C&amp;_nc_ht=scontent.famd5-1.fna&amp;oh=738ee91e1ae8331712186222788828a0&amp;oe=5ED55A8A" height="25" alt="" style="vertical-align:middle;margin-left: 4px;max-width: 654px;"></a>


## Generate a Lookup Controller

To create a lookup controller, open the `Package Manager Console` and run the following command.

> rxwebcore --controller --lookup --main &ltController_Name&gt --uow &ltModule_Name&gt

Lets consider a scenario where you want to create a `CountryLookupsController` in the `UsersModule`, you have to write:

> rxwebcore --controller --lookup --main CountryLookups --uow User

`CountryLookups` is the controller name and `User` is the module name. It will create a controller `CountryLookupsController` in lookup folder of api in the project

## Add lookups 
Adding lookups in the controller:

> rxwebcore --controller --lookup --main &ltCountry_Name&gt --uow &ltModule_Name&gt --add-lookups &ltLookup&gt

As per this controller : 

> rxwebcore --controller --lookup --main CountryLookups --uow CountryLookup --add-lookups vCountryLookups

## Methods

<table class="table table-bordered">
<tr><th>Method</th><th>Return Type</th><th>Request Params</th><th>Request Body</th><th>Response</th></tr>
<tr><td>AllAsync</td><td>list</td><td> - </td><td> - </td><td>complete list of that entity</td></tr>
<tr><td>OrderBy</td><td>list</td><td>predicate</td><td> - </td><td>list</td></tr>
<tr><td>Where</td><td>list</td><td>predicate</td><td> - </td><td>list</td></tr>
</table>

## Example

````js
[ApiController]
  [Route("api/[controller]")]
  public class CountryLookupsController : BaseLookupController
  {
    public CountryLookupsController(IUserUow uow) : base(uow) { }

    #region Lookups
    [HttpGet("CountryLookups")]
    public IQueryable<vCountryLookup> GetCountryLookups()
    {
      return Uow.Repository<vCountryLookup>().Queryable();
    }
    #endregion Lookups

  }

````


