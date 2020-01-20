---
title: Performance
author: rxcontributorone
category: rxwebcore
subcategory: fundamentals
type:simple
linktitle:performance
--- 

# Performance
`IServiceCollection` provides methods using which the performance of the application can be well maintained. In our project we have used method of this interface for implemeting high performance in the application. They are :

 <ol class="bullet-list">
  <li>AddMemoryCache</li> 
  <li>AddResponseCompression</li>
</ol>   

## Memory Cache
Used for Memory caching

## Response Compression 
Reducing size of files can reduce the payload and increase the application performance. Natively compressed assets such as images(PNG) and files having much smaller size(less than 150-1000 bytes) should not be compressed.     

````js
        public static void AddPerformance(this IServiceCollection serviceCollection)
        {

            serviceCollection.AddMemoryCache();
            serviceCollection.AddResponseCompression(options =>
            {
                options.Providers.Add&ltGzipCompressionProvider&gt();
                options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] { "image/svg+xml" });
            });


            serviceCollection.Configure&ltGzipCompressionProviderOptions&gt(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });

        }

````

This method is made in the `Performance.cs` file in the bootstrap folder of the api folder.