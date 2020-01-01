import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PRIME_NUMBER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/primeNumber/prime-number.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PRIME_NUMBER_ROUTING } from "src/app/components/form-validation/primeNumber/prime-number.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PRIME_NUMBER_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PRIME_NUMBER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PrimeNumberModule { }



