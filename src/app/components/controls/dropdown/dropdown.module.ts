import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DROPDOWN_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dropdown/dropdown.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DROPDOWN_ROUTING } from "src/app/components/controls/dropdown/dropdown.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DROPDOWN_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DROPDOWN_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DropdownModule { }



