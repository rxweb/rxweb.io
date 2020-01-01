import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PATCH_MODEL_VALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/patchModelValue/patch-model-value.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PATCH_MODEL_VALUE_ROUTING } from "src/app/components/howto/patchModelValue/patch-model-value.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PATCH_MODEL_VALUE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PATCH_MODEL_VALUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PatchModelValueModule { }



