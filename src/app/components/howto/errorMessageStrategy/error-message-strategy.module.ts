import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorMessageStrategyDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/errorMessageStrategy/error-message-strategy-decorators-extended.module";

import { ErrorMessageStrategyValidatorsExtendedModule } from "src/assets/examples/howto/validators/errorMessageStrategy/error-message-strategy-validators-extended.module";
import { ERROR_MESSAGE_STRATEGY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/errorMessageStrategy/error-message-strategy.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ERROR_MESSAGE_STRATEGY_ROUTING } from "src/app/components/howto/errorMessageStrategy/error-message-strategy.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ERROR_MESSAGE_STRATEGY_ROUTING ,ErrorMessageStrategyDecoratorsExtendedModule ,ErrorMessageStrategyValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ERROR_MESSAGE_STRATEGY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ErrorMessageStrategyModule { }

