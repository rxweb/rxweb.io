import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxFormGroupExtendedModule } from "src/assets/examples/api/RxFormGroup/rx-form-group-extended.module";
import { RX_FORM_GROUP_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/api/RxFormGroup/rx-form-group.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RX_FORM_GROUP_ROUTING } from "src/app/components/api/RxFormGroup/rx-form-group.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [RX_FORM_GROUP_ROUTING,RxFormGroupExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RX_FORM_GROUP_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RxFormGroupModule { }



