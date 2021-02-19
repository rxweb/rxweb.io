import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MANAGING_INPUT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/managing-input/managing-input.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MANAGING_INPUT_ROUTING } from "src/app/components/learn/managing-input/managing-input.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MANAGING_INPUT_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MANAGING_INPUT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Managing_inputModule { }



