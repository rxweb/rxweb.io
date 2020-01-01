import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { COMPARE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/compare/compare.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { COMPARE_ROUTING } from "src/app/components/form-validation/compare/compare.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [COMPARE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: COMPARE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CompareModule { }



