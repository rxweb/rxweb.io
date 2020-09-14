import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MIN_TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/minTimeAsync/min-time-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_TIME_ASYNC_ROUTING } from "src/app/components/async-validators/minTimeAsync/min-time-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { MinTimeAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/minTimeAsync/min-time-async-validators-extended.module';
import { MinTimeAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/minTimeAsync/min-time-async-decorators-extended.module';



@NgModule({
  imports: [MIN_TIME_ASYNC_ROUTING , MinTimeAsyncValidatorsExtendedModule, MinTimeAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinTimeAsyncModule { }



