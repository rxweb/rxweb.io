import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { EXTENSION_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/extensionAsync/extension-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { EXTENSION_ASYNC_ROUTING } from "src/app/components/async-validators/extensionAsync/extension-async.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [EXTENSION_ASYNC_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: EXTENSION_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ExtensionAsyncModule { }



