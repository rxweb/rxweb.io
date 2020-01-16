---
title: Database Schema Mapping
author: rxcontributorone
category: database-schema-mapping  
type:simple
linktitle:database-schema-mapping
---

# Database Schema Mapping

Tables are created in the by-default schema `dbo` but if your database has tables which are created in different schemas. The data-models are created with the schema mapping in the database. Whenever the model classes are generated the schema mapping is automatically handled by the framework.  

Let's consider a scenario where Candidates table and Clients table are created in both dbo and hr schema.
