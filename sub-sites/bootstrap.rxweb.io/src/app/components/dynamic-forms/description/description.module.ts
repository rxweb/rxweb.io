import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DescriptionExtendedModule } from "src/assets/examples/dynamic-forms/description/description-extended.module";
import { DESCRIPTION_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/description/description.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DESCRIPTION_ROUTING } from "src/app/components/dynamic-forms/description/description.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DESCRIPTION_ROUTING,DescriptionExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DESCRIPTION_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DescriptionModule { }

