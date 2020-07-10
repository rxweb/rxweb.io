import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecoratorsExtendedModule } from "src/assets/examples/decorators/decorators-extended.module";
import { ELEMENT_CLASS_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/decorators/elementClass/element-class.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ELEMENT_CLASS_ROUTING } from "src/app/components/decorators/elementClass/element-class.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [ELEMENT_CLASS_ROUTING ,DecoratorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ELEMENT_CLASS_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ElementClassModule { }

