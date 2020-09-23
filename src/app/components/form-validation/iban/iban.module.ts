import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { IbanValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/iban/iban-validators-extended.module";

import { IBAN_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/iban/iban.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { IBAN_ROUTING } from "src/app/components/form-validation/iban/iban.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [IBAN_ROUTING  ,IbanValidatorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: IBAN_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class IbanModule { }



