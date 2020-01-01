import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ENDS_WITH_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/endsWith/ends-with.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ENDS_WITH_ROUTING } from "src/app/components/form-validation/endsWith/ends-with.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ENDS_WITH_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ENDS_WITH_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class EndsWithModule { }



