import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicdisableExtendedModule } from "src/assets/examples/dynamic-forms/dynamicdisable/dynamicdisable-extended.module";
import { DYNAMICDISABLE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicdisable/dynamicdisable.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICDISABLE_ROUTING } from "src/app/components/dynamic-forms/dynamicdisable/dynamicdisable.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICDISABLE_ROUTING,DynamicdisableExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICDISABLE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicdisableModule { }

