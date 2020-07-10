import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SanitizeDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/sanitize/sanitize-decorators-extended.module";

import { SANITIZE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/sanitize/sanitize.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { SANITIZE_ROUTING } from "src/app/components/sanitization/sanitize/sanitize.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SANITIZE_ROUTING ,SanitizeDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: SANITIZE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class SanitizeModule { }

