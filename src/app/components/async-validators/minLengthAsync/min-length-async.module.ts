import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MIN_LENGTH_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/minLengthAsync/min-length-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_LENGTH_ASYNC_ROUTING } from "src/app/components/async-validators/minLengthAsync/min-length-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { MinLengthAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/minLengthAsync/min-length-async-validators-extended.module';
import { MinLengthAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/minLengthAsync/min-length-async-decorators-extended.module';



@NgModule({
  imports: [MIN_LENGTH_ASYNC_ROUTING , MinLengthAsyncValidatorsExtendedModule, MinLengthAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_LENGTH_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinLengthAsyncModule { }



