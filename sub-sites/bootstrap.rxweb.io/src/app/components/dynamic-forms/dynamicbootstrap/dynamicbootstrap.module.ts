import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DYNAMICBOOTSTRAP_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicbootstrap/dynamicbootstrap.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICBOOTSTRAP_ROUTING } from "src/app/components/dynamic-forms/dynamicbootstrap/dynamicbootstrap.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICBOOTSTRAP_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICBOOTSTRAP_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicbootstrapModule { }

