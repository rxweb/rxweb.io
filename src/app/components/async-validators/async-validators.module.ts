import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ASYNC_VALIDATORS_ROUTING } from "src/app/components/async-validators/async-validators.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ASYNC_VALIDATORS_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class AsyncValidatorsModule { }



