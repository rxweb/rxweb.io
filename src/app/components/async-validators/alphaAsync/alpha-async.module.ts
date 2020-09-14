import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ALPHA_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/alphaAsync/alpha-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ALPHA_ASYNC_ROUTING } from "src/app/components/async-validators/alphaAsync/alpha-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { AlphaAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/alphaAsync/alpha-async-validators-extended.module';
import { AlphaAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/alphaAsync/alpha-async-decorators-extended.module';



@NgModule({
  imports: [ALPHA_ASYNC_ROUTING ,AlphaAsyncValidatorsExtendedModule, AlphaAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ALPHA_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AlphaAsyncModule { }



