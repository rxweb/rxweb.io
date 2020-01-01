import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { STEPBYSTEP_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/stepbystep/stepbystep.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { STEPBYSTEP_ROUTING } from "src/app/components/dynamic-forms/stepbystep/stepbystep.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [STEPBYSTEP_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: STEPBYSTEP_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class StepbystepModule { }



