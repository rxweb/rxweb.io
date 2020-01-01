import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PREFIX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/prefix/prefix.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PREFIX_ROUTING } from "src/app/components/sanitization/prefix/prefix.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PREFIX_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PREFIX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PrefixModule { }



