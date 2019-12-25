import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatchModelValueDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/patchModelValue/patch-model-value-decorators-extended.module";


import { PatchModelValueValidatorsExtendedModule } from "src/assets/examples/howto/validators/patchModelValue/patch-model-value-validators-extended.module";
import { PATCH_MODEL_VALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/patchModelValue/patch-model-value.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PATCH_MODEL_VALUE_ROUTING } from "src/app/components/howto/patchModelValue/patch-model-value.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PATCH_MODEL_VALUE_ROUTING ,PatchModelValueDecoratorsExtendedModule ,PatchModelValueValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PATCH_MODEL_VALUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PatchModelValueModule { }



