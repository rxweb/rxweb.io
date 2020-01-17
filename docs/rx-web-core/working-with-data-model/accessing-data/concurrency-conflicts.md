---
title: Concurrency Conflicts
author: rxcontributorone
category: working-with-data-model
subcategory: concurrency-conflicts
type:simple
linktitle:concurrency-conflicts
---

# Concurrency Conflicts

In an application having large number of users and domains there arises a possibility of database concurrency. Database concurrency refers to a condition in which multiple users or processes are trying to access same data in the database

In such cases, it becomes very important to maintain data consistency through concurrency control. Let's see how it is achieved using the Uow methods of RxWebCore.

## Concurrency Control
Types of concurrency ....
Concurrency control in data models is managed using `IConcurrencyException` interface. 


