import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICPASSWORD_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dynamicpassword/dynamicpassword.constants";
import { DynamicpasswordValidatorsExtendedModule } from "src/assets/examples/controls/dynamicpassword/dynamicpassword-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICPASSWORD_ROUTING } from "src/app/components/controls/dynamicpassword/dynamicpassword.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICPASSWORD_ROUTING ,DynamicpasswordValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICPASSWORD_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicpasswordModule { }



