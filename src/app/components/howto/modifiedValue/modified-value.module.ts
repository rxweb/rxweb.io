import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MODIFIED_VALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/modifiedValue/modified-value.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MODIFIED_VALUE_ROUTING } from "src/app/components/howto/modifiedValue/modified-value.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MODIFIED_VALUE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MODIFIED_VALUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ModifiedValueModule { }



