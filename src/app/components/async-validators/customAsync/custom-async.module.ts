import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CUSTOM_ASYNC_ROUTING } from "src/app/components/async-validators/customAsync/custom-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CUSTOM_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: '' }]
  })
export class CustomAsyncModule { }



