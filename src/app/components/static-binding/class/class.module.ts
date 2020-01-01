import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CLASS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/class/class.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CLASS_ROUTING } from "src/app/components/static-binding/class/class.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CLASS_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CLASS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ClassModule { }



