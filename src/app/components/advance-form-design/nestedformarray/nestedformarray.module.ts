import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { NESTEDFORMARRAY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/advance-form-design/nestedformarray/nestedformarray.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NESTEDFORMARRAY_ROUTING } from "src/app/components/advance-form-design/nestedformarray/nestedformarray.routing";
import { PageModule } from "src/app/components/page/page.module";
import { NestedformarrayValidatorsExtendedModule } from 'src/assets/examples/advance-form-design/nestedformarray/nestedformarray-validators-extended.module';



@NgModule({
  imports: [NESTEDFORMARRAY_ROUTING,NestedformarrayValidatorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NESTEDFORMARRAY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NestedformarrayModule { }



