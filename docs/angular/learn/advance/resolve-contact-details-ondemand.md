---
title: Resolve Contact Details On Demand
author: rxcontributorone
category: learn
type: simple
linktitle: resolve-contact-details-ondemand
---

In the Employee details form we have one form which contains two entites address and telephone number based upon which the formArray of the entity is resolved. This will be resolved based upon the selection of the user. If the user selects address the address formArray should be pushed and if the telephone array is selected the telephone array will be pushed.

Based upon this the user details contact form we need to create two <a href="/decorators/propArray/decorators" >propArray</a> objects in the model class as below :

# Pushing the Email entity on demand
The model class based upon which the entity is resolved conditionally is shown as below :

<div component="app-code" key="resolve-contact-details-on-demand-complete-model"></div>

Further the object instance will be pushed based upon the entity selected in the component code

<div component="app-code" key="resolve-contact-details-on-demand-complete-component"></div> 

# What we Built

<div class="container">
![Creating Projects](assets/rxwebcore/Images/entity-index.gif)
</div>