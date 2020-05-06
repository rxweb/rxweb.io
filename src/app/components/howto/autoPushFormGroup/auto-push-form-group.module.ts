import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { AUTO_PUSH_FORM_GROUP_ROUTING } from './auto-push-form-group.routing';
import { AUTO_PUSH_FORM_GROUP_COMPONENT_EXAMPLE_CONSTANT } from './auto-push-form-group.constants';




@NgModule({
  imports: [AUTO_PUSH_FORM_GROUP_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: AUTO_PUSH_FORM_GROUP_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AutoPushFormGroupModule { }



