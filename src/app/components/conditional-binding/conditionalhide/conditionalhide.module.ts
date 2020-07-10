import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONDITIONALHIDE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionalhide/conditionalhide.constants";
import { ConditionalhideValidatorsExtendedModule } from "src/assets/examples/conditional-binding/conditionalhide/conditionalhide-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALHIDE_ROUTING } from "src/app/components/conditional-binding/conditionalhide/conditionalhide.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALHIDE_ROUTING ,ConditionalhideValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALHIDE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalhideModule { }



