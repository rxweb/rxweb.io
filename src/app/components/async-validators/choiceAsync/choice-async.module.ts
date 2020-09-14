import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CHOICE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/choiceAsync/choice-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CHOICE_ASYNC_ROUTING } from "src/app/components/async-validators/choiceAsync/choice-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { ChoiceAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/choiceAsync/choice-async-decorators-extended.module';
import { ChoiceAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/choiceAsync/choice-async-validators-extended.module';



@NgModule({
  imports: [CHOICE_ASYNC_ROUTING , ChoiceAsyncDecoratorsExtendedModule, ChoiceAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CHOICE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ChoiceAsyncModule { }



