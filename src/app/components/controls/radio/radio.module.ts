import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { RADIO_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/radio/radio.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RADIO_ROUTING } from "src/app/components/controls/radio/radio.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [RADIO_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RADIO_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RadioModule { }



