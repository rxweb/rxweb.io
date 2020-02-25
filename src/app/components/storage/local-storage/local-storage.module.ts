import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DECORATORS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/decorators/decorators.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { LOCAL_STORAGE_ROUTING } from './local-storage.routing';




@NgModule({
  imports: [LOCAL_STORAGE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DECORATORS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LocalStorageModule { }