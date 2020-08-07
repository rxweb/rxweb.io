import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogicalOperatorsDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/logicalOperators/logical-operators-decorators-extended.module";


import { LogicalOperatorsValidatorsExtendedModule } from "src/assets/examples/howto/validators/logicalOperators/logical-operators-validators-extended.module";
import { LOGICAL_OPERATORS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/logicalOperators/logical-operators.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LOGICAL_OPERATORS_ROUTING } from "src/app/components/howto/logicalOperators/logical-operators.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LOGICAL_OPERATORS_ROUTING ,LogicalOperatorsDecoratorsExtendedModule ,LogicalOperatorsValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LOGICAL_OPERATORS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LogicalOperatorsModule { }



