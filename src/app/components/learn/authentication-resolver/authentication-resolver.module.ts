import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTHENTICATION_RESOLVER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/learn/authentication-resolver/authentication-resolver.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { AUTHENTICATION_RESOLVER_ROUTING } from "src/app/components/learn/authentication-resolver/authentication-resolver.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [AUTHENTICATION_RESOLVER_ROUTING ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: AUTHENTICATION_RESOLVER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class Authentication_resolverModule { }



