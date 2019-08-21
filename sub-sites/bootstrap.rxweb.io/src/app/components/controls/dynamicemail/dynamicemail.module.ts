import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICEMAIL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dynamicemail/dynamicemail.constants";
import { DynamicemailValidatorsExtendedModule } from "src/assets/examples/controls/dynamicemail/dynamicemail-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICEMAIL_ROUTING } from "src/app/components/controls/dynamicemail/dynamicemail.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICEMAIL_ROUTING ,DynamicemailValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICEMAIL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicemailModule { }



