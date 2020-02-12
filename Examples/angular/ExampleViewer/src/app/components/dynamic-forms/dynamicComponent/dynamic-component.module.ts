import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicComponentExtendedModule } from "src/assets/examples/dynamic-forms/dynamicComponent/dynamic-component-extended.module";
import { DYNAMIC_COMPONENT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicComponent/dynamic-component.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMIC_COMPONENT_ROUTING } from "src/app/components/dynamic-forms/dynamicComponent/dynamic-component.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMIC_COMPONENT_ROUTING,DynamicComponentExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMIC_COMPONENT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicComponentModule { }



