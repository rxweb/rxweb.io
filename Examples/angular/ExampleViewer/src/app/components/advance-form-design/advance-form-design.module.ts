import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ADVANCE_FORM_DESIGN_ROUTING } from "src/app/components/advance-form-design/advance-form-design.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ADVANCE_FORM_DESIGN_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class Advance_form_designModule { }



