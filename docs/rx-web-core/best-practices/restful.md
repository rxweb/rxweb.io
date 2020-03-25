---
title: Restful Best Practices
author: rxcontributorone
category: rxwebcore 
type:simple
linktitle:restful-best-practices
---

After data models and database context are created, arrives a need of creating a web api which fulfills   
software requirements like following proper web standards along with that large enterprise applications should maintain simplicity, consistency and reliability. Seperating api logic includes HTTP verbs which serves different meaning according to the operation performed on the entity. 

# HTTP Verbs
There are different types of HTTP methods, In a web api controller there must be methods accessed according to the name of the HTTP verb. GET and POST method are the most used methods of the controller and when we talk about the total methods that should be present in a controller, they are get, get(with parameter:id),post,patch,put and delete. In case you have to perform these operations based upon muliple parameters it is preferred to performed based upon parameters and by making different methods.  

<ul class="bullet-list">
   <li class="overview-nav-item">Each controller should have 6 HTTP verbs(GET, POST, PUT, PATCH, DELETE) seperating API resources.</li>   
   <li class="overview-nav-item">For operations which do not fit in CRUD operations, for example search in this case it is prefered to create another controller for it.</li>
</ul>

# API Endpoints
This involves using Nouns instead of verbs. The url to access should contain the controller name which and the parameter passed. Once your entity is decided you need to decide what actions to be performed in the controller and its mapping

<ul class="bullet-list">
   <li class="overview-nav-item">Name the controller in the plural form.</li>   
   <li class="overview-nav-item">The constructed endpoint should be as below:
   <b>Correct way</b>
   <table class="table table-bordered">
   <tr><th>API Endpoint</th></tr>
   <tr><td>GET /Students/1</td></tr>
   <tr><td>DELETE /Students/1</td></tr>
   <tr><td>POST /Students</td></tr>   
   <tr><td>PUT /Students/1</td></tr>
   <tr><td>PATCH /Students/1</td></tr>

   
   </table>

   <b>Incorrect way</b>
 <table class="table table-bordered">
   <tr><th>API Endpoint</th></tr>
   <tr><td>GET /Student/getStudents/1</td></tr>
   <tr><td> DELETE /Student/deleteStudents/1</td></tr>
   <tr><td> POST /Student/saveStudents</td></tr>   
   <tr><td>PUT /Student/updateStudents/1</td></tr>
   <tr><td> PATCH /Student/updateStudents/1</td></tr>
  </table>

   
   </li>   
   <li class="overview-nav-item">While using child controller, the api endpoint should be:

   <b>Child Controller</b>
   <table class="table table-bordered">
   <tr><th>API Endpoint</th></tr>
   <tr><td>GET /Students/1/StudentDetails/2</td></tr>
    </table>
   This represents that it will fetch StudentDetails having StudentDetailId 2, of Student with StudentId 1
   </li>
</ul>

# HTTP Response Status Code
Whenever there occurs any sort of error while performing some action using web api, there are HTTP status codes which denote the type of response fetched each having their different meanings. 

<ul class="bullet-list">
   <li class="overview-nav-item">Api error code handling should be done using Http status code. To read more about HTTP status codes and their meanings visit <a target="_blank" class="redirect-link" href="https://docs.microsoft.com/en-us/dotnet/api/system.net.httpstatuscode?view=netframework-4.8">HTTP Status codes</a></li>   
   <li class="overview-nav-item">For more error handling a error message should be returned so that to know if any input validation failed, created tuple's Id etc...</li>
</ul>

# Json

Depending upon your need, you must select your content type, REST supports many like plain text, JSON, XML and HTML. In most of the cases while accessing more number of records  application/JSON is used. It is key and value based data type with increases response.

<ul class="bullet-list">
   <li class="overview-nav-item">set application/JSON as generic MIME</a></li>   
   <li class="overview-nav-item">set Content-type as application/json in request headers</li>
</ul>

# Using SSL
Use ssl to encrypt the communication, this will secure your application from being accessed from anywhere in the world without being authenticated. Instead of signing in every time into the api it given simple access token to make authentication simplified.    
