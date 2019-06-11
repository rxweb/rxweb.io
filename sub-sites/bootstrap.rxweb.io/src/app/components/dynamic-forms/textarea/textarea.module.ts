import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextareaExtendedModule } from "src/assets/examples/dynamic-forms/textarea/textarea-extended.module";
import { TEXTAREA_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/textarea/textarea.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TEXTAREA_ROUTING } from "src/app/components/dynamic-forms/textarea/textarea.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TEXTAREA_ROUTING,TextareaExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TEXTAREA_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class TextareaModule { }

