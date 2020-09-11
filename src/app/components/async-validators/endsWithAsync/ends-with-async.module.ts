import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ENDS_WITH_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/endsWithAsync/ends-with-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ENDS_WITH_ASYNC_ROUTING } from "src/app/components/async-validators/endsWithAsync/ends-with-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ENDS_WITH_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ENDS_WITH_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class EndsWithAsyncModule { }



