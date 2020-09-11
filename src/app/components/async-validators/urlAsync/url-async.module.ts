import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { URL_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/urlAsync/url-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { URL_ASYNC_ROUTING } from "src/app/components/async-validators/urlAsync/url-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [URL_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: URL_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class UrlAsyncModule { }



