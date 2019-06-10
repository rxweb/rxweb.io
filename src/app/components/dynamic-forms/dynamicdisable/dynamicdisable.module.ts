import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICDISABLE_ROUTING } from "src/app/components/dynamic-forms/dynamicdisable/dynamicdisable.routing";
import { PageModule } from "src/app/components/page/page.module";
import { DYNAMICDISABLE_COMPONENT_EXAMPLE_CONSTANT } from './dynamicdisable.constants';
import { DynamicdisableExtendedModule } from 'src/assets/examples/dynamic-forms/disable/dynamicdisable-extended.module';



@NgModule({
  imports: [DYNAMICDISABLE_ROUTING,DynamicdisableExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICDISABLE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicdisableModule { }

