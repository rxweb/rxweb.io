import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { IP_ASYNC_ROUTING } from "src/app/components/async-validators/ipAsync/ip-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { IpAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/ipAsync/ip-async-validators-extended.module';



@NgModule({
  imports: [IP_ASYNC_ROUTING ,  IpAsyncValidatorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: '' }]
  })
export class IpAsyncModule { }


