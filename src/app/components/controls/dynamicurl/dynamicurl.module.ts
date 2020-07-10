import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { DYNAMICURL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/controls/dynamicurl/dynamicurl.constants";
import { DynamicurlValidatorsExtendedModule } from "src/assets/examples/controls/dynamicurl/dynamicurl-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICURL_ROUTING } from "src/app/components/controls/dynamicurl/dynamicurl.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICURL_ROUTING ,DynamicurlValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICURL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicurlModule { }



