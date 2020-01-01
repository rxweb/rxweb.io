import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { GENERICS_ROUTING } from "src/app/components/generics/generics.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [GENERICS_ROUTING,PageModule],
  exports: [RouterModule],
  })
export class GenericsModule { }



