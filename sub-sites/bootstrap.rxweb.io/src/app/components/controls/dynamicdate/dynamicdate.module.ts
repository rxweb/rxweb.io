import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICDATE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dynamicdate/dynamicdate.constants";
import { DynamicdateValidatorsExtendedModule } from "src/assets/examples/controls/dynamicdate/dynamicdate-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICDATE_ROUTING } from "src/app/components/controls/dynamicdate/dynamicdate.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICDATE_ROUTING ,DynamicdateValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICDATE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicdateModule { }



