import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RX_FORM_BUILDER_ROUTING } from "src/app/components/api/RxFormBuilder/rx-form-builder.routing";
import { PageModule } from "src/app/components/page/page.module";
import { RX_FORM_BUILDER_COMPONENT_EXAMPLE_CONSTANT } from './rx-form-builder.constants';
import { FormGroupExtendedModule } from 'src/assets/examples/api/RxFormBuilder/formGroup/form-group-extended.module';
import { GroupExtendedModule } from 'src/assets/examples/api/RxFormBuilder/group/group-extended.module';



@NgModule({
  imports: [RX_FORM_BUILDER_ROUTING ,PageModule,FormGroupExtendedModule,GroupExtendedModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RX_FORM_BUILDER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RxFormBuilderModule { }

