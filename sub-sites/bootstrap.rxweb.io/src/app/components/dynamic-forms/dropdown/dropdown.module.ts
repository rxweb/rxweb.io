import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownExtendedModule } from "src/assets/examples/dynamic-forms/dropdown/dropdown-extended.module";
import { DROPDOWN_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dropdown/dropdown.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DROPDOWN_ROUTING } from "src/app/components/dynamic-forms/dropdown/dropdown.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DROPDOWN_ROUTING,DropdownExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DROPDOWN_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DropdownModule { }

