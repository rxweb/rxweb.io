import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { ASCII_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/ascii/ascii.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ASCII_ROUTING } from "src/app/components/form-validation/ascii/ascii.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ASCII_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ASCII_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AsciiModule { }



