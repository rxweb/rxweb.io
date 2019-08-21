import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONTROLS_ROUTING } from "src/app/components/controls/controls.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONTROLS_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class ControlsModule { }



