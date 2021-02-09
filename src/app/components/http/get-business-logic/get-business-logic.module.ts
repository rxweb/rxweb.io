import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetValidatorsExtendedModule } from "src/assets/examples/http/get/get-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { GET_BUSINESS_LOGIC_ROUTING } from './get-business-logic.routing';
import { GET_BUSINESS_LOGIC_COMPONENT_EXAMPLE_CONSTANT } from './get-business-logic.constants';


@NgModule({
  imports: [GET_BUSINESS_LOGIC_ROUTING ,GetValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GET_BUSINESS_LOGIC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GetBusinessLogicModule { }