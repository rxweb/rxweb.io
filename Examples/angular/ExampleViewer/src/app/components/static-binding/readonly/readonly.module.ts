import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { READONLY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/readonly/readonly.constants";
import { ReadonlyValidatorsExtendedModule } from "src/assets/examples/static-binding/readonly/readonly-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { READONLY_ROUTING } from "src/app/components/static-binding/readonly/readonly.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [READONLY_ROUTING ,ReadonlyValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: READONLY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ReadonlyModule { }



