import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CREATING_ADVANCE_APPLICATION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/creating-advance-application/creating-advance-application.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CREATING_ADVANCE_APPLICATION_ROUTING } from "src/app/components/learn/creating-advance-application/creating-advance-application.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CREATING_ADVANCE_APPLICATION_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CREATING_ADVANCE_APPLICATION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Creating_advance_applicationModule { }



