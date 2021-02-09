import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GET_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/get/get.constants";
import { GetValidatorsExtendedModule } from "src/assets/examples/http/get/get-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { GET_DIRECT_USAGE_ROUTING } from './get-direct-usage.routing';



@NgModule({
  imports: [GET_DIRECT_USAGE_ROUTING ,GetValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GET_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GetDirectUsageModule { }
