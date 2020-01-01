import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { FOCUS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/focus/focus.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FOCUS_ROUTING } from "src/app/components/static-binding/focus/focus.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FOCUS_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FOCUS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FocusModule { }



