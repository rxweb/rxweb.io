import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FOCUS_ROUTING } from "src/app/components/dynamic-forms/focus/focus.routing";
import { PageModule } from "src/app/components/page/page.module";
import { FocusExtendedModule } from 'src/assets/examples/dynamic-forms/ui-features/focus/focus-extended.module';
import { FOCUS_COMPONENT_EXAMPLE_CONSTANT } from './focus-constant';



@NgModule({
  imports: [FOCUS_ROUTING,FocusExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FOCUS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FocusModule { }

