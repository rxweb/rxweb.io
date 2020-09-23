import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IBAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/ibanAsync/iban-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { IBAN_ASYNC_ROUTING } from "src/app/components/async-validators/ibanAsync/iban-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { IbanAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/ibanAsync/iban-async-validators-extended.module';



@NgModule({
  imports: [IBAN_ASYNC_ROUTING ,IbanAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: IBAN_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class IbanAsyncModule { }



