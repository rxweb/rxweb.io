import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { DYNAMIC_DISABLE_ROUTING } from "src/app/components/dynamic-forms/dynamicDisable/dynamic-disable.routing";
import { PageModule } from "src/app/components/page/page.module";
import { DynamicDisableExtendedModule } from 'src/assets/examples/dynamic-forms/ui-features/disable/disable-extended.module';
import { DYNAMIC_DISABLE_COMPONENT_EXAMPLE_CONSTANT } from './dynamic-disable.constant';



@NgModule({
  imports: [DYNAMIC_DISABLE_ROUTING,DynamicDisableExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: DYNAMIC_DISABLE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class DynamicDisableModule { }

