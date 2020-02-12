import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrefixDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/prefix/prefix-decorators-extended.module";

import { PREFIX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/prefix/prefix.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PREFIX_ROUTING } from "src/app/components/sanitization/prefix/prefix.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PREFIX_ROUTING ,PrefixDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PREFIX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PrefixModule { }

