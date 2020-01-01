import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DATE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/date/date.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DATE_ROUTING } from "src/app/components/form-validation/date/date.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DATE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DATE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DateModule { }



