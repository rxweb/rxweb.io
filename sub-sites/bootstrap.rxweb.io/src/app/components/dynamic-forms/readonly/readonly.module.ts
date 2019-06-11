import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadonlyExtendedModule } from "src/assets/examples/dynamic-forms/readonly/readonly-extended.module";
import { READONLY_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/readonly/readonly.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { READONLY_ROUTING } from "src/app/components/dynamic-forms/readonly/readonly.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [READONLY_ROUTING,ReadonlyExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: READONLY_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ReadonlyModule { }

