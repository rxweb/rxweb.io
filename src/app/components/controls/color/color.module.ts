import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { COLOR_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/color/color.constants";
import { ColorValidatorsExtendedModule } from "src/assets/examples/controls/color/color-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { COLOR_ROUTING } from "src/app/components/controls/color/color.routing";
import { PageModule } from "src/app/components/page/page.module";

@NgModule({
  imports: [COLOR_ROUTING ,ColorValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: COLOR_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ColorModule { }



