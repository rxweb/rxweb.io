import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PageModule } from "src/app/components/page/page.module";
import { GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTING } from './greater-than-less-than-form-array.routing';
import { GREATER_THAN_LESS_THAN_FORM_ARRAY_COMPONENT_EXAMPLE_CONSTANT } from './greater-than-less-than-form-array.constants';




@NgModule({
  imports: [GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GREATER_THAN_LESS_THAN_FORM_ARRAY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GreaterThanLessThanFormArrayModule { }