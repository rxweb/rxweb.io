import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ANGULAR_ROUTER_ROUTING } from "src/app/components/angular-router/angular-router.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ANGULAR_ROUTER_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class AngularRouterModule { }



