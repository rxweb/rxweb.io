import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LOWER_CASE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/lowerCase/lower-case.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LOWER_CASE_ROUTING } from "src/app/components/form-validation/lowerCase/lower-case.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LOWER_CASE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LOWER_CASE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LowerCaseModule { }



