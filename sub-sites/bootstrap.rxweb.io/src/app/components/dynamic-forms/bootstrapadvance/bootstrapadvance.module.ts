import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { BOOTSTRAPADVANCE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/bootstrapadvance/bootstrapadvance.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { BOOTSTRAPADVANCE_ROUTING } from "src/app/components/dynamic-forms/bootstrapadvance/bootstrapadvance.routing";
import { PageModule } from "src/app/components/page/page.module";
import { BootstrapadvanceExtendedModule } from 'src/assets/examples/dynamic-forms/bootstrapadvance/boostrapadvance-extended.module';



@NgModule({
  imports: [BOOTSTRAPADVANCE_ROUTING,BootstrapadvanceExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: BOOTSTRAPADVANCE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class BootstrapadvanceModule { }

