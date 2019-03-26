import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotEmptyDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/notEmpty/not-empty-decorators-extended.module";
import { NotEmptyTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/notEmpty/not-empty-validation-directives-extended.module";
import { NotEmptyTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/notEmpty/not-empty-validation-decorators-extended.module";

import { NotEmptyValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/notEmpty/not-empty-validators-extended.module";

import { NOT_EMPTY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/notEmpty/not-empty.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { NOT_EMPTY_ROUTING } from "src/app/components/form-validation/notEmpty/not-empty.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [NOT_EMPTY_ROUTING ,NotEmptyDecoratorsExtendedModule ,NotEmptyValidatorsExtendedModule,NotEmptyTemplateDrivenValidationDirectivesExtendedModule, NotEmptyTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: NOT_EMPTY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class NotEmptyModule { }

