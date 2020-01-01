import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { STATIC_BINDING_ROUTING } from "src/app/components/static-binding/static-binding.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [STATIC_BINDING_ROUTING,PageModule],
  exports: [RouterModule],
  })
export class StaticBindingModule { }



