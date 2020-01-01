import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { POST_VALUE_HOOK_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/postValueHook/post-value-hook.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { POST_VALUE_HOOK_ROUTING } from "src/app/components/dynamic-forms/postValueHook/post-value-hook.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [POST_VALUE_HOOK_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: POST_VALUE_HOOK_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PostValueHookModule { }



