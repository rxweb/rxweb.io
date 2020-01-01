import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { GRID_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/grid/grid.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GRID_ROUTING } from "src/app/components/form-validation/grid/grid.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [GRID_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GRID_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GridModule { }



