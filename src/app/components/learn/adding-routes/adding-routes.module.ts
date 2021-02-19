import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ADDING_ROUTES_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/adding-routes/adding-routes.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ADDING_ROUTES_ROUTING } from "src/app/components/learn/adding-routes/adding-routes.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ADDING_ROUTES_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ADDING_ROUTES_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Adding_routesModule { }



