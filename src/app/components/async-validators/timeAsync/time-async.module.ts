import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/timeAsync/time-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TIME_ASYNC_ROUTING } from "src/app/components/async-validators/timeAsync/time-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TIME_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TIME_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class TimeAsyncModule { }



