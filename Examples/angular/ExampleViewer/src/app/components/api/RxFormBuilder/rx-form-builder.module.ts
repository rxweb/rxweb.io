import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxFormBuilderExtendedModule } from "src/assets/examples/api/RxFormBuilder/rx-form-builder-extended.module";
import { RX_FORM_BUILDER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/api/RxFormBuilder/rx-form-builder.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RX_FORM_BUILDER_ROUTING } from "src/app/components/api/RxFormBuilder/rx-form-builder.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [RX_FORM_BUILDER_ROUTING,RxFormBuilderExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RX_FORM_BUILDER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RxFormBuilderModule { }



