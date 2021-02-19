import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DATA_ACCESS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/data-access/data-access.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DATA_ACCESS_ROUTING } from "src/app/components/learn/data-access/data-access.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DATA_ACCESS_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DATA_ACCESS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Data_accessModule { }



