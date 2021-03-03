import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVIGATING_ROUTES_ADVANCE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/navigating-routes-advance/navigating-routes-advance.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NAVIGATING_ROUTES_ADVANCE_ROUTING } from "src/app/components/learn/navigating-routes-advance/navigating-routes-advance.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [NAVIGATING_ROUTES_ADVANCE_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NAVIGATING_ROUTES_ADVANCE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Navigating_routes_advanceModule { }



