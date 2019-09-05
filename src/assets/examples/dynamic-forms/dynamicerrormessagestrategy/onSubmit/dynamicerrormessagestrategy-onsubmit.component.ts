import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { ResetFormType } from '@rxweb/reactive-form-validators'

@Component({
  selector: 'app-dynamicerrormessagestrategy-onsubmit',
  templateUrl: './dynamicerrormessagestrategy-onsubmit.component.html'
})

export class DynamicErrormessagestrategyOnsubmitComponent implements OnInit {
  serverData = [{
    name: "firstName",
    type: "text",
    ui: {
      placeholder: "Enter FirstName"
    },
    validators: {
      required: true
    }
  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }
  submit() {
    this.dynamicFormBuildConfig.formGroup.submitted = true;
  }
}