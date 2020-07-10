import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoPushFormGroupDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/autoPushFormGroup/auto-push-form-group-decorators-extended.module";


import { AUTO_PUSH_FORM_GROUP_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/autoPushFormGroup/auto-push-form-group.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { AUTO_PUSH_FORM_GROUP_ROUTING } from "src/app/components/howto/autoPushFormGroup/auto-push-form-group.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [AUTO_PUSH_FORM_GROUP_ROUTING ,AutoPushFormGroupDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: AUTO_PUSH_FORM_GROUP_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AutoPushFormGroupModule { }



