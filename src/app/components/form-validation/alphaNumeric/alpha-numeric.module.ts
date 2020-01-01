import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ALPHA_NUMERIC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/alphaNumeric/alpha-numeric.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ALPHA_NUMERIC_ROUTING } from "src/app/components/form-validation/alphaNumeric/alpha-numeric.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ALPHA_NUMERIC_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ALPHA_NUMERIC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AlphaNumericModule { }



