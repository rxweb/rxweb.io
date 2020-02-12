import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONDITIONAL_BINDING_ROUTING } from "./conditional-binding.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CONDITIONAL_BINDING_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class ConditionalBindingModule { }



