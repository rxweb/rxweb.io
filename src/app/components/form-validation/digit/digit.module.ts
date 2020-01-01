import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DIGIT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/digit/digit.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DIGIT_ROUTING } from "src/app/components/form-validation/digit/digit.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DIGIT_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DIGIT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DigitModule { }



