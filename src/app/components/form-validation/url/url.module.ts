import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { URL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/url/url.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { URL_ROUTING } from "src/app/components/form-validation/url/url.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [URL_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: URL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class UrlModule { }



