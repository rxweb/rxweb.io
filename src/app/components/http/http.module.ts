import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_ROUTING } from "src/app/components/http/http.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [HTTP_ROUTING,PageModule],
  exports: [RouterModule],
  })
export class HttpModule { }



