import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MAX_DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/maxDateAsync/max-date-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAX_DATE_ASYNC_ROUTING } from "src/app/components/async-validators/maxDateAsync/max-date-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MAX_DATE_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAX_DATE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaxDateAsyncModule { }



