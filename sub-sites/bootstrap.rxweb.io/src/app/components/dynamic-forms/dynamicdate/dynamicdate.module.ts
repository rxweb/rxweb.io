import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicdateExtendedModule } from "src/assets/examples/dynamic-forms/dynamicdate/dynamicdate-extended.module";
import { DYNAMICDATE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicdate/dynamicdate.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICDATE_ROUTING } from "src/app/components/dynamic-forms/dynamicdate/dynamicdate.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICDATE_ROUTING,DynamicdateExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICDATE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicdateModule { }

