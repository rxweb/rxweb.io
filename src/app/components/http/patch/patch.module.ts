import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PATCH_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/patch/patch.constants";
import { PatchValidatorsExtendedModule } from "src/assets/examples/http/patch/patch-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PATCH_ROUTING } from "src/app/components/http/patch/patch.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PATCH_ROUTING ,PatchValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PATCH_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PatchModule { }



