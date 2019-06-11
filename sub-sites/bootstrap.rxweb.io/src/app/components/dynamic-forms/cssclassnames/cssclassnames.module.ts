import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CssclassnamesExtendedModule } from "src/assets/examples/dynamic-forms/cssclassnames/cssclassnames-extended.module";
import { CSSCLASSNAMES_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/cssclassnames/cssclassnames.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CSSCLASSNAMES_ROUTING } from "src/app/components/dynamic-forms/cssclassnames/cssclassnames.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CSSCLASSNAMES_ROUTING,CssclassnamesExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CSSCLASSNAMES_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class CssclassnamesModule { }

