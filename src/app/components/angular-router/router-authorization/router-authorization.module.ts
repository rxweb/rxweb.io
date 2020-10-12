import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_AUTHORIZATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/angular-router/router-authorization/router-authorization.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ROUTER_AUTHORIZATION_ROUTING } from "src/app/components/angular-router/router-authorization/router-authorization.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ROUTER_AUTHORIZATION_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ROUTER_AUTHORIZATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Router_authorizationModule { }



