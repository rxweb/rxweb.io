import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONDITIONALDISABLED_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionaldisabled/conditionaldisabled.constants";
import { ConditionaldisabledValidatorsExtendedModule } from "src/assets/examples/conditional-binding/conditionaldisabled/conditionaldisabled-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALDISABLED_ROUTING } from "src/app/components/conditional-binding/conditionaldisabled/conditionaldisabled.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALDISABLED_ROUTING ,ConditionaldisabledValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALDISABLED_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionaldisabledModule { }



