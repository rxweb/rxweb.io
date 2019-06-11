import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicpasswordExtendedModule } from "src/assets/examples/dynamic-forms/dynamicpassword/dynamicpassword-extended.module";
import { DYNAMICPASSWORD_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicpassword/dynamicpassword.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICPASSWORD_ROUTING } from "src/app/components/dynamic-forms/dynamicpassword/dynamicpassword.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICPASSWORD_ROUTING,DynamicpasswordExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICPASSWORD_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicpasswordModule { }

