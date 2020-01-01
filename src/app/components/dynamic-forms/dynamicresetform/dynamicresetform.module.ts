import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICRESETFORM_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicresetform/dynamicresetform.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICRESETFORM_ROUTING } from "src/app/components/dynamic-forms/dynamicresetform/dynamicresetform.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICRESETFORM_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICRESETFORM_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicresetformModule { }



