import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstraphorizontalExtendedModule } from "src/assets/examples/dynamic-forms/bootstraphorizontal/bootstraphorizontal-extended.module";
import { BOOTSTRAPHORIZONTAL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/bootstraphorizontal/bootstraphorizontal.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { BOOTSTRAPHORIZONTAL_ROUTING } from "src/app/components/dynamic-forms/bootstraphorizontal/bootstraphorizontal.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [BOOTSTRAPHORIZONTAL_ROUTING,BootstraphorizontalExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: BOOTSTRAPHORIZONTAL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class BootstraphorizontalModule { }

