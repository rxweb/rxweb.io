import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MAX_LENGTH_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/maxLength/max-length.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAX_LENGTH_ROUTING } from "src/app/components/form-validation/maxLength/max-length.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MAX_LENGTH_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAX_LENGTH_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaxLengthModule { }



