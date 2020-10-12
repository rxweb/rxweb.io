import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_AUTHENTICATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/angular-router/router-authentication/router-authentication.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ROUTER_AUTHENTICATION_ROUTING } from "src/app/components/angular-router/router-authentication/router-authentication.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ROUTER_AUTHENTICATION_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ROUTER_AUTHENTICATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Router_authenticationModule { }



