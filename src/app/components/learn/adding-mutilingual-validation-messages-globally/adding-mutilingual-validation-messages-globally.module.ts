import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_ROUTING } from "src/app/components/learn/adding-mutilingual-validation-messages-globally/adding-mutilingual-validation-messages-globally.routing";
import { PageModule } from "src/app/components/page/page.module";
import { ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_COMPONENT_EXAMPLE_CONSTANT } from './adding-multilingual-validation-messages-globally.constants';



@NgModule({
  imports: [ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ADDING_MUTILINGUAL_VALIDATION_MESSAGES_GLOBALLY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Adding_mutilingual_validation_messages_globallyModule { }



