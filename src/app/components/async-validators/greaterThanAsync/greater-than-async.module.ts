import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GREATER_THAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/greaterThanAsync/greater-than-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GREATER_THAN_ASYNC_ROUTING } from "src/app/components/async-validators/greaterThanAsync/greater-than-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { GreaterThanAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/greaterThanAsync/greater-than-async-decorators-extended.module';
import { GreaterThanAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/greaterThanAsync/greater-than-async-validators-extended.module';



@NgModule({
  imports: [GREATER_THAN_ASYNC_ROUTING , GreaterThanAsyncDecoratorsExtendedModule, GreaterThanAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GREATER_THAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GreaterThanAsyncModule { }



