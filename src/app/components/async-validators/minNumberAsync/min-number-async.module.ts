import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MIN_NUMBER_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/minNumberAsync/min-number-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_NUMBER_ASYNC_ROUTING } from "src/app/components/async-validators/minNumberAsync/min-number-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { MinNumberAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/minNumberAsync/min-number-async-validators-extended.module';
import { MinNumberAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/minNumberAsync/min-number-async-decorators-extended.module';



@NgModule({
  imports: [MIN_NUMBER_ASYNC_ROUTING , MinNumberAsyncValidatorsExtendedModule, MinNumberAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_NUMBER_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinNumberAsyncModule { }



