import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { BACK_END_MESSAGES_ROUTING } from './back-end-messages.routing';
import { BACK_END_MESSAGES_COMPONENT_EXAMPLE_CONSTANT } from './back-end-messages.constants';
import { BackEndMessagesDecoratorsExtendedModule } from 'src/assets/examples/howto/decorators/backEndMessages/back-end-messages-decorators-extended.module';
import { BackEndMessagesvalidatorsExtendedModule } from 'src/assets/examples/howto/validators/backEndMessages/back-end-messages-validators-extended.module';



@NgModule({
  imports: [BACK_END_MESSAGES_ROUTING ,BackEndMessagesDecoratorsExtendedModule ,BackEndMessagesvalidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: BACK_END_MESSAGES_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class BackEndMessagesModule { }