import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FACTOR_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/factorAsync/factor-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { FACTOR_ASYNC_ROUTING } from "src/app/components/async-validators/factorAsync/factor-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { FactorAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/factorAsync/factor-async-decorators-extended.module';
import { FactorAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/factorAsync/factor-async-validators-extended.module';



@NgModule({
  imports: [FACTOR_ASYNC_ROUTING ,FactorAsyncDecoratorsExtendedModule, FactorAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: FACTOR_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class FactorAsyncModule { }



