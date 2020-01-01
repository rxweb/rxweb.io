import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { SUFFIX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/suffix/suffix.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { SUFFIX_ROUTING } from "src/app/components/sanitization/suffix/suffix.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SUFFIX_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: SUFFIX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class SuffixModule { }



