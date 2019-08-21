import { Component } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { ApplicationBroadcaster } from '@rx/core';
import { VALIDATOR_DESCRIPTION } from './validator-description'
import { Router, ActivatedRoute } from '@angular/router';
var xyz = "abc";


@Component({
    selector: 'app-dynamic-validation',
    templateUrl: './dynamic-validation.component.html',

})
export class DynamicValidationComponent {

    selectedValidator: string;
    dropDownData: any[];
    serverData: any[];
    validatorWiseServerData: any[];

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
            this.onChange();
        })
    }

    ngOnInit() {
                this.http.get('assets/examples/dynamic-validations/dynamic-validation.json').subscribe((res: any) => {
                    this.validatorWiseServerData = JSON.parse(res);
                    this.dropDownData = Object.keys(this.validatorWiseServerData);
                    this.onChange()
                    this.applicationBroadcaster.topSubject.next(this.pageTitle);
                });

    }

    onChange(){
        this.bindForm = false;
        setTimeout(() => {
            debugger;
            this.uiBindings = [];
            xyz = this.serverData = this.validatorWiseServerData[this.validator];
            this.serverData.forEach(t => {
                if (t.validators)
                    this.uiBindings.push(t.name);
            })
            this.bindForm = true;
            this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData);
            this.validatorDescription = VALIDATOR_DESCRIPTION[this.validator];
        }, 50)
    }
}
