import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { NESTED_PROPS_COMPONENT_EXAMPLE_CONSTANT } from './nested-props.constants';
import { NESTED_PROPS_ROUTING } from './nested-props.routing';



@NgModule({
  imports: [NESTED_PROPS_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NESTED_PROPS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Nested_propsModule { }