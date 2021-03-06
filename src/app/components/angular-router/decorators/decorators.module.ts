import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DECORATORS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/angular-router/decorators/decorators.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DECORATORS_ROUTING } from "src/app/components/angular-router/decorators/decorators.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DECORATORS_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DECORATORS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DecoratorsModule { }



