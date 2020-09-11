import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NUMERIC_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/numericAsync/numeric-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NUMERIC_ASYNC_ROUTING } from "src/app/components/async-validators/numericAsync/numeric-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [NUMERIC_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NUMERIC_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NumericAsyncModule { }



