import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MASK_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/mask/mask.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MASK_ROUTING } from "src/app/components/form-validation/mask/mask.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MASK_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MASK_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaskModule { }



