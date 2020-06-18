import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { STRONGLY_TYPED_ROUTING } from './strongly-typed.routing';



@NgModule({
  imports: [STRONGLY_TYPED_ROUTING,PageModule],
  exports: [RouterModule],
  })
export class StronglyTypedAngularModule { }