import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CHECKBOX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/checkbox/checkbox.constants";
import { CheckboxValidatorsExtendedModule } from "src/assets/examples/controls/checkbox/checkbox-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CHECKBOX_ROUTING } from "src/app/components/controls/checkbox/checkbox.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CHECKBOX_ROUTING ,CheckboxValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CHECKBOX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CheckboxModule { }



