---
title: performance
author: rxcontributorone
category: rxwebcore
subcategory: performance
type:simple
linktitle:performance
---

# Static Cache
Static cache is added using annotation of `[Cachable]` above the controller. In this tag, the amount of time also needs to be mentioned(in milliseconds). 

Considering the below scenario in the candidate's controller, taking an example of get method, Once called the data will be cached and whenever the Api is called, It will retrieve the cached data till the time which is mentioned in the parameter.

````js
    [Cachable(2)]
    [ApiController]
    [Route("api/[controller]")]
	
	public class CandidatesController : BaseController<Candidate,Candidate,Candidate>
    {
        public CandidatesController(IResourceUow uow):base(uow) {}
    }
````

# Entity Tag
It is done using `[CacheETag]` annotation above the controller. Once the Api is called the entity tag will be cached and making request again to the same Api will retrieve data from the cache until any other request is made to the server. 

For example, if get request is called in the CandidateControllers which is mentioned below the entity data will be cached and whenever the get request is made after that it will retrieve the cached data as result. It will not make a call to the database server until post event takes place.

Example :

````js
    [CacheETag]
    [ApiController]
    [Route("api/[controller]")]
	
	public class CandidatesController : BaseController<Candidate,Candidate,Candidate>
    {
        public CandidatesController(IResourceUow uow):base(uow) {}

    }
````

# Response Compression
Reducing size of files can reduce the payload and increase the application performance. Natively compressed assets such as images(PNG) and files having much smaller size(less than 150-1000 bytes) should not be compressed.     

# See Also