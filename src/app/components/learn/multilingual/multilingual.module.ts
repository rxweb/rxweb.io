import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MULTILINGUAL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/multilingual/multilingual.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MULTILINGUAL_ROUTING } from "src/app/components/learn/multilingual/multilingual.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MULTILINGUAL_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MULTILINGUAL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MultilingualModule { }



