import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ASYNCVALIDATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/asyncvalidation/asyncvalidation.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ASYNCVALIDATION_ROUTING } from "src/app/components/dynamic-forms/asyncvalidation/asyncvalidation.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ASYNCVALIDATION_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ASYNCVALIDATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AsyncvalidationModule { }



