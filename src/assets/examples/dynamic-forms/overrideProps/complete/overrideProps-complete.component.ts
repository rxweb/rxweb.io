
import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder, overrideProps } from "@rxweb/reactive-dynamic-forms";

@Component({
  selector: 'app-overrideProps-complete',
  templateUrl: './overrideProps-complete.component.html'
})
@overrideProps({
  firstName: {
    label: {
      get: function () { return this.overrides.label; }, set: function (v) {
        this.overrides.label = v;
      }
    }
  },
  lastName: {
    placeholder: {
      get: function () {
         if (this.controlsConfig.firstName.value)
        return "Enter your LastName"
      }, set: function () {
        { this.overrides.placeholder = "Enter LastName"; }
      }
    }
  }
})

export class OverridepropsCompleteComponent implements OnInit {

  serverData: any[] = [
    {
      name: 'firstName',
      type: 'text',
      ui: { label: 'First Name',description:"Enter firstName to set placeholder in lastName using overrideProps" },
      overrideProps: ['firstName']
    },
    {
      name: 'lastName',
      type: 'text',
      ui: { label: 'Last Name' },
      overrideProps: ['lastName']
    }
  ]
  uiBindings: string[] = ["firstName", "lastName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData);
  }
}
