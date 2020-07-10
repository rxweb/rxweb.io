import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConditionalControlDisableDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/conditionalControlDisable/conditional-control-disable-decorators-extended.module";


import { ConditionalControlDisableValidatorsExtendedModule } from "src/assets/examples/howto/validators/conditionalControlDisable/conditional-control-disable-validators-extended.module";
import { CONDITIONAL_CONTROL_DISABLE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/conditionalControlDisable/conditional-control-disable.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONAL_CONTROL_DISABLE_ROUTING } from "src/app/components/howto/conditionalControlDisable/conditional-control-disable.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONAL_CONTROL_DISABLE_ROUTING ,ConditionalControlDisableDecoratorsExtendedModule ,ConditionalControlDisableValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONAL_CONTROL_DISABLE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalControlDisableModule { }



