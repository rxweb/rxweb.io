import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValueExtendedModule } from "src/assets/examples/dynamic-forms/value/value-extended.module";
import { VALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/value/value.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { VALUE_ROUTING } from "src/app/components/dynamic-forms/value/value.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [VALUE_ROUTING,ValueExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: VALUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ValueModule { }

