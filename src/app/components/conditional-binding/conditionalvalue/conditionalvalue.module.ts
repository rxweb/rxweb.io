import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONDITIONALVALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionalvalue/conditionalvalue.constants";
import { ConditionalvalueValidatorsExtendedModule } from "src/assets/examples/conditional-binding/conditionalvalue/conditionalvalue-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALVALUE_ROUTING } from "src/app/components/conditional-binding/conditionalvalue/conditionalvalue.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALVALUE_ROUTING ,ConditionalvalueValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALVALUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalvalueModule { }



