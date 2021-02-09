import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_REQUEST_CONFIG_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/HttpRequestConfig/http-request-config.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { HTTP_REQUEST_CONFIG_ROUTING } from "src/app/components/http/HttpRequestConfig/http-request-config.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [HTTP_REQUEST_CONFIG_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: HTTP_REQUEST_CONFIG_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class HttpRequestConfigModule { }



