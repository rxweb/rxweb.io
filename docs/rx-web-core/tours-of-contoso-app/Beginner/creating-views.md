---
title: Creating Views
author: rxcontributortwo
category: beginner
type: simple
linktitle: overview
---

# Views

`View` is a virtual-table based on the result-set of an SQL statement. The fields in a view are fields from one or more real tables in the database. You can add WHERE, and JOIN statements to a view and present the data as if the data were coming from one single table. Views are needed when we want to recieve our desired resultset in other form like storing data in int form but displaying in the varchar form, displaying data in a dropdown etc. 

Views are used for security purpose in databases. It restricts the user from viewing certain column and rows means by using view we can apply the restriction on accessing the particular rows and columns for specific user. Views display only those data which are mentioned in the query, so it shows only data which is returned by the query that is defined at the time of creation of the View. 

# Pros for using materialized views

<ul>
<li>Security</li>
<li>Query Simplicity</li>
<li>Structural simplicity</li>
<li>Data Integrity</li>
<li>Performance</li>
</ul>
