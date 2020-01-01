import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ALL_OF_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/allOf/all-of.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ALL_OF_ROUTING } from "src/app/components/form-validation/allOf/all-of.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ALL_OF_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ALL_OF_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AllOfModule { }



