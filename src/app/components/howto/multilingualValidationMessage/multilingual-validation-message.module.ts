import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultilingualValidationMessageDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/multilingualValidationMessage/multilingual-validation-message-decorators-extended.module";


import { MultilingualValidationMessageValidatorsExtendedModule } from "src/assets/examples/howto/validators/multilingualValidationMessage/multilingual-validation-message-validators-extended.module";
import { MULTILINGUAL_VALIDATION_MESSAGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/multilingualValidationMessage/multilingual-validation-message.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MULTILINGUAL_VALIDATION_MESSAGE_ROUTING } from "src/app/components/howto/multilingualValidationMessage/multilingual-validation-message.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MULTILINGUAL_VALIDATION_MESSAGE_ROUTING ,MultilingualValidationMessageDecoratorsExtendedModule ,MultilingualValidationMessageValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MULTILINGUAL_VALIDATION_MESSAGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MultilingualValidationMessageModule { }



