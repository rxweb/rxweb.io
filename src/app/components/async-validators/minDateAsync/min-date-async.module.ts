import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MIN_DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/minDateAsync/min-date-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_DATE_ASYNC_ROUTING } from "src/app/components/async-validators/minDateAsync/min-date-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { MinDateAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/minDateAsync/min-date-async-validators-extended.module';
import { MinDateAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/minDateAsync/min-date-async-decorators-extended.module';



@NgModule({
  imports: [MIN_DATE_ASYNC_ROUTING , MinDateAsyncValidatorsExtendedModule, MinDateAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinDateAsyncModule { }



