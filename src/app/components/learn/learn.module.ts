import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LEARN_ROUTING } from "src/app/components/learn/learn.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [LEARN_ROUTING ,PageModule],
  exports: [RouterModule],
  })
export class LearnModule { }



