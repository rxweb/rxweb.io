import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { UPPER_CASE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/upperCase/upper-case.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { UPPER_CASE_ROUTING } from "src/app/components/form-validation/upperCase/upper-case.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [UPPER_CASE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: UPPER_CASE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class UpperCaseModule { }



