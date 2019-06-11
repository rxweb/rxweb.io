import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicemailExtendedModule } from "src/assets/examples/dynamic-forms/dynamicemail/dynamicemail-extended.module";
import { DYNAMICEMAIL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicemail/dynamicemail.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICEMAIL_ROUTING } from "src/app/components/dynamic-forms/dynamicemail/dynamicemail.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICEMAIL_ROUTING,DynamicemailExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICEMAIL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicemailModule { }

