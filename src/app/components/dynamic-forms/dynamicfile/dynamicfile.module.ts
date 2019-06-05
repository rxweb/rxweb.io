import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicfileExtendedModule } from "src/assets/examples/dynamic-forms/dynamicfile/dynamicfile-extended.module";
import { DYNAMICFILE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/dynamicfile/dynamicfile.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMICFILE_ROUTING } from "src/app/components/dynamic-forms/dynamicfile/dynamicfile.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [DYNAMICFILE_ROUTING,DynamicfileExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMICFILE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicfileModule { }

