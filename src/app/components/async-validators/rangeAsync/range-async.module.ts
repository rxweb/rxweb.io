import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RANGE_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/rangeAsync/range-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { RANGE_ASYNC_ROUTING } from "src/app/components/async-validators/rangeAsync/range-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { RangeAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/rangeAsync/range-async-validators-extended.module';
import { RangeAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/rangeAsync/range-async-decorators-extended.module';



@NgModule({
  imports: [RANGE_ASYNC_ROUTING , RangeAsyncValidatorsExtendedModule, RangeAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: RANGE_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class RangeAsyncModule { }



