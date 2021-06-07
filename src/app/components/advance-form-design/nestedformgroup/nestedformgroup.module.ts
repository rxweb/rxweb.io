import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { NESTEDFORMGROUP_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/advance-form-design/nestedformgroup/nestedformgroup.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NESTEDFORMGROUP_ROUTING } from "src/app/components/advance-form-design/nestedformgroup/nestedformgroup.routing";
import { PageModule } from "src/app/components/page/page.module";
import { NestedformgroupValidatorsExtendedModule } from 'src/assets/examples/advance-form-design/nestedformgroup/nestedformgroup-validators-extended.module';



@NgModule({
  imports: [NESTEDFORMGROUP_ROUTING ,NestedformgroupValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NESTEDFORMGROUP_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NestedformgroupModule { }


