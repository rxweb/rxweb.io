import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/async/async.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ASYNC_ROUTING } from "src/app/components/form-validation/async/async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ASYNC_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AsyncModule { }



