import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONDITIONALREADONLY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionalreadonly/conditionalreadonly.constants";
import { ConditionalreadonlyValidatorsExtendedModule } from "src/assets/examples/conditional-binding/conditionalreadonly/conditionalreadonly-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALREADONLY_ROUTING } from "src/app/components/conditional-binding/conditionalreadonly/conditionalreadonly.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALREADONLY_ROUTING ,ConditionalreadonlyValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALREADONLY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalreadonlyModule { }



