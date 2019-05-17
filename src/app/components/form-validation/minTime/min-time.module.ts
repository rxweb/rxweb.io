import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MinTimeDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/minTime/min-time-decorators-extended.module";
import { MinTimeTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minTime/min-time-validation-directives-extended.module";
import { MinTimeTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minTime/min-time-validation-decorators-extended.module";

import { MinTimeValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/minTime/min-time-validators-extended.module";
import { MIN_TIME_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/minTime/min-time.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_TIME_ROUTING } from "src/app/components/form-validation/minTime/min-time.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MIN_TIME_ROUTING ,MinTimeDecoratorsExtendedModule ,MinTimeValidatorsExtendedModule,MinTimeTemplateDrivenValidationDirectivesExtendedModule, MinTimeTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_TIME_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinTimeModule { }

