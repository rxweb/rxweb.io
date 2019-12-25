import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BindConfigDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/bindConfig/bind-config-decorators-extended.module";


import { BindConfigValidatorsExtendedModule } from "src/assets/examples/howto/validators/bindConfig/bind-config-validators-extended.module";
import { BIND_CONFIG_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/bindConfig/bind-config.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { BIND_CONFIG_ROUTING } from "src/app/components/howto/bindConfig/bind-config.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [BIND_CONFIG_ROUTING ,BindConfigDecoratorsExtendedModule ,BindConfigValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: BIND_CONFIG_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class BindConfigModule { }



