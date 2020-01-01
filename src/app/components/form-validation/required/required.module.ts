import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { REQUIRED_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/required/required.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { REQUIRED_ROUTING } from "src/app/components/form-validation/required/required.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [REQUIRED_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: REQUIRED_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RequiredModule { }



