import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ALL_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/allOfAsync/all-of-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { ALL_OF_ASYNC_ROUTING } from "src/app/components/async-validators/allOfAsync/all-of-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { AllOfAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/allOfAsync/all-of-async-decorators-extended.module';
import { AllOfAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/allOfAsync/all-of-async-validators-extended.module';



@NgModule({
  imports: [ALL_OF_ASYNC_ROUTING ,AllOfAsyncDecoratorsExtendedModule, AllOfAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: ALL_OF_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class AllOfAsyncModule { }



