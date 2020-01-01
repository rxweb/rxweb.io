import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DELETE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/delete/delete.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DELETE_ROUTING } from "src/app/components/http/delete/delete.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DELETE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DELETE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DeleteModule { }



