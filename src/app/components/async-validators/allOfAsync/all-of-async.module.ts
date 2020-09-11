import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ALL_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/allOfAsync/all-of-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ALL_OF_ASYNC_ROUTING } from "src/app/components/async-validators/allOfAsync/all-of-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ALL_OF_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ALL_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AllOfAsyncModule { }



