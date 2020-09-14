import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { URL_ASYNC_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/async-validators/urlAsync/url-async.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { URL_ASYNC_ROUTING } from "src/app/components/async-validators/urlAsync/url-async.routing";
import { PageModule } from "src/app/components/page/page.module";
import { UrlAsyncValidatorsExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/urlAsync/url-async-validators-extended.module';
import { UrlAsyncDecoratorsExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/urlAsync/url-async-decorators-extended.module';



@NgModule({
  imports: [URL_ASYNC_ROUTING , UrlAsyncValidatorsExtendedModule, UrlAsyncDecoratorsExtendedModule, PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: URL_ASYNC_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class UrlAsyncModule { }



