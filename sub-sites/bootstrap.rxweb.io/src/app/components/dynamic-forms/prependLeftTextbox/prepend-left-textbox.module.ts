import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrependLeftTextboxExtendedModule } from "src/assets/examples/dynamic-forms/prependLeftTextbox/prepend-left-textbox-extended.module";
import { PREPEND_LEFT_TEXTBOX_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/prependLeftTextbox/prepend-left-textbox.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PREPEND_LEFT_TEXTBOX_ROUTING } from "src/app/components/dynamic-forms/prependLeftTextbox/prepend-left-textbox.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PREPEND_LEFT_TEXTBOX_ROUTING,PrependLeftTextboxExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PREPEND_LEFT_TEXTBOX_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PrependLeftTextboxModule { }

