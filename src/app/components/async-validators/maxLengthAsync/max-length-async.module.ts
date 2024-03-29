import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MAX_LENGTH_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/maxLengthAsync/max-length-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAX_LENGTH_ASYNC_ROUTING } from "src/app/components/async-validators/maxLengthAsync/max-length-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { MaxLengthAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/maxLengthAsync/max-length-async-validators-extended.module';
import { MaxLengthDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/maxLength/max-length-decorators-extended.module';
import { MaxLengthAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/maxLengthAsync/max-length-async-decorators-extended.module';



@NgModule({
  imports: [MAX_LENGTH_ASYNC_ROUTING ,MaxLengthAsyncValidatorsExtendedModule, MaxLengthAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAX_LENGTH_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaxLengthAsyncModule { }



