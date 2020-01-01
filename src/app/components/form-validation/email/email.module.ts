import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { EMAIL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/email/email.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { EMAIL_ROUTING } from "src/app/components/form-validation/email/email.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [EMAIL_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: EMAIL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class EmailModule { }



