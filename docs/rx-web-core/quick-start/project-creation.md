---
title: Project Creation
author: rxcontributorone
category: quick-start
subcategory : project-creation
type:simple
linktitle: project-creation
---

# Project Creation
Creating project using Clean Architecture involves two alternates as described below, you can choose any one of the below 

## Using Template 
This involves creating project using the visual studio marketplace template after following the below steps:

  <ul style="line-height:3;">                          
<li><b>Step 1:</b> Download the Project Template from Visual Studio <a class="redirect-link"  href="https://marketplace.visualstudio.com/items?itemName=AjayOjha.rxwebcleanarchitecture"  target="_blank">Market Place</a></li>                               
                            <li><b>Step 2:</b>  Run the downloaded VSIX file</li>
                            <li><b>Step 3:</b>  Open the Visual Studio</li>
                            <li><b>Step 4:</b>  Click on create the project</li>
<li><b>Step 5:</b>  Select the Project Template of Clean Architecture of AspNetCore and Goto Next</li>
<li><b>Step 6:</b>  Enter the Project Name and tick the option of 'Place Solution and Project in the same directory'</li>
                           
                          </ul>

## Using CLI 
This involves creating project using the dotnet new command after following the below steps:
  <ul style="line-height:3;">                           
                            <li><b>Step 2:</b>  Open Command Prompt</li>
<li><b>Step 2:</b>Install the dotnet CLI of <a href="https://www.nuget.org/packages/clean.architecture.aspnetcore/1.0.0"   class="redirect-link" target="_blank">AspNetCore Clean Architecture</a></li>
                              
                            <li><b>Step 2:</b>  Run the command for creating new project : </li>
                          </ul>
`````
 dotnet new rxwebapi --name &ltProject_Name&gt
`````