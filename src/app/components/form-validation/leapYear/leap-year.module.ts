import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { LEAP_YEAR_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/leapYear/leap-year.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LEAP_YEAR_ROUTING } from "src/app/components/form-validation/leapYear/leap-year.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LEAP_YEAR_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LEAP_YEAR_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LeapYearModule { }



