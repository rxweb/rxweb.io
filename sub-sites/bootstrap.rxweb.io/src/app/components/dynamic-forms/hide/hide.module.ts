import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HideExtendedModule } from "src/assets/examples/dynamic-forms/hide/hide-extended.module";
import { HIDE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/hide/hide.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { HIDE_ROUTING } from "src/app/components/dynamic-forms/hide/hide.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [HIDE_ROUTING,HideExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: HIDE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class HideModule { }

