import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomvalidationExtendedModule } from "src/assets/examples/dynamic-forms/customvalidation/customvalidation-extended.module";
import { CUSTOMVALIDATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/customvalidation/customvalidation.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CUSTOMVALIDATION_ROUTING } from "src/app/components/dynamic-forms/customvalidation/customvalidation.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CUSTOMVALIDATION_ROUTING,CustomvalidationExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CUSTOMVALIDATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CustomvalidationModule { }



