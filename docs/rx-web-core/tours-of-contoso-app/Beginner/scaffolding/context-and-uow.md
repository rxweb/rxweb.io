---
title: BoundedContext And Uow
author: rxcontributorone
category: beginner
type: simple
linktitle: boundedcontext-and-uow
---

# Bounded Context
As we follow bounded context design pattern and  domain driven approach, we will create a bounded context for each domain/Module of the project, Module are the main units or parts of the project which are predefined before starting work on the specific module. 

This will give the benefit of each domain working seperately without any dependency of each other which can lead to moving towards microservices or serverless whenever required.

The below command will generate a bounded context in the main folder of the DbContext folder of the ContosoApplication.BoundedContext project. Here we create a bounded context for the master module.

`````
rxwebcore --context --main Master
`````

After the successful execution of the command, it will create a boundedcontext class having no added models and views into it. Hence we further need to add model and views which we have to include in the master module as `DbSet` using the below command:

# Add Models into the DbContext
As we have to retrieve the student and course data from the database through DbContext, So we need to define DbSets of both the models.

`````
rxwebcore --context --main Master --add-models Students,Courses
`````

This will add the specified models classes including the tables and views which are generated in the previous tutorial of generating <a class="redirect-link" href="/rx-web-core/tours-of-contoso-app/Beginner/scaffolding/models">Models</a>

The generated Master DbContext with its added model classes is as below:

````js
    public class MasterContext : BaseBoundedContext, IMasterContext
    {
        public MasterContext(MainSqlDbContext sqlDbContext, IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor, ITenantDbConnectionInfo tenantDbConnection) : base(sqlDbContext, databaseConfig.Value, contextAccessor, tenantDbConnection) { }

        #region DbSets
        public DbSet<vStudentRecord> vStudentRecords { get; set; }
        public DbSet<vStudent> vStudents { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        #endregion DbSets
    }

    public interface IMasterContext : IDbContext
    {
    }
````
<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.BoundedContext/DbContext/Main/MasterContext.cs">View The Generated Bounded Context</a></span>.
</li>
</ul>

# Unit of Work
Along with the generation of the bounded context, it generates a Uow(unit of work) class of its respective module, the main purpose the unit of work class holds is to manage the state of the database objects using its provided methods and execute necessary changes to the database in one go after the data operation is successfully done, besides this it also performs data entity auditing.

The Uow class of the master module is as below:

````js
    public class MasterUow : BaseUow, IMasterUow
    {
        public MasterUow(IMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMasterUow : ICoreUnitOfWork { }
````

The above Uow class is created in the main folder of the ContosoApplication.UnitOfWork project. Once the database connection is resolved using the bounded context, the uow is responsible for handling data activities which are done using the Apis which we will create further.

<ul class="bullet-list">
<li>
<span style="text-decoration:underline;"> <a class="redirect-link" target="_blank" href="https://github.com/rxweb/RxWebCore/blob/master/src/Samples/AspNetCore/Documentation%20Examples/Tours%20of%20Contoso%20Application/Beginner/ContosoApplication/ContosoApplication.UnitOfWork/Main/MasterUow.cs">View The Generated Unit Of Work</a></span>.
</li>
</ul>

