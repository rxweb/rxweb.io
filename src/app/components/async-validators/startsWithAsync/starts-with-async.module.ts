import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { STARTS_WITH_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/startsWithAsync/starts-with-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { STARTS_WITH_ASYNC_ROUTING } from "src/app/components/async-validators/startsWithAsync/starts-with-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { StartsWithAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/startsWithAsync/starts-with-async-validators-extended.module';
import { StartsWithAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/startsWithAsync/starts-with-async-decorators-extended.module';



@NgModule({
  imports: [STARTS_WITH_ASYNC_ROUTING , StartsWithAsyncValidatorsExtendedModule, StartsWithAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: STARTS_WITH_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class StartsWithAsyncModule { }



