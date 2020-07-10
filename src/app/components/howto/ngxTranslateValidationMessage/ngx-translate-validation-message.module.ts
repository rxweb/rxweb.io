import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTranslateValidationMessageDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/ngxTranslateValidationMessage/ngx-translate-validation-message-decorators-extended.module";


import { NgxTranslateValidationMessageValidatorsExtendedModule } from "src/assets/examples/howto/validators/ngxTranslateValidationMessage/ngx-translate-validation-message-validators-extended.module";
import { NGX_TRANSLATE_VALIDATION_MESSAGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/ngxTranslateValidationMessage/ngx-translate-validation-message.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTING } from "src/app/components/howto/ngxTranslateValidationMessage/ngx-translate-validation-message.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [NGX_TRANSLATE_VALIDATION_MESSAGE_ROUTING ,NgxTranslateValidationMessageDecoratorsExtendedModule ,NgxTranslateValidationMessageValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NGX_TRANSLATE_VALIDATION_MESSAGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NgxTranslateValidationMessageModule { }



