import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PATTERN_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/pattern/pattern.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PATTERN_ROUTING } from "src/app/components/form-validation/pattern/pattern.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PATTERN_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PATTERN_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PatternModule { }



