import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { EXTENSION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/extension/extension.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { EXTENSION_ROUTING } from "src/app/components/form-validation/extension/extension.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [EXTENSION_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: EXTENSION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ExtensionModule { }



