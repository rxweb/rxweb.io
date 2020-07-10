import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { METHODS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/methods/methods.constants";
import { MethodsValidatorsExtendedModule } from "src/assets/examples/http/methods/methods-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { METHODS_ROUTING } from "src/app/components/http/methods/methods.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [METHODS_ROUTING ,MethodsValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: METHODS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MethodsModule { }



