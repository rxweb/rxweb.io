import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SANITIZER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitizers/sanitizer/sanitizer.constants";
import { SanitizerValidatorsExtendedModule } from "src/assets/examples/sanitizers/sanitizer/sanitizer-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { SANITIZER_ROUTING } from "src/app/components/sanitizers/sanitizer/sanitizer.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SANITIZER_ROUTING ,SanitizerValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: SANITIZER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class SanitizerModule { }



