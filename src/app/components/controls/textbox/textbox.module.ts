import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { TEXTBOX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/textbox/textbox.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TEXTBOX_ROUTING } from "src/app/components/controls/textbox/textbox.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TEXTBOX_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TEXTBOX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class TextboxModule { }



