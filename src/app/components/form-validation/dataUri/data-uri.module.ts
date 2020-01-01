import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DATA_URI_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/dataUri/data-uri.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DATA_URI_ROUTING } from "src/app/components/form-validation/dataUri/data-uri.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DATA_URI_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DATA_URI_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DataUriModule { }



