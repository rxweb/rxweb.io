import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { NOT_EMPTY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/notEmpty/not-empty.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NOT_EMPTY_ROUTING } from "src/app/components/form-validation/notEmpty/not-empty.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [NOT_EMPTY_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NOT_EMPTY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NotEmptyModule { }



