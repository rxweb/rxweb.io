import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CLASS_ABSTRACTION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/classAbstraction/class-abstraction.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CLASS_ABSTRACTION_ROUTING } from "src/app/components/howto/classAbstraction/class-abstraction.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CLASS_ABSTRACTION_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CLASS_ABSTRACTION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ClassAbstractionModule { }



