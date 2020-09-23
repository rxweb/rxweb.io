import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GREATER_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/greaterThanEqualToAsync/greater-than-equal-to-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GREATER_THAN_EQUAL_TO_ASYNC_ROUTING } from "src/app/components/async-validators/greaterThanEqualToAsync/greater-than-equal-to-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { GreaterThanEqualToAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/greaterThanEqualToAsync/greater-than-equal-to-async-validators-extended.module';
import { GreaterThanEqualToAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/greaterThanEqualToAsync/greater-than-equal-to-async-decorators-extended.module';



@NgModule({
  imports: [GREATER_THAN_EQUAL_TO_ASYNC_ROUTING , GreaterThanEqualToAsyncValidatorsExtendedModule, GreaterThanEqualToAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GREATER_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GreaterThanEqualToAsyncModule { }



