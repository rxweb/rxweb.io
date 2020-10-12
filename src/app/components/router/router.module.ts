import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_ROUTING } from "src/app/components/router/router.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ROUTER_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class RouterModule { }



