import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONDITIONALPLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/conditional-binding/conditionalplaceholder/conditionalplaceholder.constants";
import { ConditionalplaceholderValidatorsExtendedModule } from "src/assets/examples/conditional-binding/conditionalplaceholder/conditionalplaceholder-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONDITIONALPLACEHOLDER_ROUTING } from "src/app/components/conditional-binding/conditionalplaceholder/conditionalplaceholder.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONALPLACEHOLDER_ROUTING ,ConditionalplaceholderValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONDITIONALPLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ConditionalplaceholderModule { }



