import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecoratorsExtendedModule } from "src/assets/examples/decorators/decorators-extended.module";
import { MODEL_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/decorators/model/model.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MODEL_ROUTING } from "src/app/components/decorators/model/model.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MODEL_ROUTING ,DecoratorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MODEL_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ModelModule { }

