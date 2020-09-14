import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PASSWORD_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/passwordAsync/password-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PASSWORD_ASYNC_ROUTING } from "src/app/components/async-validators/passwordAsync/password-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { PasswordAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/passwordAsync/password-async-validators-extended.module';
import { PasswordAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/passwordAsync/password-async-decorators-extended.module';



@NgModule({
  imports: [PASSWORD_ASYNC_ROUTING , PasswordAsyncValidatorsExtendedModule, PasswordAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PASSWORD_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PasswordAsyncModule { }



