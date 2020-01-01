import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PASSWORD_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/password/password.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PASSWORD_ROUTING } from "src/app/components/form-validation/password/password.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PASSWORD_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PASSWORD_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PasswordModule { }



