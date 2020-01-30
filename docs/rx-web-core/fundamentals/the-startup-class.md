---
title: The Startup Class
author: rxcontributorone
category: rxwebcore
subcategory: fundamentals
type:simple
linktitle:thestartupclass
--- 

# The Startup Class
The startup class of ASP.Net core apps is the start of the application which is used to configure the services.  It calls two main methods while the application starts which are named as `configureServies` and `Configure`. 

## ConfigureServices
ConfigureServices is the method which is used while the runtime and this method is used to add services. You can register a service in configure services using Dependency Injection or application services. It performs the role of adding services of 
<ul class="bullet-list">
<li><a class="redirect-link" href="/rx-web-core/fundamentals/configuration-options">Configuration Options</a></li>
<li><a class="redirect-link" href="/rx-web-core/fundamentals/dependency-injection">Dependency Injection</a></li>
<li><a class="redirect-link" href="/rx-web-core/fundamentals/security">Security</a></li>
<li><a class="redirect-link" href="/rx-web-core/fundamentals/performance">Performance</a></li>
<li><a class="redirect-link" href="/rx-web-core/fundamentals/dbcontext">DbContext</a></li>
</ul>

````js
  public void ConfigureServices(IServiceCollection services)
        {         
            services.AddConfigurationOptions(Configuration);
            services.AddHttpContextAccessor();
            services.AddPerformance();
            services.AddSecurity(Configuration);
            services.AddSingletonService();
            services.AddScopedService();
            services.AddDbContextService();
            services.AddControllers();
            services.AddMvc(options=> {
                options.AddRxWebSanitizers();
                options.AddValidation();
            }).SetCompatibilityVersion(CompatibilityVersion.Version_3_0).AddNewtonsoftJson(
                oo =>
                {
                    var resolver = new CamelCasePropertyNamesContractResolver();
                    if (resolver != null)
                    {
                        var res = resolver as DefaultContractResolver;
                        res.NamingStrategy = null;
                    }
                    oo.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });
        }
````

## Configure
The configure method is responsible for specifying the behaviour of HTTP requests. You can add pipelines by adding components to `IApplicationBuilder` instance. 

The following pipelines are configured using the configure method are :

<ul class="bullet-list">
<li>Use Performance</li>
<li>Use Routing</li>
<li>Use Security</li>
<li>Use StaticFiles</li>
<li>Use Endpoints</li>
</ul>

````js
  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UsePerformance();

            app.UseRouting();

            app.UseSecurity(env);            

            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireAuthorization();
            });
        }

````