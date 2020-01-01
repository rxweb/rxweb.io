import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PUT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/put/put.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PUT_ROUTING } from "src/app/components/http/put/put.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PUT_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PUT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PutModule { }



