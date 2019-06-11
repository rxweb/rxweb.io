import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { LABEL_ROUTING } from "src/app/components/dynamic-forms/label/label.routing";
import { PageModule } from "src/app/components/page/page.module";
import { LabelExtendedModule } from 'src/assets/examples/dynamic-forms/label/label-extended.module';
import { LABEL_COMPONENT_EXAMPLE_CONSTANT } from './label.constants';



@NgModule({
  imports: [LABEL_ROUTING,LabelExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: LABEL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class LabelModule { }

