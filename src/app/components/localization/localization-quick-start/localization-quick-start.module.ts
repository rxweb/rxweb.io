import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DECORATORS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/decorators/decorators.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { LOCALIZATION_QUICKSTART_MODULE_ROUTING } from './localization-quick-start.routing';





@NgModule({
  imports: [LOCALIZATION_QUICKSTART_MODULE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DECORATORS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LocalizationQuickStartModule { }