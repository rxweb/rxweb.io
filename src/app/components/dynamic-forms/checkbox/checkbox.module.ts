import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckboxExtendedModule } from "src/assets/examples/dynamic-forms/checkbox/checkbox-extended.module";
import { CHECKBOX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/checkbox/checkbox.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CHECKBOX_ROUTING } from "src/app/components/dynamic-forms/checkbox/checkbox.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CHECKBOX_ROUTING,CheckboxExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CHECKBOX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CheckboxModule { }

