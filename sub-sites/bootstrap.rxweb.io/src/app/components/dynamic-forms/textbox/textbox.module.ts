import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextboxExtendedModule } from "src/assets/examples/dynamic-forms/textbox/textbox-extended.module";
import { TEXTBOX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/textbox/textbox.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TEXTBOX_ROUTING } from "src/app/components/dynamic-forms/textbox/textbox.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TEXTBOX_ROUTING,TextboxExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TEXTBOX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class TextboxModule { }

