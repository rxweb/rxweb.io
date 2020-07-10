import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverridePropsExtendedModule } from "src/assets/examples/dynamic-forms/overrideProps/override-props-extended.module";
import { OVERRIDE_PROPS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/dynamic-forms/overrideProps/override-props.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { OVERRIDE_PROPS_ROUTING } from "src/app/components/dynamic-forms/overrideProps/override-props.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [OVERRIDE_PROPS_ROUTING,OverridePropsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: OVERRIDE_PROPS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class OverridePropsModule { }



