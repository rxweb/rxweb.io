import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SANITIZERS_ROUTING } from "src/app/components/sanitizers/sanitizers.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [SANITIZERS_ROUTING,PageModule],
  exports: [RouterModule],
  })
export class SanitizersModule { }



