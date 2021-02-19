import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_MIDDLEWARE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/component-middleware/component-middleware.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { COMPONENT_MIDDLEWARE_ROUTING } from "src/app/components/learn/component-middleware/component-middleware.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [COMPONENT_MIDDLEWARE_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: COMPONENT_MIDDLEWARE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Component_middlewareModule { }



