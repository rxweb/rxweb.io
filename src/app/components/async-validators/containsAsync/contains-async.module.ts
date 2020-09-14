import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONTAINS_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/containsAsync/contains-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CONTAINS_ASYNC_ROUTING } from "src/app/components/async-validators/containsAsync/contains-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { ContainsAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/containsAsync/contains-async-validators-extended.module';
import { ContainsAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/containsAsync/contains-async-decorators-extended.module';



@NgModule({
  imports: [CONTAINS_ASYNC_ROUTING , ContainsAsyncDecoratorsExtendedModule, ContainsAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CONTAINS_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ContainsAsyncModule { }



