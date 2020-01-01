import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ERROR_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/decorators/error/error.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ERROR_ROUTING } from "src/app/components/decorators/error/error.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ERROR_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ERROR_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ErrorModule { }



