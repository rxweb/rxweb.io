import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DYNAMIC_FORMS_ROUTING } from "src/app/components/dynamic-forms/dynamic-forms.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMIC_FORMS_ROUTING,PageModule],
  exports: [RouterModule],
  })
export class DynamicFormsModule { }



