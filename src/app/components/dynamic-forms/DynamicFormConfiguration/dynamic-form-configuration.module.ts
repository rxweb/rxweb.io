import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMIC_FORM_CONFIGURATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/DynamicFormConfiguration/dynamic-form-configuration.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMIC_FORM_CONFIGURATION_ROUTING } from "src/app/components/dynamic-forms/DynamicFormConfiguration/dynamic-form-configuration.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMIC_FORM_CONFIGURATION_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMIC_FORM_CONFIGURATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicFormConfigurationModule { }



