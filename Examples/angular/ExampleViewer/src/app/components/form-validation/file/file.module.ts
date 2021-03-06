import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/file/file-decorators-extended.module";
import { FileTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/file/file-validation-directives-extended.module";
import { FileTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/file/file-validation-decorators-extended.module";

import { FileValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/file/file-validators-extended.module";
import { FILE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/file/file.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FILE_ROUTING } from "src/app/components/form-validation/file/file.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [FILE_ROUTING ,FileDecoratorsExtendedModule ,FileValidatorsExtendedModule,FileTemplateDrivenValidationDirectivesExtendedModule, FileTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FILE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FileModule { }

