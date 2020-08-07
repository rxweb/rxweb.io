import { Component } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { ApplicationBroadcaster } from '@rx/core';
import { VALIDATOR_DESCRIPTION } from './validator-description'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilderDynamicComponent } from '../reactive-dynamic-forms/dynamic-form-builder/dynamic-form-builder.component';

var xyz = "abc";
export const HTML_CONTENT = `
<div class="container">
<form [formGroup]="dynamicFormBuildConfig.formGroup">
    <div viewMode="basic" [rxwebDynamicForm]="dynamicFormBuildConfig" [uiBindings]="uiBindings">
    </div>
</form>
</div>
`
const COMPONENT_TEMPLATE = `
import { Component, Input,OnInit } from '@angular/core';
import { RxDynamicFormBuilder,DynamicFormBuildConfig } from "@rxweb/reactive-dynamic-forms"
import {SERVER_JSON} from './server-json';


@Component({
  selector:"dynamic-validation",
  templateUrl:'./dynamic-validation.component.html'
})
export class DynamicValidationComponent implements OnInit  {
  
    dynamicFormBuildConfig:DynamicFormBuildConfig;
    
    

    formData:any[] = SERVER_JSON;


    uiBindings:string[] = #REPLACE_VALUE;

    constructor(private dynamicFormBuilder:RxDynamicFormBuilder){}

    ngOnInit(){
            this.dynamicFormBuildConfig = this.dynamicFormBuilder.formGroup(this.formData);          
    }

}

`

const SERVER_JSON = `export const SERVER_JSON = #REPLACE_VALUE`


@Component({
    selector: 'app-dynamic-validation',
    templateUrl: './dynamic-validation.component.html',
    entryComponents:[FormBuilderDynamicComponent]

})
export class DynamicValidationComponent {
    refComponent = FormBuilderDynamicComponent
    selectedValidator: string;
    dropDownData: any[];
    serverData: any[];
    validatorWiseServerData: any[];
    content:{[key:string]:any} ;
    uiBindings: string[] = [];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    pageTitle: any = { "id": "dynamic-validation", "title": "Dynamic Validation", "subLink": null };
    bindForm: boolean = false;
    validator: any;
    validatorDescription: string;

    constructor(private formBuilder: RxDynamicFormBuilder, private http: HttpClient, private applicationBroadcaster: ApplicationBroadcaster, private router: Router, route: ActivatedRoute) {
        this.validator = route.queryParams['value']["validator"]
        route.queryParams.subscribe(t=>{
            this.validator = t.validator;
            if(this.validatorWiseServerData)
            this.onChange();
        })
    }

    ngOnInit() {
     
                this.http.get('https://rxwebioassets.blob.core.windows.net/$web/json/dynamic-validation.json').subscribe((res: any) => {
                    this.validatorWiseServerData = JSON.parse(res);
                    this.dropDownData = Object.keys(this.validatorWiseServerData);
                    this.onChange()
                    this.applicationBroadcaster.topSubject.next(this.pageTitle);
                });

    }
title:string;
    onChange(){
        this.content = undefined;
        this.bindForm = false;
        
        setTimeout(() => {
            this.title = `Dynamic Form with ${this.validator} Validation Example`;
            this.content = {};
            this.uiBindings = [];
            this.serverData = this.validatorWiseServerData[this.validator];
            this.content.json = { "server-json": SERVER_JSON.replace("#REPLACE_VALUE",JSON.stringify(this.serverData)) }
            this.serverData.forEach(t => {
                if (t.validators)
                    this.uiBindings.push(t.name);
            })
            this.content.html = HTML_CONTENT;
            this.content.component = COMPONENT_TEMPLATE.replace("#REPLACE_VALUE",JSON.stringify(this.uiBindings));
            this.content.dataParam = {serverData:this.serverData,uiBindings:this.uiBindings};
         
            this.bindForm = true;
            this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData);
            this.validatorDescription = VALIDATOR_DESCRIPTION[this.validator];
        }, 50)
    }
}
