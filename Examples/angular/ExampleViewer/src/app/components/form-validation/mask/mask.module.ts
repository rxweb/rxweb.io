import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaskDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/mask/mask-decorators-extended.module";
import { MaskTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/mask/mask-validation-directives-extended.module";
import { MaskTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/mask/mask-validation-decorators-extended.module";

import { MaskValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/mask/mask-validators-extended.module";

import { MASK_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/mask/mask.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MASK_ROUTING } from "src/app/components/form-validation/mask/mask.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MASK_ROUTING ,MaskDecoratorsExtendedModule ,MaskValidatorsExtendedModule,MaskTemplateDrivenValidationDirectivesExtendedModule, MaskTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MASK_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MaskModule { }



