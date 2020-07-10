import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, AbstractControlConfig, dynamicComponent, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";


@dynamicComponent("hobbiesSection")
@Component({
  templateUrl: './array-complete.component.html',
})

export class ArrayComponent extends AbstractControlConfig {
}
