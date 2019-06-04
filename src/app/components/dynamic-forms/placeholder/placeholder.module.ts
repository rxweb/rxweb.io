import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PLACEHOLDER_ROUTING } from "src/app/components/dynamic-forms/placeholder/placeholder.routing";
import { PageModule } from "src/app/components/page/page.module";
import { PlaceholderExtendedModule } from 'src/assets/examples/dynamic-forms/ui-features/placeholder/placeholder-extended.module';
import { PLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT } from './placeholder.constatnt';



@NgModule({
  imports: [PLACEHOLDER_ROUTING,PlaceholderExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PlaceholderModule { }

