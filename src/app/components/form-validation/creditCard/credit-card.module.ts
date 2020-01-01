import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CREDIT_CARD_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/creditCard/credit-card.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CREDIT_CARD_ROUTING } from "src/app/components/form-validation/creditCard/credit-card.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CREDIT_CARD_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CREDIT_CARD_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CreditCardModule { }



