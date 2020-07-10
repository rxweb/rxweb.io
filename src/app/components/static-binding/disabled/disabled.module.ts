import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DISABLED_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/disabled/disabled.constants";
import { DisabledValidatorsExtendedModule } from "src/assets/examples/static-binding/disabled/disabled-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DISABLED_ROUTING } from "src/app/components/static-binding/disabled/disabled.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DISABLED_ROUTING ,DisabledValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DISABLED_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DisabledModule { }



