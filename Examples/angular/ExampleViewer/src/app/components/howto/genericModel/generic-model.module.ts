import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericModelDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/genericModel/generic-model-decorators-extended.module";


import { GENERIC_MODEL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/genericModel/generic-model.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GENERIC_MODEL_ROUTING } from "src/app/components/howto/genericModel/generic-model.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [GENERIC_MODEL_ROUTING ,GenericModelDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GENERIC_MODEL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GenericModelModule { }



