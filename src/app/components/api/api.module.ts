import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { API_ROUTING } from "src/app/components/api/api.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [API_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class ApiModule { }

