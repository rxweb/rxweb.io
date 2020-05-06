import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GreaterThanLessThanFormArrayDecoratorsExtendedModule } from "src/assets/examples/howto/decorators/greaterThanLessThanFormArray/greater-than-less-than-form-array-decorators-extended.module";


import { GreaterThanLessThanFormArrayValidatorsExtendedModule } from "src/assets/examples/howto/validators/greaterThanLessThanFormArray/greater-than-less-than-form-array-validators-extended.module";
import { GREATER_THAN_LESS_THAN_FORM_ARRAY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/howto/greaterThanLessThanFormArray/greater-than-less-than-form-array.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTING } from "src/app/components/howto/greaterThanLessThanFormArray/greater-than-less-than-form-array.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTING ,GreaterThanLessThanFormArrayDecoratorsExtendedModule ,GreaterThanLessThanFormArrayValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: GREATER_THAN_LESS_THAN_FORM_ARRAY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class GreaterThanLessThanFormArrayModule { }



