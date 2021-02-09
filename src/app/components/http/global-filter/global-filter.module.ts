import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GLOBAL_FILTER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/global-filter/global-filter.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GLOBAL_FILTER_ROUTING } from "src/app/components/http/global-filter/global-filter.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [GLOBAL_FILTER_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GLOBAL_FILTER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Global_filterModule { }



