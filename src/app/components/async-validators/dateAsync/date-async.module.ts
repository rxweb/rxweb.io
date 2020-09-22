import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DATE_ASYNC_ROUTING } from "src/app/components/async-validators/dateAsync/date-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { DateAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/dateAsync/date-async-decorators-extended.module';
import { DateAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/dateAsync/date-async-validators-extended.module';
import { DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from './date-async.constants';



@NgModule({
  imports: [DATE_ASYNC_ROUTING ,DateAsyncValidatorsExtendedModule, DateAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DateAsyncModule { }



