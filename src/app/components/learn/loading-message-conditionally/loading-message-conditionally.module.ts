import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOADING_MESSAGE_CONDITIONALLY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/loading-message-conditionally/loading-message-conditionally.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LOADING_MESSAGE_CONDITIONALLY_ROUTING } from "src/app/components/learn/loading-message-conditionally/loading-message-conditionally.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LOADING_MESSAGE_CONDITIONALLY_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LOADING_MESSAGE_CONDITIONALLY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Loading_message_conditionallyModule { }



