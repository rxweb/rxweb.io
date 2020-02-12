import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICRANGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dynamicrange/dynamicrange.constants";
import { DynamicrangeValidatorsExtendedModule } from "src/assets/examples/controls/dynamicrange/dynamicrange-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICRANGE_ROUTING } from "src/app/components/controls/dynamicrange/dynamicrange.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICRANGE_ROUTING ,DynamicrangeValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICRANGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicrangeModule { }



