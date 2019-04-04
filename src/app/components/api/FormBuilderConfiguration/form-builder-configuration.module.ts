import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilderConfigurationExtendedModule } from "src/assets/examples/api/FormBuilderConfiguration/form-builder-configuration-extended.module";
import { FORM_BUILDER_CONFIGURATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/api/FormBuilderConfiguration/form-builder-configuration.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FORM_BUILDER_CONFIGURATION_ROUTING } from "src/app/components/api/FormBuilderConfiguration/form-builder-configuration.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FORM_BUILDER_CONFIGURATION_ROUTING,FormBuilderConfigurationExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FORM_BUILDER_CONFIGURATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FormBuilderConfigurationModule { }

