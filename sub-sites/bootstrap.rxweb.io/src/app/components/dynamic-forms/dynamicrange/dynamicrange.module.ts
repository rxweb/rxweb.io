import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicrangeExtendedModule } from "src/assets/examples/dynamic-forms/dynamicrange/dynamicrange-extended.module";
import { DYNAMICRANGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicrange/dynamicrange.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICRANGE_ROUTING } from "src/app/components/dynamic-forms/dynamicrange/dynamicrange.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICRANGE_ROUTING,DynamicrangeExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICRANGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicrangeModule { }

