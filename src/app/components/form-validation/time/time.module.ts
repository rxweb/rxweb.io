import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { TIME_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/time/time.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TIME_ROUTING } from "src/app/components/form-validation/time/time.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TIME_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TIME_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class TimeModule { }



