import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { HEX_COLOR_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/hexColor/hex-color.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { HEX_COLOR_ROUTING } from "src/app/components/form-validation/hexColor/hex-color.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [HEX_COLOR_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: HEX_COLOR_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class HexColorModule { }



