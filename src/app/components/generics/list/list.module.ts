import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LIST_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/generics/list/list.constants";
import { ListValidatorsExtendedModule } from "src/assets/examples/generics/list/list-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LIST_ROUTING } from "src/app/components/generics/list/list.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LIST_ROUTING ,ListValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LIST_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ListModule { }



