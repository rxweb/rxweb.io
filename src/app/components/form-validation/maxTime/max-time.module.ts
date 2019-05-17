import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaxTimeDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/maxTime/max-time-decorators-extended.module";
import { MaxTimeTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxTime/max-time-validation-directives-extended.module";
import { MaxTimeTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxTime/max-time-validation-decorators-extended.module";

import { MaxTimeValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/maxTime/max-time-validators-extended.module";
import { MAX_TIME_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/maxTime/max-time.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MAX_TIME_ROUTING } from "src/app/components/form-validation/maxTime/max-time.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MAX_TIME_ROUTING ,MaxTimeDecoratorsExtendedModule ,MaxTimeValidatorsExtendedModule,MaxTimeTemplateDrivenValidationDirectivesExtendedModule, MaxTimeTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MAX_TIME_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaxTimeModule { }

