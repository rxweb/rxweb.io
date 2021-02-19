import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CREATING_PROJECT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/creating-project/creating-project.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CREATING_PROJECT_ROUTING } from "src/app/components/learn/creating-project/creating-project.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CREATING_PROJECT_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CREATING_PROJECT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Creating_projectModule { }



