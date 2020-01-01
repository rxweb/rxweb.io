import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { HTTP_CLIENT_CONFIG_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/httpClientConfig/http-client-config.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { HTTP_CLIENT_CONFIG_ROUTING } from "src/app/components/http/httpClientConfig/http-client-config.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [HTTP_CLIENT_CONFIG_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: HTTP_CLIENT_CONFIG_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class HttpClientConfigModule { }



