---
title: Nested FormArray
author: rxcontributortwo
category: dynamic-forms
subcategory: advance-form-design
type: simple
linktitle: nestedformarray
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>
To create a nested FormArray in your dynamic form, you need to pass formArrayName, `type: "array"` and `controlConfigs` in server response.</p></div>

# Methods

Generally, in normal cases, if you want to add or remove formGroup from the formArray, you need to write custom logic. But with rxweb, this is much more easy. rxweb form provide the addItem() and removeItem(index) methods so you can easily modify your formArray contents.

## addItem()

`addItem()` method is used to add a new form to the formArray at the last index.

```html
<form>
  <div *ngFor="let buildConfig of dynamicFormBuildConfig.controlsConfig[controlConfig.config.controlConfigName];let index=i">
    <button class="btn btn-primary" (click)="addItem()">Add</button>
    <div viewMode="basic" [rxwebDynamicForm]="{controlsConfig:buildConfig,formGroup:dynamicFormBuildConfig.formGroup.controls[controlConfig.config.controlConfigName].controls[index]}" [uiBindings]="controlConfig.config.childrens">
    </div>
  </div>
</form>
```

## removeItem(index: number)

`removeItem(index: number)` method is used to remove an existing form at the mentioned index in the formArray.

```html
<form>
  <div *ngFor="let buildConfig of dynamicFormBuildConfig.controlsConfig[controlConfig.config.controlConfigName];let index=i">
    <button class="btn btn-primary" (click)="removeItem(index)">Remove</button>
    <div viewMode="basic" [rxwebDynamicForm]="{controlsConfig:buildConfig,formGroup:dynamicFormBuildConfig.formGroup.controls[controlConfig.config.controlConfigName].controls[index]}" [uiBindings]="controlConfig.config.childrens">
    </div>
  </div>
</form>
```

# Example

<div component="app-code" key="nestedformarray-complete-component"></div> 
Next, we need to write html code.
<div component="app-code" key="nestedformarray-complete-html"></div> 
<div component="app-example-runner" ref-component="app-nestedformarray-complete"></div>