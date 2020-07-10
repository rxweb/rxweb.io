import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicerrormessagestrategyExtendedModule } from "src/assets/examples/dynamic-forms/dynamicerrormessagestrategy/dynamicerrormessagestrategy-extended.module";
import { DYNAMICERRORMESSAGESTRATEGY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicerrormessagestrategy/dynamicerrormessagestrategy.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICERRORMESSAGESTRATEGY_ROUTING } from "src/app/components/dynamic-forms/dynamicerrormessagestrategy/dynamicerrormessagestrategy.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICERRORMESSAGESTRATEGY_ROUTING,DynamicerrormessagestrategyExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICERRORMESSAGESTRATEGY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicerrormessagestrategyModule { }



