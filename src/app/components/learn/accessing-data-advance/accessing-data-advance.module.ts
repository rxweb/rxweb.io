import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ACCESSING_DATA_ADVANCE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/accessing-data-advance/accessing-data-advance.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ACCESSING_DATA_ADVANCE_ROUTING } from "src/app/components/learn/accessing-data-advance/accessing-data-advance.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ACCESSING_DATA_ADVANCE_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ACCESSING_DATA_ADVANCE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Accessing_data_advanceModule { }



