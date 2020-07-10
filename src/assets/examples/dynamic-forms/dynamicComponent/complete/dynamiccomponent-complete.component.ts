import { Component, OnInit } from "@angular/core";
import { dynamicComponent, DynamicFormBuildConfig, AbstractControlConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@dynamicComponent("personalInfo")
@Component({
  template: `
        <div>
<div class="card" >
<div class="card-header" >{{controlConfig.config.ui.text}}</div>
<div class="card-body">
 <form>
    <div viewMode="basic" [rxwebDynamicForm]="dynamicFormBuildConfig" [uiBindings]="controlConfig.config.childrens">
    </div>
</form>
</div>
</div>
    `
})
export class PersonalInfo extends AbstractControlConfig {

}
@Component({
  selector: 'app-dynamicComponent-complete',
  templateUrl: './dynamiccomponent-complete.component.html'
})

export class DynamiccomponentCompleteComponent implements OnInit {
  additionalConfig: any[] = [
    {
      type: "#personalInfo",
      name: 'personalInfo',
      ui: { text: 'Personal Information' },
      childrens: ["firstName","lastName","email","age","contactNumber"],
      skipDefaultView: true,
    },
    
    {
      type: "button",
      name: 'submitButton',
      props:{ text: 'Submit'},
      ui: {class:["btn","btn-primary"] },
      skipDefaultView: true
    },
    
  ]
  serverData = [{
    type: "text",
    name: "firstName",
    ui:{
      label:"FirstName"
    }
  },
  {
    type: "text",
    name: "lastName",
    ui:{
      label:"LastName"
    }
  },
  {
    type: "text",
    name: "email",
    ui:{
      label:"Email"
    }
  },
  {
    type: "text",
    name: "age",
    ui:{
      label:"Age"
    }
  },
  {
    type: "text",
    name: "contactNumber",
    ui:{
      label:"Contact Number"
    }
  }, {
        name: "checkmeout",
        type: "checkbox",
        source: [{value: 1, text: "Agree to all terms"}]
    },];
  uiBindings: string[] = ["personalInfo","checkmeout","submitButton"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      additionalConfig: this.additionalConfig
    });
  }
}