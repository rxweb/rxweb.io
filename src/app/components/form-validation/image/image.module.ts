import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { IMAGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/image/image.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { IMAGE_ROUTING } from "src/app/components/form-validation/image/image.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [IMAGE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: IMAGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ImageModule { }



