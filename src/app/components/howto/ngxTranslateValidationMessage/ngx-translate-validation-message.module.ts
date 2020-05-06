

import { MODIFIED_VALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/modifiedValue/modified-value.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MODIFIED_VALUE_ROUTING } from "src/app/components/howto/modifiedValue/modified-value.routing";
import { PageModule } from "src/app/components/page/page.module";
import { NGX_TRANSLATE_VALIDATION_MESSAGE_EXAMPLE_CONSTANT } from './ngx-translate-validation-message.constants';
import { NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTING } from './ngx-translate-validation-message.routing';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";



@NgModule({
  imports: [NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NGX_TRANSLATE_VALIDATION_MESSAGE_EXAMPLE_CONSTANT }]
  })
export class NgxTranslateValidationMessageModule { }

