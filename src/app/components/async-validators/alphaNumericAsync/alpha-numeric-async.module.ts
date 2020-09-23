import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ALPHA_NUMERIC_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/alphaNumericAsync/alpha-numeric-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ALPHA_NUMERIC_ASYNC_ROUTING } from "src/app/components/async-validators/alphaNumericAsync/alpha-numeric-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { AlphaNumericAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/alphaNumericAsync/alpha-numeric-async-validators-extended.module';

import { AlphaNumericAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/alphaNumericAsync/alpha-numeric-async-decorators-extended.module';



@NgModule({
  imports: [ALPHA_NUMERIC_ASYNC_ROUTING , AlphaNumericAsyncValidatorsExtendedModule, AlphaNumericAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ALPHA_NUMERIC_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AlphaNumericAsyncModule { }



