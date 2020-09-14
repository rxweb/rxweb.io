import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CREDIT_CARD_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/creditCardAsync/credit-card-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CREDIT_CARD_ASYNC_ROUTING } from "src/app/components/async-validators/creditCardAsync/credit-card-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { CreditCardAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/creditCardAsync/credit-card-async-validators-extended.module';
import { CreditCardAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/creditCardAsync/credit-card-async-decorators-extended.module';



@NgModule({
  imports: [CREDIT_CARD_ASYNC_ROUTING , CreditCardAsyncDecoratorsExtendedModule, CreditCardAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CREDIT_CARD_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CreditCardAsyncModule { }



