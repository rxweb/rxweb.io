import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LESS_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/lessThanEqualToAsync/less-than-equal-to-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LESS_THAN_EQUAL_TO_ASYNC_ROUTING } from "src/app/components/async-validators/lessThanEqualToAsync/less-than-equal-to-async.routing";
import { PageModule } from "src/app/components/page/page.module";

import { LessThanEqualToAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/lessThanEqualToAsync/less-than-equal-to-async-validators-extended.module';
import { LessThanEqualToAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/lessThanEqualToAsync/less-than-equal-to-async-decorators-extended.module';



@NgModule({
  imports: [LESS_THAN_EQUAL_TO_ASYNC_ROUTING , LessThanEqualToAsyncValidatorsExtendedModule, LessThanEqualToAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LESS_THAN_EQUAL_TO_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LessThanEqualToAsyncModule { }



