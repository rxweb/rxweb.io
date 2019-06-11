import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorExtendedModule } from "src/assets/examples/dynamic-forms/color/color-extended.module";
import { COLOR_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/color/color.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { COLOR_ROUTING } from "src/app/components/dynamic-forms/color/color.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [COLOR_ROUTING,ColorExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: COLOR_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ColorModule { }

