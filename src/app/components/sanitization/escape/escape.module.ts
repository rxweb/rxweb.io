import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { EscapeDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/escape/escape-decorators-extended.module";

import { ESCAPE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/escape/escape.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ESCAPE_ROUTING } from "src/app/components/sanitization/escape/escape.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ESCAPE_ROUTING ,EscapeDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ESCAPE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class EscapeModule { }

