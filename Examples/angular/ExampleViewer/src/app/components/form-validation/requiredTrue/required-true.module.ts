import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequiredTrueDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/requiredTrue/required-true-decorators-extended.module";
import { RequiredTrueTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/requiredTrue/required-true-validation-directives-extended.module";
import { RequiredTrueTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/requiredTrue/required-true-validation-decorators-extended.module";

import { RequiredTrueValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/requiredTrue/required-true-validators-extended.module";

import { REQUIRED_TRUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/requiredTrue/required-true.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { REQUIRED_TRUE_ROUTING } from "src/app/components/form-validation/requiredTrue/required-true.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [REQUIRED_TRUE_ROUTING ,RequiredTrueDecoratorsExtendedModule ,RequiredTrueValidatorsExtendedModule,RequiredTrueTemplateDrivenValidationDirectivesExtendedModule, RequiredTrueTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: REQUIRED_TRUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RequiredTrueModule { }



