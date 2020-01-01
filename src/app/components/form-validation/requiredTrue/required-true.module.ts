import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { REQUIRED_TRUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/requiredTrue/required-true.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { REQUIRED_TRUE_ROUTING } from "src/app/components/form-validation/requiredTrue/required-true.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [REQUIRED_TRUE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: REQUIRED_TRUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RequiredTrueModule { }



