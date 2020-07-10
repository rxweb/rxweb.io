import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreValueHookExtendedModule } from "src/assets/examples/dynamic-forms/preValueHook/pre-value-hook-extended.module";
import { PRE_VALUE_HOOK_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/preValueHook/pre-value-hook.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PRE_VALUE_HOOK_ROUTING } from "src/app/components/dynamic-forms/preValueHook/pre-value-hook.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PRE_VALUE_HOOK_ROUTING,PreValueHookExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PRE_VALUE_HOOK_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PreValueHookModule { }



