import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DESCRIPTION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/description/description.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DESCRIPTION_ROUTING } from "src/app/components/static-binding/description/description.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DESCRIPTION_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DESCRIPTION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DescriptionModule { }



