import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { UNIQUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/unique/unique.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { UNIQUE_ROUTING } from "src/app/components/form-validation/unique/unique.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [UNIQUE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: UNIQUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class UniqueModule { }



