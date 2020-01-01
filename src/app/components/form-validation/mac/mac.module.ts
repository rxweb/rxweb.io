import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MAC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/mac/mac.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAC_ROUTING } from "src/app/components/form-validation/mac/mac.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MAC_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MacModule { }



