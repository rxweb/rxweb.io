import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_DECORATORS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/angular-router/router-decorators/router-decorators.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ROUTER_DECORATORS_ROUTING } from "src/app/components/angular-router/router-decorators/router-decorators.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ROUTER_DECORATORS_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ROUTER_DECORATORS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Router_decoratorsModule { }



